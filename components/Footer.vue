<template>
  <v-footer style="background-color: white">
    <v-row class="text-center">
      <v-col cols="12">
        <v-btn v-for="icon in icons" :key="icon" class="mx-4 black--text" icon  :href="getSocialMediaLink(icon)">
          <v-icon size="24px">{{ icon }}</v-icon>
        </v-btn>
      </v-col>



      <v-col cols="12">
        <p class="black--text">
          © {{ new Date().getFullYear() }} - Present Lawrence B. Valdez. All
          rights reserved.
        </p>
      </v-col>
    </v-row>
  </v-footer>
</template>

<script>
export default {
  data: () => ({
    icons: [
      "mdi-facebook",
      "mdi-twitter",
      "mdi-linkedin",
      "mdi-instagram",
      "mdi-github",
    ],
  }),
  methods: {
    getSocialMediaLink(icon) {
      switch (icon) {
        case "mdi-facebook":
          return "https://www.facebook.com/profile.php?id=100085329710121"; // Replace with your Facebook profile URL
        case "mdi-twitter":
          return "https://twitter.com/programwithdev"; // Replace with your Twitter profile URL
        case "mdi-linkedin":
          return "https://www.linkedin.com/in/lawrencevaldez/"; // Replace with your LinkedIn profile URL
        case "mdi-instagram":
          return "https://www.instagram.com/lawre_nceval/?theme=dark"; // Replace with your Instagram profile URL
        case "mdi-github":
          return "https://github.com/lawrence-V"; // Replace with your GitHub profile URL
        default:
          return "#"; // Default link if no matching icon is found
      }
    },
  }
};
</script>
