<template>
  <div class="page-content">
    <h1>
      <img class="project-name-logo" src="./img/chelada_logo.png" />
      Chelada
    </h1>
    <main class="pt-content">
      <div class="pt-container-middle">
        <div class="pt-project-intro">
          <div class="pt-project-description">
            <div class="pt-project-summary">
              <p>
                A system by which users, on mobile devices, are able to
                subscribe to and interact with mobile notification based data
                feeds provided by an individual or an institution.
              </p>
            </div>
          </div>
          <div class="pt-project-pic chelada"></div>
        </div>

        <p>
          <img
            style="width:100%; display:block;"
            src="./img/CheladaDesignSpec1.png"
          />
        </p>
        <p><img style="width:100%" src="./img/CheladaDesignSpec3.png" /></p>
        <p><img style="width:100%" src="./img/CheladaDesignSpec5.png" /></p>
        <p><img style="width:100%" src="./img/CheladaDesignSpec6.png" /></p>
        <p><img style="width:100%" src="./img/CheladaDesignSpec7.png" /></p>
        <p><img style="width:100%" src="./img/CheladaDesignSpec9.png" /></p>
        <p><img style="width:100%" src="./img/CheladaDesignSpec10.png" /></p>
        <p><img style="width:100%" src="./img/CheladaDesignSpec11.png" /></p>
        <p><img style="width:100%" src="./img/CheladaDesignSpec12.png" /></p>
        <p><img style="width:100%" src="./img/CheladaDesignSpec13.png" /></p>
        <p><img style="width:100%" src="./img/CheladaDesignSpec15.png" /></p>
        <p><img style="width:100%" src="./img/CheladaDesignSpec16.png" /></p>
        <p><img style="width:100%" src="./img/CheladaDesignSpec17.png" /></p>
        <p><img style="width:100%" src="./img/CheladaDesignSpec18.png" /></p>
        <p><img style="width:100%" src="./img/CheladaDesignSpec19.png" /></p>
        <p><img style="width:100%" src="./img/CheladaDesignSpec20.png" /></p>
        <p><img style="width:100%" src="./img/CheladaDesignSpec21.png" /></p>
        <p><img style="width:100%" src="./img/CheladaDesignSpec22.png" /></p>
        <p><img style="width:100%" src="./img/CheladaDesignSpec23.png" /></p>
        <p><img style="width:100%" src="./img/CheladaDesignSpec25.png" /></p>
        <p><img style="width:100%" src="./img/CheladaDesignSpec26.png" /></p>
        <p><img style="width:100%" src="./img/CheladaDesignSpec27.png" /></p>
        <p><img style="width:100%" src="./img/CheladaDesignSpec28.png" /></p>
        <p><img style="width:100%" src="./img/CheladaDesignSpec29.png" /></p>
        <p><img style="width:100%" src="./img/CheladaDesignSpec30.png" /></p>
        <p><img style="width:100%" src="./img/CheladaDesignSpec31.png" /></p>
        <p><img style="width:100%" src="./img/CheladaDesignSpec32.png" /></p>
      </div>

      <div class="container-full bottom-border">
        <h3 class="center">
          Check out other projects
        </h3>
        <br />
        <div class="next-projects">
          <div class="flex" onClick="parent.location='../eatlas/index.html';">
            <div>
              <div class="project-name">
                Eatlas
              </div>
              <div>
                Wondering what to eat? Where does a dish come from? What to eat
                when traveling? Check out Eatlas for all your questions.
              </div>
            </div>
          </div>

          <div
            class="flex"
            onClick="parent.location='../presquevu/index.html';"
          >
            <div>
              <div class="project-name">
                PresqueVu
              </div>
              <div>
                Ever wished that you could remember what you needed to tell a
                person when you met them? PresqueVu can help you with that.
              </div>
            </div>
          </div>
        </div>
      </div>

      <footer id="footer" class="white"></footer>
    </main>
  </div>
</template>

<script>
export default {
  name: 'Chelada',
  head() {
    return {      
      title: 'Chelada - A system by which users, on mobile devices, are able to subscribe to and interact with mobile notification based data feeds provided by an individual or an institution.',
      meta: [
        {
          name: 'description',
          content:
            'A system by which users, on mobile devices, are able to subscribe to and interact with mobile notification based data feeds provided by an individual or an institution.'
        },
        {
          property: 'og:title',
          content: 'Chelada - A system by which users, on mobile devices, are able to subscribe to and interact with mobile notification based data feeds provided by an individual or an institution.'
        },
        {
          property: 'og:image',
          content: 'ptewari.com/social/chelada.png'
        },
        {
          property: 'og:description',
          content:
            'A system by which users, on mobile devices, are able to subscribe to and interact with mobile notification based data feeds provided by an individual or an institution.'
        },
        { hid: 'og:url', property: 'og:url', content: 'ptewari.com/projects/chelada' },
        {
          name: 'twitter:title',
          content: 'Chelada - A system by which users, on mobile devices, are able to subscribe to and interact with mobile notification based data feeds provided by an individual or an institution.'
        },
        {
          name: 'twitter:description',
          content:
            'A system by which users, on mobile devices, are able to subscribe to and interact with mobile notification based data feeds provided by an individual or an institution.'
        },
        {
          name: 'twitter:image',
          content: 'ptewari.com/social/chelada.png'
        }
      ]
    }
  },
  components: {}
};
</script>
<style lang="scss" scoped>
img:not(.project-name-logo) {
  background-color: $baseWhite;
}
</style>
