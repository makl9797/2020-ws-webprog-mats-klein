<template>
  <v-text-field
    @keydown.enter="loadTweets"
    v-model="keyword"
    dense
    outlined
    hide-details
    label="Suche nach Tweets..."
    append-icon="mdi-magnify"
    class="align-self-center text--black white"
  />
</template>

<script>

import { mapActions } from 'vuex'

export default {
  name: 'TheSearchBar',
  methods: mapActions(['loadTweets']),
  computed: {
    keyword: {
      get () {
        return this.$store.state.key
      },
      set (key) {
        this.$store.commit('SET_KEYWORD', key)
      }
    }
  }

}
</script>

<style scoped>
</style>
