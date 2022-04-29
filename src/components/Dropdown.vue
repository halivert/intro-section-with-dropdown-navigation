<script setup lang="ts">
import { computed, ref } from "vue"

interface DropdownItem {
  text: string
  url: string
  icon?: string
}

interface DropdownProps {
  text: string
  items: DropdownItem[]
  align?: string
}

const props = withDefaults(defineProps<DropdownProps>(), {
  text: "Dropdown",
  align: "left",
  items: () => [],
})

const isOpen = ref(false)

const alignCalc = computed(() => {
  if (props.align === "left") return "-50%"
  if (props.align === "center") return "-25%"
  return "0%"
})
</script>

<template>
  <div
    class="dropdown"
    :class="{ 'is-open': isOpen }"
    @click.stop="isOpen = !isOpen"
  >
    <span class="trigger">{{ text }}</span>

    <ul class="body">
      <li v-for="{ text, url, icon } in items" :key="url">
        <router-link :to="url">
          <span v-if="icon" class="icon"><img :src="icon" /></span>
          <span>{{ text }}</span>
        </router-link>
      </li>
    </ul>
  </div>
</template>

<style lang="scss">
@import "@/scss/mixins.scss";

.dropdown {
  .trigger::after {
    margin-left: 0.4rem;
    content: url("@/assets/icon-arrow-down.svg");
  }

  ul.body {
    --margin: 1.5rem;
    display: none;
    list-style: none;
    margin: var(--margin) 0 0 var(--margin);
    flex-flow: column nowrap;
    gap: 1.125rem;

    .icon {
      margin-right: 0.75rem;
    }
  }

  &.is-open {
    .trigger::after {
      content: url("@/assets/icon-arrow-up.svg");
    }

    ul.body {
      display: flex;
    }
  }
}

@include desktop {
  .dropdown {
    ul.body {
      --radius: 8px;
      border-radius: var(--radius);
      padding: 1.25rem 1.5rem;
      margin: 1rem 0;
      transform: translateX(v-bind(alignCalc));
      position: absolute;
      isolation: isolate;
      z-index: -1;

      > * {
        z-index: 0;
      }
    }

    ul.body::after,
    ul.body::before {
      --size: 80%;
      content: "";
      position: absolute;
      width: var(--size);
      height: var(--size);
      top: 50%;
      left: 50%;
      transform: translateX(-50%) translateY(-50%);
      border-radius: var(--radius);
      z-index: -1;
    }

    ul.body::after {
      background-color: var(--white);
    }

    ul.body::before {
      box-shadow: 0px 0px 30px 4px var(--black);
      opacity: 0.15;
    }

    &.is-open {
      .trigger::after {
        content: url("@/assets/icon-arrow-down.svg");
      }

      ul.body {
        display: none;
      }
    }

    &:hover {
      .trigger::after {
        content: url("@/assets/icon-arrow-up.svg");
      }

      ul.body {
        --top-left: 2.75rem;
        --bottom-right: 3.25rem;

        display: flex;
        margin: 0;
        padding: var(--top-left) var(--bottom-right) var(--bottom-right)
          var(--top-left);
      }
    }
  }
}
</style>
