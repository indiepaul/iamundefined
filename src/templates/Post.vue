<template>
  <Layout>
    <div class="progress-bar-container">
      <div class="progress-bar-container__progress" ref="progress"></div>
    </div>

    <div
      class="cover-header screen-height"
      v-bind:style="{
        backgroundImage:
          'linear-gradient(rgba(0, 123, 77,0.6), rgba(24, 127, 79,0.6)), url(\'' +
          post.featured_image.url +
          '\')',
      }"
    >
      <div class="cover-wrapper screen-height">
        <div class="cover-inner">
          <header class="entry-header">
            <h1>{{ post.title }}</h1>
            <div
              class="post-meta-wrapper post-meta-single post-meta-single-top"
            >
              <ul class="post-meta">
                <li class="post-date meta-wrapper">
                  <span class="meta-icon">
                    <span class="screen-reader-text">Post date</span>
                    <span uk-icon="calendar"></span>
                  </span>
                  <span class="meta-text">{{ post.published }}</span>
                </li>
              </ul>
            </div>
          </header>
        </div>
      </div>
    </div>
    <main v-scroll="onScroll">
      <article>
        <div class="tm-main uk-section uk-section-default">
          <div
            class="uk-container uk-container-small uk-position-relative article-container"
          >
            <div class="article__content" ref="main">
              <div v-html="post.body"></div>
            </div>
            <hr />
            <p class="home-links">
              <span class="meta-icon">
                <span uk-icon="tag"></span>
              </span>
              <span class="meta-text">
                <a href="#">{{ post.category }}</a>
              </span>
            </p>
          </div>
        </div>
      </article>
    </main>
  </Layout>
</template>


<style scoped>
  .progress-bar-container {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 0.1rem;
    z-index: 981;
  }

  /* progress bar */
  .progress-bar-container__progress {
    height: 0.1rem;
    background-color: #00dc5e;
    box-shadow: 0 0.15rem 0.9rem #00ff6c;
    border: 1px #badccf solid;
    border-radius: 10px;
    width: 0%;
    float: left;
  }
  .entry-header h1 {
    font-size: 5rem;
    font-weight: 700;
  }
  @media (min-width: 640px) {
    .entry-header h1 {
      font-size: 8rem;
    }
  }
  .post-meta {
    flex-wrap: wrap;
    font-size: 1.5rem;
    font-weight: 500;
    list-style: none;
  }
  .screen-height {
    height: calc(100vh - 152px);
  }
  .entry-header {
    text-align: center;
    max-width: 120rem;
  }
  .cover-inner {
    padding: 15rem 0 11rem 0;
  }
  .cover-wrapper {
    display: flex;
    position: relative;
    flex-direction: column;
    justify-content: flex-end;
    width: 100%;
  }
  .cover-header * {
    color: #fff;
  }
  .cover-header {
    display: flex;
    overflow: hidden;
    background-attachment: fixed;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    clip-path: polygon(0% 0%, 0% 100%, 50% 76%, 100% 100%, 100% 0%);
    -webkit-clip-path: polygon(0% 0%, 0% 100%, 50% 76%, 100% 100%, 100% 0%);
  }
  .home-links a {
    margin-right: 1rem;
  }
  .post-meta .meta-icon {
    flex-shrink: 0;
    margin-right: 1rem;
  }
  .article-container {
    margin-top: -11rem;
    box-shadow: 0 0.15rem 0.9rem rgba(38, 50, 56, 0.2);
    background-color: #ffffff;
    padding-top: 2rem;
    padding-bottom: 2rem;
    border-radius: 0.85rem;
    z-index: 1;
  }
</style>

<script>
  import Layout from "~/layouts/PostLayout.vue";
  import Vue from "vue";
  Vue.directive("scroll", {
    inserted: function (el, binding) {
      let f = function (evt) {
        if (binding.value(evt, el)) {
          window.removeEventListener("scroll", f);
        }
      };
      window.addEventListener("scroll", f);
    },
  });
  export default {
    metaInfo() {
      return {
        title: this.$page.post.title,
        meta: [
          {
            name: "author",
            content: this.$static.metadata.author,
          },
          {
            property: "title",
            content: this.$page.post.data.title,
          },
          {
            property: "og:title",
            content: this.$page.post.data.title,
          },
          {
            property: "twitter:title",
            content: this.$page.post.data.title,
          },
          {
            name: "description",
            content: this.$page.post.data.excerpt,
          },
          {
            property: "og:description",
            content: this.$page.post.data.excerpt,
          },
          {
            name: "twitter:description",
            content: this.$page.post.data.excerpt,
          },
          {
            property: "og:image",
            content: this.$page.post.data.featured_image.url,
          },
          {
            name: "twitter:image",
            content: this.$page.post.data.featured_image.url,
          },
          {
            property: "og:url",
            content:
              this.$static.metadata.siteUrl + "posts/" + this.$page.post.id,
          },
          {
            property: "twitter:url",
            content:
              this.$static.metadata.siteUrl + "posts/" + this.$page.post.id,
          },
          {
            name: "twitter:card",
            content: this.$page.post.data.featured_image.url
              ? "summary_large_image"
              : "summary",
          },
          {
            property: "og:type",
            content: "website",
          },
          {
            property: "og:site_name",
            content: this.$static.metadata.siteName,
          },
          {
            name: "twitter:creator",
            content: this.$static.metadata.twitter,
          },
        ],
      };
    },
    components: {
      Layout,
    },
    computed: {
      post() {
        return this.$page.post.data;
      },
    },
    methods: {
      onScroll: function (evt, el) {
        const progressBarEl = this.$refs.progress;
        const progressContainerEl = this.$refs.main;
        // const elementHeight =
        //   progressContainerEl.scrollHeight -
        //   heightInViewport(progressContainerEl);
        const scrollPosition = document.scrollingElement.scrollTop;
        const scrollHeight = progressContainerEl.scrollHeight;
        const scrollPercentage = (scrollPosition / scrollHeight) * 100;
        progressBarEl.style.width = scrollPercentage + "%";
      },
      heightInViewport: function (el) {
        var elH = el.offsetHeight,
          H = document.body.offsetHeight,
          r = el.getBoundingClientRect(),
          t = r.top,
          b = r.bottom;
        return Math.max(0, t > 0 ? Math.min(elH, H - t) : Math.min(b, H));
      },
    },
  };
</script>
<static-query>
  query {
    metadata {
      author
      siteName
      siteUrl
      siteDescription
      twitter
    }
  }
</static-query>
<page-query>
query Post ($id: ID!) {
  post (id: $id) {
    id
    data{
      title
      featured_image {
        url
      }
      body
      category
      excerpt
      published(format: "DD MMM, Y")
    }
  }
}
</page-query>