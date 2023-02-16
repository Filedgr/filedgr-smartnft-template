<template>
  <div class="content-container">
    <div class="desc">
      <div v-if="measure >= 0" class="bg-light-blue">
        <img :src="this.solarImage"/>
        <div class="bg-gray">
          <b>{{this.projectName}}</b><br><br>
          <div class="align-icons"><span class="material-icons">energy_savings_leaf</span><span>Saving Target: {{this.savingTarget}} €</span></div><br>
          <div class="align-icons"><span class="material-icons">update</span><span>Saving Period: {{this.period}} years</span></div><br>
          <div class="align-icons"><span class="material-icons">percent</span><span>Deviation: +0.1%</span></div><br>
        </div>
      </div>
      <div v-else-if="measure < 0" class="bg-red">
        <img :src="this.solarImage"/>
        <div class="bg-gray">
          <b>{{this.projectName}}</b><br><br>
          <div class="align-icons"><span class="material-icons">energy_savings_leaf</span><span>Saving Target: {{this.savingTarget}} €</span></div><br>
          <div class="align-icons"><span class="material-icons">update</span><span>Saving Period: {{this.period}} years</span></div><br>
          <div class="align-icons"><span class="material-icons">percent</span><span>Deviation: -4.0%</span></div><br>
        </div>
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
import { getProject } from '@/network/api/api'

@Options({
  components: {
    VanImage
  }
})
export default class Home extends Vue {
  private solarImage = require('@/assets/images/solar-panel.jpeg')
  private processId = ''

  private projectName = ''
  private savingTarget = 0;
  private period = 0;
  private measure = 0;

  mounted () {
    this.processId = this.$store.state.injectables.processId
    getProject().then(
      res => {
        this.projectName = res.data.name
        this.period = res.data.period
        this.savingTarget = res.data.savings_target
        this.measure = res.data.measure
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
