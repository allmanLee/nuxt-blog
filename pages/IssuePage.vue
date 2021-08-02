<template>
  <v-container>
    <v-row align="center" justify="center">
      <v-col class="text-center" cols="12">
        <h1 class="text-h2 font-weight-bold mb-4">DEV 트레이닝</h1>
        <h4 class="mt-8">- 1주에 3회 기록 -</h4>
        <h5 class="font-weight-thin">DEV 트레이닝 개발하면서 정리하기</h5>
      </v-col>
    </v-row>
    <v-row justify="space-around">
      <v-col cols="12">
        <v-sheet color="white" outlined class="py-4 px-1">
          <v-chip-group
            v-model="selectedTag"
            multiple
            active-class="primary--text"
          >
            <v-chip v-for="tag in a" :key="tag">
              {{ tag }}
            </v-chip>
          </v-chip-group>
        </v-sheet>
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
export default {}
</script>