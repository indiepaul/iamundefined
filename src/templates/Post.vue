// <template>
  <Layout>
    <div class="progress-bar-container">
      <div class="progress-bar-container__progress" ref="progress"></div>
    </div>

    <div
      class="cover-header screen-height"
      v-bind:style="{ backgroundImage: 'linear-gradient(rgba(0, 123, 77,0.6), rgba(24, 127, 79,0.6)), url(\'' + $page.post.thumbnail + '\')', color: 'red' }"
    >
      <div class="cover-wrapper screen-height">
        <div class="cover-inner">
          <header class="entry-header">
            <h1>{{ $page.post.title }}</h1>
            <div class="post-meta-wrapper post-meta-single post-meta-single-top">
              <ul class="post-meta">
                <li class="post-date meta-wrapper">
                  <span class="meta-icon">
                    <span class="screen-reader-text">Post date</span>
                    <span uk-icon="calendar">
                      <svg
                        width="20"
                        height="20"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M 2,3 2,17 18,17 18,3 2,3 Z M 17,16 3,16 3,8 17,8 17,16 Z M 17,7 3,7 3,4 17,4 17,7 Z"
                        ></path>
                        <rect width="1" height="3" x="6" y="2"></rect>
                        <rect width="1" height="3" x="13" y="2"></rect>
                      </svg>
                    </span>
                  </span>
                  <span class="meta-text">
                    <a
                      href="https://iamundefined.xyz/2020/01/01/dealing-with-my-imposter-syndrome/"
                    >{{ $page.post.date }}</a>
                  </span>
                </li>
              </ul>
              <!-- .post-meta -->
            </div>
          </header>
        </div>
      </div>
    </div>
    <main v-scroll="onScroll">
      <article>
        <div class="tm-main uk-section uk-section-default">
          <div class="uk-container uk-container-small uk-position-relative article-container">
            <div class="article__content" ref="main" v-html="$page.post.content"/>
            <hr>
            <p class="home-links">
              <span class="meta-icon">
                <span class="screen-reader-text">Post date</span>
                <span uk-icon="calendar">
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill="none"
                      stroke="#000"
                      stroke-width="1.1"
                      d="M17.5,3.71 L17.5,7.72 C17.5,7.96 17.4,8.2 17.21,8.39 L8.39,17.2 C7.99,17.6 7.33,17.6 6.93,17.2 L2.8,13.07 C2.4,12.67 2.4,12.01 2.8,11.61 L11.61,2.8 C11.81,2.6 12.08,2.5 12.34,2.5 L16.19,2.5 C16.52,2.5 16.86,2.63 17.11,2.88 C17.35,3.11 17.48,3.4 17.5,3.71 L17.5,3.71 Z"
                    ></path>
                    <circle cx="14" cy="6" r="1"></circle>
                  </svg>
                </span>
              </span>
              <span class="meta-text">
                <a href="#">{{ $page.post.category }}</a>
              </span>
            </p>
          </div>
        </div>
      </article>
    </main>
  </Layout>
</template>

<page-query>
query Post ($path: String!) {
    post (path: $path) {
        id
        date(format: "MMMM DD, Y")
        title
        content
        category
        thumbnail
    }
}
</page-query>

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
  // inserted: function(el, binding) {
  //   let f = function(evt) {
  //     if (binding.value(evt, el)) {
  //       window.removeEventListener("scroll", f);
  //     }
  //   };
  //   window.addEventListener("scroll", f);
  // }
});
export default {
  components: {
    Layout
  },
  methods: {
    onScroll: function(evt, el) {
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
    heightInViewport: function(el) {
      var elH = el.offsetHeight,
        H = document.body.offsetHeight,
        r = el.getBoundingClientRect(),
        t = r.top,
        b = r.bottom;
      return Math.max(0, t > 0 ? Math.min(elH, H - t) : Math.min(b, H));
    }
  }
};
</script>
