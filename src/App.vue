<template>
  <Content></Content>
</template>
<script lang="ts">
import { Vue, Options } from 'vue-class-component'
import Content from '@/components/Content.vue'

@Options({
  components: {
    Content
  }
})
export default class App extends Vue {
}
</script>

<style lang="scss">
@import "assets/css/main.scss";
@import "assets/css/override.scss";
</style>
