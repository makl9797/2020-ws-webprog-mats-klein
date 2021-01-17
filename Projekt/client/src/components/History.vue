<template>
  <v-tab
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
  }
}
</script>

<style scoped>

</style>
