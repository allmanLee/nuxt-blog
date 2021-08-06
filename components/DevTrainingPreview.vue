 <template>
  <v-container>
    <v-container>
      <v-row dense justify="space-between">
        <v-col cols="auto">
          <v-card-title class="d-flex text-sm-h5 text-h6 font-weight-bold pa-0"
            >전체보기</v-card-title
          >
        </v-col>
      </v-row>
    </v-container>
    <v-slide-group v-model="slideIndex" center-active mandatory>
      <v-slide-item v-for="(item, index) in resultListByTag" :key="index">
        <v-hover v-slot="{ hover }">
          <v-card
            v-touch="{
              left: () => slideSwipe('Left'),
              right: () => slideSwipe('Right'),
            }"
            height="300"
            :width="cardWidth"
            outlined
            :to="{ name: 'DevTrainingPage-slug', params: { slug: item.slug } }"
            :elevation="hover ? 4 : 0"
            class="ma-4 darken-2"
            nuxt
          >
            <v-card-title class="pb-3 text-h5 font-weight-bold">{{
              item.title
            }}</v-card-title>
            <v-card-text class="text-h6">{{ item.description }}</v-card-text>
            <v-divider class="mx-4"></v-divider>
            <v-card-text class="pt-2 text-body-1 font-weight-bold lightn-2">{{
              item.lastListTitle
            }}</v-card-text>

            <v-card-subtitle class="py-0 text-body-2">{{
              item.date
            }}</v-card-subtitle>
          </v-card>
        </v-hover>
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
      slideIndex: 0,
      navTags: ['javascript', 'html', 'css', 'git', 'nuxt', 'vue'],
    }
  },
  props: ['resultListByTag'],
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
  },
  methods: {
    slideSwipe(direction) {
      if (direction === 'Left') this.slideIndex++
      else if (direction === 'Right') this.slideIndex--
    },
  },
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