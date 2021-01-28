<template>
  <v-tab
    @click="loadList"
  >{{tweetListKey}}</v-tab>
</template>

<script>
export default {
  name: 'History',
  props: {
    tweetListKey: {
      type: String,
      required: true
    }
  },
  methods: {
    loadList () {
      this.$store.dispatch('loadTweets')
    }
  }
}
</script>

<style scoped>

</style>
