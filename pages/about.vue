<template>
  <div class="page-content">
    <h2>About Me</h2>
    <br />
    <grid col="3" col-s="1">
      <c class="middle" span="1">
        <img
          src="@/assets/img/pratyush_tewari_profile.png"
          style="width:150px; display: block;"
        />
        <h3>Pratyush Tewari</h3>
      </c>
      <c span="2">
        <p>
          <strong>
            Hi there! I’m a Design Technologist based out of New York.
          </strong>
        </p>
        <br />
        <p>
          I like analyzing and solving users' problems and tasks through design
          and development. I am a strong believer in users' empathy and always
          try to make the experiences natural, fun and easy.
        </p>
        <br />
        <p>
          Over the past 10 years or so, I've worked in various industries like
          FinTech, Education, Unified Communications, and Design Systems, to
          name a few. I've worked as a UX Designer, Software Engineer, System
          Architect, and client liaison in these settings. Working in various
          disciplines is a major motivation for me as it helps me understand the
          users but also, keeps me in check of my solution's scope. I've led
          many teams with various levels of experience in Design and Engineering
          and I love working with both high levels of experience and young
          people as there is to learn and teach from both of them.
          <br />
        </p>
        <br />
        <p>
          I am always looking for providing delightful experiences that enhance
          the user's life and make them more efficient and fun.
        </p>
        <br />
        <p>Interested in learning more?</p>
        <div class="btngroup">
          <a
            class="btn"
            target="_blank"
            href="downloads/Pratyush-Tewari-Resume.pdf"
          >
            <span class="imagebtn pdf"></span>
            Resume
          </a>

          <a class="btn" target="_blank" href="downloads/Pratyush_Tewari.vcf">
            <span class="imagebtn contact"></span>
            Contact
          </a>

          <a class="btn" title="hi@ptewari.com" href="mailto:hi@ptewari.com">
            <span class="imagebtn email"></span>
            Email
          </a>

          <a class="btn" target="_blank" href="https://twitter.com/uxsual">
            <span class="imagebtn twitter"></span>
            Twitter
          </a>

          <a
            class="btn"
            target="_blank"
            href="https://linkedin.com/in/pratyushtewari"
          >
            <span class="imagebtn linkedin"></span>
            Linkedin
          </a>

          <a
            class="btn"
            target="_blank"
            href="https://github.com/pratyushtewari"
          >
            <span class="imagebtn github"></span>
            Github
          </a>
        </div>

        <br />
        <br />
      </c>
    </grid>
  </div>
</template>
<script>
export default {
  name: 'About',
  head() {
    return {
      meta: [
        {
          property: 'og:image',
          content: 'http://ptewari.com/social/about.png'
        },
        { hid: 'og:url', property: 'og:url', content: 'http://ptewari.com/about' },
        {
          name: 'twitter:image',
          content: 'http://ptewari.com/social/about.png'
        }
      ]
    }
  }
};
</script>
<style lang="scss" scoped>
.middle {
  justify-self: center;
  align-self: start;
}
.btngroup {
  margin-top: 8px;
  display: flex;
  flex-wrap: wrap;
}
.btn {
  display: flex;
  box-shadow: 0 0 1px 0 rgba(0, 0, 0, 0.5);
  border-radius: 2px;
  background-color: getColor(baseBackgroundHighlight);
  padding: 2px 8px 2px 4px;
  border-radius: 2px;
  margin-right: 8px;
  margin-top: 8px;
  color: getColor(baseText);
  &:hover {
    background-color: getColor(baseBackgrounddarker);
  }
  &:active {
    background-color: getColor(baseBackgroundHighlight);
    box-shadow: none;
  }
}
.imagebtn {
  width: 24px;
  height: 24px;
  background-size: contain;
  margin-right: 4px;
  display: inline-block;
  background-repeat: no-repeat;
  background-position: center;
}
.contact {
  background-image: url('~@/assets/img/share/contact_onlight.svg');
}
.email {
  background-image: url('~@/assets/img/share/email_onlight.svg');
}
.pdf {
  background-image: url('~@/assets/img/share/pdf_onlight.svg');
}
.github {
  background-image: url('~@/assets/img/share/github_onlight.svg');
}
.linkedin {
  background-image: url('~@/assets/img/share/linkedin_onlight.svg');
}
.twitter {
  background-image: url('~@/assets/img/share/twitter_onlight.svg');
}
@media (prefers-color-scheme: dark) {
  .pdf {
    background-image: url('~@/assets/img/share/pdf_ondark.svg');
  }
  .contact {
    background-image: url('~@/assets/img/share/contact_ondark.svg');
  }
  .email {
    background-image: url('~@/assets/img/share/email_ondark.svg');
  }
  .github {
    background-image: url('~@/assets/img/share/github_ondark.svg');
  }
  .linkedin {
    background-image: url('~@/assets/img/share/linkedin_ondark.svg');
  }
  .twitter {
    background-image: url('~@/assets/img/share/twitter_ondark.svg');
  }
}
</style>
