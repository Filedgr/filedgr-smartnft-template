<template>
  <div class="content-container">
    <div class="desc">
      <div v-if="measure >= 0" class="bg-light-blue">
        <img :src="this.solarImage"/>
        <div class="bg-gray">
          <b>{{this.projectName}}</b><br><br>
        <div class="align-icons"><span class="material-icons">generating_tokens</span><span>{{this.balance}} NLUX</span></div><br>
          <div class="align-icons"><span class="material-icons">credit_score</span><span>Benefits: {{this.balance / 100}} Units</span></div><br>
          <div class="align-icons"><span class="material-icons">percent</span><span>Deviation: +0.1%</span></div><br>
        </div>
      </div>
      <div v-else-if="measure < 0" class="bg-red">
        <img :src="this.solarImage"/>
        <div class="bg-gray">
          <b>{{this.projectName}}</b><br><br>
          <div class="align-icons"><span class="material-icons">generating_tokens</span><span>{{this.balance}} NLUX</span></div><br>
          <div class="align-icons"><span class="material-icons">credit_score</span><span>Benefits: {{ (this.balance / 100) + (this.balance / 100) * 0.4}} Units</span></div><br>
          <div class="align-icons"><span class="material-icons">percent</span><span>Deviation: -4.0%</span></div><br>
        </div>
      </div>
    </div>
    <div class="bg-dark-blue">
      <p>
        <b>YOU JUST PLAYED PART TOWARDS MORE
          SUSTAINABILITY!</b>
      </p>
    </div>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component'
import { Image as VanImage } from 'vant'
import { getBalance, getProject } from '@/network/api/api'

@Options({
  components: {
    VanImage
  }
})
export default class NLux extends Vue {
  private solarImage = require('@/assets/images/solar-panel.jpeg')
  private processId = ''

  private projectName = ''
  private balance = 0;
  private measure = 0;

  mounted () {
    this.processId = this.$store.state.injectables.processId
    getProject().then(
      res => {
        this.projectName = res.data.name
        this.measure = res.data.measure
      }
    )
    getBalance().then(
      res => {
        this.balance = res.data.balance
      }
    )
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

.align-icons {
  display: flex;
  align-items: center;
}
</style>
