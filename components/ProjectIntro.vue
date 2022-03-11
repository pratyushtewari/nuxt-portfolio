<template>
  <div class="projects">
    <grid col="2" col-s="1">
      <div class="c1">
        <h1>
          {{ name }}
        </h1>
      </div>
      <div class="c2">
        <div :class="imgclass"></div>
      </div>
      <div class="c3">
        {{ description }}
      </div>
      <div class="c4">
        <div :class="buttonClass">
          <nuxt-link :to="href">
            Learn more >
          </nuxt-link>
        </div>
      </div>
    </grid>
    <span class="fading-border"></span>
  </div>
</template>

<script>
export default {
  name: 'ProjectIntro',
  props: ['name', 'description', 'color'],
  data: function() {
    return {
      href: `/projects/${this.name.toLowerCase().replace(/\W+/g, "")}`,
      buttonClass: `project-view-button ${this.name.toLowerCase().replace(/\W+/g, "")}`,
      imgclass: `pt-project-pic ${this.name.toLowerCase().replace(/\W+/g, "")}`
    };
  }
};
</script>

<style lang="scss" scoped>
h1 {
  margin-block-start: 48px;
  margin-block-end: 0;
  line-height: 1;
}
.c1 {
  grid-row: 1;
}
.c2 {
  grid-row: 1 / 4;
  justify-self: center;
}
.c3 {
  grid-row: 2;
}
.c4 {
  grid-row: 3;
  margin-block-end: 48px;
}
.projects {
  max-width: 1000px;
  margin: 48px auto 0;
  &:nth-child(even) {
    .c2 {
      grid-column: 1;
    }
  }
}

.project-view-button {
  &.chelada {
    border: 1px solid $chelada;
    &:hover {
      background-color: $chelada;
      & * {
        color: $baseWhite;
      }
    }
  }
  &.dynamo {
    border: 1px solid $dynamo;
    &:hover {
      background-color: $dynamo;
    }
  }
  &.eatlas {
    border: 1px solid $eatlas;
    &:hover {
      background-color: $eatlas;
      & * {
        color: $baseWhite;
      }
    }
  }
  &.vidyoconnect {
    border: 1px solid $vidyoconnect;
    &:hover {
      background-color: $vidyoconnect;
      & * {
        color: $baseWhite;
      }
    }
  }
  &.presquevu {
    border: 1px solid $presquevu;
    &:hover {
      background-color: $presquevu;
      & * {
        color: $baseWhite;
      }
    }
  }
  &.slate {
    border: 1px solid $slate;
    &:hover {
      background-color: $slate;
    }
  }
}

@media only screen and (max-width: 768px) {
  h1 {
    margin-block-start: 24px;
    margin-block-end: 24px;
    line-height: 1;
  }
  .pt-project-pic {
    height: 150px;
    max-width: 100%;
  }
  .c1 {
    grid-row: 1;
    justify-self: center;
  }
  .c2 {
    grid-row: 2;
  }
  .c3 {
    grid-row: 3;
    margin-block-end: 24px;
  }
  .c4 {
    grid-row: 4;
    justify-self: center;
  }
}
</style>
