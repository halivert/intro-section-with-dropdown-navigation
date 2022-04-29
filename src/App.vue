<script setup lang="ts">
import Navbar from "@/components/Navbar.vue"
</script>

<template>
  <div>
    <navbar />
  </div>
</template>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Epilogue&display=swap");

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
}

body {
  height: 100vh;
  max-width: 100vw;
  width: 100%;
  overflow-y: scroll;
  overflow-x: hidden;
  font-size: 18px;
  font-family: "Epilogue", "sans-serif";
  background-color: var(--white);
  color: var(--black);
}

body.clipped {
  overflow-y: hidden;
}
</style>
