<template>
  <div style="background-color: #f8f9fa">
    <v-container>
      <h1 style="text-align: center" class="py-5">
        TECHNOLOGIES AND FRAMEWORK
      </h1>
      <!-- <v-row no-gutters>
        <v-col
          v-for="card in cards"
          :key="card.title"
          :cols="calculateCols(card.flex)"
          class="pr-5 pb-2"
        >
          <v-card>
            <v-img
              :src="card.src"
              class="white--text align-end"
              gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
              height="150px"
            >
            </v-img>
          </v-card>
        </v-col>
      </v-row> -->
      <v-row>
        <!-- Use a for loop to generate the grid -->
        <v-col
          v-for="(photo, index) in cards"
          :key="index"
          :cols="getColumnWidth"
          class="pa-5"
        >
          <v-hover v-slot:default="{ hover }">
            <v-card
              class="img-tech"
              :elevation="hover ? 20 : 2"
              :class="{ 'on-hover': hover }"
              width="500px"
            >
              <v-img
                :src="photo.src"
                class="white--text align-end pa-7"
                gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
                height="150px"
                
              >
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
        title: "Pre-fab homes",
        src: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Vue.js_Logo_2.svg/2367px-Vue.js_Logo_2.svg.png",
        flex: 3,
      },
      {
        title: "Favorite road trips",
        src: "https://user-images.githubusercontent.com/480173/156953097-fe133174-2c02-4a7d-bb57-d28dd3332be2.png",
        flex: 3,
      },
      {
        title: "Favorite road trips",
        src: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/38/HTML5_Badge.svg/2048px-HTML5_Badge.svg.png",
        flex: 3,
      },
      {
        title: "Favorite road trips",
        src: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/CSS3_logo.svg/800px-CSS3_logo.svg.png",
        flex: 3,
      },
      {
        title: "Favorite road trips",
        src: "https://seeklogo.com/images/N/nodejs-logo-FBE122E377-seeklogo.com.png",
        flex: 3,
      },
      {
        title: "Favorite road trips",
        src: "https://cdn.icon-icons.com/icons2/2415/PNG/512/mongodb_original_wordmark_logo_icon_146425.png",
        flex: 3,
      },
      {
        title: "Favorite road trips",
        src: "https://logodownload.org/wp-content/uploads/2022/04/javascript-logo-0.png",
        flex: 3,
      },
      {
        title: "Favorite road trips",
        src: "https://nuxt.com/assets/design-kit/logo/icon-green.png",
        flex: 3,
      },
      {
        title: "Favorite road trips",
        src: "https://greensock.com/uploads/monthly_2020_03/tweenmax.png.cf27916e926fbb328ff214f66b4c8429.png",
        flex: 3,
      },
      {
        title: "My sql",
        src: "https://icons-for-free.com/iconfiles/png/512/logo+my+query+server+sql+icon-1320184811372606623.png",
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

