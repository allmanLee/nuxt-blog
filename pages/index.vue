<template>
  <div>
    <v-sheet outlined class="mt-12">
      <!-- dev트레이닝 시트 -->
      <dev-training></dev-training>
    </v-sheet>
    <v-sheet outlined class="mt-12">
      <!-- 이슈 시트 -->
      <issue-record> </issue-record>
    </v-sheet>
  </div>
</template>
<script>
import DevTraining from '../components/DevTraining.vue'
import IssueRecord from '../components/IssueRecord.vue'

export default {
  components: { DevTraining, IssueRecord },
  data() {
    return {}
  },
}
</script>


