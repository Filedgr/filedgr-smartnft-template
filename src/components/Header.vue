<template>
<div class="header">
  <img src="../assets/logos/ourchoice.webp">
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
  top: 0;
  position: fixed;
  background-color: $header-bg-color;
  height: $header-height;
  width: 100%;
  display: block;
  padding: $content-padding;
  img {
    height: $logo-height;
  }
}
</style>
