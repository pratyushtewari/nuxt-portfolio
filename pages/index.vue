<template>
  <div>
    <ProjectIntro name="Eatlas" description="Wondering what to eat? Where does a dish come from? What to eat when traveling? Check out Eatlas for all your questions."></ProjectIntro>
    <ProjectIntro name="Chelada" description="A system by which users, on mobile devices, are able to subscribe to and interact with mobile notification based data feeds provided by an individual or an institution."></ProjectIntro>
    <ProjectIntro name="PresqueVu" description="Ever wished that you could remember what you needed to tell a person when you met them? PresqueVu can help you with that."></ProjectIntro>
    <ProjectIntro name="Dynamo" description="A mobile information service that helps commuters choose the optimal mode of transportation for their exercise goal."></ProjectIntro>
    <ProjectIntro name="Slate" description="A personal learning companion that inspires curiosity and guides students in their pursuit of learning."></ProjectIntro>
  </div>
</template>

<script>
import ProjectIntro from "~/components/ProjectInto";
export default {
  name: 'Home',
  components: {
    ProjectIntro,
  },
}
</script>

