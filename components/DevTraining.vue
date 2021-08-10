 <template>
  <v-container>
    <v-row dense justify="space-between">
      <v-col cols="auto">
        <v-card-title class="d-flex text-sm-h5 text-h6 font-weight-bold pa-0"
          >DEV 트레이닝</v-card-title
        > </v-col
      ><v-col cols="auto" class="d-none d-sm-flex" align-self="center">
        <v-btn icon to="/DevTrainingPage" nuxt
          ><v-icon large color="black">{{ svgPath }}</v-icon></v-btn
        ></v-col
      >
    </v-row>

    <v-slide-group v-model="slideIndex" center-active mandatory>
      <v-slide-item
        v-for="(item, index) in reduceResult"
        :key="index"
        v-slot="{ active, toggle }"
      >
        <v-card
          v-touch="{
            left: () => slideSwipe('Left'),
            right: () => slideSwipe('Right'),
          }"
          :color="
            active ? `${cardColor(item.tagName)}` : cardColor(item.tagName)
          "
          height="200"
          :width="cardWidth"
          elevation="2"
          class="ma-4 darken-2"
          @click="toggle"
        >
          <v-card-title class="pb-3 text-h4 font-weight-bold white--text">{{
            item.tagName
          }}</v-card-title>
          <v-card-text class="text-h4 font-weight-bold white--text">
            {{ item.listLength }}
            <span class="text-h6"> 페이지</span>
          </v-card-text>
          <v-divider class="mx-4"></v-divider>
          <v-card-text
            class="pt-2 pb-0 text-body-1 font-weight-bold lightn-2 white--text"
            >{{ item.lastListTitle }}</v-card-text
          >

          <v-card-subtitle class="py-0 text-body-2 white--text">{{
            item.lastListDate
          }}</v-card-subtitle>
          <v-overlay absolute :value="active"
            ><v-card-actions
              ><v-btn
                light
                :to="{
                  name: 'DevTrainingPage',
                  params: { tagName: item.tagName },
                }"
                nuxt
                >모아보기</v-btn
              ><v-btn
                color="primary"
                v-if="item.lastListSlug"
                :to="{
                  name: 'DevTrainingPage-slug',
                  params: { slug: item.lastListSlug },
                }"
                nuxt
                >마지막 글 보기</v-btn
              ></v-card-actions
            ></v-overlay
          >
        </v-card>
      </v-slide-item>
    </v-slide-group>
  </v-container>
</template>
<script>
import { mdiViewGridOutline } from '@mdi/js'
export default {
  data() {
    return {
      svgPath: mdiViewGridOutline,
      model: 0,
      slideIndex: 0,
      navTags: ['javascript', 'html', 'css', 'git', 'nuxt', 'vue'],
      findPagesData: [],
      reduceResult: [],
      tmp: [],
    }
  },
  computed: {
    cardWidth() {
      switch (this.$vuetify.breakpoint.name) {
        case 'xs':
          return 220
        case 'sm':
          return 280
        case 'md':
          return 280
        case 'lg':
          return 280
        case 'xl':
          return 280
      }
      return 0
    },
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
  methods: {
    slideSwipe(direction) {
      if (direction === 'Left') this.slideIndex++
      else if (direction === 'Right') this.slideIndex--
    },

    async joinFoundData() {
      const reduceResult = await this.navTags.reduce(async (acc, tag) => {
        const tmp = await this.findPagesOfTag(tag)
        const accTmp = await acc

        const tmpFirstItem = tmp[0]
        return [
          ...accTmp,
          {
            tagName: tag,
            listLength: tmp.length,
            lastListTitle: tmpFirstItem ? tmpFirstItem.title : undefined,
            lastListSlug: tmpFirstItem ? tmpFirstItem.slug : undefined,
            lastListDate: tmpFirstItem ? tmpFirstItem.date : undefined,
          },
        ]
      }, [])
      return reduceResult
    },

    findPagesOfTag(tag) {
      const result = this.$content('articles/DevTraining')
        .only(['title', 'date', 'slug'])
        .where({
          tags: { $contains: tag },
        })
        .fetch()

      return result
    },
  },
  created() {
    this.joinFoundData().then((result) => {
      this.reduceResult = result
      console.log(this.reduceResult)
    })
  },
  mounted() {},
}
</script>
<style>
/*부드러운 스크롤 효과*/
.v-slide-group__prev {
  position: absolute;
  height: 200px;
  top: 50%;
  background-color: rgba(0, 0, 0, 0);
  background-image: linear-gradient(
    to left,
    rgba(0, 0, 0, 0) 20%,
    rgba(0, 0, 0, 0.2)
  );
  left: 0;
  transform: translate(0, -50%);
  z-index: 1;
}
.v-slide-group__next {
  position: absolute;
  top: 50%;
  height: 200px;
  background-color: rgba(0, 0, 0, 0);
  background-image: linear-gradient(
    to right,
    rgba(0, 0, 0, 0) 20%,
    rgba(0, 0, 0, 0.2)
  );
  right: 0;
  transform: translate(0, -50%);
  z-index: 1;
}

.v-slide-group__next--disabled {
  display: none;
}
.v-slide-group__prev--disabled {
  display: none;
}
</style>