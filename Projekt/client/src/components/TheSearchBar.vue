<template>
  <v-text-field
    @click="testStore"
    dense
    outlined
    hide-details
    label="Suche nach Tweets..."
    append-icon="mdi-magnify"
    class="align-self-center text--black white"
  />
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'TheSearchBar',
  computed:
    mapState(['tweetlist']),
  methods: {
    testStore: () => {
      this.$store.dispatch('FETCH_TWEETS')
    }
  }
}
</script>

<style scoped>
</style>
