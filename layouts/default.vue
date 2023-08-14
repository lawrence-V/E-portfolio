<template>
  <v-app dark v-gsap.mouseFollower>
    <Navbar />

    <v-main>
      <Nuxt />
    </v-main>
    <!-- <Footer /> -->
  </v-app>
</template>

<script>
export default {
  name: "DefaultLayout",
  data() {
    return {
      clipped: false,
      drawer: false,
      fixed: false,
      items: [
        { title: "About", icon: "mdi-home-city", target: "#about" },
        { title: "Experience", icon: "mdi-account", target: "#experience" },
        { title: "Work", icon: "mdi-account-group-outline", target: "#work" },
        {
          title: "Contact",
          icon: "mdi-account-group-outline",
          target: "#contact",
        },
      ],
      miniVariant: false,
      right: true,
      rightDrawer: false,
      title: "Vuetify.js",
    };
  },
};
</script>

<style>
.social-links {
  writing-mode: vertical-rl;
  text-orientation: mixed;
  width: 45px;
  height: 75vh;
  display: block;
  position: fixed;
  right: 16px;
  bottom: 0px;
  padding-right: 16px;
  text-align: center;
}

.theme-toggle {
  transform: rotate(90deg);
  width: 80px;
  height: 150px;
  position: fixed;
  display: block;
  bottom: 0px;
  left: 0px;
}

.nav-links div {
  margin-left: 16px;
  cursor: pointer;
}
.nav-links span {
  color: rgb(15, 167, 46);
  font-weight: bold;
}
.nav-links div:hover {
  text-decoration: underline;
}
/* Enter and leave animations can use different */
/* durations and timing functions.*/
.slide-fade-enter-active {
  transition: all 0.8s ease;
}
.slide-fade-leave-active {
  transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
}
.slide-fade-enter, .slide-fade-leave-to
/* .slide-fade-leave-active below version 2.1.8 */ {
  transform: translateX(10px);
  opacity: 0;
}
</style>
