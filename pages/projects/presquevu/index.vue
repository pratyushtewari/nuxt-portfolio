<template>
  <div>
    <MainHeader ref="header" />

    <div class="page-content">
      <div class="intro">
        <grid class col="2" col-s="1">
          <c class="c1" span="1">
            <h1>
              <img class="pt-project-logo" src="./img/presquevu_logo.svg" />
              PresqueVu
            </h1>
          </c>
          <c class="c2" span="1">
            <div class="pt-project-pic presquevu"></div>
          </c>
          <c class="c3" span="1">
            <p>
              PresqueVu is A context aware reminder application that triggers
              reminders based on your proximity to a designated person.
            </p>
            <p>
              How many times have to though you remembered something but cannot
              recall it. PresqueVu is the
              <i>tip of the tongue</i>
              phenomenon, in which you know that you know something, but can't
              quite recall it.
            </p>
            <br />
          </c>
        </grid>
      </div>

      <div class="pt-content">
        <div class="pt-container-middle">
          <div class="flex">
            <img class="full-width max-1000 center" src="./img/poster.png" />
          </div>
          <br />
          <br />

          <h4 class="center">PROBLEM SPACE</h4>
          <p>
            The market is saturated with time-based reminder application.
            Recently, with applications like Google Now, people can now set
            location-based reminders, which trigger reminders when they arrive
            at specific geographic locations. However, none of these
            applications effectively solve the problem of forgetting what you
            wanted to tell someone when you meet them. PresqueVu aims to fill
            that void, by allowing people to set person-based reminders that are
            triggered when the designated person is in proximity.
          </p>

          <h4 class="center">PROJECT SCOPE</h4>
          <p>
            The total duration of this project was 5 weeks. Over this period we
            engaged in the end to end design process and built a working
            prototype to demonstrate our concept. The project required us to
            take into consideration all aspects of a well rounded mobile service
            ie, viability, business model, usability, privacy and security and
            so on. While not all of these were built into our prototype, we
            presented a project report that covered all of these aspects. Our
            project got special mention for being one of the best 4 projects at
            the final poster show.
          </p>

          <h4 class="center">CONCEPT VALIDATION</h4>
          <p>
            We interviewed 6 people to determine if our concept was viable. The
            most common responses wer that people would feel uncomfortable
            sharing their location with others, and that they saw this as being
            a single feature of a larger productivity application. The most
            common use cases that our interviewees determined was to remind them
            about what they needed to discuss with co-workers in a work setting,
            and to remind them about previous conversations with the same person
            that they wanted to follow up on. We used these responses to guide
            the design of our concept.
          </p>
        </div>
        <div class="container-full">
          <h4 class="center">STORY BOARDING</h4>
          <p class="center">
            We used Storyboarding to define what a typical usage scenario for
            our application would be.
          </p>
          <div class="flex">
            <img
              class="full-width max-1080 center"
              src="./img/storyboard.jpg"
            />
          </div>
        </div>
        <div class="pt-container-middle">
          <h4 class="center">SKETCHES AND PAPER PROTOTYPES</h4>
          <p>
            We sketched out navigation flows, which later translated into paper
            prototypes.
          </p>
          <div class="flex">
            <img class="full-width max-700 center" src="./img/navigation.jpg" />
          </div>

          <h4 class="center">USER TESTING</h4>
          <br />
          <div class="flex">
            <div class="quote center middle">
              <span>
                This is really great. So many times I remember I had to say
                something to the person but cannot remember what.
              </span>
            </div>
          </div>
          <p>
            We tested our paper prototypes using Think Alouds and interviews
            with six participants. Feedback gathered from this research informed
            our final UI design.
          </p>
          <div class="flex">
            <img
              class="full-width max-500 center"
              src="./img/usertesting.png"
            />
          </div>
          <br />
          <br />
          <div class="flex">
            <div class="quote center middle">
              <span>Wow! I'ld use this a lot at my work.</span>
            </div>
          </div>
        </div>
        <br />
        <br />
        <br />
        <div class="container-full">
          <h4 class="center">Initial UI WIREFRAMES</h4>
          <br />
          <br />
          <div class="steps3">
            <span>
              <img class="phone" src="./img/step1.png" />
              <p>Home</p>
            </span>
            <span>
              <img class="phone" src="./img/step2.png" />
              <p>Create</p>
            </span>
            <span>
              <img class="phone" src="./img/step3.png" />
              <p>Finish</p>
            </span>
          </div>
        </div>

        <br />
        <br />
        <br />
        <div class="pt-container-middle">
          <h4 class="center">APPLICATION ARCHITECTURE</h4>
          <p>
            We sketched out the architecture of our application, to make sure it
            was technically viable and determined the essential components that
            would go into our design.
          </p>
          <div class="flex">
            <img class="full-width max-700 center" src="./img/models.jpg" />
          </div>
          <br />
          <br />
          <h4 class="center">PRIVACY AND SECURITY CONCERNS</h4>
          <p>
            We brainstormed various approaches to ensure that our application
            respected the privacy of it's users. We decided to add a feature
            that informs users about reminders that have been set based on her,
            and allows her to accept or reject them. Instead of showing the
            exact location, we decided to only notify users that the people whom
            they have set reminders based on, are less than a 5 minute walk
            away. By adopting the above approaches, we dealt with the privacy
            concerns that had emerged in our concept validation phase. In order
            to ensure that users' information was secure, we propose encrypting
            all location information that was being sent to the server.
          </p>

          <h4 class="center">BUSINESS MODEL</h4>
          <p>
            We propose a Freemium model to generate profit from PresqueVu. Users
            would only be allowed to set a fixed number of reminders for free,
            and would need to buy upgrades to set more reminders.
          </p>

          <h4 class="center">FINAL PROTOTYPE</h4>
          <p>
            The final working prototype was a web application built using
            Express framework for Node.js that used Socket.io for client-server
            communication. We used Google+ login, and Google Maps Distance API
            in our implementation.
          </p>

          <div class="half-half">
            <div>
              <p>
                Login with your Google+ account. You can see your previous
                reminders that you have setup or create a new one. Click on the
                add reminder to create the reminder.
              </p>
            </div>
            <img class="max-400 center" src="./img/final/0AddReminder.jpg" />
          </div>
          <br />
          <br />

          <div class="half-half">
            <div>
              <p>
                To Add a reminder, add the select the name of the person from
                your contact list or enter the email address of that person.
              </p>
            </div>
            <img class="max-400 center" src="./img/final/1AddReminder.jpg" />
          </div>
          <br />
          <br />

          <div class="half-half">
            <div>
              <p>
                Create the reminder by pressing the Add Reminder button. You
                will be shown a waiting screen while your request is being
                processed.
              </p>
            </div>
            <img class="max-400 center" src="./img/final/2Create.JPG" />
          </div>
          <br />
          <br />

          <div class="half-half">
            <div>
              <p>
                The other person is asked for a conformation if this is the
                first time use. You can choose to whitelist the person so that
                this conformation is not asked everytime.
              </p>
            </div>
            <img class="max-400 center" src="./img/final/3Confirm.JPG" />
          </div>
          <br />
          <br />

          <div class="half-half">
            <div>
              <p>
                Once the other person has confirmed, or the system finds that
                you are in their whitelist, then your will get a conformation
                that the reminder is set.
              </p>
            </div>
            <img class="max-400 center" src="./img/final/4Save.JPG" />
          </div>
          <br />
          <br />

          <div class="half-half">
            <div>
              <p>
                Once both party are near each other, you will get a notification
                about the reminder you set.
              </p>
            </div>
            <img class="max-400 center" src="./img/final/6SeeResults.JPG" />
          </div>
          <br />
          <br />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import MainHeader from '~/components/MainHeader';

