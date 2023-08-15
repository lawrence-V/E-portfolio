<template>
  <div style="background-color: #f8f9fa">
    <v-container>
      <h1 style="text-align: center" class="py-5 headtext">
        My Personal Projects
      </h1>

      <v-row>
        <v-col
          v-for="(photo, index) in cards"
          :key="index"
          :cols="getColumnWidth"
        >
          <v-hover v-slot="{ hover }">
            <v-card class="project" max-width="404" max-height="700">
              <v-img
                :src="photo.src"
                class="white--text align-end img-project"
                gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
                height="400"
              >
                <v-expand-transition>
                  <div
                    v-if="hover"
                    class="d-flex transition-fast-in-fast-out v-card--reveal"
                    style="height: 100%; background-color: rgba(0, 0, 0, 0.6)"
                  >
                    <v-row align="end" class="fill-height w-100 mx-2">
                      <v-col class="text-center" cols="12">
                        <span class="text-h4 white--text">
                          {{ photo.projectName }}
                        </span>
                      </v-col>
                      <v-spacer></v-spacer>

                      <v-col class="text-right" cols="12">
                        <a v-if="photo.showGithubIcon" :href="photo.githubLink">
                          <v-btn icon class="grey--text lighten-2">
                            <v-icon color="white" dark>mdi-github</v-icon>
                          </v-btn>
                        </a>
                        <a v-if="photo.showArrowIcon" :href="photo.appLink">
                          <v-btn icon class="mx-2 grey--text lighten-2">
                            <v-icon color="white" dark
                              >mdi-arrow-top-right-thick</v-icon
                            >
                          </v-btn>
                        </a>
                      </v-col>
                    </v-row>
                  </div>
                </v-expand-transition>
              </v-img>
            </v-card>
          </v-hover>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {
  data: () => ({
    cards: [
      {
        projectName: "Nuxt 3 movie app",
        src: require("../static/project/movieapp.png"),
        flex: 3,
        showGithubIcon: true,
        showArrowIcon: false,
        githubLink: "https://github.com/lawrence-V/Nuxt3_MovieApi",
        appLink: "https://nuxt3-movie-api.vercel.app/",
      },
      {
        projectName: "INiskolar",
        src: require("../static/project/thesis1.png"),
        flex: 3,
        showGithubIcon: true,
        githubLink: "https://github.com/console0811/research-and-development",
        showArrowIcon: false,
      },
      {
        projectName: "Bike Marketplace",
        src: require("../static/project/prob1.png"),
        flex: 3,
        showGithubIcon: true,
        githubLink: "https://github.com/lawrence-V/bikeMarketplaceFinals",
        showArrowIcon: false,
      },
    ],
    observer: null,
  }),

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
        // The TechStack component is now visible in the viewport
        const gsap = this.$gsap;
        gsap.from(".project", {
          opacity: 0,
          scale: 0,
          stagger: 0.2,
          duration: 1,
          delay: 0.3,
        });
        gsap.from("headtext", {
          x: -50,
          opacity: 0,
          stagger: 0.2,
          duration: 1,
          delay: 0.3,
        });
        // Once the animation is executed, disconnect the observer to avoid multiple executions
        this.observer.disconnect();
      }
    },
  },

  computed: {
    getColumnWidth() {
      if (this.$vuetify.breakpoint.lgAndUp) {
        return 4; // 2 columns for lg and above
      } else if (this.$vuetify.breakpoint.mdAndUp) {
        return 12; // 3 columns for md and above
      } else {
        return 12; // 2 columns for sm and below
      }
    },
  },
};
</script>

<style scoped>
.v-card--reveal {
  align-items: center;
  bottom: 0;
  justify-content: center;
  opacity: 4;
  position: absolute;
  width: 100%;
}

.img-projection {
  background-size: cover;
}
</style>