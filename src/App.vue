<script setup lang="ts">
import Main from '@/components/Main.vue';
</script>

<template>
  <div class="app">
    <Main />
  </div>
</template>

<style lang="scss">
@import '@/assets/styles/variables';

.app {
  position: relative;
  min-height: 100vh;
  padding: 40px 0;
  background: $white;
}
</style>
