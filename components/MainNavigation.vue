<template>
  <nav class="pt-main-nav" @click="toggleNavMenu">
    <ul ref="links">
      <!-- inser more links here -->
      <li @click="toggleNavMenu">
        <nuxt-link to="/">
          HOME
        </nuxt-link>
      </li>
      <li @click="toggleNavMenu">
        <nuxt-link to="/about">
          ABOUT
        </nuxt-link>
      </li>
      <!-- <li><a href="contact.html">Contact</a></li> -->
    </ul>
  </nav>
</template>

<script>
export default {
  name: "MainNavigation",
  data() {
    return {
      theme: ""
    }
  },
  methods: {
    toggleNavMenu: function(event) {
      $(this.$refs.links).toggleClass("is-visible")
      event.stopPropagation()
    }
  }
}
</script>

<style lang="scss" scoped>
.pt-main-nav {
  width: 44px;
  height: 100%;
  background: url("~@/assets/img/pt-icon-menu.svg") no-repeat center center;
  background-size: 44px 44px;
  cursor: pointer;

  ul {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    -webkit-transform: translateY(-100%);
    -moz-transform: translateY(-100%);
    -ms-transform: translateY(-100%);
    -o-transform: translateY(-100%);
    transform: translateY(-100%);
  }

  ul.is-visible {
    -webkit-transform: translateY(50px);
    -moz-transform: translateY(50px);
    -ms-transform: translateY(50px);
    -o-transform: translateY(50px);
    transform: translateY(50px);
  }

  a {
    display: block;
    height: 50px;
    line-height: 50px;
    padding-left: 5%;
    background: $baseTextBlueBlack;
    border-top: 1px solid $baseGreyblack;
    color: $baseWhite;
  }

  a:hover {
    color: #00bd9b;
    text-decoration: none;
  }
}
@media only screen and (min-width: 768px) {
  .pt-main-nav {
    width: auto;
    height: auto;
    background: none;
    cursor: auto;
    position: fixed;
    right: 5%;

    ul {
      position: static;
      width: auto;
      -webkit-transform: translateY(0);
      -moz-transform: translateY(0);
      -ms-transform: translateY(0);
      -o-transform: translateY(0);
      transform: translateY(0);
      line-height: 70px;
    }

    ul.is-visible {
      -webkit-transform: translateY(0);
      -moz-transform: translateY(0);
      -ms-transform: translateY(0);
      -o-transform: translateY(0);
      transform: translateY(0);
    }

    li {
      display: inline-block;
    }

    a {
      font-size: 1em;
      text-transform: uppercase;
      display: inline-block;
      height: auto;
      line-height: normal;
      background: transparent;
      padding: 0.6em 1em;
      border-top: none;
      color: $baseRed;
    }

    .selected a {
      background: url("~@/assets/img/underline.svg") no-repeat center bottom;
      background-size: 50px;
    }
  }
}
</style>
