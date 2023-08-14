<template>
  <v-container class="home-title">
    <v-row no-gutters>
      <v-col cols="12" lg="6" class="pa-5 content-About">
        <h1 class="font-weight-black">Who am I?</h1>
        <p class="text-justify">
          I am a recent graduate of Mariano Marcos State University, holding a
          Bachelor of Science degree in Information Technology. As a self-taught
          developer, I have passionately honed my skills to complement my formal
          education. My e-portfolio showcases my passion for technology and my
          commitment to continuous learning. I am eager to leverage my skills as
          a developer to contribute innovative projects and the tech industry.
          Thank you for visiting my e-portfolio!
        </p>

        <v-row>
          <!-- First column -->
          <v-col
            cols="12"
            sm="6"
            md="6"
            lg="6
          "
          >
            <v-list>
              <v-list-item-group>
                <v-list-item
                  v-for="(item, index) in firstColumnItems"
                  :key="index"
                >
                  <v-list-item-icon>
                    <v-icon :color="item.iconColor">{{ item.icon }}</v-icon>
                  </v-list-item-icon>
                  <v-list-item-content>
                    <v-list-item-title>{{ item.text }}</v-list-item-title>
                  </v-list-item-content>
                </v-list-item>
              </v-list-item-group>
            </v-list>
          </v-col>

          <!-- Second column -->
          <v-col
            cols="12"
            sm="6"
            md="6"
            lg="6
          "
          >
            <v-list>
              <v-list-item-group>
                <v-list-item
                  v-for="(item, index) in secondColumnItems"
                  :key="index"
                >
                  <v-list-item-icon>
                    <v-icon :color="item.iconColor">{{ item.icon }}</v-icon>
                  </v-list-item-icon>
                  <v-list-item-content>
                    <v-list-item-title>{{ item.text }}</v-list-item-title>
                  </v-list-item-content>
                </v-list-item>
              </v-list-item-group>
            </v-list>
          </v-col>
        </v-row>
        <v-row no-gutters>
          <a
            href="https://www.facebook.com/profile.php?id=100085329710121"
            target="_blank"
            rel="noopener noreferrer"
          >
            <v-icon class="pl-4">mdi-facebook</v-icon>
          </a>
          <a
            href="https://www.instagram.com/lawre_nceval/?theme=dark"
            target="_blank"
            rel="noopener noreferrer"
          >
            <v-icon class="pl-2">mdi-instagram</v-icon>
          </a>
          <a
            href="https://www.linkedin.com/in/lawrencevaldez/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <v-icon class="pl-2">mdi-linkedin</v-icon>
          </a>
          <a
            href="https://github.com/lawrence-V"
            target="_blank"
            rel="noopener noreferrer"
          >
            <v-icon class="pl-2">mdi-github</v-icon>
          </a>
        </v-row>
      </v-col>

      <v-col
        cols="12"
        lg="6"
        class="d-flex justify-center align-center content-image"
      >
        <v-card
          max-width="680"
          class="my-12 pa-2"
          :style="{
            'border-radius': '50%',
            width: $vuetify.breakpoint.mdAndDown ? '60%' : '90%',
            height: $vuetify.breakpoint.mdAndDown ? '80%' : '90%',
            'object-fit': 'contain',
          }"
        >
          <v-img
            :src="require('~/static/headerPhoto/grads.jpg')"
            :style="{
              'border-radius': '50%',
              width: $vuetify.breakpoint.mdAndDown ? '100%' : '100%',
              height: $vuetify.breakpoint.mdAndDown ? '100%' : '100%',
              'object-fit': 'contain',
            }"
          ></v-img>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>


<script>
export default {
  data() {
    return {
      firstColumnItems: [
        {
          icon: "mdi-language-javascript",
          iconColor: "yellow",
          text: "Javascript",
        },
        { icon: "mdi-vuejs", iconColor: "green", text: "Vues" },
        { icon: "mdi-vuetify", iconColor: "blue", text: "Vuetify" },
      ],
      secondColumnItems: [
        { icon: "mdi-circle", iconColor: "green", text: "MongoDB" },
        { icon: "mdi-language-css3", iconColor: "blue", text: "CSS" },
        { icon: "mdi-language-html5", iconColor: "orange", text: "HTML" },
      ],
      observer: null,
    };
  },
  mounted() {
    this.observer = new IntersectionObserver(this.staggering, {
      rootMargin: "0px",
      threshold: 0.1,
    });
    this.observer.observe(this.$el);
  },
  beforeDestroy() {
    this.observer.unobserve(this.$el);
  },
  methods: {
    staggering(entries) {
      const entry = entries[0];
      if (entry.isIntersecting) {
        const gsap = this.$gsap;
        gsap.from(".content-About", {
          x: -50,
          opacity: 0,
          stagger: 0.2,
          duration: 1,
          delay: 0.3,
        });
        gsap.from(".content-image", {
          scale: 0.8,
          opacity: 0,
          stagger: 0.2,
          duration: 1,
          delay: 0.3,
        });

        this.observer.disconnect();
      }
    },
  },
};
</script>

<style>
</style>