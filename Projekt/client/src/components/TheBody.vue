//Quelle 2: Extended Toolbar Wireframe
<template>
  <v-main>
    <TheHistoryBar
      v-if="this.$auth.isAuthenticated"></TheHistoryBar>
    <div class="fill-height deep-purple lighten-4">
      <div
        v-scroll="onResize"
        v-resize="onResize"
        v-masonry
        item-selector=".item">
        <div
          v-masonry-tile
          class="item"
          v-for="(data,index) in tweetlist.tweets"
          :key="index">
          <Tweet :recentTweet="data"></Tweet>
        </div>
      </div>
    </div>
  </v-main>
</template>

<script>
import Tweet from '@/components/Tweet'
import { mapState } from 'vuex'
import TheHistoryBar from '@/components/TheHistoryBar'

export default {
  name: 'TheBody',
  components: { TheHistoryBar, Tweet },
  mounted () {
    this.$redrawVueMasonry()
  },
  updated () {
    this.$redrawVueMasonry()
  },
  methods: {
    onResize: function () {
      this.$redrawVueMasonry()
    }
  },
  computed: mapState(['tweetlist'])
}
</script>

<style scoped>

</style>
