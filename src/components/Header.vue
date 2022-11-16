<template>
<div class="header">
  <img src="../assets/logos/sylbaa.logo.png">
</div>
</template>

<script>

import { Vue } from 'vue-class-component'

export default class Header extends Vue {
}
</script>

<style scoped lang="scss">
@import '../assets/css/vars.scss';

.header {
  z-index: 100;
  top: 0;
  position: fixed;
  background-color: $header-bg-color;
  height: $header-height;
  width: 100%;
  display: block;
  padding: $header-logo-padding;
  img {
    //height: $logo-height;
    height: 100%;
    //padding-bottom: 0.1rem;
  }
}
</style>
