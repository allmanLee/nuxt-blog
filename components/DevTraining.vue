 <template>
  <v-container>
    <v-container>
      <v-row dense justify="space-between">
        <v-col cols="auto">
          <v-card-title class="d-flex text-sm-h5 text-h6 font-weight-bold pa-0"
            >DEV 트레이닝</v-card-title
          > </v-col
        ><v-col cols="auto" class="d-none d-sm-flex" align-self="center">
          <v-btn icon
            ><v-icon large color="black">{{ svgPath }}</v-icon></v-btn
          ></v-col
        >
      </v-row>
    </v-container>
    <v-slide-group v-model="slideIndex" center-active mandatory>
      <v-slide-item v-for="n in 5" :key="n" v-slot="{ active, toggle }">
        <v-card
          v-touch="{
            left: () => slideSwipe('Left'),
            right: () => slideSwipe('Right'),
          }"
          :color="active ? 'primary' : 'grey lighten-1'"
          height="200"
          :width="cardWidth"
          elevation="2"
          class="ma-4"
          @click="toggle"
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