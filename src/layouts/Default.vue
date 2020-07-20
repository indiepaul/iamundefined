<template>
  <div>
    <header class="uk-preserve-color" uk-sticky="media: 960">
      <div
        uk-sticky="animation: uk-animation-slide-top; sel-target: .uk-navbar-container; cls-active: uk-navbar-sticky; cls-inactive: uk-navbar-transparent uk-light; top: 200"
      >
        <nav class="uk-navbar-container" uk-navbar>
          <div class="uk-navbar-left">
            <g-link to="/" class="uk-navbar-item uk-logo">
              <!-- <img class="uk-margin-small-right" uk-svg :src="'../images/uikit-logo.svg'">  -->
              I am Undefined
            </g-link>
          </div>

          <div class="uk-navbar-right">
            <ul class="uk-navbar-nav uk-visible@m">
              <li>
                <g-link to="/">Home</g-link>
              </li>
              <li>
                <g-link to="/about">About Me</g-link>
              </li>
            </ul>

            <!-- <div class="uk-navbar-item uk-visible@m">
              <a class="uk-button uk-button-default tm-button-default uk-icon" href="../download">
                Download
                <canvas uk-icon="icon: download" width="20" height="20"></canvas>
              </a>
            </div>-->

            <a
              class="uk-navbar-toggle uk-hidden@m"
              uk-navbar-toggle-icon
              href="#offcanvas"
              uk-toggle
            ></a>
          </div>
        </nav>
      </div>
    </header>

    <!-- <div class="tm-sidebar-left uk-visible@m">
      <h3>Documentation</h3>
    </div>-->

    <div class="tm-main uk-section uk-section-default">
      <div class="uk-container uk-container-medium uk-position-relative">
        <slot/>

        <!-- <div class="tm-sidebar-right uk-visible@l">
          <div uk-sticky="offset: 160">
            <ul
              class="uk-nav uk-nav-default tm-nav uk-nav-parent-icon"
              uk-scrollspy-nav="closest: li; scroll: true; offset: 100"
            >
              <li v-for="(id, subject) in ids" :key="id">
                <a :href="`#${id}`">{{ subject }}</a>
              </li>
              <li class="uk-nav-divider"></li>
              <li v-if="component">
                <a :href="`../assets/uikit/tests/${component}.html`" target="_blank">
                  <span class="uk-margin-small-right" uk-icon="icon: push"></span>
                  <span class="uk-text-middle">Open test</span>
                </a>
              </li>
              <li>
                <a href="https://github.com/uikit/uikit/issues" target="_blank">
                  <span class="uk-margin-small-right" uk-icon="icon: warning"></span>
                  <span class="uk-text-middle">Report issue</span>
                </a>
              </li>
              <li>
                <a href="https://discordapp.com/invite/NEt4Pv7" target="_blank">
                  <span class="uk-margin-small-right" uk-icon="icon: commenting"></span>
                  <span class="uk-text-middle">Get help</span>
                </a>
              </li>
              <li>
                <a
                  href="#"
                  target="_blank"
                >
                  <span class="uk-margin-small-right" uk-icon="icon: pencil"></span>
                  <span class="uk-text-middle">Edit this page</span>
                </a>
              </li>
            </ul>
          </div>
        </div>-->
      </div>
    </div>

    <div id="offcanvas" ref="offcanvas" uk-offcanvas="mode: reveal; overlay: true">
      <div class="uk-offcanvas-bar">
        <div class="uk-panel">
          <ul class="uk-nav uk-nav-default tm-nav">
            <li class="uk-nav-header">Menu</li>
            <li>
              <g-link to="/" class="uk-offcanvas-close">Home</g-link>
            </li>
            <li>
              <g-link to="/about" class="uk-offcanvas-close">About Me</g-link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<static-query>
query {
  metadata {
    siteName
  }
}
</static-query>

<style>
.uk-offcanvas-close {
  position: initial;
  z-index: initial;
  top: initial;
  right: initial;
  padding: 5px;
}
</style>