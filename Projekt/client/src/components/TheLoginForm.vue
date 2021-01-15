<template>
  <div>
    <v-btn
      v-if="!auth0.isAuthenticated" @click="login"
      color="deep-purple darken-1 white--text"
    >
      Login
    </v-btn>
    <v-btn
      v-if="auth0.isAuthenticated" @click="logout"
      color="deep-purple darken-1 white--text"
    >
      Logout
    </v-btn>
    <v-btn
      @click="logMail"
      color="deep-purple darken-1 white--text"
    >
      Test
    </v-btn>
  </div>
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
      register: false,
      dialog: false,
      email: '',
      auth0: this.$auth
    }
  },
  methods: {
    login () {
      this.auth0.loginWithRedirect()
    },
    logout () {
      this.auth0.logout({
        returnTo: window.location.origin
      })
    },
    logMail () {
      console.log(this.auth0.user.email)
    }
  }
}
</script>

<style scoped>

</style>
