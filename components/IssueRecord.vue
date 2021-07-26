<template>
  <v-container>
    <v-container>
      <v-row justify="space-between">
        <v-col cols="auto">
          <v-card-title class="d-flex text-h4 font-weight-bold"
            >DEV 트레이닝</v-card-title
          > </v-col
        ><v-col cols="auto" align-self="center">
          <v-btn icon
            ><v-icon large color="black">{{ svgPath }}</v-icon></v-btn
          ></v-col
        >
      </v-row>
    </v-container>
  </v-container>
</template>
<script>
import { mdiViewGridOutline } from '@mdi/js'
export default {
  data() {
    return {
      svgPath: mdiViewGridOutline,
      model: 0,
    }
  },
}
</script>