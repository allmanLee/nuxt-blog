<template>
  <v-app>
    <v-app-bar
      elevate-on-scroll
      height="60px"
      clipped-left
      clipped-right
      color="white"
      app
    >
      <v-app-bar-nav-icon
        v-if="
          $vuetify.breakpoint.xs ||
          $vuetify.breakpoint.sm ||
          $vuetify.breakpoint.md
        "
        @click="drawer = true"
      ></v-app-bar-nav-icon>

      <v-container>
        <v-row justify="end" align="center">
          <v-col
            cols="auto"
            v-if="$vuetify.breakpoint.xl || $vuetify.breakpoint.lg"
          >
            <v-btn large text href="DevTrainingPage" nuxt
              ><span class="font-weight-bold">DEV</span> 트레이닝</v-btn
            >
          </v-col>
          <v-col
            cols="auto"
            v-if="$vuetify.breakpoint.xl || $vuetify.breakpoint.lg"
          >
            <v-btn large text class="font-weight-light"> PORTFOLIO</v-btn>
          </v-col>
          <v-col
            cols="auto"
            v-if="$vuetify.breakpoint.xl || $vuetify.breakpoint.lg"
          >
            <v-btn large text class="font-weight-light"> ABOUT</v-btn>
          </v-col>
        </v-row>
      </v-container>
    </v-app-bar>
    <keep-alive>
      <v-card class="pa-4">
        <v-navigation-drawer
          temporary
          fixed
          v-model="drawer"
          class="rounded-xl"
          app
        >
          <v-list-item height="200px">
            <v-list-item-content class="my-xs-4,my-12">
              <v-list-item-title
                class="
                  ma-3
                  pa-2
                  text-h3 text-center
                  purple--text
                  font-weight-bold
                "
              >
                Allman
              </v-list-item-title>
              <v-list-item-subtitle
                class="text-h8 font-weight-bold text-center"
              >
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
              color="purple"
              mandatory
              v-model="group"
              active-class="text--accent-4"
            >
              <v-list-item href="/" nuxt value="home">
                <v-list-item-icon color="purple"
                  ><v-icon>{{ mdiHomeIcon }}</v-icon></v-list-item-icon
                >
                <v-list-item-content>
                  <v-list-item-title class="font-weight-blod"
                    >HOME</v-list-item-title
                  >
                </v-list-item-content>
              </v-list-item>
              <v-subheader>메뉴</v-subheader>
              <v-list-item href="DevTrainingPage" value="dev" nuxt>
                <v-list-item-icon color="purple"
                  ><v-icon>{{ BookOpenVariant }}</v-icon></v-list-item-icon
                >
                <v-list-item-content>
                  <v-list-item-title class="font-weight-blod"
                    >DEV트레이닝</v-list-item-title
                  >
                </v-list-item-content>
              </v-list-item>
              <v-list-item href="DevTrainingPage" value="about" nuxt>
                <v-list-item-icon
                  ><v-icon>{{ mdiFaceProfileIcon }}</v-icon></v-list-item-icon
                >
                <v-list-item-content>
                  <v-list-item-title class="font-weight-blod"
                    >어바웃</v-list-item-title
                  >
                </v-list-item-content>
              </v-list-item>
              <v-list-item href="DevTrainingPage" value="portfolio" nuxt>
                <v-list-item-icon
                  ><v-icon>{{ mdiFolderStarIcon }}</v-icon></v-list-item-icon
                >
                <v-list-item-content>
                  <v-list-item-title class="font-weight-blod"
                    >포트폴리오</v-list-item-title
                  >
                </v-list-item-content>
              </v-list-item>
            </v-list-item-group>
          </v-list>
          <v-footer outlined absolute class="justify-center">
            <visitor-counter></visitor-counter>
          </v-footer>
        </v-navigation-drawer>
      </v-card>
    </keep-alive>
    <v-main class="pa-0">
      <Nuxt></Nuxt>
    </v-main>
  </v-app>
</template>
<script>
import { mapState } from 'vuex'
import {
  mdiHome,
  mdiAccount,
  mdiFolderStar,
  mdiFaceProfile,
  mdiMagnify,
  mdiBookOpenVariant,
} from '@mdi/js'

// import VisitorCounter from '../components/VisitorCounter'

export default {
  components: {
    // VisitorCounter,
  },
  data: () => ({
    svgPath: mdiAccount,
    searchIcon: mdiMagnify,
    BookOpenVariant: mdiBookOpenVariant,
    mdiFaceProfileIcon: mdiFaceProfile,
    mdiFolderStarIcon: mdiFolderStar,
    mdiHomeIcon: mdiHome,
    drawer: false,
    group: '',
    collapse: true,
    shrink: true,
    listIndex: 2,
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
