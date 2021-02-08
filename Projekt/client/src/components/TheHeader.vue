//Quelle 2: Extended Toolbar Wireframe
<template>
  <div>
    <v-app-bar
      app
      class="mx-auto"
      shrink-on-scroll
      src="https://images.pexels.com/photos/3742709/pexels-photo-3742709.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
    >
      <template v-slot:img="{ props }">
        <v-img
          v-bind="props"
          height="400"
        >
          <div
            class="fill-height circle-gradient"></div>
        </v-img>
      </template>
      <v-toolbar-title
        class="align-self-center">
        <v-img
          v-if="!$vuetify.breakpoint.mobile"
          src="@/assets/pound-box.svg"
          max-width="150"
          min-width="70"
        >
        </v-img>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <TheSearchBar></TheSearchBar>
      <v-spacer></v-spacer>
      <div
        class="align-self-center">
        <TheLoginForm></TheLoginForm>
      </div>
    </v-app-bar>
  </div>
</template>

<script>
import TheSearchBar from '@/components/TheSearchBar'
import TheLoginForm from '@/components/TheLoginForm'

export default {
  name: 'TheHeader',
  components: { TheLoginForm, TheSearchBar }
}
</script>

<style scoped>
.circle-gradient {
  background: rgb(227, 113, 255);
  background: radial-gradient(circle, rgba(227, 113, 255, 0.29177608543417366) 0%, rgba(198, 118, 255, 0.5354735644257703) 100%);
}
</style>
