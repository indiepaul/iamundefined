// This is where project configuration and plugin options are located. 
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
  siteName: 'I am Undefined',
  transformers: {
    remark: {
      externalLinksTarget: '_blank',
      externalLinksRel: ['nofollow', 'noopener', 'noreferrer'],
      anchorClassName: 'icon icon-link',
      plugins: [
        // ...global plugins
      ]
    }
  },
  templates: {
    BlogPost: '/posts/:slug__current'
  },
  plugins: [
    { use: 'gridsome-plugin-uikit' },
    {
      use: 'gridsome-source-sanity',
      options: {
        projectId: 'uv17twsv',
        dataset: 'production',
        typeName: 'Blog',
        overlayDrafts: false,
        watchMode: false
      }
    }
  ]
}
