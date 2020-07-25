<template>
    <v-app-bar
      app
      color="indigo darken-4"
      dark
    >
      <div class="d-flex align-center">
        <v-img
          alt="Vuetify Logo"
          class="shrink mr-2"
          contain
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e5/NASA_logo.svg/287px-NASA_logo.svg.png"
          transition="scale-transition"
          width="40"
        />
        <h4> Nasa App</h4>
      </div>

      <v-spacer></v-spacer>
      
          <v-toolbar-items class="hidden-sm-and-down">
            <v-btn
              v-for="item in menu"
              :key="item.icon"
              :to="item.link"
              
            >{{ item.title }}</v-btn>

          </v-toolbar-items>

          <v-menu class="hidden-md-and-up">
            <v-list>
              <v-list-tile v-for="item in menu" :key="item.icon">
                <v-list-tile-content>
                  <v-list-tile-title>{{ item.title }}</v-list-tile-title>
                </v-list-tile-content>
              </v-list-tile>   
            </v-list>
          </v-menu>

    </v-app-bar>
</template>


<script>
export default {
  data () {
    return {
      menu: [
        { icon: 'home', title: 'APOD', link:'apod' },
        { icon: 'info', title: 'ROVER', link:'rover' },
      ]
    }
  },
  
  methods: {
    menuItems () {
      return this.menu
    }
  }
  
}
</script>