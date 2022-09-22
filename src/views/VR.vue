<template>
  <div class="sketchfab-embed-wrapper">
    <iframe title="Sylbaa First NFT" frameborder="0" allowfullscreen mozallowfullscreen="true"
            webkitallowfullscreen="true" allow="autoplay; fullscreen; xr-spatial-tracking" xr-spatial-tracking
            execution-while-out-of-viewport execution-while-not-rendered web-share
            src="https://sketchfab.com/models/060c5abab80349408c4cbf56ec9943e8/embed"></iframe>
    <p style="font-size: 13px; font-weight: normal; margin: 5px; color: #4A4A4A;"><a
      href="https://sketchfab.com/3d-models/sylbaa-first-nft-060c5abab80349408c4cbf56ec9943e8?utm_medium=embed&utm_campaign=share-popup&utm_content=060c5abab80349408c4cbf56ec9943e8"
      target="_blank" style="font-weight: bold; color: #1CAAD9;"> Sylbaa First NFT </a> by <a
      href="https://sketchfab.com/Filedgr?utm_medium=embed&utm_campaign=share-popup&utm_content=060c5abab80349408c4cbf56ec9943e8"
      target="_blank" style="font-weight: bold; color: #1CAAD9;"> Filedgr </a> on <a
      href="https://sketchfab.com?utm_medium=embed&utm_campaign=share-popup&utm_content=060c5abab80349408c4cbf56ec9943e8"
      target="_blank" style="font-weight: bold; color: #1CAAD9;">Sketchfab</a></p></div>
  <div class="desc">
    <van-card
      title="333 Gold"
      currency="€/g"
      price="17,92"
      :thumb="this.thumb">
      <template #desc>
        8ct Gold, which is often used as the basic material for jewellery, is a special alloy that takes advantage of
        the different qualities of gold and other metals. The basis of 333 gold is always 33.3% pure gold, which is
        where the name comes from.
      </template>
    </van-card>
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
