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
          <NuxtLink
            :to="`#${link.id}`"
            :id="`toc-${link.id}`"
            class="toc-text"
            active-class="toc-active"
            ><i class="toc-icon"></i>{{ link.text }}</NuxtLink
          >
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
    // IntersectionObserver의 options를 설정합니다.

    const observer = new IntersectionObserver(
      (entries, observe) => {
        entries.forEach((entry) => {
          // 관찰 대상이 viewport 안에 들어온 경우 image 로드
          if (entry.isIntersecting) {
            // data-src 정보를 타켓의 src 속성에 설정
            // entry.target.innerHTML

            this.$router.replace(`#${entry.target.id}`)
          }
        })
      },
      {
        root: null,
        rootMargin: '-30% 0px -60% 0px',
        threshold: 1,
      }
    )

    // 관찰할 대상을 선언하고, 해당 속성을 관찰시킨다.
    const header2 = document.querySelectorAll('h2')
    header2.forEach((el) => {
      observer.observe(el)
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
    addIntersectionObserver() {},
  },
}
</script>
<style>
.toc-text {
  color: #9e9e9e !important;
  text-decoration: none;
}
.toc-icon {
  display: inline-block;
  background: #9e9e9e;
  margin-right: 10px;
  width: 2px;
  height: 10px;
}
.toc-text:hover {
  color: black !important;
}

.toc-active-icon {
  display: inline-block;
  background: #9e9e9e;
  margin-right: 10px;
  width: 2px;
  height: 10px;
}

.toc-active {
  color: black !important;
  font-weight: bold;
  transition: font-weight 0.3s;
  text-decoration: none;
}
</style>