<template>
  <v-container class="my-15">
    <v-row no-gutters justify="center" align="center">
      <v-col cols="12" lg="4" class="justify-center align-center">
        <v-img
          contain
          :src="require('~/static/contactMe.svg')"
          :style="{
            height: $vuetify.breakpoint.mdOnly ? '400px' : '500px',
            textAlign: 'center',
          }"
        ></v-img>
      </v-col>
      <v-col cols="12" lg="8" class="text-center justify-center">
        <h1>Get in touch with me</h1>
        <h3 class="headline px-15 mt-2">
          While actively in pursuit of new job opportunities as a web developer,
           my inbox is always open. Whether you have inquiries, potential collaborations, or simply want to connect,
           I'm eager to engage and will make every effort to respond promptly.
        </h3>
        <a :href="getGmailComposeLink">
          <v-btn color="success" class="mt-5">Say Hello</v-btn>
        </a>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  computed: {
    getGmailComposeLink() {
      const email = 'lawrencevaldez027@gmail.com'; 
      const subject = 'Hello from your website';
      const body = 'Hello, I wanted to get in touch with you...'; 
      return `https://mail.google.com/mail/?view=cm&to=${email}&su=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    },
  },
};
</script>

<style>
</style>
