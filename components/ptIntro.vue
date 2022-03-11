<template>
  <section id="pt-intro">
    <div id="pt-intro-background" ref="mainImage" v-scroll="handleScroll">
      <div id="pt-intro-tagline">
        <h1>Hey!</h1>
        <h2>You found me.</h2>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'PtIntro',
  methods: {
    handleScroll: function() {
      let introSection = $('#pt-intro-background');
      let introSectionHeight = introSection.height();
      //change scaleSpeed if you want to change the speed of the scale effect
      let scaleSpeed = 0.2;
      //change opacitySpeed if you want to change the speed of opacity reduction effect
      let opacitySpeed = 1;
      let scrollPercentage = (window.scrollY / introSectionHeight).toFixed(5);
      let scaleValue = 1 - scrollPercentage * scaleSpeed * 1.05;

      $(this.$refs.mainImage).css({
        transform:
          'scale(' +
          scaleValue +
          ') translateY(' +
          scrollPercentage * 400 +
          'px)',
        '-moz-transform':
          'scale(' +
          scaleValue +
          ') translateY(' +
          scrollPercentage * 400 +
          'px)',
        '-webkit-transform':
          'scale(' +
          scaleValue +
          ') translateY(' +
          scrollPercentage * 400 +
          'px)',
        '-ms-transform':
          'scale(' +
          scaleValue +
          ') translateY(' +
          scrollPercentage * 400 +
          'px)',
        '-o-transform':
          'scale(' +
          scaleValue +
          ') translateY(' +
          scrollPercentage * 400 +
          'px)',
        opacity: 1 - scrollPercentage / 2
      });
    }
  }
};
</script>

<style lang="scss" scoped>
#pt-intro {
  overflow: hidden;
  position: relative;
  pointer-events: none;
  height: 300px;
  margin-top: 0;
  width: 100%;
  text-align: center;
  background-color: #d0bfae;
  background: #e4e2ed;
  background: -moz-linear-gradient(left, #e4e2ed 30%, #d1c0b0 72%);
  background: -webkit-linear-gradient(left, #e4e2ed 30%, #d1c0b0 72%);
  background: linear-gradient(to right, #e4e2ed 30%, #d1c0b0 72%);
  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#e4e2ed', endColorstr='#d1c0b0',GradientType=1 );

  #pt-intro-background {
    height: 100%;
    width: 100%;
    max-width: 1080px;
    margin: auto;
    background: url('~@/assets/img/pratyush_tewari_intro_pic.jpg') no-repeat
      center center;
    background-size: cover;
    // box-shadow: 0 0 30px rgba(0, 0, 0, 0.5);
  }

  #pt-intro-tagline {
    text-align: left;
    position: absolute;
    width: 90%;
    max-width: 768px;
    left: 50%;
    bottom: 0;
    right: auto;
    -webkit-transform: translateX(-50%) translateY(-50%);
    -moz-transform: translateX(-50%) translateY(-50%);
    -ms-transform: translateX(-50%) translateY(-50%);
    -o-transform: translateX(-50%) translateY(-50%);
    transform: translateX(-50%) translateY(-50%);
  }

  h1 {
    color: $baseTextBlueBlack;
  }

  h2 {
    color: $baseTextBlueBlack;
  }
}

@media only screen and (min-width: 1170px) {
  #pt-intro {
    left: 0;
    width: 100%;
    margin-top: 0;

    #pt-intro-background {
      /* origin for the scale transformation */
      -webkit-transform-origin: 50% 100%;
      -moz-transform-origin: 50% 100%;
      -ms-transform-origin: 50% 100%;
      -o-transform-origin: 50% 100%;
      transform-origin: 50% 100%;
      -webkit-backface-visibility: hidden;
      backface-visibility: hidden;
    }
  }
}
</style>
