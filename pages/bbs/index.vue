<template>
  <div>
    <MainHeader ref="header" />
    <div style="margin: auto; width: 80%">
      <h1>
        <img
          class="project-name-logo"
          src="~/assets/img/projects/bbs/BBOS_logo_full.svg"
        />
        Blue Book Services
      </h1>
      <h2>Plateaued growth!</h2>
      <div class="page" data="page1">
        <h3>
          In an ambitious endeavor to revitalize the user experience (UX) and
          technological landscape, I am spearheading a comprehensive upgrade for
          a 120-year-old company. The existing UX, marred by years
          of outdated design and tech stack has hindered seamless integration of
          new business ideas and has blocked company growth.
        </h3>

        <h3>
          Recognizing the imperative for a modern and user-friendly interface in
          a today's world and the need to preserve traditional values of the produce industry, I am embarking on a
          transformative journey to not only enhance the visual appeal but also
          streamline the overall user journey. This strategic initiative aims to
          breathe new life into the company's digital presence, ensuring a more
          intuitive, efficient, and aesthetically pleasing experience for both
          existing and prospective users.
        </h3>
        <br />
      </div>

      <br />
      <h2>The next chapter.</h2>
      <h3>
        As Head of UX, I undertook a multifaceted approach to enhance the
        overall user experience and modernize the technological landscape. Key
        responsibilities included conducting a thorough assessment of the
        existing UX and the tech stack, identifying pain points of the
        customers, balancing between the need to change vs keeping it famillar,
        and formulating a strategic roadmap for improvement.
      </h3>
      <br />
      <br />
      <h3>Before / After</h3>
      <TwentyTwenty
        :before="BBOSold"
        :after="BBOSnew"
        before-label="Before"
        after-label="After"
      />
      <br />
      <br />
      <h3>
        Due to a lot of technological constraint, upgrading a 20 year old tech
        stack was challenging. Embarking on a completely new tech stack from
        scratch was the only option use mordern React or Vue UI frameworks.
        Although very tempting, I decided to continue with the existing tech
        stack due to resource constraint and time to market. This was
        challenging from the development point of view but the I was glad that
        the compromise was not sub-par.
      </h3>
      <h3>
        Check out the prototype I made using the vanila js and css with help of
        tailwind, bootstrap & postcss.
      </h3>
    </div>
    <div style="margin: auto; width: 80%; height: 100vh">
      <h2>Prototype</h2>
      <iframe
        src="/new/index.html"
        title="description"
        height="80%"
        width="100%"
        style="border-radius: 8px; overflow: hidden"
      ></iframe>

      <p>
        Please get in touch with me to know more about how I got to the above
        version.
      </p>
      <br />
      <br />
    </div>
  </div>
</template>

<script>
import MainHeader from '~/components/MainHeader';
import TwentyTwenty from '~/components/TwentyTwenty.vue';

export default {
  name: 'BBOSCaseStudy',
  components: {
    MainHeader,
    TwentyTwenty
  },
  data: function () {
    return {
      BBOSold: require('@/assets/img/projects/bbs/BBOSold.png'),
      BBOSnew: require('@/assets/img/projects/bbs/BBOSnew.png')
    };
  }
};
</script>
