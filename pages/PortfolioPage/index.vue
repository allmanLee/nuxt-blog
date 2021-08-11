<template>
  <div>
    <v-window show-arrows show-arrows-on-hover vertical v-model="window">
      <template v-slot:prev="{ on, attrs }">
        <v-btn color="success" v-bind="attrs" v-on="on">Previous slide</v-btn>
      </template>
      <template v-slot:next="{ on, attrs }">
        <v-btn color="info" v-bind="attrs" v-on="on">Next slide</v-btn>
      </template>

      <v-window-item>
        <v-container>
          <v-row align="center" justify="center">
            <v-col cols="auto" order="2">
              <v-card-title
                class="portfolio-title text-sm-h4 text-h5 font-weight-bold py-2"
              >
                하이브리드 어플리케이션<br />
                HANTA - 게임팀 매칭
              </v-card-title>
              <v-card-subtitle
                class="portfolio-sub text-body-1 text--secondary mt-6 py-0"
                >Html, Css, OnsenUI, VUE, Cordova<br />
                프로필카드로 간단하게 팀원을 찾아볼 수 있습니다.
              </v-card-subtitle>
              <v-card-actions class="mt-8">
                <v-btn class="px-6" large dark rounded
                  ><v-icon>{{ githubIcon }}</v-icon></v-btn
                >
                <v-btn class="px-6 font-weight-bold" outlined large rounded
                  >DEMO</v-btn
                >
              </v-card-actions>
            </v-col>
            <v-col cols="auto" order="1" class="portfolio-box text-center">
              <v-img
                id="hantaImage1"
                class="portfolio-img rounded-xl elevation-9 d-inline-block"
                :width="$vuetify.breakpoint.xs ? '200px' : '300px'"
                :src="require('~/assets/img/hanta-5.png')"
              ></v-img>
            </v-col>
          </v-row>
        </v-container>
      </v-window-item>
    </v-window>
  </div>
</template>
<script>
import { mdiGithub } from '@mdi/js'
export default {
  data() {
    return {
      githubIcon: mdiGithub,
      window: 0,
    }
  },
}
</script>
<style scoped>
.portfolio-title,
.portfolio-sub {
  line-height: 1.5;
}
</style>