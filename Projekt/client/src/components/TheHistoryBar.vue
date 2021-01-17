<template>
  <v-card>
    <v-tabs
      background-color="deep-purple darken-1"
      center-active
      dark
    >
        <History
          v-for="(history,index) in $store.state.histories"
          :key="index"
          :tweet-list-key="history">
        </History>
      <v-btn
        height="auto"
        color="deep-purple darken-1 white--text"
        @click="addTab"
      >
        <v-icon>mdi-playlist-plus</v-icon>
      </v-btn>
    </v-tabs>
  </v-card>
</template>

<script>
import History from '@/components/History'

export default {
  name: 'TheHistoryBar',
  components: { History },
  methods: {
    addTab () {
      this.$store.dispatch('saveHistory')
    }
  }
}
</script>

<style scoped>

</style>
