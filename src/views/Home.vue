<template>
  <div class="content-container">
    <img :src="this.image" style="max-width: 60%"/>
    <div class="desc">
      <div class="bg-light-blue">
        <img :src="this.nuggetImage"/>
        <p class="bg-gray">
          <b>Mining gold results in poisoned waters,
          landscapes and affects humankind and
          animals in a destructive way. Not to
          mention CO² emissions, which are
          above 20 times the amount resulting
            from recycling gold.</b>
        </p>
      </div>
      <div class="bg-dark-blue">
        <p>
          <b>YOU JUST PLAYED PART TOWARDS MORE
            SUSTAINABILITY!</b>
        </p>
      </div>
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
  private image = require('@/assets/images/nft02.png')
  private nuggetImage = require('@/assets/images/nugget01.jpg')
  private processId = ''

  mounted () {
    this.processId = this.$store.state.injectables.processId
  }
}
</script>

<style scoped lang="scss">
@import '../assets/css/vars.scss';

.content-container {
  img {
    display: block;
    margin-left: auto;
    margin-right: auto;
  }
}
</style>
