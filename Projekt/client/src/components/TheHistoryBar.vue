<template>
  <v-card>
    <v-tabs
      background-color="deep-purple darken-1"
      center-active
      dark
      v-model="activeTab"
    >
        <History
          v-for="(history,index) in $store.state.histories.names"
          :key="index"
          :tweet-list-key="history"
          :delete-mode="deleteMode">
        </History>
      <v-btn
        height="auto"
        color="deep-purple darken-1 white--text"
        @click="addTab"
      >
        <v-icon>mdi-playlist-plus</v-icon>
      </v-btn>
      <v-switch
      class="align-self-center ml-auto mr-8"
      v-model="deleteMode"
      color="error"
      label="Löschen"></v-switch>
    </v-tabs>
  </v-card>
</template>

<script>
import History from '@/components/History'

export default {
  name: 'TheHistoryBar',
  components: { History },
  data () {
    return {
      deleteMode: false,
      activeTab: 0
    }
  },
  methods: {
    async addTab () {
      if (this.$store.state.key !== '') {
        this.$store.commit('KEY_TO_HISTORY')
        await this.$store.dispatch('loadTweets')
        this.$store.commit('ID_TO_HISTORYID')
        await this.$store.dispatch('saveHistory')
        this.activeTab = this.$store.state.histories.ids.length - 1
      }
    }
  }
}
</script>

<style scoped>

</style>
