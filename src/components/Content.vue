<template>
  <div class="content">
    <Header></Header>
    <router-view></router-view>
    <div class="smartNFT">
      <img src="../assets/logos/filedgr.svg"/>
      <p>The Smart NFT is powered by the Filedgr Network!</p>
    </div>
    <van-tabbar route active-color="white">
      <van-tabbar-item replace to="/home">
        <span>Projects</span>
        <template #icon>
          <i class="material-icons">energy_savings_leaf</i>
        </template>
      </van-tabbar-item>
      <van-tabbar-item replace to="/nlux" icon="gem-o">
        <span>NLUX</span>
        <template #icon>
          <i class="material-icons">
            lightbulb
          </i>
        </template>
      </van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component'
import Header from '@/components/Header.vue'

@Options({
  components: {
    Header
  }
})
export default class Content extends Vue {
}
</script>

<style scoped lang="scss">
@import "../assets/css/vars.scss";
@import "../assets/css/main.scss";
@import "../assets/css/override.scss";

.content {
  width: 60%;
  margin: auto;
  padding-bottom: $bottom-padding;
}

@media only screen and (max-width: 600px) {
  .content {
    width: 100%;
  }
}

.smartNFT {
  width: 100%;
  padding-left: $content-container-padding;
  background: #FFFFFF;
  position: fixed;
  display: flex;
  align-items: center;
  bottom: 50px;

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
