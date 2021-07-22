<template>
  <v-app>
    <v-navigation-drawer app>
      <v-list-item>
        <v-list-item-content>
          <v-list-item-title class="ma-4 text-h5 font-weight-bold">
            ALLMAN.git
          </v-list-item-title>
          <v-list-item-subtitle class="ml-4 text-subtitle-2">
            #초심의 열정으로
          </v-list-item-subtitle>
          <v-list-item-subtitle class="ml-4 text-subtitle-2">
            FRONT-END DEVELOPER
          </v-list-item-subtitle>
          <v-list-item-subtitle class="ml-4 mb-4">
            SINCE 2021.07.22
          </v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>

      <v-divider></v-divider>
    </v-navigation-drawer>
    <v-main>
      <nuxt></nuxt>
    </v-main>
  </v-app>
</template>
<script>
// import { mdiAccount, mdiPencil, mdiShareVariant, mdiDelete } from '@mdi/js'

export default {}
</script>