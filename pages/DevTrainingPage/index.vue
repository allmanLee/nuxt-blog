<template>
  <v-container class="my-12">
    <v-row align="center" justify="center">
      <v-col class="text-center" cols="12">
        <h1 class="text-h3 text-xs-h2 font-weight-bold mb-4">DEV 트레이닝</h1>
        <h4 class="mt-8">- 1주에 3회 기록 -</h4>
        <h5 class="font-weight-thin">DEV 트레이닝 개발하면서 정리하기</h5>
      </v-col>
    </v-row>
    <v-row justify="space-around">
      <v-col cols="12">
        <v-sheet outlined class="py-4 grey lighten-4">
          <v-chip-group class="d-flex px-4" v-model="amenities" column multiple>
            <v-chip outlined filter color="blue" v-for="tag in a" :key="tag">
              {{ tag }}
            </v-chip>
          </v-chip-group>
        </v-sheet>
      </v-col>
    </v-row>

    <v-divider></v-divider>
    <v-container>
      <v-row
        ><v-col>
          <v-container>
            <v-row class="pt-0">
              <!-- 이부분 for문 사용 -->
              <v-col
                v-for="(item, index) in articles"
                :key="index"
                cols="12"
                sm="6"
              >
                <v-hover v-slot="{ hover }">
                  <v-card
                    class="pa-6"
                    :elevation="hover ? 12 : 4"
                    rounded="xl"
                    :to="`/blog/tag/${item.slug}`"
                    nuxt
                  >
                    <v-card-title class="text-h6 text-xs-h4 font-weight-bold">
                      {{ item.title }}
                    </v-card-title>
                    <v-card-text class="text-sub-1 text-xs-body-1">
                      {{ item.description }}</v-card-text
                    >
                    <v-card-subtitle class="grey--text lighten-4">
                      {{ item.date }}
                    </v-card-subtitle>
                    <v-card-actions>
                      <v-chip-group
                        column
                        multiple
                        active-class="primary--text"
                      >
                        <v-chip v-for="tag in item.tags" :key="tag">
                          {{ tag }}
                        </v-chip>
                      </v-chip-group>
                    </v-card-actions>
                  </v-card>
                </v-hover>
              </v-col>
            </v-row>
          </v-container>
        </v-col>
      </v-row>
    </v-container>
  </v-container>
</template>
<script>
export default {
  async asyncData({ $content, params, error }) {
    const articles = await $content('/articles/DevTraining')
      .fetch()
      .catch(() => {
        error({ statusCode: 404, message: 'Page not found' })
      })
    console.log(articles)
    return { articles }
  },
  data() {
    return {
      a: ['Vue', 'JavaScript', 'HTML', 'CSS', 'GIT', 'NUXT'],
      page: 1,
      selectedTag: 2,
      amenities: [],
    }
  },
}
</script>

<style scoped>
.no-scroll {
  overflow-y: hidden !important;
  scrollbar-width: none;
}
</style>