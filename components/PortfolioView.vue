<template>
  <div class="pa-3">
    <v-carousel
      v-model="indexOfSelectedBanner"
      height="auto"
      class="rounded-xl"
      hide-delimiters
    >
      <v-carousel-item v-for="({ portfolioBgColor }, i) in portfolio" :key="i"
        ><v-card :color="portfolioBgColor">
          <v-container class="pa-0">
            <v-row align="center" justify="center">
              <v-col>
                <v-img :src="require('../assets/img/bennerHanta.png')"></v-img>
              </v-col>
            </v-row>
          </v-container>
        </v-card>
        <v-overlay
          color="linear-gradient(to top,rgba(0, 0, 0, 0.4) 20%, rgba(0, 0, 0, 0) 80%)"
          class="banner-gradiant-bg"
          absolute
        ></v-overlay>
      </v-carousel-item>

      <v-footer
        v-if="!$vuetify.breakpoint.xs"
        absolute
        color="rgba(255,255,255,0.2)"
        class="pa-0"
      >
        <v-container class="pa-0">
          <v-tabs
            light
            background-color="rgba(0,0,0,0)"
            v-model="indexOfSelectedBanner"
            slider-color="purple"
            height="80"
            fixed-tabs
            centered
          >
            <v-tab
              v-for="(
                { titleOfPortfolio, descriptionOfPortfolio }, index
              ) in portfolio"
              :key="index"
              class="px-8 d-flex flex-column white--text text-truncate"
              active-class="banner-btn-active"
            >
              <dd class="text-sub-2 font-weigh-medium mb-2">
                {{ descriptionOfPortfolio }}
              </dd>
              <dt class="text-h5 font-weight-bold text-uppercase">
                {{ titleOfPortfolio }}
              </dt>
            </v-tab>
          </v-tabs>
        </v-container>
      </v-footer>
      <v-footer v-else absolute color="rgba(255,255,255,0.0)" class="pa-0">
        <v-tabs
          light
          background-color="rgba(0,0,0,0)"
          v-model="indexOfSelectedBanner"
          slider-color="purple"
          height="20"
          fixed-tabs
          centered
        >
          <v-tab
            v-for="(item, index) in portfolio"
            :key="index"
            class="px-8 d-flex flex-column"
            active-class=""
          >
          </v-tab>
        </v-tabs>
      </v-footer>
    </v-carousel>
  </div>
</template>
<script>
export default {
  data() {
    return {
      portfolio: [
        {
          portfolioBgColor: '#F3E5F5',
          titleOfPortfolio: '한타',
          descriptionOfPortfolio: '게임 팀 매칭 어플리케이션',
          urlOfPortfolio: '~assets/img/benner-hanta.png',
        },
        {
          portfolioBgColor: '#F3E5F5',
          titleOfPortfolio: '라프텔',
          descriptionOfPortfolio: '에니메이션 스트리밍 서비스',
          urlOfPortfolio: '~assets/img/benner-hanta.png',
        },
        {
          portfolioBgColor: '#F3E5F5',
          titleOfPortfolio: 'TAXIs',
          descriptionOfPortfolio: '택시기사님 커뮤니티',
          urlOfPortfolio: '~assets/img/benner-hanta.png',
        },
        {
          portfolioBgColor: '#F3E5F5',
          titleOfPortfolio: '포트폴리오',
          descriptionOfPortfolio: '블로그 & 포트폴리오 렌딩페이지',
          urlOfPortfolio: '~assets/img/benner-hanta.png',
        },
      ],
      indexOfSelectedBanner: 0,
    }
  },
}
</script>
<style scoped>
.banner-gradiant-bg {
  background: linear-gradient(
    to top,
    rgba(0, 0, 0, 0.14) 20%,
    rgba(0, 0, 0, 0) 40%
  );
}
.banner-bg {
  background-color: rgba(255, 255, 255, 0.2) !important;
}
.banner-btn {
  background-color: rgba(255, 255, 255, 0) !important;
}
.banner-btn-active {
  background-color: rgba(0, 0, 0, 0.6) !important;
  color: rgba(255, 255, 255);
}
</style>