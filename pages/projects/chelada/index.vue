<template>
  <div>
    <MainHeader ref="header" />
    <div class="page-content">
      <div class="intro">
        <grid class col="2" col-s="1">
          <c class="c1" span="1">
            <h1>
              <img
                class="pt-project-logo project-name-logo"
                src="./img/chelada_logo.png"
              />
              Chelada
            </h1>
          </c>
          <c class="c2" span="1">
            <div class="pt-project-pic chelada"></div>
          </c>
          <c class="c3" span="1">
            <p>
              A system by which users, on mobile devices, are able to subscribe
              to and interact with mobile notification based data feeds provided
              by an individual or an institution.
            </p>
            <br />
          </c>
        </grid>
      </div>

      <div class="pt-content">
        <div class="pt-container-middle">
          <p>
            <img
              style="width: 100%; display: block"
              src="./img/CheladaDesignSpec1.png"
            />
          </p>
          <p><img style="width: 100%" src="./img/CheladaDesignSpec3.png" /></p>
          <p><img style="width: 100%" src="./img/CheladaDesignSpec5.png" /></p>
          <p><img style="width: 100%" src="./img/CheladaDesignSpec6.png" /></p>
          <p><img style="width: 100%" src="./img/CheladaDesignSpec7.png" /></p>
          <p><img style="width: 100%" src="./img/CheladaDesignSpec9.png" /></p>
          <p><img style="width: 100%" src="./img/CheladaDesignSpec10.png" /></p>
          <p><img style="width: 100%" src="./img/CheladaDesignSpec11.png" /></p>
          <p><img style="width: 100%" src="./img/CheladaDesignSpec12.png" /></p>
          <p><img style="width: 100%" src="./img/CheladaDesignSpec13.png" /></p>
          <p><img style="width: 100%" src="./img/CheladaDesignSpec15.png" /></p>
          <p><img style="width: 100%" src="./img/CheladaDesignSpec16.png" /></p>
          <p><img style="width: 100%" src="./img/CheladaDesignSpec17.png" /></p>
          <p><img style="width: 100%" src="./img/CheladaDesignSpec18.png" /></p>
          <p><img style="width: 100%" src="./img/CheladaDesignSpec19.png" /></p>
          <p><img style="width: 100%" src="./img/CheladaDesignSpec20.png" /></p>
          <p><img style="width: 100%" src="./img/CheladaDesignSpec21.png" /></p>
          <p><img style="width: 100%" src="./img/CheladaDesignSpec22.png" /></p>
          <p><img style="width: 100%" src="./img/CheladaDesignSpec23.png" /></p>
          <p><img style="width: 100%" src="./img/CheladaDesignSpec25.png" /></p>
          <p><img style="width: 100%" src="./img/CheladaDesignSpec26.png" /></p>
          <p><img style="width: 100%" src="./img/CheladaDesignSpec27.png" /></p>
          <p><img style="width: 100%" src="./img/CheladaDesignSpec28.png" /></p>
          <p><img style="width: 100%" src="./img/CheladaDesignSpec29.png" /></p>
          <p><img style="width: 100%" src="./img/CheladaDesignSpec30.png" /></p>
          <p><img style="width: 100%" src="./img/CheladaDesignSpec31.png" /></p>
          <p><img style="width: 100%" src="./img/CheladaDesignSpec32.png" /></p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import MainHeader from '~/components/MainHeader';
export default {
  name: 'Chelada',
  head() {
    return {
      title:
        'Chelada - A system by which users, on mobile devices, are able to subscribe to and interact with mobile notification based data feeds provided by an individual or an institution.',
      meta: [
        {
          name: 'description',
          content:
            'A system by which users, on mobile devices, are able to subscribe to and interact with mobile notification based data feeds provided by an individual or an institution.'
        },
        {
          property: 'og:title',
          content:
            'Chelada - A system by which users, on mobile devices, are able to subscribe to and interact with mobile notification based data feeds provided by an individual or an institution.'
        },
        {
          property: 'og:image',
          content: 'https://i.imgur.com/n6mwn8x.png'
        },
        {
          property: 'og:description',
          content:
            'A system by which users, on mobile devices, are able to subscribe to and interact with mobile notification based data feeds provided by an individual or an institution.'
        },
        {
          hid: 'og:url',
          property: 'og:url',
          content: 'http://ptewari.com/projects/chelada'
        },
        {
          name: 'twitter:title',
          content:
            'Chelada - A system by which users, on mobile devices, are able to subscribe to and interact with mobile notification based data feeds provided by an individual or an institution.'
        },
        {
          name: 'twitter:description',
          content:
            'A system by which users, on mobile devices, are able to subscribe to and interact with mobile notification based data feeds provided by an individual or an institution.'
        },
        {
          name: 'twitter:image',
          content: 'https://i.imgur.com/n6mwn8x.png'
        }
      ]
    };
  },
  components: {
    MainHeader
  }
};
</script>
<style lang="scss" scoped>
img:not(.project-name-logo) {
  background-color: $baseWhite;
}
</style>
