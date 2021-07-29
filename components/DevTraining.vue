 <template>
  <v-container>
    <v-container>
      <v-row dense justify="space-between">
        <v-col cols="auto">
          <v-card-title class="d-flex text-h4 font-weight-bold pa-0"
            >DEV 트레이닝</v-card-title
          > </v-col
        ><v-col cols="auto" align-self="center">
          <v-btn icon
            ><v-icon large color="black">{{ svgPath }}</v-icon></v-btn
          ></v-col
        >
      </v-row>
    </v-container>
    <v-slide-group
      v-model="model"
      class="pa-6"
      :show-arrows="false"
      center-active
    >
      <v-slide-item v-for="n in 5" :key="n" v-slot="{ active, toggle }">
        <v-card
          :color="active ? 'primary' : 'grey lighten-1'"
          height="200"
          width="300"
          elevation="2"
          class="ma-4"
          @click="toggle"
        >
          <v-row class="fill-height" align="center" justify="center">
            <v-scale-transition>
              <v-icon
                v-if="active"
                color="white"
                size="48"
                v-text="'mdi-close-circle-outline'"
              ></v-icon>
            </v-scale-transition>
          </v-row>
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
    }
  },
}
</script>
<style>
.v-slide-group__prev {
  position: absolute;
  height: 94%;
  top: 50%;
  background-color: rgba(0, 0, 0, 0.01);
  background-image: linear-gradient(
    to left,
    rgba(255, 255, 255, 0.1),
    rgba(255, 255, 255, 0.6)
  );
  left: 0;
  transform: translate(0, -120px);
  z-index: 1;
}
.v-slide-group__next {
  position: absolute;
  top: 50%;
  height: 94%;
  background-color: rgba(0, 0, 0, 0.01);
  background-image: linear-gradient(
    to right,
    rgba(255, 255, 255, 0.1),
    rgba(255, 255, 255, 0.6)
  );
  right: 0;
  transform: translate(0, -120px);
  z-index: 1;
}

.v-slide-group__next--disabled {
  display: none;
}
.v-slide-group__prev--disabled {
  display: none;
}
</style>