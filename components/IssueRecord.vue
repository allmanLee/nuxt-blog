<template>
  <v-container>
    <v-container>
      <v-row dense justify="space-between">
        <v-col cols="auto">
          <v-card-title class="d-flex text-h4 font-weight-bold pa-0"
            >이슈기록</v-card-title
          > </v-col
        ><v-col cols="auto" align-self="center">
          <v-btn icon
            ><v-icon large color="black">{{ svgPath }}</v-icon></v-btn
          ></v-col
        >
      </v-row>
    </v-container>
    <!-- 이슈 테이블 -->
    <issue-record-table></issue-record-table>
  </v-container>
</template>
<script>
import { mdiViewGridOutline } from '@mdi/js'
import IssueRecordTable from './IssueRecordTable.vue'
export default {
  components: {
    IssueRecordTable,
  },
  data() {
    return {
      svgPath: mdiViewGridOutline,
      model: 0,
    }
  },
}
</script>