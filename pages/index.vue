<template>
  <div>
    <v-sheet>
      <v-container v-if="$vuetify.breakpoint.xs">
        <v-card-title class="d-flex text-sm-h5 text-h6 font-weight-bold pa-0"
          >포트폴리오</v-card-title
        >
      </v-container>
      <portfolio-veiw></portfolio-veiw>
    </v-sheet>
    <v-sheet outlined class="mt-12">
      <!-- dev트레이닝 시트 -->
      <dev-training></dev-training>
    </v-sheet>
  </div>
</template>
<script>
import DevTraining from '../components/DevTraining.vue'
import PortfolioVeiw from '../components/PortfolioView.vue'

export default {
  components: { DevTraining, PortfolioVeiw },
  data() {
    return {}
  }
}
</script>


