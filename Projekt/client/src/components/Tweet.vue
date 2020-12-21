<template>
  <v-hover
    close-delay="100">
    <template v-slot:default="{ hover }">
      <v-card
        :elevation="hover ? 8 : 0"
        outlined color="deep-purple lighten-4"
        @click="toggleOverlay">
        <v-img
          :src="'media' in streamedTweet.includes && 'url' in streamedTweet.includes.media[0] ? streamedTweet.includes.media[0].url : 'test'"
          :width="'media' in streamedTweet.includes && 'url' in streamedTweet.includes.media[0] ? 'auto' : '200'"
          max-width="400"
          :gradient="'media' in streamedTweet.includes && 'url' in streamedTweet.includes.media[0] ? 'to top right, rgba(255,255,255,.8), rgba(255,255,255,.8)' : images.altImg.gradient">
          <div
            class="fill-height transparent-overlay">
            <v-card-title
              v-text="streamedTweet.includes.users[0].name"
              class="pb-0"/>
            <v-card-subtitle v-text="'@'+streamedTweet.includes.users[0].username"
                             class="pt-3">
            </v-card-subtitle>
            <v-card-text
              class="pl-6">
              {{ streamedTweet.data.text }}
            </v-card-text>
            <v-row
              justify="end">
              <v-icon
                v-if="'media' in streamedTweet.includes"
                class="ml-9">mdi-image-size-select-actual
              </v-icon>
              <v-spacer></v-spacer>
              <v-card-subtitle
                class="mr-4"
                v-text="parseDate(streamedTweet.data.created_at)"/>
            </v-row>
          </div>
        </v-img>
          <v-overlay
            :value="isClicked"
            v-if="'media' in streamedTweet.includes && 'url' in streamedTweet.includes.media[0]">
            <v-card>
              <v-img
                contain
                max-width="500"
                :src="streamedTweet.includes.media[0].url">
              </v-img>
            </v-card>
          </v-overlay>
      </v-card>
    </template>
  </v-hover>
</template>

<script>
export default {
  name: 'Tweet',
  props: {
    streamedTweet: {
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
        /*
        min-width="250"
        max-width="500"
        max-height="300"
         */
      }
    }
  },
  methods: {
    toggleOverlay: function () {
      this.isClicked = !this.isClicked
    },
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
