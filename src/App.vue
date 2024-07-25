<script setup lang="ts"></script>

<template>
  <div class="app">
    <router-view></router-view>
  </div>
</template>

<style lang="scss">
@import '@/assets/styles/variables';

.app {
  position: relative;
  min-height: 100vh;
  background: $lighter;
  overflow-x: hidden;
}
</style>
