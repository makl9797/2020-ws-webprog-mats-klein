<template>
  <div>
    <v-btn
      v-if="!this.auth0.isAuthenticated" @click="login"
      color="deep-purple darken-1 white--text"
    >
      Login
    </v-btn>
    <v-btn
      v-if="this.auth0.isAuthenticated" @click="logout"
      color="deep-purple darken-1 white--text"
    >
      Logout
    </v-btn>
  </div>
</template>

<script>

export default {
  name: 'TheLoginForm',
  data () {
    return {
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
    }
  },
  watch: {
    $auth: function () {
      console.log('Test')
    }
  }
}
</script>

<style scoped>

</style>
