<template>
  <v-app>
    <v-navigation-drawer v-model="drawer" fixed app class="b">
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

      <v-list-item dense class="grey lighten-3">
        <v-list-item dense class="text-caption">
          <span class="px-2 my-0 text-grey">오늘: 00</span>
        </v-list-item>
        <v-list-item dense class="text-caption">
          <span class="px-2 my-0 text-grey">전체: 00</span>
        </v-list-item>
      </v-list-item>
      <v-divider class="mt-4"></v-divider>
      <v-list nav dense>
        <v-list-item-group
          v-model="group"
          class="font-weight-bold"
          active-class="deep-purple--text text--accent-4"
        >
          <v-subheader>메뉴</v-subheader>
          <v-list-item>
            <v-list-item-content>
              <nuxt-link
                to="DevTrainingPage"
                class="nuxt-link"
                active-class="deep-purple--text"
              >
                <v-list-item-title v-text="'DEV 트레이닝'"></v-list-item-title>
              </nuxt-link>
            </v-list-item-content>
          </v-list-item>

          <v-list-item>
            <v-list-item-title>이슈기록</v-list-item-title>
          </v-list-item>

          <v-list-item>
            <v-list-item-title>About</v-list-item-title>
          </v-list-item>

          <v-list-item>
            <v-list-item-title>Portfolio</v-list-item-title>
          </v-list-item>
        </v-list-item-group>
      </v-list>

      <v-footer absolute class="justify-center pl-0">
        <v-btn left class="mr-1 text--white" color="primary ma-4 pa-6">
          Send Email</v-btn
        >
      </v-footer>
    </v-navigation-drawer>
    <v-main>
      <v-container>
        <v-row class="d-flex" cols="col-2" justify="space-between">
          <v-col class="hidden-lg-and-up">
            <v-app-bar-nav-icon
              @click.stop="drawer = !drawer"
            ></v-app-bar-nav-icon>
            <!-- <v-btn icon><v-icon></v-icon></v-btn> -->
          </v-col>
          <v-col
            :cols="$vuetify.breakpoint.name === 'xs' ? '12' : ''"
            :order="$vuetify.breakpoint.name === 'xs' ? 'last' : ''"
          >
            <v-text-field
              label="검색어를 입력해주세요."
              single-line
              solo
              :append-icon="searchIcon"
              hide-details="true"
            ></v-text-field>
          </v-col>
          <v-col class="d-inline-flex align-center" cols="auto"
            ><v-btn text>로그인</v-btn></v-col
          >
        </v-row>
      </v-container>
      <Nuxt></Nuxt>
    </v-main>
  </v-app>
</template>
<script>
import { mdiAccount, mdiMagnify } from '@mdi/js'

export default {
  data: () => ({
    svgPath: mdiAccount,
    searchIcon: mdiMagnify,
    drawer: true,
    group: '',
  }),
}
</script>
<style scoped>
.nuxt-link {
  text-decoration: none;
  color: black;
}
.b {
  display: relative;
}
.a {
  display: absolute;
  bottom: 0px;
}
.scrollable {
  height: 100%;
  scrollbar-width: 6px;
}
.nuxt-link-active {
  color: purple;
}
</style>
