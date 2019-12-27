<template>
  <footer id="footer">
    <div class="footer-container">
      <div class="footer-summary">
        <div class="footer-logo"></div>
        <div class="footer-summary-text">I am a UX designer with expertise in Human-Computer Interaction and computer-science background. I am passionate about making people's life easier and delightful through empathy, research and design. I believe in bending technology to suit people's habits and lifestyle which makes it an easier and faster adoption.</div>
      </div>
      <div class="footer-links">
        <div class="footer-links-column">
          <h4 class="footer-links-title font-bold">Work</h4>
          <ul
            id="project-links"
            class="footer-links-list"
          >
            <li>
              <router-link to="/projects/eatlas">Eatlas</router-link>
            </li>
            <li>
              <router-link to="/projects/chelada">Chelada</router-link>
            </li>
            <li>
              <router-link to="/projects/presquevu">PresqueVu</router-link>
            </li>
            <li>
              <router-link to="/projects/dynamo">Dynamo</router-link>
            </li>
            <li>
              <router-link to="/projects/slate">Slate</router-link>
            </li>
          </ul>
        </div>
        <div class="footer-links-column">
          <h4 class="footer-links-title font-bold">Connect</h4>
          <ul class="footer-links-list">
            <li>
              <router-link to="/about">About</router-link>
            </li>
            <li>
              <a
                title="hi@ptewari.com"
                href="mailto:hi@ptewari.com"
              >Email</a>
            </li>
            <li>
              <a
                target="_blank"
                href="https://twitter.com/uxsual"
              >Twitter</a>
            </li>
            <li>
              <a
                target="_blank"
                href="https://linkedin.com/in/pratyushtewari"
              >Linkedin</a>
            </li>
            <li>
              <a
                target="_blank"
                href="https://github.com/pratyushtewari"
              >Github</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div class="footer-container">
      <span class="fading-border"></span>
      <div class="footer-copyright">
        <a
          target="_blank"
          href="https://www.youtube.com/playlist?list=PL9gYFjMb3V297umW9XKuBvnUWYVQExeK-"
        >
          <p>©2019 Pratyush Tewari - made with ❤️on 🌏</p>
        </a>
      </div>
    </div>
  </footer>
</template>

<script>
  export default {
    name: "MainFooter"
  };
</script>

<style lang="scss" scoped>
#footer {
    margin: 50px 0px 0px 0px;
    padding: 70px 0 0;
    background: $footerBackgroundGrey;
    color: #939393;
    
    &.white {
        background: #FFFFFF;
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
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: center;
        align-items: stretch;
        width: 90%;
        max-width: 768px;
        margin: 0 auto;

        .footer-summary {
            flex-grow: 1;
            flex-basis: 250px;
            padding: 0 20px 20px;
            max-width: 360px;

            .footer-logo {
                background-image: url('~@/assets/img/PratyushMonogramLogo.svg');
                width: 100px;
                height: 100px;
                margin: 0 10px 0 0;
                background-repeat: no-repeat;
                background-position: center;
                background-size: contain;
                float: left;
            }

            // .footer-summary-text {}
        }

        .footer-links {
            flex-grow: 1;
            display: flex;
            flex-direction: row;
            flex-wrap: wrap;
            justify-content: space-evenly;
            align-items: stretch;
            flex-basis: 300px;
            padding-bottom: 30px;

            .footer-links-column {
                padding: 0 10px;

                .footer-links-title {
                  color: $baseTextBlueBlack;

                }
            }
        }

        .fading-border {
            display: block;
            width: 100%;
            height: 1px;
            background: -webkit-gradient(radial, 50% 50%, 0, 50% 50%, 350, from($footerLineGrey), to(rgba(255,255,255,0)));
        }

        .footer-copyright {
            p {
                font-size: 1.4rem;
                opacity: 0.5;
                color: $baseTextBlueBlack;
            }

            p:focus,
            p:hover {
                text-decoration: none;
                opacity: 1;
            }
        }
    }
}
</style>
