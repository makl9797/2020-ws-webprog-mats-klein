<template>
  <v-app>
    <TheHeader></TheHeader>
    <TheBody></TheBody>
  </v-app>
</template>

<script>
import TheHeader from '@/components/TheHeader'
import TheBody from '@/components/TheBody'

export default {
  name: 'Home',
  components: { TheBody, TheHeader }
}
</script>

<style scoped>

</style>
