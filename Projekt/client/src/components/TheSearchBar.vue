<template>
  <v-text-field
    dense
    outlined
    hide-details
    label="Suche nach Tweets..."
    append-icon="mdi-magnify"
    class="align-self-center text--black red_det"
  />
</template>

<script>
export default {
  name: 'TheSearchBar'
}
</script>

<style scoped>
.red_det{
  background: #c4fc76;
}
</style>
