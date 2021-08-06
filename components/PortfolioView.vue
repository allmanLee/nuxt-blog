<template>
  <v-card class="ma-20">
    <v-carousel
      v-model="indexOfSelectedBanner"
      height="560"
      class="pa-0"
      hide-delimiters
    >
      <v-carousel-item v-for="({ portfolioBgColor }, i) in portfolio" :key="i">
        <v-sheet :color="portfolioBgColor" height="110%" tile>
          <v-row class="fill-height" align="center" justify="center">
            <img height="600" src="~assets/img/bennerHanta.png" />
            <!-- <div class="text-h2">Slide {{ i + 1 }}</div> -->
          </v-row>
        </v-sheet>
      </v-carousel-item>
      <v-footer absolute class="pa-0 banner-bg justify-center" light>
        <v-btn-toggle
          v-model="indexOfSelectedBanner"
          active-class="banner-btn-active"
          class="ma-0 pa-0 justify-center banner-btn"
          ><v-btn
            width="220px"
            class="banner-btn"
            height="60px"
            v-for="({ titleOfPortfolio }, index) in portfolio"
            :key="index"
            >{{ titleOfPortfolio }}</v-btn
          ></v-btn-toggle
        >
      </v-footer>
    </v-carousel>
  </v-card>
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