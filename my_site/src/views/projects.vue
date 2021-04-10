<template>
  <div>
    <v-row align="center" justify="center">
      <v-col cols="3" v-for="project in projects" :key="project.name">
        <v-card>
          <v-img
            :src="project.img"
            max-height="200px"
            contain
            class="white--text align-end"
          >
            <v-card-title>
              {{ project.name }}
            </v-card-title>
          </v-img>

          <v-card-text>
            {{ project.shortDiscription }}
          </v-card-text>

          <v-card-actions>
            <v-btn @click="PushLink(project.saveLink)" text color="primary"
              >More info
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import _projects from "../projects.js";
export default {
  computed: {
    projects: function() {
      return _projects.projects;
    },
  },
  methods: {
    PushLink(link) {
      this.$router.push({ name: "Project", params: { name: link } });
    },
  },
};
</script>

<style lang="scss" scoped></style>
