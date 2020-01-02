<template>
  <div>
    <h1>Slate</h1>
    <element data="page1">
      <h2>EXECUTIVE SUMMARY</h2>
      <h3>
        This report covers the field research process and findings for SLATE’s
        semester-long Capstone project at Carnegie Mellon University’s
        Human-Computer Interaction Institute.
      </h3>
      <grid col="3" col-s="1">
        <c span="1">
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
        </c>
        <c span="2..." span-s="1">
          <h4>WHO WE ARE</h4>
          <p>
            We are SLATE—a team of two Masters students at Carnegie Mellon
            University’s Human-Computer Interaction Institute, a community
            dedicated to research and education in topics related to computer
            technology and its support of human activity and society. For our
            Capstone project, we were tasked by Vapor, LLC to investigate and
            envision the possibilities for a personal learning companion for
            high school students. We worked closely with two of our peers—Riam
            Chantree and Jamie Crawford—to determine a project scope and conduct
            our field research. Please refer to pages 55 through 57 for more
            information about the contributors to this project.
          </p>
          <h4>PROJECT SCOPE</h4>
          <p>
            Our client came to us with the vision of an elaborate personal
            learning companion built on emerging technologies. To make our work
            more manageable, we needed to specify a scope within this larger,
            more ambitious vision. After considering student needs in areas such
            as scheduling and organization, we decided to focus on
            <b>METACOGNITION</b> and <b>SELF-REGULATED LEARNING</b>. While there
            has been extensive research in other areas of learning and
            education, it became apparent through our literature review and
            expert interviews that metacognition is a relatively unexplored area
            with a high potential for impact. Please refer to pages 4 through 5
            for more detail regarding our area of focus.
          </p>
        </c>
      </grid>
    </element>
  </div>
</template>

<script>
import DefinitionBox from '~/components/DefinitionBox';
export default {
  name: 'Slate',
  components: {
    DefinitionBox
  }
};
</script>
<style lang="scss" scoped>
  h3 {
    color: #ee4023;
  }
  h4 {
    color: #42c8f5;
  }
</style>