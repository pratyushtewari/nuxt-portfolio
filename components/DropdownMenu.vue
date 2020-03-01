<template>
  <div>
    <div class="buttond" @click="togglemenu">
      Projects
    </div>
    <div ref="menu" class="menu">
      <ul ref="links">
        <!-- inser more links here -->
        <li @click="togglemenu">
          <nuxt-link to="/projects/eatlas">
            Eatlas
          </nuxt-link>
        </li>
        <li @click="togglemenu">
          <nuxt-link to="/projects/vidyoconnect">
            Vidyo Connect
          </nuxt-link>
        </li>
        <li @click="togglemenu">
          <nuxt-link to="/projects/chelada">
            Chelada
          </nuxt-link>
        </li>
        <li @click="togglemenu">
          <nuxt-link to="/projects/dynamo">
            Dynamo
          </nuxt-link>
        </li>
        <li @click="togglemenu">
          <nuxt-link to="/projects/presquevu">
            Presquevu
          </nuxt-link>
        </li>
        <li @click="togglemenu">
          <nuxt-link to="/projects/slate">
            Slate
          </nuxt-link>
        </li>
        <!-- <li><a href="contact.html">Contact</a></li> -->
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DropdownMenu',
  methods: {
    togglemenu: function(event) {
      event.stopPropagation();
      event.preventDefault();
      $(this.$refs.menu).toggleClass('visible');
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
  display:none;
  position: absolute;
  background: getColor(baseBackground);
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.5);
  border-radius: 4px;
  border: 1px solid getColor(baseBackgrounddarker);
  &.visible {
    display:block;
  }
  li {
    padding: 8px 16px;
    &:not(:last-child) {
      border-bottom: 1px solid getColor(baseBackgrounddarker);
    }
  }
}

</style>
