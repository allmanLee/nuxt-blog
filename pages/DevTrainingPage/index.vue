<template>
  <v-container>
    <v-card>
      <v-card-title class="text-h6 text-sm-h3"> DEV 트레이닝 </v-card-title>
      <v-card-text> 개발하면서 공부했던 부분을 정리하였습니다.</v-card-text>
      <v-divider></v-divider>
      <v-container>
        <v-row
          ><v-col
            ><h1>VUE</h1>
            <v-container
              ><v-row>
                <!-- 이부분 for문 사용 -->
                <v-col cols="auto">
                  <v-card width="300px">
                    <v-card-title
                      class="text-h6 deep-purple--text font-weight-bold"
                    >
                      제목입니다
                    </v-card-title>
                    <v-card-subtitle> 이부분은 소제목 </v-card-subtitle>
                    <v-card-text>
                      이부분은 내용의 일부분입니다. 안녕하세요.
                      반갑습니다.</v-card-text
                    >
                    <v-card-subtitle> 2021-07-30 </v-card-subtitle>
                  </v-card> </v-col
                ><v-col cols="auto">
                  <v-card width="300px">
                    <v-card-title
                      class="text-h6 deep-purple--text font-weight-bold"
                    >
                      제목입니다
                    </v-card-title>
                    <v-card-subtitle> 이부분은 소제목 </v-card-subtitle>
                    <v-card-text>
                      이부분은 내용의 일부분입니다. 안녕하세요.
                      반갑습니다.</v-card-text
                    >
                    <v-card-subtitle> 2021-07-30 </v-card-subtitle>
                  </v-card> </v-col
                ><v-col cols="auto">
                  <v-card width="300px">
                    <v-card-title
                      class="text-h6 deep-purple--text font-weight-bold"
                    >
                      제목입니다
                    </v-card-title>
                    <v-card-subtitle> 이부분은 소제목 </v-card-subtitle>
                    <v-card-text>
                      이부분은 내용의 일부분입니다. 안녕하세요.
                      반갑습니다.</v-card-text
                    >
                    <v-card-subtitle> 2021-07-30 </v-card-subtitle>
                  </v-card> </v-col
                ><v-col cols="auto">
                  <v-card width="300px">
                    <v-card-title
                      class="text-h6 deep-purple--text font-weight-bold"
                    >
                      제목입니다
                    </v-card-title>
                    <v-card-subtitle> 이부분은 소제목 </v-card-subtitle>
                    <v-card-text>
                      이부분은 내용의 일부분입니다. 안녕하세요.
                      반갑습니다.</v-card-text
                    >
                    <v-card-subtitle> 2021-07-30 </v-card-subtitle>
                  </v-card> </v-col
                ><v-col cols="auto">
                  <v-card width="300px">
                    <v-card-title
                      class="text-h6 deep-purple--text font-weight-bold"
                    >
                      제목입니다
                    </v-card-title>
                    <v-card-subtitle> 이부분은 소제목 </v-card-subtitle>
                    <v-card-text>
                      이부분은 내용의 일부분입니다. 안녕하세요.
                      반갑습니다.</v-card-text
                    >
                    <v-card-subtitle> 2021-07-30 </v-card-subtitle>
                  </v-card> </v-col
                ><v-col cols="auto">
                  <v-card width="300px">
                    <v-card-title
                      class="text-h6 deep-purple--text font-weight-bold"
                    >
                      제목입니다
                    </v-card-title>
                    <v-card-subtitle> 이부분은 소제목 </v-card-subtitle>
                    <v-card-text>
                      이부분은 내용의 일부분입니다. 안녕하세요.
                      반갑습니다.</v-card-text
                    >
                    <v-card-subtitle> 2021-07-30 </v-card-subtitle>
                  </v-card> </v-col
                ><v-col cols="auto">
                  <v-card width="300px">
                    <v-card-title
                      class="text-h6 deep-purple--text font-weight-bold"
                    >
                      제목입니다
                    </v-card-title>
                    <v-card-subtitle> 이부분은 소제목 </v-card-subtitle>
                    <v-card-text>
                      이부분은 내용의 일부분입니다. 안녕하세요.
                      반갑습니다.</v-card-text
                    >
                    <v-card-subtitle> 2021-07-30 </v-card-subtitle>
                  </v-card> </v-col
                ><v-col cols="auto">
                  <v-card width="300px">
                    <v-card-title
                      class="text-h6 deep-purple--text font-weight-bold"
                    >
                      제목입니다
                    </v-card-title>
                    <v-card-subtitle> 이부분은 소제목 </v-card-subtitle>
                    <v-card-text>
                      이부분은 내용의 일부분입니다. 안녕하세요.
                      반갑습니다.</v-card-text
                    >
                    <v-card-subtitle> 2021-07-30 </v-card-subtitle>
                  </v-card> </v-col
                ><v-col cols="auto">
                  <v-card width="300px">
                    <v-card-title
                      class="text-h6 deep-purple--text font-weight-bold"
                    >
                      제목입니다
                    </v-card-title>
                    <v-card-subtitle> 이부분은 소제목 </v-card-subtitle>
                    <v-card-text>
                      이부분은 내용의 일부분입니다. 안녕하세요.
                      반갑습니다.</v-card-text
                    >
                    <v-card-subtitle> 2021-07-30 </v-card-subtitle>
                  </v-card>
                </v-col>
                <v-container class="max-width">
                  <v-pagination
                    v-model="page"
                    class="my-4"
                    :length="3"
                  ></v-pagination>
                </v-container>
              </v-row>
            </v-container>
          </v-col>
        </v-row>
      </v-container>
    </v-card>
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