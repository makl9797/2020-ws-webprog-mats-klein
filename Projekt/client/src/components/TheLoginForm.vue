<template>
  <div>
    <v-row>
      <div
        v-if="$vuetify.breakpoint.mobile ? false : this.$auth.isAuthenticated "
        class="mr-5">{{ userMail }}
      </div>
      <v-btn
        v-if="!this.$auth.isAuthenticated" @click="login"
        color="deep-purple darken-1 white--text"
        :class="$vuetify.breakpoint.mobile ? 'mr-2' : 'mr-8'"
        :width="$vuetify.breakpoint.mobile ? 50 : 100"
      >
        Login
      </v-btn>
      <v-icon
        v-if="this.$auth.isAuthenticated" @click="logout" color="deep-purple darken-4" large class="mr-4">
        mdi-logout-variant
      </v-icon>
    </v-row>
  </div>
</template>

<script>

export default {
  name: 'TheLoginForm',
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
