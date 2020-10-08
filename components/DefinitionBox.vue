<template>
  <div class="denifitionBox">
    <div v-for="x in data" :key="x.title" class="definition">
      <span class="inline-heading">{{ x.title }}</span>
      &nbsp;<span v-html="x.definition"></span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DenifitionBox',
  props: ['data']
};
</script>

<style lang="scss" scoped>
.denifitionBox {
  background-color: getColor(baseBackgroundHighlight);
  padding: 1rem;
  border-radius: 4px;
}
.definition:not(:last-child) {
  margin-bottom: 1rem;
}
@media only screen and (max-width: 768px) {
  .denifitionBox {
    position: initial;
    top: initial;
  }
}
</style>
