<template>
  <v-app>
    <v-navigation-drawer v-model="drawer" fixed dark app>
      <v-list-item height="200px">
        <v-list-item-content class="my-xs-4,my-12">
          <v-list-item-title class="ma-3 pa-2 text-h5 text-center">
            {{ offsetTop }}
          </v-list-item-title>
          <v-list-item-subtitle class="text-h8 font-weight-bold text-center">
            FRONT-END DEVELOPER
          </v-list-item-subtitle>
          <v-list-item-subtitle class="mb-4 text-center">
            SINCE 2021.07.22
          </v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>

      <v-divider class="mt-4"></v-divider>
      <v-list>
        <v-list-item-group
          mandatory
          v-model="group"
          active-class="text--accent-4"
        >
          <v-subheader>메뉴</v-subheader>
          <v-list-item href="DevTrainingPage" nuxt>
            <v-list-item-content>
              <v-list-item-title>DEV트레이닝</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
          <v-list-item href="DevTrainingPage" nuxt>
            <v-list-item-content>
              <v-list-item-title>DEV트레이닝</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
          <v-list-item href="DevTrainingPage" nuxt>
            <v-list-item-content>
              <v-list-item-title>DEV트레이닝</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
          <v-list-item href="DevTrainingPage" nuxt>
            <v-list-item-content>
              <v-list-item-title>DEV트레이닝</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list-item-group>
      </v-list>
      <v-footer outlined absolute class="justify-center">
        <visitor-counter></visitor-counter>
      </v-footer>
    </v-navigation-drawer>

    <v-main>
      <v-app-bar app dark>
        <v-container>
          <v-row class="d-flex pa-0" justify="space-between">
            <v-col class="hidden-lg-and-up pa-0">
              <v-app-bar-nav-icon
                @click.stop="drawer = !drawer"
              ></v-app-bar-nav-icon>
              <!-- <v-btn icon><v-icon></v-icon></v-btn> -->
            </v-col>
            <v-col
              class="pa-0"
              :cols="$vuetify.breakpoint.name === 'xs' ? '8' : ''"
            >
              <v-fade-transition>
                <v-text-field
                  v-if="offsetTop <= 0"
                  label="검색어를 입력해주세요."
                  single-line
                  solo
                  :append-icon="searchIcon"
                  hide-details="true"
                ></v-text-field>
                <v-btn v-else icon
                  ><v-icon>{{ searchIcon }}</v-icon></v-btn
                >
              </v-fade-transition>
            </v-col>
            <!-- <v-col class="d-inline-flex align-center pa-0" cols="auto"
              ><v-btn text>로그인</v-btn></v-col
            > -->
          </v-row>
        </v-container>
      </v-app-bar>
      <Nuxt></Nuxt>
      <v-card></v-card>
    </v-main>
  </v-app>
</template>
<script>
import { mapState } from 'vuex'
import { mdiAccount, mdiMagnify } from '@mdi/js'

import VisitorCounter from '../components/VisitorCounter'

export default {
  components: {
    VisitorCounter,
  },
  data: () => ({
    svgPath: mdiAccount,
    searchIcon: mdiMagnify,
    drawer: false,
    group: '',
    collapse: true,
    shrink: true,
    listIndex: 2,
    offsetTop: 0,
  }),

  computed: {
    ...mapState({
      blogList: (state) => state.ui.list,
    }),
  },
  methods: {
    collapseToggle() {
      if (this.collapse === true) {
        this.collapse = false
        console.log(this.collapse)
      }
    },
  },
}
</script>
<style scoped>
.nuxt-link {
  text-decoration: none;
  color: black;
}

.scrollable {
  height: 100%;
  scrollbar-width: 6px;
}
</style>
