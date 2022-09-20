<template>
  <div class="content">
    <Header></Header>
    <router-view></router-view>
    <div class="smartNFT">
      <img src="../assets/logos/filedgr.svg"/>
      <p>The Smart NFT is powered by the Filedgr Network!</p>
    </div>
    <van-tabbar route active-color="#94CDFF">
      <van-tabbar-item replace to="/home" icon="home-o">Home</van-tabbar-item>
      <van-tabbar-item replace to="/vr" icon="gem-o">3D</van-tabbar-item>
      <van-tabbar-item replace to="/history" icon="todo-list-o">History</van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component'
import Header from '@/components/Header.vue'
import ContentContainer from '@/components/ContentContainer.vue'

@Options({
  components: {
    ContentContainer,
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
  padding: $content-padding;
}

@media only screen and (max-width: 600px) {
  .content {
    width: 100%;
    margin: auto;
  }
}

.smartNFT {
  position: fixed;
  display: flex;
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
