<template>
  <div class="content-container">
    <img :src="this.image"/>
    <div class="desc">
      <p>
        Letting heirloom survive. NFT-Convert, for your emotional value to exist in the digital space,
        while bringing back precious metals to circulation.<br><br>
        No more bad feelings, no more waste of materials laying in the corner of your life.<br><br>
        Congratulations on converting your jewel with ProcessID: <b>{{ this.processId }}</b>
      </p>
    </div>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component'
import { Image as VanImage } from 'vant'

@Options({
  components: {
    VanImage
  }
})
export default class Home extends Vue {
  private image = require('@/assets/images/bg.webp')
  private processId = ''

  mounted () {
    this.processId = this.$store.state.injectables.processId
  }
}
</script>

<style scoped lang="scss">
@import '../assets/css/vars.scss';

.desc {
  padding-top: 2rem;

  p {
    padding: .75rem;
    background-color: $sylba-green;
  }
}

.content-container {
  display: block;
  margin: $header-height auto auto;
  padding: $content-padding;

  img {
    display: block;
    margin-left: auto;
    margin-right: auto;
    width: 20rem;
  }
}

.smartNFT {
  position: absolute;
  display: flex;
  //justify-content: center;
  align-items: center;
  bottom: 55px;

  img {
    float: left;
    width: 5rem;
    margin: 0px 10px 0px 0px;
  }

  p {
    font-size: 8px;
  }
}
</style>
