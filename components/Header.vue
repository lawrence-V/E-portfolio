<template>
  <div>
    <v-img
      src="https://e0.pxfuel.com/wallpapers/93/325/desktop-wallpaper-this-is-not-available-error-404.jpg"
      cover
      style="height: 100vh; width: 100vw"
    ></v-img>

    <div
      style="position: absolute; top: 0%; left: 30%; text-align: center"
      :style="{
        position: 'absolute',
        top: $vuetify.breakpoint.xsOnly
          ? '2%'
          : $vuetify.breakpoint.smAndDown
          ? '2%'
          : $vuetify.breakpoint.mdAndDown
          ? '2%'
          : '0%',
        left: $vuetify.breakpoint.xsOnly
          ? '13%'
          : $vuetify.breakpoint.smAndDown
          ? '20%'
          : $vuetify.breakpoint.mdAndDown
          ? '30%'
          : '30%',
        textAlign: 'center',
      }"
    >
      <h1
        class="h1-first"
        :style="{
          color: 'white',
          fontSize: $vuetify.breakpoint.xsOnly
            ? '30px'
            : $vuetify.breakpoint.smAndDown
            ? '47px'
            : $vuetify.breakpoint.mdAndDown
            ? '55px'
            : '60px',
        }"
      >
        Hi There
        <v-icon large color="white darken-2"> mdi-hand-wave</v-icon>
      </h1>
      <h1
        class="h1-second"
        :style="{
          color: 'white',
          fontSize: $vuetify.breakpoint.xsOnly
            ? '30px'
            : $vuetify.breakpoint.smAndDown
            ? '47px'
            : $vuetify.breakpoint.mdAndDown
            ? '55px'
            : '60px',
        }"
      >
        My Name is Lawrence
      </h1>
      <h1
        class="h1-3"
        :style="{
          color: 'white',
          fontSize: $vuetify.breakpoint.xsOnly
            ? '30px'
            : $vuetify.breakpoint.smAndDown
            ? '47px'
            : $vuetify.breakpoint.mdAndDown
            ? '55px'
            : '60px',
        }"
      >
        A Frontend
      </h1>
      <h1
        class="h1-4"
        :style="{
          color: 'white',
          fontSize: $vuetify.breakpoint.xsOnly
            ? '30px'
            : $vuetify.breakpoint.smAndDown
            ? '47px'
            : $vuetify.breakpoint.mdAndDown
            ? '55px'
            : '60px',
        }"
      >
        Web Developer
      </h1>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
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
        gsap.from(".h1-first", {
          x: -50,
          opacity: 0,
          stagger: 0.2,
          duration: 1,
          delay: 0.3,
        });
        gsap.from(".h1-second", {
          x: -50,
          opacity: 0,
          stagger: 0.3,
          duration: 1,
          delay: 0.4,
        });
        gsap.from(".h1-3", {
          x: -50,
          opacity: 0,
          stagger: 0.4,
          duration: 1,
          delay: 0.5,
        });
        gsap.from(".h1-4", {
          x: -50,
          opacity: 0,
          stagger: 0.5,
          duration: 1,
          delay: 0.6,
        });
        this.observer.disconnect();
      }
    },
  },
};
</script>
