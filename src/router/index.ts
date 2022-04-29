import { createRouter, createWebHistory } from "vue-router"

const defaultComponent = (name: string) => {
  return {
    render() {
      return name
    },
  }
}

const routes = [
  {
    path: "/",
    name: "home",
    component: defaultComponent("home"),
  },
  {
    path: "/history",
    name: "history",
    component: defaultComponent("history"),
  },
  {
    path: "/planning",
    name: "planning",
    component: defaultComponent("planning"),
  },
  {
    path: "/reminders",
    name: "reminders",
    component: defaultComponent("reminders"),
  },
  {
    path: "/blog",
    name: "blog",
    component: defaultComponent("blog"),
  },
  {
    path: "/calendar",
    name: "calendar",
    component: defaultComponent("calendar"),
  },
  {
    path: "/todo-list",
    name: "todo-list",
    component: defaultComponent("todo-list"),
  },
  {
    path: "/our-team",
    name: "our-team",
    component: defaultComponent("our-team"),
  },
  {
    path: "/careers",
    name: "careers",
    component: defaultComponent("careers"),
  },
  {
    path: "/about",
    name: "about",
    component: defaultComponent("about"),
  },
  {
    path: "/login",
    name: "login",
    component: defaultComponent("login"),
  },
  {
    path: "/register",
    name: "register",
    component: defaultComponent("register"),
  },
]

const router = createRouter({ history: createWebHistory(), routes })

export { router }
