<template>
  <div>
    <MainHeader ref="header" />

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
            :loop="true"
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

          <ul class="bullet">
            <li>Hard to manage</li>
            <li>
              Versions after Versions (different clients has different features)
            </li>
            <li>Old SDK</li>
            <li>Different designs on different platforms</li>
            <li>Changes took a lot of time</li>
            <li>Frustrations – on both Vidyo's and client's sides</li>
          </ul>
          <h4>The ask:</h4>
          <ul class="bullet">
            <li>
              A conscientious user experience for both end-users and
              white-labellers
            </li>
            <li>Faster to iterate</li>
            <li>Faster to develop and adapt to changing requirements</li>
            <li>Faster to customize</li>
            <li>Faster to incorporate into existing work-flow</li>
            <li>
              <strong>Develop once deploy everywhere</strong>
              on all platforms
            </li>
          </ul>
        </c>
      </grid>
      <h3>Inception</h3>
      <h4>What do people want in a video communication solution?</h4>
      <p>The begining a new kind of video-conferencing.</p>
      <br />
      <div class="center">
        <img src="./img/initialwhiteboard.png" />
        <p>
          ↑ A few initial sketches about the new video conferencing application
          UI and the SDK
        </p>
      </div>

      <br />

      <grid class col="2" col-s="1">
        <c span="1">
          <p>
            After extensive research into what our clients needed, the direction
            of the company and the new SDK roadmap that was being developed in
            parallel to the application, I created wirframes for a new kind of
            video conferencing application that was able to take the users into
            a call as fast as possible, provide ample navigation and freedom to
            use the app while the users are still in the call, manage calendar
            and account settings, make application sharing fast and reliable and
            many more.
          </p>
        </c>
        <c span="1">
          <img src="./img/wireframe.png" />
        </c>
      </grid>
      <br />
      <p>
        I created a wireframe application to test my hypotheses about the
        navigation and feature set. Below is a time-lapse of one of such session
        with potential clients.
      </p>
      <br />
      <div class="max-500">
        <video-player class="video-player-box" :options="playerOptions1" />
      </div>
      <br />
      <br />
      One on the main selling point about the new thinking was to make a video
      conferencing app entirely on a chrome engine. This was one of the main
      drawbacks of the old product since it was native on all platforms, it was
      very time consuming to make updated and add features to all platform. In
      order to be successful in unified communication it was imperative to
      release all the features on all the platforms, windows, mac, ios, android
      and linux. While our core rendering team was trying to improve the webRTC
      stack and working with chrome team to improve rendering multiple real time
      audio and video feeds and compose them at the end client, my team was
      responsible to create the framework to support all these features and
      develop the application.
      <br />
      <br />
      <h4>MV2C Framework</h4>
      <br />
      <grid class col="2" col-s="1">
        <c span="1">
          <p>
            Together with my architect we create a new kind of framework and he
            loved to call is MV2C [modal view, controller (participant),
            controller (video-pipeline)].
          </p>
          <br />
          <p>
            We investigated popular javascript frameworks like angular, vue and
            react and at that time and found that going in-house with a much
            light-weight javascript framework will be the best course of action.
          </p>
        </c>
        <c span="1">
          <carousel
            :loop="true"
            :autoplay="true"
            :navigation-enabled="true"
            navigationClickTargetSize="16"
            :per-page="1"
            class="width400"
          >
            <slide><img src="./img/mv2c4.JPG" /></slide>
            <slide><img src="./img/mv2c1.png" /></slide>
            <slide><img src="./img/mv2c2.png" /></slide>
            <slide><img src="./img/mv2c3.JPG" /></slide>
          </carousel>
        </c>
      </grid>

      <br />
      <grid class col="2" col-s="1">
        <c span="1">
          This is the proof of concept I made based on the wireframe above to
          test the new MV2C framework we created.
          <h4>Learnings:</h4>

          <ul class="bullet">
            <li>
              The framework is scalable to accomodate all of Vidyo's api push
              events.
            </li>
            <li>
              Low learning curve for existing javascript developers. No prior
              learning experience required for other 3rd party frameworks.
            </li>
            <li>Very small javascript footprint within a few kilobytes.</li>
            <li>
              No need for bulky webpack and other pacakage managers needed.
            </li>
          </ul>
        </c>
        <c span="1">
          <div class="max-500">
            <video-player class="video-player-box" :options="playerOptions2" />
          </div>
        </c>
      </grid>
      <br />
      <br />
      <h4>
        What do people want in
        <strike>video</strike>
        unified collaboration solution?
      </h4>

      <br />
      <grid class col="2" col-s="1">
        <c span="1">
          Our intial research showed that clients want more than a
          video-conferencing solution for their desktop and mobile platforms. We
          created a first working prototype with Vidyo's new real time video
          communication and messaging services SDK and tested with multiple
          audiences across out potential demographics. This is the clip from one
          of the usability sessions.
          <br />
          <br />
          <ul class="bullet">
            <li>
              Create multiple chat rooms with individuals or a group of
              individuals.
            </li>
            <li>Ability to create a direct call from any chat room.</li>
            <li>
              Ability to invite new participants to join an existing video call.
              This required seamless creation of a new chat room behind the
              scenes and place all the pariticipants into the existing
              video-call.
            </li>
            <li>Ability to create custom video layouts in the chatroom.</li>
          </ul>
        </c>
        <c span="1">
          <div class="max-500">
            <video-player class="video-player-box" :options="playerOptions3" />
          </div>
        </c>
      </grid>
      <br />

      <div class="center max-500">
        <img src="./img/neo1.png" />
        <img src="./img/neo2.png" />
        <img src="./img/neo3.gif" />
        <img src="./img/logo.png" />
      </div>

      <h3>2015 Q1</h3>
      <h2 class="center">Introducing Vidyo Neo</h2>
      <br />
      <br />
      <div class="max-500">
        <video-player class="video-player-box" :options="playerOptions4" />
      </div>

      <br />

      <ul class="bullet">
        <li>Became the future for the desktop solution</li>
        <li>
          Company poured in all the resources they could to support Neo project
          from Sales, engineering and Marketing
        </li>
        <li>
          Requested to release a replacement for the existing Vidyo Desktop
        </li>
      </ul>

      <h3>2015 Q2</h3>
      <h2>Introducing Vidyo Neo Mobile</h2>
      <br />
      <img src="./img/m1.png" />
      <img src="./img/m2.png" />

      <grid class col="3" col-s="1">
        <c span="1">
          <img src="./img/m5.gif" />
        </c>
        <c span="2">
          <img src="./img/m6.gif" />
        </c>
      </grid>

      <h3>Q4 2015 Video Neo 4.0</h3>

      <ul class="bullet">
        <li>Released Vidyo Neo to the new cloud platform</li>
        <li>All Vidyo Client were upgraded to Vidyo Neo</li>
        <li>Received a lot of appreciation from the clients</li>
        <li>Customization request started pouring in</li>
        <li>Clients were were enthusiastic with the new UX and the platform</li>
      </ul>

      <h3>Q1 2016 Vidyo Neo 4.1 and custom applications</h3>

      <ul class="bullet">
        <li>New Features</li>
        <li>White-label</li>
        <li>Video Neo as a platform with custom injection</li>
      </ul>

      <img src="./img/m4.png" />
      <img src="./img/m3.png" />

      <h3>Q1 2017 Reorganization</h3>
      <br />
      <grid class="center" col="3" col-s="1">
        <c>
          <img src="./img/t1.png" />
          Hire new UX and Front-end team
        </c>

        <c>
          <img src="./img/t2.png" />
          Training
        </c>

        <c>
          <img src="./img/t3.png" />
          Creating Expertise
        </c>
      </grid>
      <br />
      <h3>Q2 2017 New features</h3>
      <br />

      <div class="center">
        <img src="./img/fcc.png" />
        Remote Camera control
      </div>

      <grid class="center" col="3" col-s="1">
        <c style="grid-row: 1/3" span="1">
          <img src="./img/calendar.gif" />
          Calendar integration
        </c>
        <c span="2">
          <img src="./img/layoutdrag.gif" />
          Prototyping with layout
        </c>

        <c span="2">
          <img src="./img/reconnect.gif" />
          Call reconnection
        </c>
      </grid>

      <h3>Q3 2017 – 17.3, Nexi 2.0</h3>

      <br />
      Bloomberg Nexi upgrade from Vidyo Desktop, upgrade to an existing
      deployment received 3.6 million calls minutes (140% increase) across
      42,000 meetings (180% increase) with 92,500 (280% increase) calls in first
      6 days.
      <br />
      <br />
      <grid col="2" col-s="1">
        <c><img src="./img/jb.png" /></c>
        <c>
          <div class="quote">
            Every market in the world uses Bloomberg for their platform to trade
            financial products, and because you've made us betterm you've made
            them better.
            <br />
            <br />
            [Churchil] Never has so much been done for so many by so few.
            <br />
            <br />
            <p style="float: right">- Jeff Fairbanks, Bloomberg</p>
          </div>
        </c>
      </grid>
      <br />
      <h4>Update on Nexi</h4>
      <br />

      I was pleased to recieve an update on the Nexi platform from Jeff
      Fairbanks.
      <br />
      <br />
      <img class="max-400" src="./img/jb2.png" />
      <br />
      <br />
      <br />
      <hr />
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
import VideoPlayer from '~/components/VideoPlayer.vue';
import MainHeader from '~/components/MainHeader';

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
  data: function () {
    return {
      playerOptions1: {
        // videojs options
        fluid: true,
        controls: false,
        preload: 'auto',
        language: 'en',
        sources: [
          {
            type: 'video/mp4',
            src: require('@/pages/projects/vidyoconnectcasestudy/video/1.mp4')
          }
        ]
        // ,
        // poster: require('@/assets/img/projects/eatlas/img/eatlas-home.png')
      },
      playerOptions2: {
        // videojs options
        fluid: true,
        controls: false,
        preload: 'auto',
        language: 'en',
        sources: [
          {
            type: 'video/mp4',
            src: require('@/pages/projects/vidyoconnectcasestudy/video/2.mp4')
          }
        ]
        // ,
        // poster: require('@/assets/img/projects/eatlas/img/eatlas-home.png')
      },
      playerOptions3: {
        // videojs options
        fluid: true,
        controls: false,
        preload: 'auto',
        language: 'en',
        sources: [
          {
            type: 'video/mp4',
            src: require('@/pages/projects/vidyoconnectcasestudy/video/3.mp4')
          }
        ]
        // ,
        // poster: require('@/pages/projects/vidyoconnectcasestudy/img/posterneo.png')
      },
      playerOptions4: {
        // videojs options
        fluid: true,
        controls: false,
        preload: 'auto',
        language: 'en',
        sources: [
          {
            type: 'video/mp4',
            src: require('@/pages/projects/vidyoconnectcasestudy/video/4.mp4')
          }
        ],
        poster: require('@/pages/projects/vidyoconnectcasestudy/img/posterneo.png')
      }
    };
  },
  components: {
    DefinitionBox,
    VideoPlayer,
    MainHeader
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
