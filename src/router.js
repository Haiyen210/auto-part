import { createRouter, createWebHistory } from "vue-router";
import AccountAdmin from "./view/AccountAdmin/index";
import Banner from "./view/Banner/index";
import Home from "./view/home";
import Login from "@/view/login";
const routes = [{
        path: "/",
        name: "Home",
        component: Home,

    },
    {
        path: "/account-manager",
        name: "account",
        component: AccountAdmin,
    },
    {
        path: "/banner",
        name: "banner",
        component: Banner,
    },
    {
        path: '/login',
        name: 'login',
        component: Login,
    },


];
const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
});
router.beforeEach((to, from, next) => {
    // redirect to login page if not logged in and trying to access a restricted page
    const publicPages = ["/login"];
    const authRequired = !publicPages.includes(to.path);
    const loggedIn = localStorage.getItem("user");

    if (authRequired && !loggedIn) {
        return next({
            path: "/login",
            query: { returnUrl: to.path }
        });
    }
    next();
});
// router.beforeEach((to, from, next) => {
//     if (to.matched.some(record => record.meta.requiresAuth)) {
//         if (store.getters.isLoggedIn) {
//             next()
//             return
//         }
//         next('/')
//     } else {
//         next()
//     }
// })
export default router;