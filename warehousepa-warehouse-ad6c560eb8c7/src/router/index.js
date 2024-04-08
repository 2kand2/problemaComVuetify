import { createRouter, createWebHistory } from 'vue-router'

// components
import LoginView from "@/views/LoginView.vue"

const router = createRouter({
    history: createWebHistory(),
    routes: [
            {
                path: "/",
                redirect: {path: "login"}
            },
            {
                path: "/:pathMatch(.*)*",
                redirect: "/"
            }, 
            {
                path: "/login",
                name: "login",
                component: LoginView
            }
        ]
})

export default router;