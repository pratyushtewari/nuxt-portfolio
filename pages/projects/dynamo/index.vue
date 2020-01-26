<template>
  <div class="page-content">
    <h1>
      <img class="project-name-logo" src="./img/dynamo_logo.svg" />
      Dynamo
    </h1>
    <div class="pt-content">
      <div class="pt-container-middle">
        <div class="pt-project-intro">
          <div class="pt-project-description">
            <div class="pt-project-summary">
              <p>
                A mobile information service that helps commuters choose the
                optimal mode of transportation for their exercise goal.
              </p>
            </div>
          </div>
          <div class="pt-project-pic dynamo"></div>
        </div>
        <br />
        <br />

        <carousel :navigation-enabled="true" :per-page="1" class="width700">
          <slide><img src="./img/topSlider/Slide01.png" /></slide>
          <slide><img src="./img/topSlider/Slide02.png" /></slide>
          <slide><img src="./img/topSlider/Slide03.png" /></slide>
          <slide><img src="./img/topSlider/Slide04.png" /></slide>
          <slide><img src="./img/topSlider/Slide05.png" /></slide>
          <slide><img src="./img/topSlider/Slide06.png" /></slide>
          <slide><img src="./img/topSlider/Slide07.png" /></slide>
          <slide><img src="./img/topSlider/Slide08.png" /></slide>
          <slide><img src="./img/topSlider/Slide09.png" /></slide>
          <slide><img src="./img/topSlider/Slide10.png" /></slide>
          <slide><img src="./img/topSlider/Slide11.png" /></slide>
          <slide><img src="./img/topSlider/Slide12.png" /></slide>
          <slide><img src="./img/topSlider/Slide13.png" /></slide>
          <slide><img src="./img/topSlider/Slide14.png" /></slide>
          <slide><img src="./img/topSlider/Slide15.png" /></slide>
          <slide><img src="./img/topSlider/4.png" /></slide>
          <slide><img src="./img/topSlider/Slide16.png" /></slide>
        </carousel>

        <h4>CONCEPT</h4>
        <p>
          Dynamo helps commuters choose the optimal mode of transportation for
          their exercise goal.
        </p>
        <h4>PROJECT SCOPE</h4>
        <p>
          The aim of this project was to design an interface for a mobile
          information service, and a service dashboard to help the service
          provider manage the operation of the service. We needed to select a
          target user group, conduct research to identify needs and
          opportunities and design a service to fill them. We also needed to
          identify a potential (fictional) client for this service, and design a
          dashboard to help them collect information and monitor the operation
          of the service. The duration of this project was 6 weeks.
        </p>
        <h4>TARGET USERS</h4>
        <p>
          We selected commuters to be the mobile information seekers for whom we
          designed our service.
        </p>
        <h4>RESEARCH</h4>
        <p>
          We interviewed 6 commuters to find out more about their commuting
          habits. We interviewed a mix of people who had several alternative
          commuting options available to them- cyclists, walkers, people who
          drive and people who take the bus. We found that personal goals and
          time constraints were key deciding factors when people selected their
          mode of transportation for every commuter.
        </p>
        <h4>PERSONA AND SCENARIO</h4>
        <p>
          The first step in the design process was to create a persona and a
          scenario. We built a persona to capture the needs and goals of a user
          of our service. We also created a scenario that described a typical
          use-case for our service. We started with two personas and two
          scenarios, which we refined and merged into one persona and one
          scenario.
        </p>

        <carousel :navigation-enabled="true" :per-page="1" class="width700">
          <slide>
            <img src="./img/bottomSlider/Slide01.png" title="Funky roots" />
          </slide>
          <slide>
            <img
              src="./img/bottomSlider/Slide02.png"
              title="Initial Persona - 2"
            />
          </slide>
          <slide>
            <img
              src="./img/bottomSlider/Slide03.png"
              title="Initial Scenario"
            />
          </slide>
          <slide>
            <img src="./img/bottomSlider/Slide04.png" title="Final Persona" />
          </slide>
          <slide>
            <img src="./img/bottomSlider/Slide05.png" title="Final Scenario" />
          </slide>
        </carousel>

        <br />
        <br />
        <h4>INITIAL DESIGN DIRECTION</h4>
        <p>
          Our first design allowed the commuter to prioritize four goals -
          Eco-Friendliness, Fitness, Cost and Time. When the commuter selected a
          starting point and destination, and the application suggested routes
          based on the set priorities and the distance.
        </p>

        <carousel :navigation-enabled="true" :per-page="1" class="width400">
          <slide><img src="./img/initialDesign/1.jpg" /></slide>
          <slide><img src="./img/initialDesign/2.jpg" /></slide>
          <slide><img src="./img/initialDesign/3.jpg" /></slide>
          <slide><img src="./img/initialDesign/4.jpg" /></slide>
          <slide><img src="./img/initialDesign/5.jpg" /></slide>
          <slide><img src="./img/initialDesign/7.jpg" /></slide>
          <slide><img src="./img/initialDesign/8.png" /></slide>
          <slide><img src="./img/initialDesign/9.png" /></slide>
          <slide><img src="./img/initialDesign/10.png" /></slide>
          <slide><img src="./img/initialDesign/11.png" /></slide>
          <slide><img src="./img/initialDesign/12.png" /></slide>
        </carousel>
        <br />
        <br />
        <h4>FINAL DESIGN DIRECTION</h4>
        <p>
          In the second version of the prototype, we stripped the application of
          any unnecessary features, and focused on one goal, that is, the
          fitness goal. We restricted the application to providing
          recommendations between cycling and walking routes.
        </p>
        <carousel :navigation-enabled="true" :per-page="1" class="width700">
          <slide><img src="./img/finalDesign/1.jpg" /></slide>
          <slide><img src="./img/finalDesign/2.png" /></slide>
          <slide><img src="./img/finalDesign/3.png" /></slide>
          <slide><img src="./img/finalDesign/4.png" /></slide>
          <slide><img src="./img/finalDesign/5.png" /></slide>
          <slide><img src="./img/finalDesign/7.png" /></slide>
          <slide><img src="./img/finalDesign/8.png" /></slide>
          <slide><img src="./img/finalDesign/9.png" /></slide>
          <slide><img src="./img/finalDesign/10.png" /></slide>
          <slide><img src="./img/finalDesign/11.png" /></slide>
        </carousel>
        <br />
        <br />
        <h4>DASHBOARD DESIGN</h4>
        <p>
          We first created a persona for the dashboard user and then determined
          what kind of data would be relevant to him in monitoring the
          functionality of the application. We then determined how we could
          represent this data and designed a dashboard accordingly.
        </p>
        <carousel :navigation-enabled="true" :per-page="1" class="width700">
          <slide><img src="./img/dashboard/1.jpg" /></slide>
          <slide><img src="./img/dashboard/2.png" /></slide>
          <slide><img src="./img/dashboard/3.jpg" /></slide>
          <slide><img src="./img/dashboard/4.png" /></slide>
        </carousel>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Dynamo',
  head() {
    return {      
      title: 'Dynamo - A mobile information service that helps commuters choose the optimal mode of transportation for their exercise goal.',
      meta: [
        {
          name: 'description',
          content:
            'A mobile information service that helps commuters choose the optimal mode of transportation for their exercise goal'
        },
        {
          property: 'og:title',
          content: 'Dynamo - A mobile information service that helps commuters choose the optimal mode of transportation for their exercise goal.'
        },
        {
          property: 'og:image',
          content: 'ptewari.com/social/dynamo.png'
        },
        {
          property: 'og:description',
          content:
            'A mobile information service that helps commuters choose the optimal mode of transportation for their exercise goal'
        },
        { hid: 'og:url', property: 'og:url', content: 'ptewari.com/projects/dynamo' },
        {
          name: 'twitter:title',
          content: 'Dynamo - A mobile information service that helps commuters choose the optimal mode of transportation for their exercise goal.'
        },
        {
          name: 'twitter:description',
          content:
            'A mobile information service that helps commuters choose the optimal mode of transportation for their exercise goal'
        },
        {
          name: 'twitter:image',
          content: 'ptewari.com/social/dynamo.png'
        }
      ]
    }
  }
};
</script>
