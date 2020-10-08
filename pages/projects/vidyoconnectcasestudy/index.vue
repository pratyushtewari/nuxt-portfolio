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
      <grid class col="4" col-s="1">
        <c span="1">
          <DefinitionBox
            :data="[
              {
                title: 'WHO:',
                definition:
                  'Vidyo, a video-conferencing company, delivers the highest quality <strong>cloud video conferencing service</strong>, on-premises solutions and platform-as-a-service for market leaders and innovative upstarts.'
              }
            ]"
          />
        </c>
        <c span="1">
          <DefinitionBox
            :data="[
              {
                title: 'WHAT:',
                definition:
                  'Create a <strong>brand new unified-communication platform</strong> that can be customized, and released on all platforms very quickly and uses the latest video conferencing api from Vidyo.'
              }
            ]"
          />
        </c>
        <c span="1">
          <DefinitionBox
            :data="[
              {
                title: 'WHY:',
                definition:
                  'Vidyo’s cutting edge service is to deliver the best quality audio-video conferencing with <strong>deeply customizable and white-labeled application.<strong>'
              }
            ]"
          />
        </c>
        <c span="1">
          <DefinitionBox
            :data="[
              {
                title: 'HOW:',
                definition:
                  'Kickstarted UX at Vidyo, created a new mobile and desktop experience and developed a UI framework called MV2C to release the project'
              }
            ]"
          />
        </c>
      </grid>
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
          for more information.
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import DefinitionBox from '~/components/DefinitionBox';
export default {
  name: 'VidyoConnect',
  head() {
    return {
      title:
        'VidyoConnect - An Enterprise Meeting Solution for Team Collaboration',
      meta: [
        {
          name: 'description',
          content:
            'An Enterprise Meeting Solution for Team Collaboration'
        },
        {
          property: 'og:title',
          content:
            'VidyoConnect - An Enterprise Meeting Solution for Team Collaboration'
        },
        {
          property: 'og:image',
          content: 'https://i.imgur.com/CkiAt6c.png'
        },
        {
          property: 'og:description',
          content:
            'An Enterprise Meeting Solution for Team Collaboration'
        },
        {
          hid: 'og:url',
          property: 'og:url',
          content: 'http://ptewari.com/projects/VidyoConnect'
        },
        {
          name: 'twitter:title',
          content:
            'VidyoConnect - An Enterprise Meeting Solution for Team Collaboration'
        },
        {
          name: 'twitter:description',
          content:
            'An Enterprise Meeting Solution for Team Collaboration'
        },
        {
          name: 'twitter:image',
          content: 'https://i.imgur.com/CkiAt6c.png'
        }
      ]
    };
  },
  components: {
    DefinitionBox
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
  &.VidyoConnect {
    margin-top: 0px;
  }
}
</style>
