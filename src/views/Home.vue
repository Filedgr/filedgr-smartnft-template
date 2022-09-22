<template>
  <div class="content-container">
    <!--    <img :src="this.image"/>-->
    <div>
      <p>
        You have successfully activated your green NFT with Our Choice!
        By activating your NFT, you have officially claimed ownership of products' Digital Twin: a unique piece of code
        which acts as the virtual representation for your physical product. We use blockchain technology to verify that
        your digital twin belongs to you and that all data gathered within your digital twin (such as materials or
        production information is correct and unable to be altered.

        Thus, with your new NFT, you have complete access to all information regarding how your product was
        made.<br><br>
        Congratulations for your sneaker with serial number: <b>{{ this.processId }}</b>
      </p>
    </div>

    <va-card tag='b'>
      <va-card-title>Circular Sneakers</va-card-title>
      <va-card-content>
        <div class="img-text">
          <div style="display:inline-block; vertical-align: middle">
            <img src='../assets/images/sneakers/co2-neutral.png' style="height: 32px; width: fit-content">
          </div>
          <div style="display:inline-block; vertical-align: middle; margin-left: 10px">
            Accountable for 10.9kg of co2.
          </div>
        </div>

        <div class="img-text">
          <div style="display:inline-block; vertical-align: middle">
            <img src='../assets/images/sneakers/lifetime.png' style="height: 32px; width: fit-content">
          </div>
          <div style="display:inline-block; vertical-align: middle; margin-left: 10px">
            <b>Estimated Lifetime of Product:</b> 7 years.
          </div>
        </div>

        <div class="img-text">
          <div style="display:inline-block; vertical-align: middle">
            <img src='../assets/images/sneakers/biodegradable.png' style="height: 32px; width: fit-content">
          </div>
          <div style="display:inline-block; vertical-align: middle; margin-left: 10px">
            <b>No waste!</b> Fully bio degradable and recycable.
          </div>
        </div>

        <div class="img-text">
          <div style="display:inline-block; vertical-align: middle">
            <img src='../assets/images/sneakers/prevented_plastic.png' style="height: 32px; width: fit-content">
          </div>
          <div style="display:inline-block; vertical-align: middle; margin-left: 10px">
            <b>CO2 Compensation:</b> 1 kg of ocean plastics cleaned up and recycled.
          </div>
        </div>
      </va-card-content>
    </va-card>
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

van-card {
  padding-top: 60px;
}

.img-text {
  margin: 10px;
}
</style>
