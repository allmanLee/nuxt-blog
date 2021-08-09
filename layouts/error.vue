<template>
  <v-container
    ><v-row justify="center"
      ><v-col cols="auto" align-self="center" class="text-center"
        ><div class="text-h1 font-weight-bold mt-14">404</div>
        <div class="text-h4 font-weight-bold">Page Not Found</div>

        죄송합니다. 현재 페이지를 찾을 수 없습니다.<br />
        <v-btn to="/" class="mt-12" dark nuxt>뒤로가기</v-btn>
      </v-col></v-row
    ></v-container
  >
</template>
<script>
export default {
  props: ['error'],
  // you can set a custom layout for the error page,
  methods: {
    backToRoute() {
      this.$router.push('/')
    },
  },
}
</script>