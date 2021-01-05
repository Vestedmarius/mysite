<template>
  <div class="home">
    <vue-particles style="position:absolute; width:100vw; height: 100vh;" class="mx-n5" linesColor="#ff0000"  :linesWidth="2" color="#ff0000">
      <v-card color="rgba(255, 0, 0, 0.0)" class="mx-auto py-15" width="40%" flat>
        <v-card-title>
          <h1>TheConsoleGardenMG</h1>
        </v-card-title>
      </v-card>
      <v-row>
        <v-col cols="4">
          <v-card v-for="card in cards" :key="card.name">
            <v-card-title>{{card.name}}</v-card-title>
            <v-card-text>{{card.text}}</v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </vue-particles>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'Home',
  components: {
    
  },
  data: function() {
    cards: [
      {name: "who am I", text: "Im Marius 16 years old."},
      {name: "school", text: "Im Marius 16 years old."},
    ]
  }
}
</script>
