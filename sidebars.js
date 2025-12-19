// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  projectsSidebar: [
    'intro',
    {
      type: 'category',
      label: 'Languages',
      items: ['lea', 'vague'],
    },
    {
      type: 'category',
      label: 'Tools',
      items: ['omg'],
    },
  ],
};

module.exports = sidebars;
