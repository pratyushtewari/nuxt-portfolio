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
              />
              Eatlas
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
      <br />
      <br />
      <div class="margin-auto">
        <p class="max-700">
          How many times have you found yourself thinking about food? We all
          know it is sometimes exciting and sometimes mundane and necessary.
          Continue reading to know more about how Eatlas will give you joy while
          accomplishing these tasks.
        </p>
        <div class="phone-video-frame">
          <video-player class="video-player-box" :options="playerOptions" />
        </div>
      </div>
    </div>
    <div class="container-full">
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
          <div id="eatlas-rotation-home-video" class="phone-video-frame">
            <video-player class="video-player-box" :options="playerOptions2" />
          </div>
        </c>
      </grid>
      <div class="max-700">
        <h2>So, how it's made?</h2>
        <p>Let's talk about that.</p>
        <br />
        <p>
          Online food delivery industry is at its all-time high with billions of
          dollars being invested in this
          <a
            target="_blank"
            href="https://techcrunch.com/2015/07/11/the-billion-dollar-food-delivery-wars/"
          >
            [1]
          </a>
          . With more and more option to order food from, people spend more and
          more time trying to figure out what they want to eat. Whether it is
          for themselves, for a group of people, you will find people spending a
          lot of effort trying to learn, understand and experience different
          kinds of food, culture, and variety.
        </p>
        <br />
        <div class="center">
          <p>
            <img
              style="width:100%;"
              src="@/assets/img/projects/eatlas/img/thinking_about_food.png"
            />
          </p>
          <p>Thought process of my target audience when asked about food</p>
          <br />
          <p>Convenience is a big key player in the decision factor</p>
          <p>
            <img
              class="center max-500"
              style="width:100%;"
              src="@/assets/img/projects/eatlas/img/flow-chart-food.png"
            />
          </p>
          <div class="center small">
            Image source:
            <a
              target="_blank"
              href="https://techcrunch.com/2015/07/11/the-billion-dollar-food-delivery-wars"
            >
              the-billion-dollar-food-delivery-wars
            </a>
          </div>
        </div>
        <br />
        <br />
        <br />
      </div>
    </div>
    <div class="container-full">
      <h2 class="center">
        Why the spin?
      </h2>
      <br />
      <p class="max-700">
        During my market research, I found that there are three basic types of
        food hunting solutions. Firstly, there are ones that give you a lot of
        options any let you decide where to source your food from. Secondly, the
        ones that help you learn and try out recipes and cook yourself and
        thirdly, the ones that make the decision for you and relieve you from
        all the tension.
      </p>
      <br />
      <div class="steps3">
        <span>
          <img
            class="phone"
            src="@/assets/img/projects/eatlas/img/pickers.png"
          />
          <div class="finger one"></div>
          <p>Pickers</p>
        </span>
        <span>
          <img
            class="phone"
            src="@/assets/img/projects/eatlas/img/recipers.png"
          />
          <div class="finger two"></div>
          <p>Recipers</p>
        </span>
        <span>
          <img
            class="phone"
            src="@/assets/img/projects/eatlas/img/deciders.png"
          />
          <div class="finger three"></div>
          <p>Deciders</p>
        </span>
      </div>
      <br />
      <p class="max-700">
        In all of the above categories, I found that the users had some level
        anxiety and work that they needed to do to achieve their goals. I found
        that gamification of the selection process can ease this burden and
        provide a fun and easy way of letting people figure out what they want.
      </p>
    </div>
    <br />
    <div class="max-700">
      <p>
        To organize all the data points that I collected during interviewing and
        surveying my target audience, and draw good insights from it, I laid
        them into an affinity diagram. It reveled five major insight and
        directions for EATLAS.
      </p>
      <br />
      <TwentyTwenty
        :before="affiliny00"
        :after="affiliny0"
        before-label="Before"
        after-label="After"
      />
      <br />
      <br />
      <div class="small-video">
        <p class="videoWrapper">
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/QgBhyYP2rrk?modestbranding=1&rel=0"
            frameborder="0"
            allow="encrypted-media"
            allowfullscreen
          ></iframe>
        </p>
      </div>
    </div>
    <div class="page-content">
      <br />
      <br />
      <br />
      <div class="pt-container-middle">
        <h2 class="center">
          Insights
        </h2>
        <br />
        <h3>Things people do about food at home</h3>
        <p>
          There was a lot of activities that users did
          <strong>at home</strong>
          while thinking about food. From researching about the next travel to
          cooking different meals, to ordering food for a bunch of friends.
          EATLAS should help the users in achieving all these activities.
        </p>
        <grid col="3" col-s="1">
          <div class="quote">
            I like comfort food from home when I am tired.
          </div>
          <div class="quote">
            Where do I buy good cheap ingredients for my ethnic cuisine?
          </div>
          <div class="quote">
            I like to learn different traditional ways of cooking.
          </div>
        </grid>
        <br />

        <h3>Things people do to pick a restaurant faster</h3>
        <p>
          While there are many apps that help you pick and filter the
          restaurants that you want to order from or dine-in, but there is a lot
          of
          <strong>time spend on deciding</strong>
          which one to pick. EATLAS should help users pick restaurants they want
          quickly.
        </p>
        <grid col="3" col-s="1">
          <div class="quote">
            I go out with people of different countires all the time.
          </div>
          <div class="quote">
            Decisions are very difficult to make, especially for a group of
            people.
          </div>
          <div class="quote">
            I read reviews of the restaurants but they are getting a bit much.
          </div>
        </grid>

        <br />
        <h3>Things people do to educate themselves about food</h3>
        <p>
          Users were
          <strong>curious</strong>
          about different types of food and culture. EATLAS should tap into this
          curiosity and help users enjoy learning and discovering new countries,
          food, and culture.
        </p>
        <grid col="3" col-s="1">
          <div class="quote">
            It is easy to read a food blog than to search information yourself.
          </div>
          <div class="quote">
            I feel dumb when I go to french restaurants and have no idea what is
            on the menu.
          </div>
          <div class="quote">
            I get distracted when I am browsing online.
          </div>
        </grid>
        <br />
        <h3>Things people do to get more sustainable</h3>
        <p>
          A lot of users showed interests in being sustainable and
          <strong>save environment</strong>
          . EATLAS should help these users learn about different ways of
          achieving this.
        </p>
        <grid col="3" col-s="1">
          <div class="quote">
            I hate when restaurants pack plastic spoons when I order food at
            home.
          </div>
          <div class="quote">
            I do not like food wrapped in plastic.
          </div>
          <div class="quote">
            I would like to save money and share cooked food with friends.
          </div>
        </grid>
        <br />
        <br />
        <h3>
          Things people do when they were overwhelmend by the vast amount of
          information available
        </h3>
        <p>
          Last but not the least, users
          <strong>did not know what they did not know</strong>
          . Most of the users picked a few cuisines and countries and learned
          about them. Most of the curiosity came from their conversations with
          friends. EATLAS should help users discover countries beyond their
          reach and make this experience enjoyable.
        </p>
        <grid col="3" col-s="1">
          <div class="quote">
            I just follow my friends and let them pick a cuisine or the
            restaurant.
          </div>
          <div class="quote">
            What are people eating in China these days?
          </div>
          <div class="quote">
            When I travel I don't know what to eat.
          </div>
        </grid>
      </div>
      <br />
      <br />
    </div>
    

    <div class="container-full">
      <h2 class="center">
        The content
      </h2>
      <br />
      <p class="page-content">
        The design of the app is very simple and based on three primary interaction
        to discover. Once the user has discovered the country s/he wants to pursue,
        they can deep dive into it and either read about the country, look into its
        cuisine and recipes or pick a restaurant to either to go or order from. The
        other side of the app is the admin content generators where they will be
        provided with a good editor tool where they can write about the countries,
        add new recipes or promote restaurants.
      </p>
    </div>
    <br />

    <div class="page-content">
      <h3 class="center">
        The design system of EATLAS
      </h3>
      <p>
        While designing this app, I went through various iterations of design and
        testing to make sure the app is both informative as well as pleasing and
        fun. During this phase, I made a design system with grids, typography,
        colors, and components that can be used over and over and overloaded so that
        the content generation is geared properly to make templates that can be
        coded easily. Below is a glimpse of such iterations.
      </p>
      <br />
      <br />
      <carousel :navigation-enabled="true" :per-page="1" class="width700">
        <slide><img src="@/assets/img/projects/eatlas/img/ds1.png" /></slide>
        <slide><img src="@/assets/img/projects/eatlas/img/ds2.png" /></slide>
        <slide><img src="@/assets/img/projects/eatlas/img/ds3.png" /></slide>
        <slide><img src="@/assets/img/projects/eatlas/img/ds4.png" /></slide>
        <slide><img src="@/assets/img/projects/eatlas/img/ds5.png" /></slide>
        <slide><img src="@/assets/img/projects/eatlas/img/ds6.png" /></slide>
        <slide><img src="@/assets/img/projects/eatlas/img/ds7.png" /></slide>
      </carousel>

      <br />
      <br />
      <h3 class="center">
        From wireframes to high fidelity
      </h3>
      <br />
      <TwentyTwenty
        :before="app0"
        :after="app1"
        before-label="Before"
        after-label="After"
      />
      <br />
      <br />

      <TwentyTwenty
        :before="symbol0"
        :after="symbol1"
        before-label="Before"
        after-label="After"
      />

      <br />
      <br />
      <h2 class="center">
        Each component has well defined layout
      </h2>
      <div class="center">
        and is comprised of variour components to facilitate modular development
      </div>
      <br />

      <carousel :navigation-enabled="true" :per-page="1" class="width400">
        <slide><img src="@/assets/img/projects/eatlas/img/component1.png" /></slide>
        <slide><img src="@/assets/img/projects/eatlas/img/component2.png" /></slide>
        <slide><img src="@/assets/img/projects/eatlas/img/component3.png" /></slide>
      </carousel>

      <br />
      <br />
      <h2 class="center">
        Each component is highly customizable
      </h2>
      <br />

      <carousel :navigation-enabled="true" :per-page="1" class="width400">
        <slide><img src="@/assets/img/projects/eatlas/img/override1.png" /></slide>
        <slide><img src="@/assets/img/projects/eatlas/img/override2.png" /></slide>
        <slide><img src="@/assets/img/projects/eatlas/img/override3.png" /></slide>
      </carousel>
    </div>
  </div>
