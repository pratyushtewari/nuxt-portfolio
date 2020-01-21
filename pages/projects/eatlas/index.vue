<template>
  <div>
    <h1><img class="pt-project-logo" src="./img/eatlas_logo.svg" />Eatlas</h1>

    <grid col="3" col-s="1">
      <c span="2">
        <p>Eatlas helps you discover new food, cultures, and countries.</p>
        <div class="quote">
          <!-- type pausing -->
          <vue-typed-js
            :loop="true"
            :type-speed="60"
            :back-speed="10"
            :strings="quotes"
          >
            <span class="typing"></span>
          </vue-typed-js>
        </div>
        <p>
          Wondering what to eat? Where does a dish come from? What to eat when
          traveling? Check out Eatlas for all your questions.
        </p>
      </c>
      <c span="1"> </c>
    </grid>
  </div>
</template>

<script>
export default {
  name: 'Eatlas',
  data: function() {
    return {
      quotes: [
        '<strong>Hmm ...</strong> ^800 what shall I eat tonight?',
        '<strong>Hey!</strong> ^800 what do you-all want for lunch?',
        '<strong>DUDE!</strong> ^800 just order something.',
        "<strong>Argh!</strong> ^800 why's it taking so long to order?",
        'Where can I buy my ethnic spices?',
        'What is a ^500 <i>golgappa</i>?',
        'What is a ^500 <i>bucatini</i>?',
        'What is a ^500 <i>jambalaya</i>?',
        'What is a ^500 <i>jícama</i>?',
        'What is a ^500 <i>remoulade</i>?',
        'What do Mongolians eat for breakfast?',
        'How do you make soy sauce?',
        'I donno what to eat tonight?',
        'I want something new.',
        "I don't like to try new cuisines"
      ]
    };
  }
};
</script>
<style lang="scss" scoped>
.pt-project-logo {
  width: 70px;
  margin-right: 20px;
}
.quote {
  display: inline-block;
  background-color: getColor(baseBackgroundHighlight);
  padding: 20px;
  position: relative;
  width: 100%;

  &::before {
    content: '';
    width: 30px;
    height: 30px;
    background: url('~@/assets/img/quotes.svg') center no-repeat;
    position: absolute;
    top: -10px;
    left: 7px;
  }
}
</style>
