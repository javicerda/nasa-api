<template>
  <div>
    <app-bar></app-bar>
      <v-main>
        <v-container>
        <p class="font-weight-medium text-md-h5"> 👀 ¡Miremos fotografías de Marte! ☄️ </p>
        <p>Selecciona el día y la cámara para tu búsqueda.</p>
        <!-- Form -->
        <v-form class="mt-6">
          <v-row>
              <!-- sol days -->
            <v-col cols="12" md="4">
              <v-text-field v-model="sol" label="Sol days" type="number" required/>       
            </v-col>
              <!-- rover -->
            <v-col cols="12" md="4">
              <v-select v-model="rover" :items="rovers" label="Rover" required ></v-select>
            </v-col> 
              <!-- btn -->
            <v-col cols="12" md="4">
              <v-btn color="red darken-4" large @click="getRoverCamera"> 📹 Ver Cámaras 👀 </v-btn>
            </v-col>
          </v-row>
        </v-form>     
      <v-divider class="my-1"></v-divider>     
        <!-- cameras -->
      <v-row  class="align-center justify-center mb-3 mt-6">
        <v-col cols="12" md="6" class="py-0">
          <p>Cantidad de fotos según cámara:</p>
        </v-col>
        <v-row>
          <v-col cols="3" md="3" v-for=" (count, camera) in camerasCount" :key="camera">
            <div v-if="cameras"> 
              <div> {{ camera }} :  {{ count }} </div>
            </div> 
          </v-col>
        </v-row>
      </v-row>
      <v-divider class="my-2"></v-divider> 
      <!-- card -->
        <v-row>
          <v-col cols="12" md="4" v-for="photo in roverData.photos" :key="photo.id">
            <v-card class="mx-auto" max-width="380">
              <v-img :src="photo.img_src" height="280px"></v-img>
              <v-card-title>Camara: {{ photo.camera.full_name }}</v-card-title>
              <v-card-subtitle>Fecha: {{ photo.earth_date }}</v-card-subtitle>
              <v-card-text class="text--primary">
                <div>ID: {{ photo.id }}</div>
              </v-card-text>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </div>
</template>

<script>
import AppBar from '@/components/AppBar'
import { mapActions, mapState, mapGetters } from 'vuex'
export default {
  data() {
    return {
      sol: '1000',
      rover: 'Curiosity',
      rovers: [ 'Curiosity', 'Opportunity', 'Spirit']
    }
  },
  computed: {
    ...mapState(['roverData']),
    ...mapGetters(['cameras']),
    camerasCount(){
      let summary = {}
      this.cameras.map((camera) => {
        summary[camera] = ( summary[camera] || 0 ) + 1;
      })
      return summary
    }
  },
  methods:{
    ...mapActions(['getRoverData']),
    getRoverCamera(){
      const payload = { sol: this.sol, rover: this.rover };
      this.getRoverData(payload);
    }
  },
  components: { AppBar }
}
</script>

<style>

</style>