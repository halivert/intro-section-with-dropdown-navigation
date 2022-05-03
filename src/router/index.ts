import { h } from "vue"
import { createRouter, createWebHistory } from "vue-router"
import HomePage from "@/pages/HomePage.vue"

const defaultComponent = (name: string) => {
  return {
    render() {
      return h("div", { className: "section" }, [name])
    },
  }
}

const noPageRoutes = [
  "history",
  "learn-more",
  "planning",
  "reminders",
  "blog",
  "calendar",
  "todo-list",
  "our-team",
  "careers",
  "about",
  "login",
  "register",
]

const routes = [
  {
    path: "/",
    name: "home",
    component: HomePage,
  },
  ...noPageRoutes.map((pageName) => ({
    path: `/${pageName}`,
    name: pageName,
    component: defaultComponent(pageName),
  })),
]

const url = new URL(import.meta.env.BASE_URL)

const router = createRouter({
  history: createWebHistory(url.pathname),
  routes,
})

export { router }
