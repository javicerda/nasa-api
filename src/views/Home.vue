<template>
  <v-app>
    <v-img :src="apod.url" min-height="100%">
      <v-btn  class="mt-16" href="/login" color="red darken-4">🚀 ¡ENTRAR! 🚀</v-btn>
    </v-img>  
  </v-app>
</template>

<script>
import { mapActions, mapState } from 'vuex'

export default {
  computed:{
    ...mapState(["apod"])
  },
  methods:{
    ...mapActions(["getApod"])
  },
  created() {
    this.getApod();
  },
  getters:{
    
  }
};
</script>
