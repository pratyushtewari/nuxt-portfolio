<template>
  <div>
    <div class="page-content">
      <div class="intro">
        <grid class col="2" col-s="1">
          <c class="c1" span="1">
            <h1>
              <img
                class="pt-project-logo"
                src="@/assets/img/projects/vidyoconnect/vidyoconnect_logo.svg"
              />
              Vidyo Connect™️
            </h1>
          </c>
          <c class="c2" span="1">
            <div class="pt-project-pic vidyoconnect"></div>
          </c>
          <c class="c3" span="1">
            <p>An Enterprise Meeting Solution for Team Collaboration</p>
            <br />
            <p>
              Effective brainstorming, ideation, and problem solving need clear
              communication and solid interpersonal relationships. VidyoConnect
              is a meeting solution for team collaboration that speeds global
              alignment across your enterprise, allowing for better-informed
              decisions, faster responses and deeper trust.
            </p>
            <br />
          </c>
        </grid>
      </div>
      <br />
      <br />
      <div class="max-700">
        <div style="padding:56.25% 0 0 0;position:relative;">
          <iframe
            src="https://player.vimeo.com/video/240894889?color=ffffff&title=0&byline=0&portrait=0"
            style="position:absolute;top:0;left:0;width:100%;height:100%;"
            frameborder="0"
            allow="autoplay;"
            allowfullscreen="false"
          ></iframe>
        </div>
        <script src="https://player.vimeo.com/api/player.js"></script>
        <br />
        <p>
          Please head over to
          <a
            href="https://www.vidyo.com/video-conferencing-solutions/product/desktop-video-calling"
            target="_blank"
          >
            product website
          </a>
          or
          <nuxt-link to="/about">contact me</nuxt-link>
          for more information.
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import VideoPlayer from '~/components/VideoPlayer.vue';
import TwentyTwenty from '~/components/TwentyTwenty.vue';
export default {
  name: 'Eatlas',
  head() {
    return {
      title:
        'Eatlas - A system that helps you discover new food, cultures, and countries.',
      meta: [
        {
          name: 'description',
          content:
            'A system that helps you discover new food, cultures, and countries.'
        },
        {
          property: 'og:title',
          content:
            'Eatlas - A system that helps you discover new food, cultures, and countries.'
        },
        {
          property: 'og:image',
          content: 'https://i.imgur.com/CkiAt6c.png'
        },
        {
          property: 'og:description',
          content:
            'A system that helps you discover new food, cultures, and countries.'
        },
        {
          hid: 'og:url',
          property: 'og:url',
          content: 'http://ptewari.com/projects/eatlas'
        },
        {
          name: 'twitter:title',
          content:
            'Eatlas - A system that helps you discover new food, cultures, and countries.'
        },
        {
          name: 'twitter:description',
          content:
            'A system that helps you discover new food, cultures, and countries.'
        },
        {
          name: 'twitter:image',
          content: 'https://i.imgur.com/CkiAt6c.png'
        }
      ]
    };
  },
  components: {
    VideoPlayer,
    TwentyTwenty
  },
  data: function() {
    return {
      affiliny00: require('@/assets/img/projects/eatlas/img/affiliny00.jpg'),
      affiliny0: require('@/assets/img/projects/eatlas/img/affiliny0.jpg'),
      app0: require('@/assets/img/projects/eatlas/img/app0.png'),
      app1: require('@/assets/img/projects/eatlas/img/app1.png'),
      symbol0: require('@/assets/img/projects/eatlas/img/symbol0.png'),
      symbol1: require('@/assets/img/projects/eatlas/img/symbol1.png'),
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

.pt-project-pic {
  &.eatlas {
    margin-top: 0px;
  }
}
</style>
