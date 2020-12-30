<template>
  <v-text-field
    v-model="key"
    v-on:click="test"
    dense
    outlined
    hide-details
    label="Suche nach Tweets..."
    append-icon="mdi-magnify"
    class="align-self-center text--black white"
  />
</template>

<script>
export default {
  name: 'TheSearchBar',
  methods: {
    test: function (event) {
      console.log(this.data.key)
      // this.$emit('keydown.enter', this.data.key)
    }
  },
  data () {
    return {
      key: ''
    }
  }
}
</script>

<style scoped>
</style>
