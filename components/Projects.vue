<template>
  <div style="background-color: #f8f9fa">
    <v-container>
      <h1 style="text-align: center" class="py-5">
        TECHNOLOGIES AND FRAMEWORK
      </h1>

      <v-row>
        <!-- Use a for loop to generate the grid -->
        <v-col
          v-for="(photo, index) in cards"
          :key="index"
          :cols="getColumnWidth"
        >
          <v-card class="img-tech">
            <v-img
              :src="photo.src"
              class="white--text align-end"
              gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
              height="150px"
            >
            </v-img>
          </v-card>
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
        title: "Pre-fab homes",
        src: "https://cdn.vuetifyjs.com/images/cards/house.jpg",
        flex: 3,
      },
      {
        title: "Favorite road trips",
        src: "https://cdn.vuetifyjs.com/images/cards/road.jpg",
        flex: 3,
      },
      {
        title: "Favorite road trips",
        src: "https://cdn.vuetifyjs.com/images/cards/road.jpg",
        flex: 3,
      },
      {
        title: "Favorite road trips",
        src: "https://cdn.vuetifyjs.com/images/cards/road.jpg",
        flex: 3,
      },
      {
        title: "Favorite road trips",
        src: "https://cdn.vuetifyjs.com/images/cards/road.jpg",
        flex: 3,
      },
      {
        title: "Favorite road trips",
        src: "https://cdn.vuetifyjs.com/images/cards/road.jpg",
        flex: 3,
      },
      {
        title: "Favorite road trips",
        src: "https://cdn.vuetifyjs.com/images/cards/road.jpg",
        flex: 3,
      },
      {
        title: "Favorite road trips",
        src: "https://cdn.vuetifyjs.com/images/cards/road.jpg",
        flex: 3,
      },
      {
        title: "Favorite road trips",
        src: "https://cdn.vuetifyjs.com/images/cards/road.jpg",
        flex: 3,
      },
      {
        title: "Favorite road trips",
        src: "https://cdn.vuetifyjs.com/images/cards/road.jpg",
        flex: 3,
      },
    ],
    observer: null,
  }),
  // mounted() {
  //   this.staggering();
  // },
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
        gsap.from(".img-tech", {
          opacity: 0,
          scale: 0,
          stagger: 0.2,
          duration: 1,
          delay: 0.3,
        });
        gsap.from("h1", {
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
        return 2; // 2 columns for lg and above
      } else if (this.$vuetify.breakpoint.mdAndUp) {
        return 3; // 3 columns for md and above
      } else {
        return 4; // 2 columns for sm and below
      }
    },
  },
};
</script>

<style>
</style>