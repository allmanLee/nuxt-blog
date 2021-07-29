<template>
  <v-card outlined max-height="200px">
    <v-card-text>
      <v-container>
        <v-row id="issueHeader" class="font-weight-bold">
          <v-col cols="6"> Title </v-col>

          <v-col cols="3"> Project </v-col>
          <v-col class="text-center"> Recommend</v-col>
        </v-row>
        <v-row dense><v-divider></v-divider></v-row>
        <v-row class="issueTableRow" align="center">
          <v-col cols="6"> slot 문제 발생</v-col>
          <v-col cols="3"> nuxt-blog </v-col>
          <v-col class="text-center">
            <v-btn icon>
              <v-icon dark>{{ icons.heartOutline }}</v-icon>
            </v-btn>
          </v-col>
        </v-row>
        <v-row class="issueTableRow" align="center">
          <v-col cols="6"> slot 문제 발생</v-col>
          <v-col cols="3"> nuxt-blog </v-col>
          <v-col class="text-center">
            <v-btn icon>
              <v-icon dark>{{ icons.heartOutline }}</v-icon>
            </v-btn>
          </v-col>
        </v-row>
      </v-container>
    </v-card-text>
  </v-card>
</template>
<script>
import { mdiCardsHeart, mdiHeartOutline } from '@mdi/js'
export default {
  data() {
    return {
      icons: {
        heart: mdiCardsHeart,
        heartOutline: mdiHeartOutline,
      },
      headers: [
        {
          text: 'Title',
          align: 'start',
          value: 'title',
        },
        { text: 'Project', value: 'project' },
        { text: 'Date', value: 'date' },
        { text: 'Check', value: 'check' },
        { text: 'Star', value: 'star' },
      ],
      issueData: [
        {
          title: 'Frozen Yogurt',
        },
      ],
    }
  },
}
</script>
