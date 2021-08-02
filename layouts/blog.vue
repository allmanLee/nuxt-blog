<template>
  <v-app>
    <v-navigation-drawer app>
      <v-list nav dense>
        <v-list-item-group
          v-model="listIndex"
          active-class="deep-purple--text text--accent-4"
        >
          <v-list-item v-for="(item, index) in blogList" :key="index">
            <v-list-item-title>{{ item }}</v-list-item-title>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
    <Nuxt></Nuxt>
  </v-app>
</template>
<script>
import { mapState } from 'vuex'
export default {
  data() {
    return { listIndex: 2 }
  },
  computed: {
    ...mapState({
      blogList: (state) => state.ui.list,
    }),
  },
}
</script>