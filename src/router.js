import { createRouter, createWebHistory } from "vue-router";
import AccountAdmin from "./view/AccountAdmin/index";
import Category from "./view/Category/index";
import Factory from "./view/Factory/index";
import WareHouse from "./view/WareHouse/index";
import Banner from "./view/Banner/index";
import Department from "./view/Department/index";
import AccountUser from "./view/AccountUser/index";
import Home from "./view/home";
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
        path: "/categoryProduct",
        name: "category",
        component: Category,
    },
    {
        path: "/warehouse",
        name: "warehouse",
        component: WareHouse,
    },
    {
        path: "/factory",
        name: "factory",
        component: Factory,
    },
    {
        path: "/warehouse",
        name: "warehouse",
        component: WareHouse,
    },

    {
        path: "/banner",
        name: "banner",
        component: Banner,
    },
    {
        path: "/department",
        name: "department",
        component: Department,
    },
    {
        path: "/account_user",
        name: "account_user",
        component: AccountUser,
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