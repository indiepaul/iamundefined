<template>
  <Layout>
    <div class="uk-card uk-card-default uk-grid-collapse uk-child-width-1-2@s uk-margin" uk-grid>
      <div class="uk-card-media-left uk-cover-container">
        <g-image alt="Mse" src="/uploads/artyme.jpg" fit="inside"/>
      </div>
      <div>
        <div class="uk-card-body">
          <h3 class="uk-card-title">Hi there</h3>
          <div class="text_content post_content animated fadeIn" style="opacity: 1;">
            <p>
              My name is Paul and I'm an developer and entrepreneur, musician and gamer, husband and father... among other things.
              <br/>On Mondays, I enjoy waking up after 8 and doing nothing for the entire morning.
            </p>
            <ul>
              <a
                href="https://github.com/indiepaul/"
                target="_blank"
              >GitHub</a> |
              <a href="https://twitter.com/IamUndefin3d" target="_blank">Twitter</a> |
              <a href="mailto:null@iamundefined.xyz" target="_blank">Email</a>
            </ul>
            <p>Latest posts, and I hope you enjoy this site.</p>
            <p>
              <em>— Paul Mtali, February 27, 2020</em>
            </p>
          </div>
        </div>
      </div>
    </div>
    <div
      v-for="post in posts"
      :key="post.id"
      class="uk-card uk-card-hover uk-card-default excerpt"
    >
      <g-link :to="'/posts/' + post.id">
        <div class="uk-card-media-top" uk-parallax="bgy: -200">
          <!-- <g-image alt="Example image" :src="post.data.featured_image"/> -->
        </div>
        <div class="uk-card-header">
          <div class="uk-grid-small uk-flex-middle" uk-grid>
            <div class="uk-width-expand">
              <div class="uk-card-badge uk-label">{{ post.data.category}}</div>
              <h3 class="uk-card-title uk-margin-remove-bottom">{{ post.data.title }}</h3>
              <p class="uk-text-meta uk-margin-remove-top">
                <time :datetime="post.data.published">{{ post.data.published }}</time>
              </p>
            </div>
          </div>
        </div>
        <div class="uk-card-body">
          <div v-html="post.data.excerpt"></div>
        </div>
        <div class="uk-card-footer">
          <a href="#">{{ post.data.category }}</a>
        </div>
      </g-link>
    </div>
  </Layout>
</template>


<script>
export default {
  computed: {
    posts() {
      return this.$page.posts.edges.map(e => e.node)
    }
  }
};
</script>

<page-query>
query Post {
  posts: allPost(sortBy: "data.published")
   {
    edges {
      node {
        id
        data{
          title
          featured_image {
            url
          }
          body
          excerpt
          category
          published(format: "DD MMM, Y")
        }
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
