<template>
  <div>
    <header class="uk-preserve-color" uk-sticky="media: 960">
      <div
        uk-sticky="animation: uk-animation-slide-top; sel-target: .uk-navbar-container; cls-active: uk-navbar-sticky; cls-inactive: uk-navbar-transparent uk-light; top: 200"
      >
        <nav class="uk-navbar-container" uk-navbar>
          <div class="uk-navbar-left">
            <g-link to="/" class="uk-navbar-item uk-logo">
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

    <div class="tm-main uk-section uk-section-default">
      <div class="uk-container uk-container-medium uk-position-relative">
        <slot/>
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