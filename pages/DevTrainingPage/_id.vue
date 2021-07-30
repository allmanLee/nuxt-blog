<template>
  <article>
    <v-container>
      <h1>{{ page.title }}</h1>
      <nuxt-content :document="page" />
    </v-container>
  </article>
</template>
<script>
export default {
  async asyncData({ $content, params, error }) {
    const slug = params.slug || '/articles/DevTraining/article-1'
    const page = await $content(slug)
      .fetch()
      .catch(() => {
        error({ statusCode: 404, message: 'Page not found' })
      })

    return {
      page,
    }
  },
}
</script>