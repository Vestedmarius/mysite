<template>
  <v-app>
    <NavBar/>
    <v-main class="mx-5">
      <router-view/>
    </v-main>
  </v-app>
</template>

<script>

import NavBar from '@/components/navbar'

export default {
  name: 'App',

  components: {
    NavBar
  },
};
</script>
<style lang="css">
  /* width */
::-webkit-scrollbar {
  width: 5px;
}

/* Track */
::-webkit-scrollbar-track {
  box-shadow: inset 0 0 5px rgb(41, 41, 41); 
}
 
/* Handle */
::-webkit-scrollbar-thumb {
  background: red; 
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: #b30000; 
}
</style>