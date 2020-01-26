<template>
  <div class="page-content">
    <!-- <div v-if="error.statusCode === 404"></div> -->
    <br />
    <br />
    <h1>Womp Womp!</h1>
    <br />
    <br />
    <div class="center">
      <h2>There is nothing here!</h2>
      <img
        src="@/assets/img/doggy-searching.gif"
        alt="Doggy Searching Image"
        style="width: inherit;"
      />
      <p>
        May I suggest going to my
        <nuxt-link to="/">home page</nuxt-link>
        .
      </p>
    </div>
  </div>
</template>

<script>
export default {
  props: ['error']
};
</script>
