<template >
  <v-container>
    <v-fade-transition>
      <v-btn
        v-show="$vuetify.breakpoint.xs && offsetTop > 10"
        color="purple"
        dark
        fixed
        bottom
        right
        fab
        v-scroll="onScroll"
        @click="controlDrawer"
      >
        <v-icon>{{ IconNameIndex }}</v-icon>
      </v-btn>
    </v-fade-transition>
    <v-navigation-drawer
      v-model="drawerRight"
      class="rounded-tl-lg rounded-bl-lg"
      clipped
      fixed
      floating
      right
      app
    >
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
            replace
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
    <v-divider></v-divider>
    <dev-training-preview
      :resultListByTag="morePagesByTag"
    ></dev-training-preview>
  </v-container>
</template>

<script>
import { mapMutations } from 'vuex'
import { mdiTableOfContents } from '@mdi/js'
import DevTrainingPreview from '../../components/DevTrainingPreview.vue'
export default {
  async asyncData({ $content, params, error }) {
    const slug = params.slug || undefined
    const page = await $content(`articles/DevTraining/${slug}`)
      .fetch()
      .catch(() => {
        error({ statusCode: 404, message: 'Page not found' })
      })
    const morePagesByTag = await $content('articles/DevTraining')
      .only(['title', 'description', 'date', 'tags', 'slug'])
      .where({
        tags: { $containsAny: page.tags },
      })
      .fetch()
    return {
      page,
      morePagesByTag,
    }
  },
  components: {
    DevTrainingPreview,
  },
  data() {
    return {
      IconNameIndex: mdiTableOfContents,
      drawerRight: true,
      offsetTop: 0,
    }
  },
  computed: {
    // drawerRight() {
    //   // const active =
    //   // return active
    // },
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
            location.hash = entry.target.id
            // this.$router.replace(`#${entry.target.id}`)
          }
        })
      },
      {
        root: null,
        rootMargin: '-10px 0px -80% 0px',
        threshold: 0,
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
    controlDrawer() {
      this.drawerRight = true
    },
    onScroll(e) {
      this.offsetTop = window.scrollY
    },
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