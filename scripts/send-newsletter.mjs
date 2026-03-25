import fs from 'fs';
import path from 'path';

const RESEND_API_KEY = process.env.RESEND_API_KEY;
const RESEND_AUDIENCE_ID = process.env.RESEND_AUDIENCE_ID;
const SITE_URL = 'https://mcclowes.com';
const FROM_EMAIL = 'newsletter@whatthefpl.com'; // Must be verified in Resend

async function getRecentPosts() {
  const blogDir = path.resolve('blog');
  const files = fs.readdirSync(blogDir).filter((f) => f.match(/^\d{4}-\d{2}-\d{2}-.+\.md$/));

  const now = new Date();
  const lastMonth = new Date(now.getFullYear(), now.getMonth() - 1, 1);
  const thisMonth = new Date(now.getFullYear(), now.getMonth(), 1);

  const posts = [];

  for (const file of files) {
    const [year, month, day, ...slugParts] = file.replace('.md', '').split('-');
    const date = new Date(`${year}-${month}-${day}`);

    if (date >= lastMonth && date < thisMonth) {
      const content = fs.readFileSync(path.join(blogDir, file), 'utf-8');
      const titleMatch = content.match(/^title:\s*['"]?(.+?)['"]?\s*$/m);
      const draftMatch = content.match(/^draft:\s*true\s*$/m);

      if (draftMatch) continue;

      const title = titleMatch ? titleMatch[1] : slugParts.join(' ');
      const slug = slugParts.join('-');
      const url = `${SITE_URL}/blog/${slug}`;

      posts.push({ title, url, date });
    }
  }

  return posts.sort((a, b) => a.date - b.date);
}

function buildEmailHtml(posts, monthLabel) {
  const listItems = posts.map((p) => `<li><a href="${p.url}">${p.title}</a></li>`).join('\n');

  return `
<div style="font-family: Georgia, serif; max-width: 600px; margin: 0 auto; padding: 20px;">
  <h2 style="color: #4b5f5f;">New on mcclowes.com — ${monthLabel}</h2>
  <ul style="line-height: 1.8;">
    ${listItems}
  </ul>
  <p style="color: #666; font-size: 14px; margin-top: 30px;">
    Thanks for reading.<br/>
    <a href="${SITE_URL}">mcclowes.com</a>
  </p>
</div>`.trim();
}

async function resendFetch(endpoint, options = {}) {
  const res = await fetch(`https://api.resend.com${endpoint}`, {
    ...options,
    headers: {
      Authorization: `Bearer ${RESEND_API_KEY}`,
      'Content-Type': 'application/json',
      ...options.headers,
    },
  });

  if (!res.ok) {
    const body = await res.text();
    throw new Error(`Resend API error ${res.status}: ${body}`);
  }

  return res.json();
}

async function main() {
  if (!RESEND_API_KEY || !RESEND_AUDIENCE_ID) {
    throw new Error('Missing RESEND_API_KEY or RESEND_AUDIENCE_ID');
  }

  const posts = await getRecentPosts();

  if (posts.length === 0) {
    console.log('No new posts last month. Skipping newsletter.');
    return;
  }

  console.log(`Found ${posts.length} post(s) from last month:`);
  posts.forEach((p) => console.log(`  - ${p.title}`));

  const now = new Date();
  const lastMonth = new Date(now.getFullYear(), now.getMonth() - 1, 1);
  const monthLabel = lastMonth.toLocaleDateString('en-US', { month: 'long', year: 'numeric' });

  const html = buildEmailHtml(posts, monthLabel);

  const broadcast = await resendFetch('/broadcasts', {
    method: 'POST',
    body: JSON.stringify({
      audience_id: RESEND_AUDIENCE_ID,
      from: FROM_EMAIL,
      subject: `New posts — ${monthLabel}`,
      html,
    }),
  });

  console.log('Broadcast created:', broadcast.id);

  // Send the broadcast
  const sent = await resendFetch(`/broadcasts/${broadcast.id}/send`, {
    method: 'POST',
  });

  console.log('Newsletter sent!', sent);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
