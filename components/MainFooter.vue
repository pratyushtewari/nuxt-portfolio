<template>
  <footer id="footer">
    <grid col="4" col-s="2" class="footer-container">
      <c span="2" span-s="2" class="footer-summary">
        <div class="footer-logo" />
        <div class="footer-summary-text">
          I am a UX designer with expertise in Human-Computer Interaction and
          computer-science background. I am passionate about making people's
          life easier and delightful through empathy, research and design. I
          believe in bending technology to suit people's habits and lifestyle
          which makes it an easier and faster adoption.
        </div>
      </c>
      <c span="1">
        <h4 class="footer-links-title inline-heading">
          Work
        </h4>
        <ul id="project-links" class="footer-links-list">
          <li>
            <nuxt-link to="/projects/eatlas">
              Eatlas
            </nuxt-link>
          </li>
          <li>
            <nuxt-link to="/projects/chelada">
              Chelada
            </nuxt-link>
          </li>
          <li>
            <nuxt-link to="/projects/presquevu">
              PresqueVu
            </nuxt-link>
          </li>
          <li>
            <nuxt-link to="/projects/dynamo">
              Dynamo
            </nuxt-link>
          </li>
          <li>
            <nuxt-link to="/projects/slate">
              Slate
            </nuxt-link>
          </li>
        </ul>
      </c>
      <c span="1">
        <h4 class="footer-links-title inline-heading">
          Connect
        </h4>
        <ul class="footer-links-list">
          <li>
            <nuxt-link to="/about">
              About
            </nuxt-link>
          </li>
          <li>
            <a title="hi@ptewari.com" href="mailto:hi@ptewari.com">Email</a>
          </li>
          <li>
            <a target="_blank" href="https://twitter.com/uxsual">Twitter</a>
          </li>
          <li>
            <a target="_blank" href="https://linkedin.com/in/pratyushtewari"
              >Linkedin</a
            >
          </li>
          <li>
            <a target="_blank" href="https://github.com/pratyushtewari"
              >Github</a
            >
          </li>
        </ul>
      </c>
    </grid>
    <div class="footer-container">
      <span class="fading-border" />
      <div class="footer-copyright">
        <a
          target="_blank"
          href="https://www.youtube.com/playlist?list=PL9gYFjMb3V297umW9XKuBvnUWYVQExeK-"
        >
          <span>©2019 Pratyush Tewari - made with ❤️on 🌏</span>
        </a>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: "MainFooter"
}
</script>

<style lang="scss" scoped>
footer#footer {
  margin: 50px 0px 0px 0px;

  background: $footerBackgroundGrey;
  color: #939393 !important;

  c {
    padding-top: 36px;
  }

  &.white {
    background: #ffffff;
  }

  a {
    color: inherit;
  }

  a:focus,
  a:hover {
    text-decoration: none;
    color: $baseTextBlueBlack;
    opacity: 1;
  }

  .footer-container {
    // &:first-child {
    //   padding-top: 50px;
    // }
    width: 90%;
    max-width: 768px;
    margin: 0 auto;
    justify-items: center;

    .footer-summary {
      max-width: 360px;
      .footer-logo {
        background-image: url("~@/assets/img/PratyushMonogramLogo.svg");
        width: 100px;
        height: 100px;
        margin: 0 10px 0 0;
        background-repeat: no-repeat;
        background-position: center;
        background-size: contain;
        float: left;
      }
    }
    .footer-links-title {
      color: $baseTextBlueBlack;
    }

    .fading-border {
      margin-top: 36px;
      display: block;
      width: 100%;
      height: 1px;
      background: -webkit-gradient(
        radial,
        50% 50%,
        0,
        50% 50%,
        350,
        from($footerLineGrey),
        to(rgba(255, 255, 255, 0))
      );
    }

    .footer-copyright {
      text-align: center;
      padding: 1.6rem;
      opacity: 0.5;

      &:focus,
      &:hover {
        text-decoration: none;
        opacity: 1;
      }
    }
  }
}
</style>
