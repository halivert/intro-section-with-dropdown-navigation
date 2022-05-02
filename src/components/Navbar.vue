<script setup lang="ts">
import { ref, watch } from "vue"
import logo from "@/assets/logo.svg"
import menu from "@/assets/icon-menu.svg"
import closeMenu from "@/assets/icon-close-menu.svg"

import todo from "@/assets/icon-todo.svg"
import calendar from "@/assets/icon-calendar.svg"
import reminders from "@/assets/icon-reminders.svg"
import planning from "@/assets/icon-planning.svg"
import Dropdown from "@/components/Dropdown.vue"

const features = [
  { text: "Todo List", url: "/todo-list", icon: todo },
  { text: "Calendar", url: "/calendar", icon: calendar },
  { text: "Reminders", url: "/reminders", icon: reminders },
  { text: "Planning", url: "/planning", icon: planning },
]

const company = [
  { text: "History", url: "/history" },
  { text: "Our Team", url: "/our-team" },
  { text: "Blog", url: "/blog" },
]

const isOpen = ref(false)

watch(isOpen, (open) => document.body.classList.toggle("clipped", open), {
  immediate: true,
})
</script>

<template>
  <nav class="nav" :class="{ 'is-open': isOpen }" @click="isOpen = false">
    <div class="nav-logo">
      <router-link :to="{ name: 'home' }">
        <img :src="logo" alt="Snap logo" />
      </router-link>
    </div>

    <div class="nav-burguer" @click.stop="isOpen = !isOpen" role="button">
      <img
        :src="isOpen ? closeMenu : menu"
        aria-label="menu"
        aria-expanded="false"
      />
    </div>

    <div class="nav-body">
      <div class="nav-start">
        <dropdown text="Features" class="nav-link" :items="features" />

        <dropdown
          class="nav-link"
          text="Company"
          :items="company"
          align="right"
        />

        <router-link class="nav-link" :to="{ name: 'careers' }">
          Careers
        </router-link>
        <router-link class="nav-link" :to="{ name: 'about' }">
          About
        </router-link>
      </div>

      <div class="nav-end">
        <router-link class="nav-link" :to="{ name: 'login' }">
          Login
        </router-link>
        <router-link class="nav-link button" :to="{ name: 'register' }">
          Register
        </router-link>
      </div>
    </div>
  </nav>
</template>

<style lang="scss">
@import "@/scss/mixins.scss";

.nav {
  --transition-duration: 0.3s;

  @media (prefers-reduced-motion) {
    --transition-duration: 0s;
  }

  display: flex;
  padding: 1.5rem 1.25rem;
  align-items: flex-start;
  justify-content: space-between;
  position: relative;
  z-index: 1;
  background-color: var(--white);

  &::before {
    transition: opacity var(--transition-duration) ease-in;
    content: "";
    position: absolute;
    background: var(--black);
    opacity: 0;
    inset: 0;
    width: 100vw;
    height: 100vh;
    transform: translateX(100vw);
  }

  .nav-burguer {
    --space: 0.5rem;
    padding: var(--space);
    margin: calc(-1 * var(--space));
    justify-self: flex-end;
    cursor: pointer;
    z-index: 3;
  }

  .nav-logo {
    z-index: 1;
  }

  .nav-body {
    transition: transform var(--transition-duration) ease-in;
    display: flex;
    flex-grow: 1;
    gap: 2.5rem;
    position: absolute;
    right: 0;
    top: 0;
    width: 55vw;
    height: 100vh;
    background-color: var(--white);
    padding: 1rem;
    padding-top: 4.75rem;
    transform: translateX(55vw);
    z-index: 2;
  }

  .nav-body,
  .nav-start,
  .nav-end {
    flex-flow: column nowrap;
  }

  .nav-start,
  .nav-end {
    display: flex;
    gap: 1.5rem;
  }

  .nav-start {
    align-items: flex-start;
  }

  .nav-end {
    text-align: center;
  }

  .nav-link,
  .nav-link a {
    --color: var(--gray);
    color: var(--color);
    text-decoration: none;
    font-size: 0.9rem;
    cursor: pointer;

    &.button {
      --padding-y: 0.75rem;

      display: block;
      border: 2px solid var(--color);
      padding: var(--padding-y) calc(1.75 * var(--padding-y));
      border-radius: 16px;
      margin-top: calc(-1 * var(--padding-y));
    }
  }
}

.nav.is-open {
  .nav-body {
    transform: translateX(0);
  }

  &::before {
    transform: translateX(0);
    opacity: 0.6;
  }
}

@include desktop {
  .nav {
    margin: 0 auto;
    max-width: 1440px;
    gap: 4rem;
    padding: 2rem;

    &::before {
      display: none;
    }

    .nav-burguer {
      display: none;
    }

    .nav-link:hover {
      --color: var(--black);
    }

    .nav-body {
      position: relative;
      transform: translateX(0);
      padding: 0;
      height: auto;
      justify-content: space-between;
      align-items: flex-start;
    }

    .nav-body,
    .nav-start,
    .nav-end {
      flex-direction: row;
    }
  }
}
</style>
