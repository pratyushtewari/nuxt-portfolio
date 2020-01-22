<template>
  <!-- <client-only placeholder="Loading..."> -->
    <div class="projects">
      <grid col="2" col-s="1">
        <div class="c1">
          <h1>
            {{ name.charAt(0).toUpperCase() + name.substring(1).toLowerCase() }}
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
              View Project
            </nuxt-link>
          </div>
        </div>
      </grid>
      <span class="fading-border"></span>
    </div>
  <!-- </client-only> -->
</template>

<script>
export default {
  name: 'ProjectIntro',
  props: ['name', 'description', 'color'],
  data: function() {
    return {
      href: `/projects/${this.name.toLowerCase()}`,
      buttonClass: `pt-project-view-button ${this.name.toLowerCase()}`,
      imgclass: `pt-project-pic ${this.name.toLowerCase()}`
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

.pt-project-view-button {
  background-color: $footerBackgroundGrey;
  display: inline-block;
  border-radius: 4px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
  height: 48px;
  text-align: center;
  & * {
    line-height: 30px;
  }
  // &.vidyo {
  //     border: 1px solid $vidyo;
  //   a:hover {
  //   background-color: $vidyo;
  // }
  // }
  &.chelada {
    border: 1px solid $chelada;
    a:hover {
      background-color: $chelada;
      color: $baseWhite;
    }
  }
  &.dynamo {
    border: 1px solid $dynamo;
    a:hover {
      background-color: $dynamo;
    }
  }
  &.eatlas {
    border: 1px solid $eatlas;
    a:hover {
      background-color: $eatlas;
      color: $baseWhite;
    }
  }
  // &.flock {
  //     border: 1px solid $flock;
  //   a:hover {
  //   background-color: $flock;
  // }
  // }
  // &.luna {
  //     border: 1px solid $luna;
  //   a:hover {
  //   background-color: $luna;
  // }
  // }
  &.presquevu {
    border: 1px solid $presquevu;
    a:hover {
      background-color: $presquevu;
      color: $baseWhite;
    }
  }
  // &.rover {
  //     border: 1px solid $rover;
  //  a:hover {
  //     background-color: $rover;
  //   }
  // }
  &.slate {
    border: 1px solid $slate;
    a:hover {
      background-color: $slate;
    }
  }
  a {
    color: $baseTextBlueBlack;
    display: block;
    padding: 8px 16px;
  }
}
.pt-project-pic {
  width: auto;
  height: 100%;
  background-repeat: no-repeat;
  background-position-x: center;
  background-position-y: bottom;
  background-size: contain;
  flex-grow: 1;
  flex-shrink: 1;
  align-self: flex-end;
  min-width: 300px;
  &.eatlas {
    background-image: url('~@/assets/img/project_intros/eatlas_home.png');
  }
  // &.rover {
  //     background-image: url("~@/assets/img/project_intros/rover_home.png");
  // }
  &.chelada {
    background-image: url('~@/assets/img/project_intros/chelada_home.png');
  }
  &.presquevu {
    background-image: url('~@/assets/img/project_intros/presquevu_home.png');
  }
  &.dynamo {
    background-image: url('~@/assets/img/project_intros/dynamo_home.png');
  }
  &.slate {
    background-image: url('~@/assets/img/project_intros/slate_home.svg');
    background-position: top;
    max-width: 300px;
  }
  // &.flock {
  //     background-image: url("~@/assets/img/project_intros/eatlas_home.png");
  // }
  // &.luna {
  //     background-image: url("~@/assets/img/project_intros/rover_home.png");
  // }
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
