<template>
  <div class="content-container">
    <div class="sketchfab-embed-wrapper">
      <iframe title="Adidas Stan Smith" frameborder="0" allowfullscreen mozallowfullscreen="true"
              webkitallowfullscreen="true" allow="autoplay; fullscreen; xr-spatial-tracking" xr-spatial-tracking
              execution-while-out-of-viewport execution-while-not-rendered web-share
              src="https://sketchfab.com/models/5cb15660fdac49fc9c4a02cb75ba1b4e/embed?ui_theme=dark"></iframe>
      <p style="font-size: 13px; font-weight: normal; margin: 5px; color: #4A4A4A;"><a
        href="https://sketchfab.com/3d-models/adidas-stan-smith-5cb15660fdac49fc9c4a02cb75ba1b4e?utm_medium=embed&utm_campaign=share-popup&utm_content=5cb15660fdac49fc9c4a02cb75ba1b4e"
        target="_blank" style="font-weight: bold; color: #1CAAD9;"> Adidas Stan Smith </a> by <a
        href="https://sketchfab.com/3DSCANFR?utm_medium=embed&utm_campaign=share-popup&utm_content=5cb15660fdac49fc9c4a02cb75ba1b4e"
        target="_blank" style="font-weight: bold; color: #1CAAD9;"> 3DSCANFR (sdrn) </a> on <a
        href="https://sketchfab.com?utm_medium=embed&utm_campaign=share-popup&utm_content=5cb15660fdac49fc9c4a02cb75ba1b4e"
        target="_blank" style="font-weight: bold; color: #1CAAD9;">Sketchfab</a></p></div>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component'
import ContentContainer from '@/components/ContentContainer.vue'

@Options({
  components: { ContentContainer }
})
export default class VR extends Vue {
  private thumb = require('@/assets/images/ring.png')
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
