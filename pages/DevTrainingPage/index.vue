<template>
  <v-container>
    <v-row>
      <v-col>
        <div class="text-h4 my-4">DEV 트레이닝</div>
        <div class="text-h5">
          <span class="font-weight-bold mr-2">주 3회</span>업로드 하고있습니다!
        </div>
        <v-card class="mt-4" flat outlined>
          <v-container>
            <v-row>
              <v-col>
                <v-text-field
                  v-model="q"
                  @input="$fetch"
                  label="검색어를 입력해주세요."
                  color="purple"
                  single-line
                  outlined
                  background-color="#F3E5F5"
                  :append-icon="searchIcon"
                  hide-details="true"
                ></v-text-field>
              </v-col>
            </v-row>
            <v-row>
              <v-col>
                <v-card-subtitle class="pa-0">기술 태그</v-card-subtitle>
                <v-chip-group
                  class="px-0 font-weight-bold"
                  v-model="amenities"
                  column
                  multiple
                >
                  <v-chip
                    active-class="purple white--text"
                    label
                    v-for="tag in navTags"
                    :key="tag"
                  >
                    {{ tag }}
                  </v-chip>
                </v-chip-group>
              </v-col>
            </v-row>
          </v-container>
        </v-card>
      </v-col>
    </v-row>

    <v-container>
      <v-row class="text-h6 font-weight-bold mt-6"
        ><v-col>전체 <v-divider></v-divider></v-col
      ></v-row>
      <v-row
        ><v-col>
          <v-row class="pt-0">
            <!-- 이부분 for문 사용 -->
            <v-col v-for="(item, index) in articles" :key="index">
              <v-hover v-slot="{ hover }">
                <v-card
                  :elevation="hover ? 6 : 1"
                  rounded="lg"
                  :to="{
                    name: 'DevTrainingPage-slug',
                    params: { slug: item.slug },
                  }"
                  nuxt
                >
                  <v-card-title
                    class="text-h6 text-xs-h4 text-truncate font-weight-bold"
                  >
                    {{ item.title }}
                  </v-card-title>
                  <v-card-text class="text-sub-1 text-truncate text-xs-body-1">
                    {{ item.description }}</v-card-text
                  >
                  <v-card-subtitle class="grey--text lighten-4">
                    {{ item.date }}
                  </v-card-subtitle>
                  <v-card-text>
                    <v-chip-group column multiple>
                      <v-chip
                        v-for="tag in item.tags"
                        :key="tag"
                        label
                        :class="`${cardColor(tag)} white--text lighten-2`"
                      >
                        {{ tag }}
                      </v-chip>
                    </v-chip-group>
                  </v-card-text>
                  <v-overlay absolute v-if="hover"></v-overlay>
                </v-card>
              </v-hover>
            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </v-container>
  </v-container>
</template>
<script>
import { mdiMagnify } from '@mdi/js'
export default {
  async fetch() {
    this.articles = await this.$content('articles/DevTraining')
      .search(this.q)
      .fetch()
  },
  async asyncData({ $content, params, error }) {
    const articles = await $content('articles/DevTraining')
      .fetch()
      .catch(() => {
        error({ statusCode: 404, message: 'Page not found' })
      })

    return { articles }
  },
  data() {
    return {
      searchIcon: mdiMagnify,
      navTags: ['vue', 'javascript', 'html', 'css', 'git', 'nuxt'],
      page: 1,
      selectedTag: 2,
      amenities: [],
      selectedTags: [],
      q: '',
    }
  },
  computed: {
    cardColor() {
      return (tagName) => {
        switch (tagName) {
          case this.navTags[0]:
            return 'yellow '
          case this.navTags[1]:
            return 'blue'
          case this.navTags[2]:
            return 'deep-orange'
          case this.navTags[3]:
            return 'blue-grey'
          case this.navTags[4]:
            return 'light-green'
          case this.navTags[5]:
            return 'teal'
        }

        return 'primary'
      }
    },
  },
  watch: {
    amenities: {
      deep: true,
      async handler() {
        this.selectedTags = this.amenities.map((val) => {
          return this.navTags[val]
        })

        this.articles = await this.$content('articles/DevTraining')
          .where({
            tags: { $contains: this.selectedTags },
          })
          .fetch()
      },
    },
  },
  mounted() {
    if (this.$route.params.tagName) {
      this.amenities.push(this.navTags.indexOf(this.$route.params.tagName))
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