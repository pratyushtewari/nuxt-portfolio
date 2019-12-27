<template>
  <div class="denifitionBox">
    <div class="definition" v-for="x in data" :key="x.title">
      <span class="font-bold">{{ x.title }}</span>&nbsp;{{ x.definition }}
    </div>
  </div>
</template>

<script>
export default {
  name: "DenifitionBox",
  props: ['data']
};
</script>

<style lang="scss" scoped>
.denifitionBox {
  background-color: $footerBackgroundGrey;
  padding: 1rem;
  margin: 1rem;
  border-radius: 4px;
}
.definition:not(:last-child) {
  margin-bottom: 1rem;
}

</style>
