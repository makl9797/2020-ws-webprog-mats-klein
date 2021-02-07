<template>
  <v-tab
    @click="loadList"
  >{{tweetListKey}}
    <v-icon
      v-if="deleteMode"
      class="ml-1"
    @click="deleteListItem">mdi-delete</v-icon>
  </v-tab>
</template>

<script>
export default {
  name: 'History',
  props: {
    deleteMode: {
      type: Boolean,
      required: true
    },
    tweetListKey: {
      type: String,
      required: true
    }
  },
  methods: {
    loadList () {
      this.$store.commit('SET_KEYWORD', this.tweetListKey)
      this.$store.dispatch('loadTweets')
    },
    deleteListItem () {
      this.$store.dispatch('deleteHistoryItem', this.tweetListKey)
    }
  }
}
</script>

<style scoped>

</style>
