<template>
  <div>
    <div>{{ history }}</div>
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
  computed: {
    history: function () {
      if (this.auth0.isAuthenticated) {
        this.$store.commit('SET_USERTOKEN', this.auth0.user.sub)
        this.$store.dispatch('saveHistory')
        return `User: ${this.auth0.user.email}`
      } else {
        return ''
      }
    }
  }
}
</script>

<style scoped>

</style>
