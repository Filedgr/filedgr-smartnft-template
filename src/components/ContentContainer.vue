<template>
  <div class="content-container">
    <!--    <div v-if="this.selectedTab=='home'">-->
    <!--      <div class="img-container">-->
    <!--&lt;!&ndash;        <img src="../assets/fanthoms2.png"/>&ndash;&gt;-->
    <!--      </div>-->
    <!--      <div class="text-container">-->
    <!--        <p>-->
    <!--          Congratulations for activating the NFT of your Blancpain. This is the unforgeable digital certificate of-->
    <!--          authenticity.-->
    <!--        </p>-->
    <!--        <p>-->
    <!--          Your <i>Fifty Fathoms Bathyscaphe</i> has the Serial Number <b>000001</b>. Keep an eye on your certificate for-->
    <!--          special offers.-->
    <!--        </p>-->
    <!--        <p style="margin-top: 30px">-->
    <!--          <b>Share this certificate with your friends:</b>-->
    <!--        </p>-->
    <!--      </div>-->
    <!--      <va-card tag='b'>-->
    <!--        <va-card-title>Social Share</va-card-title>-->
    <!--        <va-card-content>-->
    <!--          <s-twitter-->
    <!--            :window-features="this.windowFeatures"-->
    <!--            :share-options="this.twitterShareOptions"-->
    <!--            :use-native-behavior="this.useNativeBehavior"-->
    <!--          >-->
    <!--            <svg-->
    <!--              xmlns="http://www.w3.org/2000/svg"-->
    <!--              width="64"-->
    <!--              height="64"-->
    <!--              viewBox="126.444 2.281 589 589">-->
    <!--              <circle cx="420.944" cy="296.781" r="294.5" fill="#2daae1"/>-->
    <!--              <path-->
    <!--                d="M609.773 179.634c-13.891 6.164-28.811 10.331-44.498 12.204 16.01-9.587 28.275-24.779 34.066-42.86a154.78 154.78 0 01-49.209 18.801c-14.125-15.056-34.267-24.456-56.551-24.456-42.773 0-77.462 34.675-77.462 77.473 0 6.064.683 11.98 1.996 17.66-64.389-3.236-121.474-34.079-159.684-80.945-6.672 11.446-10.491 24.754-10.491 38.953 0 26.875 13.679 50.587 34.464 64.477a77.122 77.122 0 01-35.097-9.686v.979c0 37.54 26.701 68.842 62.145 75.961-6.511 1.784-13.344 2.716-20.413 2.716-4.998 0-9.847-.473-14.584-1.364 9.859 30.769 38.471 53.166 72.363 53.799-26.515 20.785-59.925 33.175-96.212 33.175-6.25 0-12.427-.373-18.491-1.104 34.291 21.988 75.006 34.824 118.759 34.824 142.496 0 220.428-118.052 220.428-220.428 0-3.361-.074-6.697-.236-10.021a157.855 157.855 0 0038.707-40.158z"-->
    <!--                fill="#fff"/>-->
    <!--            </svg>-->
    <!--          </s-twitter>-->

    <!--          <s-linked-in-->
    <!--            style="margin-left: 20px"-->
    <!--            :window-features="windowFeatures"-->
    <!--            :share-options="this.linkedInShareOptions"-->
    <!--            :use-native-behavior="useNativeBehavior"-->
    <!--          >-->
    <!--            <svg height="64" viewBox="0 0 72 72" width="64" xmlns="http://www.w3.org/2000/svg">-->
    <!--              <g fill="none" fill-rule="evenodd">-->
    <!--                <path-->
    <!--                  d="M8,72 L64,72 C68.418278,72 72,68.418278 72,64 L72,8 C72,3.581722 68.418278,-8.11624501e-16 64,0 L8,0 C3.581722,8.11624501e-16 -5.41083001e-16,3.581722 0,8 L0,64 C5.41083001e-16,68.418278 3.581722,72 8,72 Z"-->
    <!--                  fill="#007EBB"/>-->
    <!--                <path-->
    <!--                  d="M62,62 L51.315625,62 L51.315625,43.8021149 C51.315625,38.8127542 49.4197917,36.0245323 45.4707031,36.0245323 C41.1746094,36.0245323 38.9300781,38.9261103 38.9300781,43.8021149 L38.9300781,62 L28.6333333,62 L28.6333333,27.3333333 L38.9300781,27.3333333 L38.9300781,32.0029283 C38.9300781,32.0029283 42.0260417,26.2742151 49.3825521,26.2742151 C56.7356771,26.2742151 62,30.7644705 62,40.051212 L62,62 Z M16.349349,22.7940133 C12.8420573,22.7940133 10,19.9296567 10,16.3970067 C10,12.8643566 12.8420573,10 16.349349,10 C19.8566406,10 22.6970052,12.8643566 22.6970052,16.3970067 C22.6970052,19.9296567 19.8566406,22.7940133 16.349349,22.7940133 Z M11.0325521,62 L21.769401,62 L21.769401,27.3333333 L11.0325521,27.3333333 L11.0325521,62 Z"-->
    <!--                  fill="#FFF"/>-->
    <!--              </g>-->
    <!--            </svg>-->
    <!--          </s-linked-in>-->

    <!--        </va-card-content>-->
    <!--      </va-card>-->

    <!--      <div class="text-container">-->
    <!--        <p style="margin-top: 30px">-->
    <!--          <b>This service is brought to you by:</b>-->
    <!--        </p>-->
    <!--      </div>-->
    <!--      <va-card tag='b'>-->
    <!--&lt;!&ndash;        <va-card-title>Partners</va-card-title>&ndash;&gt;-->
    <!--&lt;!&ndash;        <va-card-content>&ndash;&gt;-->
    <!--&lt;!&ndash;          <a href="https://filedgr.com" target="_blank"><img height="64" src="../assets/logos/filedgr.svg"></a>&ndash;&gt;-->
    <!--&lt;!&ndash;          <span style="padding-left: 20px"></span>&ndash;&gt;-->
    <!--&lt;!&ndash;          <a href="https://www.nir-watchdog.lu/" target="_blank"><img height="64" src="../assets/logos/nir.svg"></a>&ndash;&gt;-->
    <!--&lt;!&ndash;        </va-card-content>&ndash;&gt;-->
    <!--      </va-card>-->

    <!--    </div>-->
    <!--    <div v-else-if="this.selectedTab=='gallery'">-->
    <!--      <div style="width: 550px; margin-left: auto; margin-right: auto; margin-top: 50px;">-->
    <!--        <Carousel>-->
    <!--          <Slide v-for="slide in 3" :key="slide">-->
    <!--            <img :src="require(`@/assets/slider/bp-${slide}.jpeg`)"-->
    <!--                 style="height: 500px">-->
    <!--          </Slide>-->
    <!--          <template #addons>-->
    <!--            <Navigation/>-->
    <!--            <Pagination/>-->
    <!--          </template>-->
    <!--        </Carousel>-->
    <!--      </div>-->
    <!--    </div>-->
    <!--    <div v-else-if="this.selectedTab=='certificate'">-->
    <!--      <div class="main-container">-->
    <!--        <grid-images :items="this.images" :cells="3"/>-->
    <!--      </div>-->
    <!--    </div>-->
    <!--    <div v-else-if="this.selectedTab=='manual'">-->
    <!--      <div class="main-container">-->
    <!--        <vue-pdf-embed :source="this.manual"/>-->
    <!--      </div>-->
    <!--    </div>-->
    <!--    <div v-if="this.selectedTab=='3d'"-->
    <!--         style="margin-left: auto; margin-right: auto; text-align: center; margin-top: 25px;">-->

    <!--      <div class="text-container">-->
    <!--        <p>-->
    <!--          This NFT is Metaverse-Ready conctact us to get your watch in the metaverse <a-->
    <!--          href="mailto=customer.service@swatchgroup.com.au">customer.service@swatchgroup.com.au</a>.-->
    <!--        </p>-->
    <!--      </div>-->

    <!--      <div class="sketchfab-embed-wrapper">-->
    <!--        <iframe title="Blancpain Fifty Fathoms Watch"-->
    <!--                width="640" height="480"-->
    <!--                frameborder="0"-->
    <!--                allowfullscreen mozallowfullscreen="true"-->
    <!--                webkitallowfullscreen="true"-->
    <!--                allow="autoplay; fullscreen; xr-spatial-tracking" xr-spatial-tracking execution-while-out-of-viewport-->
    <!--                execution-while-not-rendered web-share-->
    <!--                src="https://sketchfab.com/models/c4675015c8b24defb10224f160b6ff75/embed"></iframe>-->
    <!--      </div>-->
    <!--    </div>-->
    <!--    <div v-if="this.selectedTab=='history'">-->
    <!--      <Timeline bg-color="#9dd8e0">-->
    <!--        <timeline-title style="color: white; font-size: x-large"><b>Watch Life</b></timeline-title>-->
    <!--        <timeline-item v-for="tx in this.transactions" :key="tx.hash" :hollow="false" line-color="green"-->
    <!--                       font-color="white" bg-color="green">-->
    <!--          <b>Date:</b> {{ tx.date.toLocaleString() }}<br/>-->
    <!--          <b>DLT Hash:</b> {{ tx.hash }}<br/>-->
    <!--          <span v-if="tx.currency.toLowerCase().startsWith('n')">-->
    <!--              <b>NFT Issued</b><br/>-->
    <!--              <b>Token: </b><a target="_blank"-->
    <!--                               v-bind:href="'https://testnet.xrpl.org/token/' + tx.currency.toLowerCase() + '.' + this.issuer">See the token</a><br/>-->
    <!--              <b>Issuing Transaction: </b> <a target="_blank"-->
    <!--                                              v-bind:href="'https://testnet.xrpl.org/transactions/' + tx.hash + '/detailed'">See the issue</a>-->
    <!--            </span>-->
    <!--          <span v-else-if="tx.currency.toLowerCase().startsWith('t')">-->
    <!--              <b>Transaction recorded</b><br/>-->
    <!--              <b>Token: </b><a target="_blank"-->
    <!--                               v-bind:href="'https://testnet.xrpl.org/token/' + tx.currency.toLowerCase() + '.' + this.issuer">See the token</a><br/>-->
    <!--              <b>Issuing Transaction: </b> <a target="_blank"-->
    <!--                                              v-bind:href="'https://testnet.xrpl.org/transactions/' + tx.hash + '/detailed'">See the issue</a><br/>-->
    <!--              <b>Content:</b><br/>-->
    <!--              <div v-if="tx.format == 'txt'">-->
    <!--                <MessageWrapper :file-url="tx.memo"></MessageWrapper>-->
    <!--              </div>-->
    <!--            </span>-->
    <!--        </timeline-item>-->
    <!--      </Timeline>-->
    <!--    </div>-->

  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component'
import MessageWrapper from '@/components/MessageWrapper.vue'

@Options({
  components: {
    MessageWrapper
  }
})
export default class ContentContainer extends Vue {
}
</script>

<style scoped lang="scss">
@import "../assets/css/vars";
@import "../assets/css/main";

.content-container {
  //display: block;
  //padding: $content-padding;
  //background-position: center;
}

</style>
