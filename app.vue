<template>
  <NuxtPage />
</template>

<script lang="ts" setup>
onMounted(() => {
  const transition = document.getElementById("html, body, #__nuxt");

  if (transition) {
    transition.style.transition = "all .2s !important;";
  }
})
</script>

<style lang="scss">
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

@font-face {
  font-family: Inter;
  src: url("assets/Inter.woff2") format("woff2");
  font-display: swap;
  -webkit-font-smoothing: antialiased;
  text-rendering: optimizeLegibility;
}

html,
body,
#__nuxt {
  width: 100%;
  height: 100%;
  font-family: Inter, sans-serif;
  background-color: #0c0c0c !important;
  color: white;

  &:has(main.light) {
    background-color: #f5f5f5 !important;
    color: black;
  }
}
</style>
