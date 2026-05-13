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
      label: 'Marginal Utility',
      items: [
        {
          type: 'link',
          label: 'Clipped',
          href: 'https://marginalutility.dev/clipped',
        },
        {
          type: 'link',
          label: 'Barred',
          href: 'https://marginalutility.dev/barred',
        },
        {
          type: 'link',
          label: 'Broadsheet',
          href: 'https://marginalutility.dev/broadsheet',
        },
        {
          type: 'link',
          label: 'Keyed',
          href: 'https://marginalutility.dev/keyed',
        },
        {
          type: 'link',
          label: 'Reach',
          href: 'https://marginalutility.dev/reach',
        },
      ],
    },
    {
      type: 'category',
      label: 'Tools',
      items: ['omg', 'reqon'],
    },
    {
      type: 'category',
      label: 'Writing',
      items: ['whats-wrong-with-britain/thesis'],
    },
  ],
};

module.exports = sidebars;
