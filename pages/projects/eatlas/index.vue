<template>
  <div>
    <div class="page-content">
      <div class="intro">
        <grid class col="2" col-s="1">
          <c class="c1" span="1">
            <h1>
              <img
                class="pt-project-logo"
                src="@/assets/img/projects/eatlas/img/eatlas_logo.svg"
              />Eatlas
            </h1>
          </c>
          <c class="c2" span="1">
            <div class="pt-project-pic eatlas"></div>
          </c>
          <c class="c3" span="1">
            <p>Eatlas helps you discover new food, cultures, and countries.</p>
            <div class="quote">
              <vue-typed-js
                :loop="true"
                :type-speed="60"
                :back-speed="10"
                :strings="quotes"
              >
                <span class="typing"></span>
              </vue-typed-js>
            </div>
            <p>
              Wondering what to eat? Where does a dish come from? What to eat
              when traveling? Check out Eatlas for all your questions.
            </p>
          </c>
        </grid>
      </div>
      <div class="margin-auto">
        <p class="max-700">
          How many times have you found yourself thinking about food? We all
          know it is sometimes exciting and sometimes mundane and necessary.
          Continue reading to know more about how Eatlas will give you joy while
          accomplishing these tasks.
        </p>
        <div id="eatlas-intro-video" class="intro-video">
          <video-player
            ref="videoPlayer"
            class="video-player-box"
            :options="playerOptions"
            :playsinline="true"
          ></video-player>
        </div>
      </div>
    </div>
    <div class="pt-container-full">
      <h2 class="main center">
        Based on just 3 simple gestures
      </h2>
      <div class="steps3">
        <span>
          <img class="phone" src="@/assets/img/projects/eatlas/img/step1.png" />
          <div class="finger one"></div>
          <p>Spin</p>
        </span>
        <span>
          <img class="phone" src="@/assets/img/projects/eatlas/img/step2.png" />
          <div class="finger two"></div>
          <p>Decide</p>
        </span>
        <span>
          <img class="phone" src="@/assets/img/projects/eatlas/img/step3.png" />
          <div class="finger three"></div>
          <p>Explore</p>
        </span>
      </div>
    </div>
    <div class="page-content">
      <grid class="half-half-color" col="2" col-s="1">
        <c class="align-center">
          <p>
            Just spin the globe. Tap to stop (or let it stop on its own). Eatlas
            will give you the countries that it found on that face of the earth.
            If you don't like what you got, well ... then spin again. You can
            also use the search bar to go to a specific cuisine. Play the video
            to see it live in action.
          </p>
        </c>
        <c>
          <div id="eatlas-rotation-home-video" class="intro-video">
            <video-player
              ref="videoPlayer2"
              class="video-player-box"
              :options="playerOptions2"
              :playsinline="true"
            ></video-player>
          </div>
          <!-- <video width="100%" height="auto" poster="img/eatlas-home.png" src="video/eatlas-rotation-home.mp4"></!-->
        </c>
      </grid>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Eatlas',
  data: function() {
    return {
      quotes: [
        '<strong>Hmm ...</strong> ^800 what shall I eat tonight?',
        '<strong>Hey!</strong> ^800 what do you-all want for lunch?',
        '<strong>DUDE!</strong> ^800 just order something.',
        "<strong>Argh!</strong> ^800 why's it taking so long to order?",
        'Where can I buy my ethnic spices?',
        'What is a ^500 <i>golgappa</i>?',
        'What is a ^500 <i>bucatini</i>?',
        'What is a ^500 <i>jambalaya</i>?',
        'What is a ^500 <i>jícama</i>?',
        'What is a ^500 <i>remoulade</i>?',
        'What do Mongolians eat for breakfast?',
        'How do you make soy sauce?',
        'I donno what to eat tonight?',
        'I want something new.',
        "I don't like to try new cuisines"
      ],
      playerOptions: {
        // videojs options
        muted: true,
        loop: 'loop',
        controls: false,
        preload: 'auto',
        autoplay: 'muted',
        width: 212,
        language: 'en',
        sources: [
          {
            type: 'video/mp4',
            src: require('@/assets/img/projects/eatlas/video/eatlas-intro.mp4')
          }
        ],
        poster: require('@/assets/img/projects/eatlas/img/eatlas-home.png')
      },
      playerOptions2: {
        // videojs options
        muted: true,
        loop: 'loop',
        controls: false,
        preload: 'auto',
        autoplay: 'muted',
        width: 212,
        language: 'en',
        sources: [
          {
            type: 'video/mp4',
            src: require('@/assets/img/projects/eatlas/video/eatlas-rotation-home.mp4')
          }
        ],
        poster: require('@/assets/img/projects/eatlas/img/eatlas-home.png')
      }
    };
  },
  computed: {
    player() {
      return this.$refs.videoPlayer.player;
    },
    player2() {
      return this.$refs.videoPlayer2.player;
    }
  },
  beforeDestroy() {
    if (this.player) {
      this.player.dispose();
    }
    if (this.player2) {
      this.player2.dispose();
    }
  },
  mounted() {
    console.log('this is current player instance object', this.player);
  }
};
</script>
<style lang="scss" scoped>
h2.main.center:before {
  content: '';
  width: 500px;
  max-width: 90%;
  height: 60%;
  background: $slantBackground;
  position: absolute;
  top: -32px;
  bottom: 0;
  right: 0;
  left: 0;
  margin: auto;
  transform: rotate(-4deg);
  z-index: -1;
}
.half-half-color {
  position: relative;
  &:after {
    content: '';
    width: 90%;
    height: 60%;
    background: getColor(baseBackgroundSubdude);
    position: absolute;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    margin: auto;
    transform: rotate(-3deg);
    z-index: -1;
  }
}
.video-player-box {
  margin: auto;
}
.intro {
  border-bottom: 1px solid #eeeeee;
  margin-bottom: 36px;
}
.pt-project-logo {
  width: 70px;
  margin-right: 20px;
}
.pt-project-pic {
  &.eatlas {
    margin-top: 0px;
  }
}
.align-center {
  align-self: center;
}
.c1 {
  grid-row: 1;
}
.c2 {
  grid-row: 1 / 3;
  align-self: end;
}
@media only screen and (min-width: 768px) and (max-width: 1000px) {
  .c1 {
    grid-column: 1 / span 2;
  }
  .c2 {
    grid-column: 2;
  }
  .c3 {
    grid-column: 1;
  }
}
@media only screen and (max-width: 768px) {
  .c1 {
    grid-row: 1;
  }
  .c2 {
    grid-row: 2;
  }
  .c3 {
    grid-row: 3;
  }
}
</style>
