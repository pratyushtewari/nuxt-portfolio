<template>
  <div>
    <h1>PresqueVu</h1>
    <DefinitionBox
      :data="[
        {
          title: 'METACOGNITION',
          definition:
            ' is the cognizance and knowledge of one’s own thinking and thinking processes.'
        },
        {
          title: 'SELF-REGULATED LEARNING',
          definition:
            ' is a goal-oriented learning process driven by motivation and metacognitive processes.'
        }
      ]"
    />
  </div>
</template>

<script>
import DefinitionBox from "~/components/DefinitionBox"
export default {
  name: "PresqueVu",
  components: {
    DefinitionBox
  }
}
</script>
