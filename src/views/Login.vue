<template>
  <v-app id="inspire" class="v-image__image--cover">
    <v-main>
      <v-container
        class="fill-height"
        fluid
      >
        <v-row
          align="center"
          justify="center"
        >
          <v-col
            cols="12"
            sm="8"
            md="4"
          >
            <v-card class="elevation-12">
              <v-toolbar
                color="indigo darken-4"
                dark
                flat
                class="text-center"
              >
                <v-toolbar-title class="font-weight-black">Nasa App</v-toolbar-title>
                <v-spacer></v-spacer>
              </v-toolbar>
              <v-card-text>
                <v-form>
                  <v-text-field
                    label="Usuario"
                    name="login"
                    prepend-icon="mdi-account"
                    type="text"
                    v-model="user"
                  ></v-text-field>

                  <v-text-field
                    id="password"
                    label='Contraseña' :type="showPassword ? 'text' : 'password'"
                    name="password"
                    prepend-icon="mdi-lock"
                    v-model="password"
                    :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
                    @click:append="showPassword = !showPassword"
                  ></v-text-field>
                </v-form>
              </v-card-text>
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn @click="login" color="red darken-4">Login</v-btn>
              </v-card-actions>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import Firebase from 'firebase'
  export default {
    data: () => ({
    user:'',
    password: '',
    showPassword: false
  }),
  methods:{
    login(){
      Firebase.auth().signInWithEmailAndPassword(this.user, this.password)
      .then(()=>{
        this.$router.push('/rover')
        alert (`Bienvenido ${this.user}`)
      }) .catch(() =>{
        alert ('NOOOOOO')
      })
    }
  } 
  };
</script>