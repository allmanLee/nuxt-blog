<template>
  <article>
    <v-container class="pt-12">
      <h1 class="text-h4 font-weight-bold">{{ page.title }}</h1>
      <br />
      <h3 class="text-sub-2 text-xs-h6 font-weight-bold">
        {{ page.description }}
      </h3>
      <h6 class="py-6">{{ page.date }}</h6>
      <v-divider></v-divider>
      <v-list dense>
        <v-list-group>
          <v-list-item v-for="title in page.order" :key="title">
            <v-list-item-content>
              {{ title }}
            </v-list-item-content>
          </v-list-item>
        </v-list-group>
      </v-list>
      <nuxt-content :document="page" />
    </v-container>
  </article>
</template>
<script>
import { mapMutations } from 'vuex'
export default {
  async asyncData({ $content, params, error }) {
    const slug = params.slug
    const page = await $content(slug)
      .fetch()
      .catch(() => {
        error({ statusCode: 404, message: 'Page not found' })
      })

    return {
      page,
    }
  },

  data() {
    return {}
  },

  mounted() {
    this.fetchLists(this.page.order)
  },

  methods: {
    ...mapMutations({
      fetchLists: 'ui/fetchList',
    }),
  },
}
</script>