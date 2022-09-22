<template>
  <div class="content-container">
    <va-carousel :items="this.images" v-model="this.value" :indicators="false" swipable height="fit-content"/>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component'
import ContentContainer from '@/components/ContentContainer.vue'

@Options({
  components: { ContentContainer }
})
export default class Materials extends Vue {
  private value = 0
  private images = [
    require('@/assets/images/mat/t1.jpeg'),
    require('@/assets/images/mat/t2.jpeg'),
    require('@/assets/images/mat/t3.jpeg'),
    require('@/assets/images/mat/t4.jpeg'),
    require('@/assets/images/mat/t5.jpeg'),
    require('@/assets/images/mat/t6.jpeg'),
    require('@/assets/images/mat/t7.jpeg'),
    require('@/assets/images/mat/t8.jpeg')]
}
</script>

<style scoped lang="scss">
@import '../assets/css/vars.scss';

.desc {
  padding-top: 1.25rem;

  p {
    padding: .75rem;
    background-color: $sylba-green;
  }
}

.content-container {
  padding-top: 0px;
}

.van-card {
  background: $sylba-green;
}

.sketchfab-embed-wrapper {
  position: relative;
  overflow: hidden;
  width: 100%;
  padding-top: 56.25%; /* 16:9 Aspect Ratio*/
}

.sketchfab-embed-wrapper iframe {
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  width: 100%;
  height: 100%;
}
</style>
