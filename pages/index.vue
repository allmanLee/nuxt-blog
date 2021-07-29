<template>
  <v-main class="pa-6">
    <v-container>
      <v-row class="d-flex" cols="col-2" justify="space-between">
        <v-col>
          <v-autocomplete
            label="검색어를 입력해주세요"
            hide-details
            dense
            clearable
            filled
            rounded
            solo
          ></v-autocomplete>
        </v-col>
        <v-col class="d-inline-flex" cols="auto"
          ><v-btn text>로그인</v-btn></v-col
        >
      </v-row>
    </v-container>
    <v-sheet outlined class="mt-12">
      <!-- dev트레이닝 시트 -->
      <dev-training></dev-training>
    </v-sheet>
    <v-sheet outlined class="mt-12">
      <!-- 이슈 시트 -->
      <issue-record> </issue-record>
    </v-sheet>
  </v-main>
</template>
<script>
import DevTraining from '../components/DevTraining.vue'
import IssueRecord from '../components/IssueRecord.vue'
export default {
  components: { DevTraining, IssueRecord },
  setup() {},
}
</script>


