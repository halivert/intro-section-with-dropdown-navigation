<script setup lang="ts">
import mobileImage from "@/assets/image-hero-mobile.png"
import desktopImage from "@/assets/image-hero-desktop.png"

import databiz from "@/assets/client-databiz.svg"
import audiophile from "@/assets/client-audiophile.svg"
import meet from "@/assets/client-meet.svg"
import maker from "@/assets/client-maker.svg"

const clients = { databiz, audiophile, meet, maker }
</script>

<template>
  <div class="home">
    <div class="mobile-image">
      <img
        :src="mobileImage"
        alt="mobile background a guy with a pc in a hand writing with the other with a geometric background"
      />
    </div>

    <div class="hero">
      <h1>Make remote work</h1>

      <p class="tagline">
        Get your team in sync, no matter your location. Streamline processes,
        create team rituals, and watch productivity soar.
      </p>

      <router-link class="button" :to="{ name: 'learn-more' }">
        Learn more
      </router-link>

      <div class="clients">
        <img
          v-for="(image, name) in clients"
          :key="image"
          :src="image"
          :alt="`${name} client logo`"
        />
      </div>
    </div>

    <div class="desktop-image">
      <img
        :src="desktopImage"
        alt="desktop background a guy with a pc in a hand writing with the other with a geometric background"
      />
    </div>
  </div>
</template>

<style lang="scss">
@import "@/scss/mixins.scss";

.home {
  max-height: 100%;
  text-align: center;

  h1 {
    font-weight: bold;
    font-size: 2rem;
  }

  .tagline {
    margin: 0.5rem 1rem;
    font-size: 0.9rem;
    color: var(--gray);
  }

  img {
    max-width: 100%;
  }

  .mobile-image {
    width: 100%;
    margin-bottom: 2rem;
  }

  .desktop-image {
    display: none;
  }

  .button {
    font-size: 0.8rem;
    margin-top: 0.5rem;
    display: inline-block;
    border: 2px solid var(--black);
    border-radius: 16px;
    padding: 0.5rem 1rem;
    color: var(--white);
    background-color: var(--black);
  }

  .clients {
    display: flex;
    width: 100%;
    gap: 2rem;
    align-items: center;
    margin: 2rem auto 0 auto;
    width: 90%;

    > img {
      width: 100%;
      height: auto;
    }
  }
}

@include desktop {
  .home {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 0 6.5rem;

    h1 {
      font-size: 4rem;
      line-height: 1;
    }

    .button {
      padding: 0.75rem 1.5rem;
      font-weight: bold;
      font-size: 0.9rem;

      &:hover {
        background-color: var(--white);
        color: var(--black);
      }
    }

    .mobile-image {
      display: none;
    }

    .hero {
      width: 40%;
      text-align: left;
    }

    .tagline {
      width: 80%;
      margin: 2rem 0;
    }

    .clients {
      margin-top: 5rem;
    }

    .desktop-image {
      display: block;
      width: 40%;
    }
  }
}
</style>
