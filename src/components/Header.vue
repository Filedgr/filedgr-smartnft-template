<template>
<div class="header">
  <img src="../assets/logos/guichet-logo-white.svg">
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
  left:0;
  position: fixed;
  background-color: $header-bg-color;
  height: $header-height;
  width: 100%;
  display: block;
  padding: $header-logo-padding;
  img {
    height: 100%;
  }
}
</style>
