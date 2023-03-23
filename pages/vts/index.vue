<template>
  <div>
    <MainHeader ref="header" />
    <iframe
      style="height: 100vh"
      width="100%"
      height="100%"
      src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2FvP7ONjQ3QLlpBz35idAoUO%2FPortfolio%3Fpage-id%3D100%253A3695%26node-id%3D100-4506%26viewport%3D1028%252C1394%252C0.06%26scaling%3Dscale-down%26starting-point-node-id%3D100%253A4506"
      allowfullscreen
    ></iframe>
  </div>
</template>

<script>
import MainHeader from '~/components/MainHeader';

export default {
  name: 'VTSCaseStudy',
  components: {
    MainHeader
  }
};
</script>
