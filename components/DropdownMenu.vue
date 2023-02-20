<template>
  <div @mouseover="mouseover" @mouseleave="mouseleave">
    <div class="buttond">Side Projects</div>
    <div ref="menu" class="menu">
      <ul ref="links">
        <!-- inser more links here -->
        <nuxt-link to="/projects/eatlas">
          <li @click="togglemenu">Eatlas</li>
        </nuxt-link>
        <nuxt-link to="/projects/vidyoconnectcasestudy">
          <li @click="togglemenu">Vidyo Connect</li>
        </nuxt-link>
        <nuxt-link to="/projects/chelada">
          <li @click="togglemenu">Chelada</li>
        </nuxt-link>
        <nuxt-link to="/projects/dynamo">
          <li @click="togglemenu">Dynamo</li>
        </nuxt-link>
        <nuxt-link to="/projects/presquevu">
          <li @click="togglemenu">Presquevu</li>
        </nuxt-link>
        <nuxt-link to="/projects/slate">
          <li @click="togglemenu">Slate</li>
        </nuxt-link>
        <!-- <li><a href="contact.html">Contact</a></li> -->
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DropdownMenu',
  methods: {
    togglemenu: function (event) {
      $(this.$refs.menu).removeClass('visible');
    },
    mouseover: function (event) {
      $(this.$refs.menu).addClass('visible');
    },
    mouseleave: function (event) {
      $(this.$refs.menu).removeClass('visible');
    }
  }
};
</script>

<style lang="scss" scoped>
.buttond {
  display: block;
  height: 50px;
  line-height: 50px;
  padding-left: 5%;
  background: $baseTextBlueBlack;
  border-top: 1px solid $baseGreyblack;
  color: $baseWhite;
  cursor: pointer;
  &:hover {
    color: #00bd9b;
    text-decoration: none;
  }
}

@media only screen and (min-width: 768px) {
  .buttond {
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

.menu {
  cursor: pointer;
  display: none;
  position: absolute;
  background: getColor(baseBackground);
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.5);
  border-radius: 4px;
  border: 1px solid getColor(baseBackgrounddarker);
  &.visible {
    display: block;
  }
  li {
    padding: 8px 16px;
    border-bottom: 1px solid getColor(baseBackgrounddarker);
    &:hover {
      background: getColor(baseBackgrounddarker);
    }
  }
}
</style>
