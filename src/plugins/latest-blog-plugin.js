const fs = require('fs');
const path = require('path');
const { marked } = require('marked');
const dropCaps = require('../components/DropCap/letters');

/**
 * Turn `<DropCap ... />` MDX tags into plain HTML for the excerpt.
 *
 * The excerpt is rendered with `dangerouslySetInnerHTML`, so the React
 * <DropCap> component never runs here — left as-is the tag is an unknown
 * element the browser drops. This mirrors the component's output using
 * the global `.dropCapExcerpt` class (see src/css/custom.css).
 */
function renderDropCaps(markdown) {
  return markdown.replace(/<DropCap\b([^>]*?)\/>/g, (_full, attrs) => {
    const letter = (attrs.match(/letter\s*=\s*"([^"]*)"/) || [])[1] || '';
    const srcAttr = (attrs.match(/src\s*=\s*"([^"]*)"/) || [])[1];
    const variantMatch = attrs.match(/variant\s*=\s*(?:"(\d+)"|\{(\d+)\})/);
    const variant = variantMatch ? Number(variantMatch[1] || variantMatch[2]) : 1;

    const key = letter ? letter.toUpperCase() : null;
    const variants = !srcAttr && key ? dropCaps[key] : null;
    const art = variants ? variants[Math.min(Math.max(variant, 1), variants.length) - 1] : null;

    if (art) {
      return `<span class="dropCapExcerpt" role="img" aria-label="${letter}" style="aspect-ratio:${art.width}/${art.height};-webkit-mask-image:url(${art.src});mask-image:url(${art.src})"></span>`;
    }
    if (srcAttr) {
      return `<img class="dropCapExcerpt dropCapExcerpt--img" src="${srcAttr}" alt="${letter}" />`;
    }
    return `<span class="dropCapExcerpt dropCapExcerpt--text">${letter}</span>`;
  });
}

function parseFrontMatter(content) {
  const match = content.match(/^---\n([\s\S]*?)\n---/);
  if (!match) return { body: content };
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
  fm.body = content.slice(match[0].length).trim();
  return fm;
}

module.exports = function latestBlogPlugin(context) {
  return {
    name: 'docusaurus-plugin-latest-blog',
    async loadContent() {
      const blogDir = path.join(context.siteDir, 'blog');
      const files = fs
        .readdirSync(blogDir)
        .filter((f) => f.match(/^\d{4}-\d{2}-\d{2}-.+\.mdx?$/))
        .sort((a, b) => {
          const dateA = a.slice(0, 10);
          const dateB = b.slice(0, 10);
          if (dateA !== dateB) return dateB.localeCompare(dateA);
          return a.localeCompare(b);
        });

      for (const file of files) {
        const content = fs.readFileSync(path.join(blogDir, file), 'utf-8');
        const fm = parseFrontMatter(content);
        if (fm.draft) continue;

        const dateMatch = file.match(/^(\d{4})-(\d{2})-(\d{2})-(.+)\.mdx?$/);
        const textSlug = dateMatch[4];
        const defaultSlug = `/${dateMatch[1]}/${dateMatch[2]}/${dateMatch[3]}/${textSlug}`;
        const slug = fm.slug || defaultSlug;

        // Extract content before truncate marker
        const truncatePattern = /<!--\s*truncate\s*-->/;
        const excerpt = truncatePattern.test(fm.body)
          ? fm.body.split(truncatePattern)[0].trim()
          : fm.body;
        // Strip MDX import/export statements so they don't render as text
        const cleaned = excerpt.replace(/^\s*(?:import|export)\s+[^\n]*\n?/gm, '').trim();
        const excerptHtml = marked.parse(renderDropCaps(cleaned));

        return {
          title: fm.title || textSlug,
          permalink: `/blog${slug}`,
          excerptHtml,
        };
      }
      return null;
    },
    async contentLoaded({ content, actions }) {
      actions.setGlobalData({ latestPost: content });
    },
  };
};
