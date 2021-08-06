<template>
  <div>
    <v-sheet>
      <portfolio-veiw></portfolio-veiw>
    </v-sheet>
    <v-sheet outlined class="mt-12">
      <!-- dev트레이닝 시트 -->
      <dev-training></dev-training>
    </v-sheet>
    <!--<v-sheet outlined class="mt-12">

      <issue-record> </issue-record>
    </v-sheet> -->
  </div>
</template>
<script>
import DevTraining from '../components/DevTraining.vue'

import PortfolioVeiw from '../components/PortfolioView.vue'

export default {
  components: { DevTraining, PortfolioVeiw },
  data() {
    return {}
  },
}
</script>


