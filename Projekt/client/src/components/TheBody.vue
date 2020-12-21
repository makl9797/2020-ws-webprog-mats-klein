//Quelle 2: Extended Toolbar Wireframe
<template>
  <v-main>
    <div class="fill-height deep-purple lighten-4">
      <v-row
        v-scroll="onResize"
        v-resize="onResize"
        no-gutters
        v-masonry
        justify="center"
        align="center"
        id="tweet-wall">
        <v-col
          v-for="(data,index) in $options.streamedTweets.stream"
          :key="index"
          id="tweets"
          align-self="center"
          cols=auto
          md=3
          sm=4
          lg=2
        >
          <Tweet :streamedTweet="data"></Tweet>
        </v-col>
      </v-row>
    </div>
  </v-main>
</template>

<script>
import Tweet from '@/components/Tweet'
import recentData from '@/assets/dummy_recent.json'
import streamData from '@/assets/dummy_stream.json'

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
  }
}
</script>

<style scoped>

</style>
