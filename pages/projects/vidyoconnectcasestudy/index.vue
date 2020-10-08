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
              decisions, faster responses and deeper trust. Checkout the
              <a
                href="https://www.vidyo.com/video-conferencing-solutions/product/desktop-video-calling"
                target="_blank"
              >
                product website
              </a>
              for latest information on this application.
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
                  'Kickstarted UX design and research at Vidyo, created a new mobile and desktop experience and developed a UI framework called MV2C to release the services.'
              }
            ]"
          />
        </c>
      </grid>

      <br />

      <h2>Problem Statement</h2>

      <p>
        The legacy VidyoDesktop™ application was a very successful but a
        monolithic application for video-conferencing. This was build in
        <a href="https://www.qt.io/" target="_blank">Qt</a>
        . As Vidyo’s strived to provide better UX and customizable white-labeled
        products to clients, this framework was very time consuming if not
        limiting.
      </p>
      <br />

      <h2>My role</h2>
      <h3>Senior UI/UX Designer and Engineer | Jan 2016 - May 2018</h3>
      <p>
        I led the front-end team for Vidyo Connect. Oversaw daily agile
        processes and built the design language across all products and major
        releases. One such upgrade to an existing deployment received 3.6
        million calls minutes (140% increase) across 42,000 meetings (180%
        increase) with 92,500 (280% increase) calls in first 6 days and has
        grown to become the largest private video conferencing platform in the
        world logging more than 3 Billion minutes of talk time and over 150
        Million conference calls.
      </p>
      <h3>UI/UX Designer and Engineer | October 2014 - Dec 2015</h3>
      <p>
        I designed and developed the UX for Vidyo Connect. Defined the company’s
        new UX strategy and collaborated with a team of designers and engineers
        to upgrade existing products. Created a new web UI framework and
        partnered with the SDK team, and enhanced the existing static video
        platform to a highly customizable unified communication platform.
      </p>

      <br />
      <h2>Journey</h2>
      <h3>2014</h3>

      <p class="center">
        Below are the screenshots of VidyoDesktop™ application in 2014
      </p>
      <br />
      <grid class col="2" col-s="1">
        <c span="1">
          <carousel
            :navigation-enabled="true"
            navigationClickTargetSize="16"
            :per-page="1"
            class="width400"
          >
            <slide><img src="./img/vidyodesktop/1.png" /></slide>
            <slide><img src="./img/vidyodesktop/2.png" /></slide>
          </carousel>
        </c>
        <c span="1">
          <h4>The issues:</h4>

          <ul>
            <li>Hard to manage</li>
            <li>
              Versions after Versions (different clients has different features)
            </li>
            <li>Old SDK</li>
            <li>Different designs on different platforms</li>
            <li>Changes took a lot of time</li>
            <li>Frustrations – on both Vidyo's and client's sides</li>
          </ul>
          <h4>The Ask:</h4>
          <ul>
            <li>Better UX</li>
            <li>Faster to Design – more over a unified design</li>
            <li>Faster to Develop</li>
            <li>Faster to Change and adapt to new requirements</li>
            <li>Faster to Customize</li>
            <li>Faster to Incorporate into existing work-flow</li>
            <li>Develop once Deploy everywhere on all platforms</li>
          </ul>
        </c>
      </grid>
      <div style="margin-top: 24px" class="max-700">
        <div style="padding: 56.25% 0 0 0; position: relative">
          <iframe
            src="https://player.vimeo.com/video/240894889?color=ffffff&title=0&byline=0&portrait=0"
            style="
              position: absolute;
              top: 0;
              left: 0;
              width: 100%;
              height: 100%;
            "
            frameborder="0"
            allow="autoplay;"
            allowfullscreen="false"
          ></iframe>
        </div>
        <script src="https://player.vimeo.com/api/player.js"></script>
        <br />
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
          content: 'An Enterprise Meeting Solution for Team Collaboration'
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
          content: 'An Enterprise Meeting Solution for Team Collaboration'
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
          content: 'An Enterprise Meeting Solution for Team Collaboration'
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
