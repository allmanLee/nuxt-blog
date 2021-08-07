<template>
  <v-carousel
    v-model="indexOfSelectedBanner"
    height="auto"
    class="pa-0"
    hide-delimiters
  >
    <v-carousel-item v-for="({ portfolioBgColor }, i) in portfolio" :key="i">
      <v-row align="center" justify="center">
        <v-col>
          <v-card :color="portfolioBgColor" tile>
            <v-img :src="require('../assets/img/bennerHanta.png')"></v-img>
          </v-card>
        </v-col>
      </v-row>
    </v-carousel-item>
    <v-footer absolute class="pa-0 banner-bg" light>
      <v-slide-group show-arrows v-model="indexOfSelectedBanner">
        <v-slide-item
          v-for="({ titleOfPortfolio }, index) in portfolio"
          :key="index"
          class="ma-0 pa-0 justify-center banner-btn"
          v-slot="{ active }"
        >
          <v-btn
            width="220px"
            class="banner-btn"
            height="60px"
            :input-value="active"
            active-class="banner-btn-active"
            @click="toggle"
          >
            {{ titleOfPortfolio }}
          </v-btn>
        </v-slide-item>
      </v-slide-group>
    </v-footer>
  </v-carousel>
</template>
<script>
export default {
  data() {
    return {
      portfolio: [
        {
          portfolioBgColor: '#F3E5F5',
          titleOfPortfolio: 'HANTA-게임팀 매칭',
          urlOfPortfolio: '~assets/img/benner-hanta.png',
        },
        {
          portfolioBgColor: '#F3E5F5',
          titleOfPortfolio: 'HANTA-게임팀 매칭',
          urlOfPortfolio: '~assets/img/benner-hanta.png',
        },
        {
          portfolioBgColor: '#F3E5F5',
          titleOfPortfolio: 'HANTA-게임팀 매칭',
          urlOfPortfolio: '~assets/img/benner-hanta.png',
        },
        {
          portfolioBgColor: '#F3E5F5',
          titleOfPortfolio: 'HANTA-게임팀 매칭',
          urlOfPortfolio: '~assets/img/benner-hanta.png',
        },
      ],
      indexOfSelectedBanner: 0,
    }
  },
}
</script>
<style scoped>
.banner-bg {
  background-color: rgba(255, 255, 255, 0.2) !important;
}
.banner-btn {
  background-color: rgba(255, 255, 255, 0) !important;

  color: rgba(0, 0, 0, 0.4);
}
.banner-btn-active {
  color: black !important;
}
</style>