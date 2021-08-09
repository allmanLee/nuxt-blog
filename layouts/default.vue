<template>
  <v-app>
    <v-app-bar elevate-on-scroll height="60px" clipped-right color="white" app>
      <v-container>
        <v-row justify="end" align="center">
          <v-col>
            <v-app-bar-nav-icon
              v-if="
                $vuetify.breakpoint.xs ||
                $vuetify.breakpoint.sm ||
                $vuetify.breakpoint.md
              "
              @click="drawer = true"
            ></v-app-bar-nav-icon
          ></v-col>

          <v-col
            cols="auto"
            v-if="$vuetify.breakpoint.xl || $vuetify.breakpoint.lg"
          >
            <v-btn large text
              ><v-icon class="mr-2">{{ BookOpenVariant }}</v-icon> DEV
              트레이닝</v-btn
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
    <v-navigation-drawer temporary fixed v-model="drawer" width="300" app>
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
              <v-list-item-title class="font-weight-blod"
                >DEV트레이닝</v-list-item-title
              >
            </v-list-item-content>
          </v-list-item>
          <v-list-item href="DevTrainingPage" nuxt>
            <v-list-item-content>
              <v-list-item-title class="font-weight-blod"
                >About</v-list-item-title
              >
            </v-list-item-content>
          </v-list-item>
          <v-list-item href="DevTrainingPage" nuxt>
            <v-list-item-content>
              <v-list-item-title class="font-weight-blod"
                >Portfolio</v-list-item-title
              >
            </v-list-item-content>
          </v-list-item>
        </v-list-item-group>
      </v-list>
      <v-footer outlined absolute class="justify-center">
        <visitor-counter></visitor-counter>
      </v-footer>
    </v-navigation-drawer>

    <v-main>
      <Nuxt></Nuxt>
    </v-main>
  </v-app>
</template>
<script>
import { mapState } from 'vuex'
import { mdiAccount, mdiMagnify, mdiBookOpenVariant } from '@mdi/js'

// import VisitorCounter from '../components/VisitorCounter'

export default {
  components: {
    // VisitorCounter,
  },
  data: () => ({
    svgPath: mdiAccount,
    searchIcon: mdiMagnify,
    BookOpenVariant: mdiBookOpenVariant,
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