</template>

<script>
import VideoPlayer from '~/components/VideoPlayer.vue';
import TwentyTwenty from '~/components/TwentyTwenty.vue';
import { Carousel, Slide } from 'vue-carousel';
export default {
  name: 'Eatlas',
  head() {
    return {      
      title: 'Eatlas - A system that helps you discover new food, cultures, and countries.',
      meta: [
        {
          name: 'description',
          content:
            'A system that helps you discover new food, cultures, and countries.'
        },
        {
          property: 'og:title',
          content: 'Eatlas - A system that helps you discover new food, cultures, and countries.'
        },
        {
          property: 'og:image',
          content: 'http://ptewari.com/social/eatlas.png'
        },
        {
          property: 'og:description',
          content:
            'A system that helps you discover new food, cultures, and countries.'
        },
        { hid: 'og:url', property: 'og:url', content: 'http://ptewari.com/projects/eatlas' },
        {
          name: 'twitter:title',
          content: 'Eatlas - A system that helps you discover new food, cultures, and countries.'
        },
        {
          name: 'twitter:description',
          content:
            'A system that helps you discover new food, cultures, and countries.'
        },
        {
          name: 'twitter:image',
          content: 'http://ptewari.com/social/eatlas.png'
        }
      ]
    }
  },
  components: {
    VideoPlayer,
    TwentyTwenty,
    Carousel,
    Slide
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
