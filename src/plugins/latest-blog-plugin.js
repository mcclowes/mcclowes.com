const fs = require('fs');
const path = require('path');

function parseFrontMatter(content) {
  const match = content.match(/^---\n([\s\S]*?)\n---/);
  if (!match) return {};
  const fm = {};
  for (const line of match[1].split('\n')) {
    const [key, ...rest] = line.split(':');
    if (key && rest.length) {
      let value = rest.join(':').trim();
      if (value === 'true') value = true;
      else if (value === 'false') value = false;
      else if (value.startsWith("'") && value.endsWith("'")) value = value.slice(1, -1);
      else if (value.startsWith('"') && value.endsWith('"')) value = value.slice(1, -1);
      fm[key.trim()] = value;
    }
  }
  return fm;
}

module.exports = function latestBlogPlugin(context) {
  return {
    name: 'docusaurus-plugin-latest-blog',
    async loadContent() {
      const blogDir = path.join(context.siteDir, 'blog');
      const files = fs
        .readdirSync(blogDir)
        .filter((f) => f.match(/^\d{4}-\d{2}-\d{2}-.+\.md$/))
        .sort()
        .reverse();

      for (const file of files) {
        const content = fs.readFileSync(path.join(blogDir, file), 'utf-8');
        const fm = parseFrontMatter(content);
        if (fm.draft) continue;

        const dateMatch = file.match(/^(\d{4})-(\d{2})-(\d{2})-(.+)\.md$/);
        const textSlug = dateMatch[4];
        const defaultSlug = `/${dateMatch[1]}/${dateMatch[2]}/${dateMatch[3]}/${textSlug}`;
        const slug = fm.slug || defaultSlug;

        return {
          title: fm.title || textSlug,
          permalink: `/blog${slug}`,
        };
      }
      return null;
    },
    async contentLoaded({ content, actions }) {
      actions.setGlobalData({ latestPost: content });
    },
  };
};
