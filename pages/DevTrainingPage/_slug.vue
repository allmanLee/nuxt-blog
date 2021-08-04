<template>
  <article class="mr-8 mb-8 mt-8">
    <v-navigation-drawer v-model="drawerRight" clipped fixed floating right app>
      <v-list-item>
        <v-list-item-content>
          <v-list-item-title class="mt-6 black--text text-h5 font-weight-bold">
            Content
          </v-list-item-title>
        </v-list-item-content>
      </v-list-item>
      <v-list>
        <v-list-item
          v-for="link of page.toc"
          :key="link.id"
          :class="{ toc2: link.depth === 2, toc3: link.depth === 3 }"
        >
          <NuxtLink :to="`#${link.id}`" active-class="black--text">{{
            link.text
          }}</NuxtLink>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-container class="pt-12">
      <h1 class="text-h4 font-weight-bold">{{ page.title }}</h1>
      <br />
      <h3 class="text-sub-2 text-xs-h6 font-weight-bold">
        {{ page.description }}
      </h3>
      <h6 class="py-6">{{ page.date }}</h6>
      <v-divider></v-divider>

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
    return {
      drawerRight: true,
    }
  },
  mounted() {
    this.fetchLists(this.page.order)
    window.addEventListener('DOMContentLoaded', () => {
      const observer = new IntersectionObserver((a) => {
        console.log(a)
      })
      console.log(observer)
    })
  },
  destroyed() {
    this.drawerRight = false
  },

  methods: {
    ...mapMutations({
      fetchLists: 'ui/fetchList',
    }),
    // 감시자 삽입
    addIntersectionObserver() {
      // this.page.toc.forEach((element) => {
      window.addEventListener('DOMContentLoaded', () => {
        const observer = new IntersectionObserver((entries) => {
          console.log(entries)
          entries.forEach((entry) => {
            const id = entry.target.getAttribute('id')
            if (entry.intersectionRatio > 0) {
              document
                .querySelector(`nav li a[href="#${id}"]`)
                .parentElement.classList.add('active')
            } else {
              document
                .querySelector(`nav li a[href="#${id}"]`)
                .parentElement.classList.remove('active')
            }
          })
        })

        // Track all sections that have an `id` applied
        document.querySelectorAll('section[id]').forEach((section) => {
          observer.observe(section)
        })
      })
    },
  },
}
</script>
<style>
html {
  scroll-behavior: smooth !important;
}
</style>