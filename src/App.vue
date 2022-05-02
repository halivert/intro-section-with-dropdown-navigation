<script setup lang="ts">
import Navbar from "@/components/Navbar.vue"
</script>

<template>
  <navbar />
  <main class="content">
    <router-view></router-view>
  </main>
</template>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Epilogue:wght@400;700&display=swap");

*,
::before,
::after {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

:root {
  --white: hsl(0, 0%, 98%);
  --gray: hsl(0, 0%, 41%);
  --black: hsl(0, 0%, 8%);
}

html {
  overflow: hidden;
  width: 100vw;
  height: 100vh;
  font-size: 18px;
  line-height: 1.5;
  text-rendering: optimizeLegibility;
}

#app {
  height: 100vh;
  max-width: 100vw;
  width: 100%;
  overflow-y: scroll;
  overflow-x: hidden;
  font-family: "Epilogue", "sans-serif";
  background-color: var(--white);
  color: var(--black);
}

.clipped {
  #app {
    overflow-y: hidden;
  }
}

.content {
  margin: 0 auto;
  max-width: 1440px;
}

.section {
  padding: 0 1rem;
}

a {
  text-decoration: none;
  color: var(--black);
}
</style>
