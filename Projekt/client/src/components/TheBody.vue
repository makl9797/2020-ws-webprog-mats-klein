//Quelle 2: Extended Toolbar Wireframe
<template>
  <v-main>
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
import recentData from '@/assets/dummy_recent.json'
import streamData from '@/assets/dummy_stream.json'
import { mapState } from 'vuex'

export default {
  name: 'TheBody',
  recentTweets: recentData,
  streamedTweets: streamData,
  components: { Tweet },
  mounted () {
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
