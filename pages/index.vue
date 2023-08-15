<template>
  <div>
    <Header ref="header" />
    <About ref="about" />
    <TechStack ref="techStack" />
    <PersonalProject ref="personalProject" />
    <ContactMe />
    <Footer />
  </div>
</template>

<script>
import Header from "~/components/Header.vue";
import About from "~/components/About.vue";
import TechStack from "~/components/TechStack.vue";
import PersonalProject from "~/components/PersonalProject.vue";
import ContactMe from "~/components/ContactMe.vue";
import Footer from "~/components/Footer.vue";

export default {
  components: {
    Header,
    About,
    TechStack,
    PersonalProject,
    ContactMe,
    Footer,
  },
};
</script>


<style>
</style>