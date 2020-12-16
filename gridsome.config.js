// This is where project configuration and plugin options are located. 
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
  siteName: 'I am Undefined',
  siteDescription: 'Welcome to my Blog',
  siteUrl: 'https:/iamundefined.xyz/',
  metadata: {
    author: 'Paul Mtali',
    twitter: '@IamUndefin3d',
  },
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
    Post: '/posts/:id'
  },
  plugins: [
    { use: 'gridsome-plugin-uikit' },
    {
      use: "@ilrock/gridsome-source-prismic",
      options: {
        prismic_url: process.env.PRISMIC_API_URL,
        prismic_token: process.env.PRISMIC_TOKEN,
        collection_prefix: ""
      }
    }
  ]
}
