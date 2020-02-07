<template>
  <Layout>
    <div class="uk-grid-column-collapse" uk-grid>
      <div
        v-for="edge in $page.posts.edges"
        :key="edge.node.id"
        class="uk-card uk-card-hover uk-card-default excerpt"
      >
        <g-link :to="edge.node.path">
          <div class="uk-card-media-top" uk-parallax="bgy: -200">
            <g-image alt="Example image" :src="edge.node.thumbnail"/>
          </div>
          <div class="uk-card-header">
            <div class="uk-grid-small uk-flex-middle" uk-grid>
              <div class="uk-width-expand">
                <div class="uk-card-badge uk-label">{{ edge.node.category}}</div>
                <h3 class="uk-card-title uk-margin-remove-bottom">{{ edge.node.title }}</h3>
                <p class="uk-text-meta uk-margin-remove-top">
                  <time datetime="2016-04-01T19:00">{{ edge.node.date }}</time>
                </p>
              </div>
            </div>
          </div>
          <div class="uk-card-body">
            <div class="content" v-html="edge.node.excerpt"/>
          </div>
          <div class="uk-card-footer">
            <a href="#">{{ edge.node.category }}</a>
          </div>
        </g-link>
      </div>
    </div>
  </Layout>
</template>

<page-query>
query {
  posts: allPost {
    edges {
      node {
        id
        path
        title
        excerpt
        thumbnail
        date(format: "DD MMM, Y")
        category
      }
    }
  }
}
</page-query>

<style>
.home-links a {
  margin-right: 1rem;
}
.excerpt .content {
  color: initial;
}
.excerpt a:hover {
  text-decoration: none;
}
</style>
