<template>
  <v-dialog
    v-model="dialog"
    max-width="350px"
  >
    <template v-slot:activator="{ on, attrs }">
      <v-btn
        color="deep-purple darken-1 white--text"
        v-bind="attrs"
        v-on="on"
      >
        Login
      </v-btn>
    </template>
    <v-card
      class="deep-purple lighten-4">
      <v-card-title>
        <span class="headline">Login</span>
      </v-card-title>
      <v-card-text>
        <v-container>
          <v-row>
            <v-col cols="12">
              <ValidationProvider rules="email" v-slot="{ errors }">
                <v-text-field
                  v-model="email"
                  label="Email"
                  required
                ></v-text-field>
                <span>{{ errors[0] }}</span>
              </ValidationProvider>
            </v-col>
            <v-col cols="12">
              <v-text-field
                label="Password"
                type="password"
                required
              ></v-text-field>
            </v-col>
          </v-row>
        </v-container>
      </v-card-text>
      <v-card-actions>
        <v-btn
          color="deep-purple darken-1"
          text
          @click="register = true, dialog = false"
        >
          Registrieren
        </v-btn>
        <v-spacer></v-spacer>
        <v-btn
          color="deep-purple darken-1"
          text
          @click="dialog = false"
        >
          Zurück
        </v-btn>
        <v-btn
          color="deep-purple darken-1"
          text
          @click="login = true, dialog = false"
        >
          Login
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>

import { extend } from 'vee-validate'
import { email } from 'vee-validate/dist/rules'

extend('email', {
  ...email,
  message: 'Keine gültige E-Mail Adresse'
})

export default {
  name: 'TheLoginForm',
  data () {
    return {
      login: false,
      register: false,
      dialog: false
    }
  },
  computed: {
    email: {
      get () {
        return this.$store.state.email
      },
      set (email) {
        this.$store.commit('SET_CURRENT_LOGIN', email)
      }
    }
  }
}
</script>

<style scoped>

</style>
