<template>
  <div class="container">
    <div v-if="error.statusCode === 404">    
    </div>
    <div v-else>
    </div>
    <grid col="1">
      <c>
        <h1>Womp Womp!</h1>
        <div class="center">
        <h2>There is nothing here!</h2>
        <img src="@/assets/img/doggy-searching.gif" alt="Doggy Searching Image" style="width: inherit;">
        <p>May I suggest going to my <nuxt-link to="/">home page</nuxt-link>.</p>
        </div>
      </c>
    </grid>
  </div>
</template>

<script>
export default {
  props: ['error']
};
</script>
<style scoped>

</style>