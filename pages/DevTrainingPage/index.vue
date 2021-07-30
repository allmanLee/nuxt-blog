<template>
  <v-container>
    <v-parallax src="/img/blogBackgroud.jpg">
      <v-row align="center" justify="center">
        <v-col class="text-center" cols="12">
          <h1 class="text-h2 font-weight-bold mb-4">VUE</h1>
          <h4 class="mt-8">- DEV 트레이닝 -</h4>
          <h5 class="font-weight-thin">DEV 트레이닝 개발하면서 정리하기</h5>
        </v-col>
      </v-row>
    </v-parallax>

    <v-divider></v-divider>
    <v-container>
      <v-row></v-row>
      <v-row
        ><v-col
          ><v-card outlined>
            <v-container
              ><v-row dense class="justify-center"> </v-row>
              <v-row class="pt-0">
                <!-- 이부분 for문 사용 -->
                <v-col v-for="indexs in 3" :key="indexs" cols="12">
                  <v-hover v-slot="{ hover }">
                    <v-card
                      class="pa-6"
                      :elevation="hover ? 12 : 4"
                      rounded="xl"
                    >
                      <v-card-title class="text-h6 text-xs-h4 font-weight-bold">
                        제목입니다
                      </v-card-title>
                      <v-card-text class="text-sub-1 text-xs-body-1">
                        이부분은 내용의 일부분입니다. 안녕하세요.
                        반갑습니다.</v-card-text
                      >
                      <v-card-subtitle class="grey--text lighten-4">
                        2021-07-30
                      </v-card-subtitle>
                    </v-card>
                  </v-hover>
                </v-col>
              </v-row>
            </v-container>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </v-container>
</template>
<script>
export default {
  data() {
    return {
      page: 1,
    }
  },
}
</script>
<script>
export default {}
</script>
<style scoped>
.no-scroll {
  overflow-y: hidden !important;
  scrollbar-width: none;
}
</style>