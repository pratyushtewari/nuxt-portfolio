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
          I love building things, both physical and digital. I am a Design Technologist: a software engineer turned interaction designer. I enjoy combining my obsession with technology and human centered design to make people’s lives easier and fun. I can translate design to coders and code to designers, and enjoy partnering with both to build beautiful things. Over the last 10 years, I have helped startups and large corporations build products that delight customers and systems that help good design permeate organizations.
        </p>
        <br />
        <p>
          Currently, I lead the UX design and development of a new design system at JP Morgan and Chase. I am responsible for creating services, tools and processes that fuel speed and accuracy of both design and engineering for delivering new patterns and components.
          <br />
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
          content: 'https://i.imgur.com/gjZ2hk0.png'
        },
        { hid: 'og:url', property: 'og:url', content: 'http://ptewari.com/about' },
        {
          name: 'twitter:image',
          content: 'https://i.imgur.com/gjZ2hk0.png'
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
