<template>
  <div>
    <div class="footer-nav-widgets-wrapper header-footer-group">
      <div class="footer-inner section-inner">
        <div class="footer-top has-social-menu">
          <nav aria-label="Social links" class="footer-social-wrapper">
            <ul
              class="social-menu footer-social reset-list-style social-icons fill-children-current-color"
            >
              <li class="menu-item menu-item-type-custom menu-item-object-custom menu-item-25">
                <a href="https://twitter.com/IamUndefin3d">
                  <span class="screen-reader-text">Twitter</span>
                  <svg
                    class="svg-icon"
                    aria-hidden="true"
                    role="img"
                    focusable="false"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M22.23,5.924c-0.736,0.326-1.527,0.547-2.357,0.646c0.847-0.508,1.498-1.312,1.804-2.27 c-0.793,0.47-1.671,0.812-2.606,0.996C18.324,4.498,17.257,4,16.077,4c-2.266,0-4.103,1.837-4.103,4.103 c0,0.322,0.036,0.635,0.106,0.935C8.67,8.867,5.647,7.234,3.623,4.751C3.27,5.357,3.067,6.062,3.067,6.814 c0,1.424,0.724,2.679,1.825,3.415c-0.673-0.021-1.305-0.206-1.859-0.513c0,0.017,0,0.034,0,0.052c0,1.988,1.414,3.647,3.292,4.023 c-0.344,0.094-0.707,0.144-1.081,0.144c-0.264,0-0.521-0.026-0.772-0.074c0.522,1.63,2.038,2.816,3.833,2.85 c-1.404,1.1-3.174,1.756-5.096,1.756c-0.331,0-0.658-0.019-0.979-0.057c1.816,1.164,3.973,1.843,6.29,1.843 c7.547,0,11.675-6.252,11.675-11.675c0-0.178-0.004-0.355-0.012-0.531C20.985,7.47,21.68,6.747,22.23,5.924z"
                    ></path>
                  </svg>
                </a>
              </li>
              <li class="menu-item menu-item-type-custom menu-item-object-custom menu-item-27">
                <a href="mailto:null@iamundefined.xyz">
                  <span class="screen-reader-text">Email</span>
                  <svg
                    class="svg-icon"
                    aria-hidden="true"
                    role="img"
                    focusable="false"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M20,4H4C2.895,4,2,4.895,2,6v12c0,1.105,0.895,2,2,2h16c1.105,0,2-0.895,2-2V6C22,4.895,21.105,4,20,4z M20,8.236l-8,4.882 L4,8.236V6h16V8.236z"
                    ></path>
                  </svg>
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
    <footer id="site-footer" role="contentinfo" class="header-footer-group">
      <div class="section-inner">
        <div class="footer-credits">
          <p class="footer-copyright">
            ©
            2020
            <a href="https://iamundefined.xyz/">I am Undefined</a>
          </p>

          <p class="powered-by-wordpress">
            <a href="https://wordpress.org/">Powered by JAMStack</a>
          </p>
        </div>

        <a class="to-the-top" href="#site-header">
          <span class="to-the-top-long">
            To the top
            <span class="arrow" aria-hidden="true">↑</span>
          </span>
          <span class="to-the-top-short">
            Up
            <span class="arrow" aria-hidden="true">↑</span>
          </span>
        </a>
      </div>
    </footer>
  </div>
</template>

<style>
.footer-nav-widgets-wrapper,
#site-footer {
  background-color: #fff;
  border-color: #dedfdf;
  border-style: solid;
  border-width: 0;
}
.section-inner {
  margin-left: auto;
  margin-right: auto;
  max-width: 120rem;
  width: calc(100% - 4rem);
}
.footer-top {
  align-items: center;
}
ul.social-icons {
  display: flex;
  flex-wrap: wrap;
  list-style: none;
  margin: -0.9rem 0 0 -0.9rem;
  width: calc(100% + 0.9rem);
}
.fill-children-current-color,
.fill-children-current-color * {
  fill: #fff;
}
.social-icons a,
#site-footer button:not(.toggle),
#site-footer .button,
#site-footer .faux-button,
#site-footer .wp-block-button__link,
#site-footer .wp-block-file__button,
#site-footer input[type="button"],
#site-footer input[type="reset"],
#site-footer input[type="submit"] {
  background-color: #108814;
}

.footer-social a {
  height: 3.5rem;
  width: 3.5rem;
}
.social-icons a {
  align-items: center;
  /* background: #cd2653; */
  border-radius: 50%;
  /* color: #fff; */
  display: flex;
  height: 3.5rem;
  justify-content: center;
  padding: 0;
  text-decoration: none;
  transition: transform 0.15s ease-in-out;
  width: 3.5rem;
}
.social-icons a:focus,
.social-icons a:hover {
  transform: scale(1.1);
  text-decoration: none;
}
ul.footer-social li {
  margin: 1rem 0 0 1rem;
}
#site-footer {
  padding: 4.3rem 0;
}
#site-footer .section-inner {
  align-items: baseline;
  display: flex;
  justify-content: space-between;
}
.footer-credits {
  display: flex;
  font-size: 1.2rem;
}
.footer-copyright {
  font-weight: 600;
  margin: 0;
}
.powered-by-wordpress {
  margin: 0 0 0 2.4rem;
}
.to-the-top-long {
  display: none;
}
.footer-top {
  display: flex;
  border-bottom: 1px solid #dedfdf;
  justify-content: space-between;
  padding: 2.5rem 0;
}
.footer-nav-widgets-wrapper {
    border-top-width: 1px;
}
@media (min-width: 700px) {
  .to-the-top-long {
    display: inline;
  }
}
@media (min-width: 700px) {
  .to-the-top-short {
    display: none;
  }
}
</style>
