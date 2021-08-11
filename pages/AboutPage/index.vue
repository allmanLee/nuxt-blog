<template>
  <v-container>
    <v-row>
      <v-col cols="12" sm="6" class="pr-14">
        <h4>LEEYOUJUN</h4>
        <h1 class="mb-12">이유준</h1>
        <v-row justify="center">
          <v-col>
            <h4 class="text-h6">1. 기본에 충실한 웹표준 퍼블리싱</h4>
            <br />
            <div width="120px" class="text--secondary">
              DOM에 대한 이해와 렌더링에 대한이해를 하여 최대한 딜레이없는 뷰를
              구현합니다. 또한 보기 좋은 HTML 과 CSS를 작성하기 위해 노력하여
              협업 능률을 향상하도록 노력하고있습니다.
            </div>
          </v-col>
        </v-row>
        <v-row justify="center">
          <v-col>
            <h4 class="text-h6">2. 하이브리드앱 구현</h4>
            <br />
            <div width="120px" class="text--secondary">
              vue.js로 제작한 SPA를 cordova로 빌드하여 IOS, Android 앱을
              구현함으로서 효율을 챙기면서 다양한 기기의 기능을 이용하기위한
              플러그인을 사용하기 위한 개발 경험이 있습니다.
            </div>
          </v-col>
        </v-row>
        <v-row justify="center">
          <v-col>
            <h4 class="text-h6">3. 백엔드</h4>
            <br />
            <div width="120px" class="text--secondary">
              JWT방식 로그인 API를 구현한 경험이 있으며, RDBMS를 대학시절
              공부하였으며, 웹서비스 라프텔을 클론 코딩하며(영상
              스트리밍서비스)를 구현한 경험이 있습니다.
            </div>
          </v-col>
        </v-row>
        <v-row justify="center">
          <v-col>
            <h4 class="text-h6">4. ZEPLINE, GIT 협업</h4>
            <br />
            <div width="120px" class="text--secondary">
              개발자들과의 협업을 위한 기본적인 GIT 협업환경에 적응하기 위해
              여러 상화을 고려하며 연습했으며, 또한 직접 앱을 디자인하여
              프론트엔드 개발자로서 Zepline 으로 디자이너와의 협업도
              트레이닝하였습니다.
            </div>
          </v-col>
        </v-row>
      </v-col>
      <v-col>
        <v-card>
          <v-card-text>
            <v-text-field
              label="받는 사람"
              value="muenzz119@naver.com"
              disabled
            >
            </v-text-field>
            <v-text-field label="보내는 사람"> </v-text-field>
            <v-textarea label="보내는 내용"> </v-textarea>
            <v-btn color="purple" dark>이메일 보내기</v-btn>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
export default {
  data() {
    return {}
  },
}
</script>