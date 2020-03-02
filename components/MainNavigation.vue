<template>
  <nav class="pt-main-nav">
    <div class="pt-main-nav-button" @click="toggleNavMenu"></div>
    <ul ref="links">
      <!-- inser more links here -->
        <nuxt-link to="/" >
      <li @click="closeNavMenu">
          HOME
      </li>
        </nuxt-link>
        <nuxt-link to="/about">
      <li @click="closeNavMenu">
          ABOUT
      </li>
        </nuxt-link>
      <li @click="closeNavMenu">
        <DropdownMenu/>
      </li>
    </ul>
  </nav>
</template>

<script>
import DropdownMenu from './DropdownMenu'
export default {
  name: 'MainNavigation',
  components: {
    DropdownMenu
  },
  data() {
    return {
      currentPage: 'home'
    };
  },
  methods: {
    toggleNavMenu: function(event) {
      $(this.$refs.links).toggleClass('is-visible');
    },
    closeNavMenu: function(event) {
      $(this.$refs.links).removeClass('is-visible');
    }
  }
};
</script>

<style lang="scss" scoped>
.pt-main-nav {
  height: 100%;
  .pt-main-nav-button {
    width: 44px;
    height: 44px;
    background: url('~@/assets/img/pt-icon-menu_onlight.svg') center no-repeat;
    background-size: 44px 44px;
    cursor: pointer;
  }

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
    -webkit-transform: translateY(40px);
    -moz-transform: translateY(40px);
    -ms-transform: translateY(40px);
    -o-transform: translateY(40px);
    transform: translateY(40px);
  }

  a {
    display: block;
    height: 50px;
    line-height: 50px;
    padding-left: 5%;
    background: $baseTextBlueBlack;
    border-top: 1px solid $baseGreyblack;
    color: $baseWhite;

    &:hover {
      color: #00bd9b;
      text-decoration: none;
    }
  }
}
@media (prefers-color-scheme: dark) {
  .pt-main-nav {
    .pt-main-nav-button {
      background: url('~assets/img/pt-icon-menu_ondark.svg') center no-repeat;
    }
  }
}
@media only screen and (min-width: 768px) {
  .pt-main-nav {
    width: auto;
    height: auto;   
    cursor: auto;
    margin: 0 5% 0 0;
    display: flex;
    .pt-main-nav-button {
      background: none;
    }

    ul {
      display: flex;
      align-items: center;
      position: static;
      width: auto;
      -webkit-transform: translateY(0);
      -moz-transform: translateY(0);
      -ms-transform: translateY(0);
      -o-transform: translateY(0);
      transform: translateY(0);
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
      padding: 1.6rem;
      text-transform: uppercase;
      display: inline-block;
      height: auto;
      line-height: normal;
      background: transparent;
      border-top: none;
      color: $baseRed;
      &.nuxt-link-exact-active {
        background: url('~@/assets/img/underline.svg') no-repeat center bottom;
        background-size: 50px;
        background-position-y: 35px;
      }
    }
  }
}
</style>
