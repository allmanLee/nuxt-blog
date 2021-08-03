<template>
  <article class="mr-8 mb-8 mt-8">
    <v-container class="pt-12">
      <h1 class="text-h4 font-weight-bold">{{ page.title }}</h1>
      <br />
      <h3 class="text-sub-2 text-xs-h6 font-weight-bold">
        {{ page.description }}
      </h3>
      <h6 class="py-6">{{ page.date }}</h6>
      <v-divider></v-divider>
      <v-list>
        <v-list-item class="blue lighten-4 font-weight-bold rounded-lg">
          목차
        </v-list-item>
        <v-list-item
          v-for="(item, index) in page.toc"
          :key="index"
          class="grey lighten-4"
        >
          <v-list-item-content>
            {{ item.text }}
          </v-list-item-content>
        </v-list-item>
      </v-list>
      <nuxt-content :document="page" class="mt-14" />
    </v-container>
  </article>
</template>

<script>
import { mapMutations } from 'vuex'
export default {
  async asyncData({ $content, params, error }) {
    // const slug = `DevTraining/${params.slug}`
    console.log(`DevTraining/${params.slug}`)
    const page = await $content(`articles/DevTraining/${params.slug}`)
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