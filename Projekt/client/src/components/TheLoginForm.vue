<template>
  <div>
    <v-btn
      v-if="!this.$auth.isAuthenticated" @click="login"
      color="deep-purple darken-1 white--text"
    >
      Login
    </v-btn>
    <v-btn
      v-if="this.$auth.isAuthenticated" @click="logout"
      color="deep-purple darken-1 white--text"
    >
      Logout
    </v-btn>
    <div
    v-if="this.$auth.isAuthenticated">{{userMail}}</div>
  </div>
</template>

<script>

export default {
  name: 'TheLoginForm',
  data () {
    return {
    }
  },
  methods: {
    login () {
      this.$auth.loginWithRedirect()
    },
    logout () {
      this.$auth.logout({
        returnTo: window.location.origin
      })
    }
  },
  computed: {
    userMail: function () {
      this.$store.commit('SET_USERID', this.$auth.user)
      return this.$auth.user.email
    }
  },
  updated () {
    if (this.$auth.isAuthenticated) {
      this.$store.dispatch('loadHistory')
    }
  }
}
</script>

<style scoped>

</style>
