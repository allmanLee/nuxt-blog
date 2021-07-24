<template>
  <v-app>
    <v-navigation-drawer app class="b">
      <v-list-item height="200px">
        <v-list-item-content>
          <v-list-item-title
            class="ma-3 pa-2 text-h5 font-weight-bold text-center"
          >
            ALLMAN.git
          </v-list-item-title>
          <v-list-item-subtitle class="text-h8 font-weight-bold text-center">
            FRONT-END DEVELOPER
          </v-list-item-subtitle>
          <v-list-item-subtitle class="mb-4 text-center">
            SINCE 2021.07.22
          </v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>

      <v-divider></v-divider>
      <v-list-item class="grey lighten-3">
        <v-list-item-icon>
          <v-icon class="text-center">{{ svgPath }}</v-icon>
        </v-list-item-icon>

        <v-list-item-content class="py-0">
          <v-list-item class="text-subtitle-2">
            <span class="px-2 my-0 text-grey">TODAY: 00</span>
          </v-list-item>
          <v-list-item class="text-subtitle-2">
            <span class="px-2 my-0 text-grey">TOTAL: 00</span>
          </v-list-item>
        </v-list-item-content>
      </v-list-item>
      <v-divider class="mt-4"></v-divider>
      <v-treeview :items="items" open-on-click></v-treeview>
    </v-navigation-drawer>
    <v-main>
      <nuxt></nuxt>
    </v-main>
  </v-app>
</template>
<script>
import { mdiAccount } from '@mdi/js'

export default {
  data: () => ({
    svgPath: mdiAccount,
    items: [
      { id: 'about-list', name: 'ALLMAN 이란? (About)' },
      {
        id: 'issue-list',
        name: '이슈기록 (Issue):',
        children: [
          { id: 'issue-list-1', name: '-' },
          { id: 'issue-list-2', name: '-' },
          { id: 'issue-list-3', name: '-' },
        ],
      },
      {
        id: 'dev',
        name: 'DEV 트레이닝 (DEV Training)',
        children: [
          { id: 'dev-list-1', name: '-' },
          { id: 'dev-list-2', name: '-' },
          { id: 'dev-list-3', name: '-' },
        ],
      },
      {
        id: 'portfolio-list',
        name: '포트폴리오 (Portfolio)',
        children: [
          { id: 'portfolio-list-1', name: '-' },
          { id: 'portfolio2-list-2', name: '-' },
          { id: 'portfolio3-list-3', name: '-' },
        ],
      },
    ],
  }),
}
</script>
<style scoped>
.b {
  display: relative;
}
.a {
  display: absolute;
  bottom: 0px;
}
</style>
