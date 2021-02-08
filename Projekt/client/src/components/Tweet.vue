<template>
  <div>
    <v-hover
      close-delay="100">
      <template v-slot:default="{ hover }">
        <v-card
          :elevation="hover ? 8 : 0"
          outlined color="deep-purple lighten-4"
          width="300"
          @click="isClicked = !isClicked">
          <div
            class="fill-height transparent-overlay">
            <v-card-title
              v-text="recentTweet.author.name"
              class="pb-0"/>
            <v-card-subtitle v-text="'@'+recentTweet.author.username"
                             class="pt-3">
            </v-card-subtitle>
            <v-card-text
              class="pl-6">
              {{ recentTweet.message }}
            </v-card-text>
            <v-row
              justify="end">
              <v-icon
                v-if="recentTweet.media.length !== 0 && recentTweet.media[0].media_type === 'photo'"
                class="ml-9">mdi-image-size-select-actual
              </v-icon>
              <v-spacer></v-spacer>
              <v-card-subtitle
                class="mr-4"
                v-text="parseDate(recentTweet.created_at)"/>
            </v-row>
          </div>
          <v-overlay
            :value="isClicked"
            v-if="recentTweet.media.length !== 0 && recentTweet.media[0].media_type === 'photo'">
            <v-card>
              <v-img
                contain
                max-width="500"
                :src="recentTweet.media[0].url">
              </v-img>
            </v-card>
          </v-overlay>
        </v-card>
      </template>
    </v-hover>
  </div>
</template>

<script>
export default {
  name: 'Tweet',
  props: {
    recentTweet: {
      type: Object,
      required: true
    }
  },
  data () {
    return {
      isClicked: false,
      images: {
        altImg: {
          src: 'https://2.bp.blogspot.com/-F3_7KEgYfnQ/Wk3lernyFiI/AAAAAAAAkr8/WIfx1yUUQnU3BVdHiVktXXYMtfJ30JjWACLcBGAs/s1600/48bc1ae88f43aa9845403d378ecdb830--wedding-hashtag-generator-being-used.jpg',
          gradient: 'to top right, rgba(255,255,255,.99), rgba(255,255,255,.95)'
        }
      }
    }
  },
  methods: {
    parseDate: function (date) {
      const year = date.substring(0, 4)
      const month = date.substring(5, 7)
      const day = date.substring(8, 10)
      const hour = date.substring(11, 13)
      const min = date.substring(14, 16)
      return `${day}.${month}.${year}  ${hour}:${min}`
    }
  }
}

</script>

<style scoped>
.transparent-overlay {
  background: rgba(227, 113, 255, 0.2);
}
</style>
