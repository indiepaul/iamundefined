// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api

import DefaultLayout from '~/layouts/Default.vue'
import '~/assets/main.css'
export default function (Vue, { router, head, isClient }) {
  // Set default layout as a global component
  Vue.component('Layout', DefaultLayout)
  head.script.push({
    src: 'https://umami.indiepaul.vercel.app/umami.js', 
    "data-website-id": "d99200bb-de27-440e-ada1-0086db4d3cc5", 
    body: true, async: true, defer: true 
  })
}
