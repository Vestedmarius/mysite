<template>
  <div class="home">
    <vue-particles
      style="position:absolute; width:100vw; height: 100%;"
      class="mt-n16 ml-n5"
      linesColor="#ff0000"
      :linesWidth="2"
      color="#ff0000"
    >
    </vue-particles>
    <div style="position: relative;" class="my-15 py-15 text-center">
      <h1 class="text-sm-h2 text-md-h1 text-h4 font-weight-medium mb-4">
        TheConsoleGardenMG
      </h1>
      <p class="text-subtitle-2 text-md-h5">{{ GetQuot }}</p>
    </div>
    <v-row>
      <v-col md="4" cols="12">
        <v-card>
          <v-card-title primary-title class="text-uppercase">
            <h3 class="headline mb-0">About me</h3>
          </v-card-title>
          <v-card-text>
            <p>
              Hi, I'm Marius also known as TheConsoleGardenMG. I'm 16 years old
              and live in the Netherlands. I’m studying currently media design
              and ICT.
            </p>
            <p>
              I have been programming in my free time for about two years,
              mainly programmed game scripts, and currently getting into web
              development.
            </p>
            <v-btn color="primary" @click="ToProjects"> Projects</v-btn>
          </v-card-text>
        </v-card>
      </v-col>
      <Timeline></Timeline>
    </v-row>
  </div>
</template>

<script>
// @ is an alias to /src
import Timeline from "@/components/home/timeline";
export default {
  name: "Home",
  components: {
    Timeline,
  },
  data() {
    return {
      cards: [
        {
          name: "About me",
          text:
            "Hi, I'm Marius also known as TheConsoleGardenMG. I'm 16 years old and live in the Netherlands. \nCurrently I’m studying media design and ICT. \n\nI have been programming in my free time for about two years, mainly programmed game scripts, and currently getting into web development. ",
        },
        { name: "school", text: "Im Marius 16 years old." },
      ],
      quots: [
        "The only way to learn a new programming language is by writing programs in it",
        "Programming isn't about what you know; it's about what you can figure out.",
        "Testing leads to failure, and failure leads to understanding.",
        "The best error message is the one that never shows up.",
        "Don't write better error messages, write code that doesn't need them.",
      ],

      timeline: [
        {
          name: "School: Zuiderzee collge",
          text: "I currently study media design and ICT here",
          date: "4/07/2019 - now",
        },
        {
          name: "Internship at Antoni van Leeuwenhoek hospital",
          text:
            "Here I was an intern at the department A&I werkplekbeheer where I made sure that all computers in the hospital worked correctly and that people had the right tools for their work in terms of computer technology. ",
          date: "8/05/2019 - 26/06/2019",
        },
      ],
    };
  },
  computed: {
    GetQuot: function() {
      let index = Math.floor(Math.random() * Math.floor(this.quots.length));
      return this.quots[index];
    },
  },
  methods: {
    ToProjects() {
      this.$router.push("/projects");
    },
  },
};
</script>

<style lang="css">
pre {
  overflow-x: auto;
  white-space: pre-wrap;
  white-space: -moz-pre-wrap;
  white-space: -pre-wrap;
  white-space: -o-pre-wrap;
  word-wrap: break-word;
  font-family: "Roboto", sans-serif !important;
}
</style>