export default {
  name: 'PresqueVu',
  head() {
    return {
      title:
        'PresqueVu - A context aware reminder application that triggers reminders based on your proximity to a designated person.',
      meta: [
        {
          name: 'description',
          content:
            'A context aware reminder application that triggers reminders based on your proximity to a designated person.'
        },
        {
          property: 'og:title',
          content:
            'PresqueVu - A context aware reminder application that triggers reminders based on your proximity to a designated person.'
        },
        {
          property: 'og:image',
          content: 'https://i.imgur.com/6lhtZiQ.png'
        },
        {
          property: 'og:description',
          content:
            'A context aware reminder application that triggers reminders based on your proximity to a designated person.'
        },
        {
          hid: 'og:url',
          property: 'og:url',
          content: 'http://ptewari.com/projects/presquevu'
        },
        {
          name: 'twitter:title',
          content:
            'PresqueVu - A context aware reminder application that triggers reminders based on your proximity to a designated person.'
        },
        {
          name: 'twitter:description',
          content:
            'A context aware reminder application that triggers reminders based on your proximity to a designated person.'
        },
        {
          name: 'twitter:image',
          content: 'https://i.imgur.com/6lhtZiQ.png'
        }
      ]
    };
  },
  components: {
    MainHeader
  }
};
</script>
