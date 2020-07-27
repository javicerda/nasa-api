<template>
  <div>
    <app-bar></app-bar>
    <v-main>
      <v-container>
        <v-row>
          <v-col cols="12" md="3">
            <!-- Form -->
            <v-form>
              <v-text-field v-model="sol" label="Sol days" type="number" required/>       
        
              <v-select v-model="rover" :items="rovers" label="Rover" required ></v-select>      
          
              <v-btn color="red darken-4" @click="getRoverCamera">Ver Cámaras</v-btn>
            </v-form>
           <div v-if="cameras" class="mt-5"> 
             <div v-for=" (count, camera) in camerasCount" :key="camera"> {{ camera }} :  {{ count }} </div>
          </div>           
          </v-col>

          <!-- card -->
          <v-row>
            <v-col cols="12" md="4">
              <v-card v-for="photo in roverData.photos" :key="photo.id" class="mx-auto" max-width="300">
                <v-img :src="photo.img_src" height="200px"></v-img>
                <v-card-title>Camara: {{ photo.camera.full_name }}</v-card-title>
                <v-card-subtitle>Fecha: {{ photo.earth_date }}</v-card-subtitle>
                <v-card-text class="text--primary">
                  <div>ID: {{ photo.id }}</div>
                </v-card-text>
              </v-card>
            </v-col>
          </v-row>
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