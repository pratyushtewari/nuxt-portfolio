<template>
  <div class="page">
    <h1>Slate</h1>
    <DefinitionBox :data="[{title: 'METACOGNITION', definition: ' is the cognizance and knowledge of one’s own thinking and thinking processes.'},{title: 'SELF-REGULATED LEARNING', definition: ' is a goal-oriented learning process driven by motivation and metacognitive processes.'}]"></DefinitionBox>
  </div>
</template>

<script>
import DefinitionBox from "~/components/DefinitionBox";
export default {
  name: 'Slate',
  components: {
    DefinitionBox
  },
}
</script>

