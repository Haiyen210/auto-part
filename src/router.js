import { createRouter, createWebHistory } from "vue-router";
import Account from "./view/Account/index";
import Category from "./view/Category/index";
import Factory from "./view/Factory/index";
import Product from "./view/Product/index";
import WareHouse from "./view/WareHouse/index";
import BillDetail from "./view/BillDetail/index";
import Banner from "./view/Banner/index";
import Home from "./view/home";
const routes = [{
        path: "/",
        name: "Home",
        component: Home,
    },
    {
        path: "/account",
        name: "account",
        component: Account,
    },
    {
        path: "/categoryProduct",
        name: "category",
        component: Category,
    },
    {
        path: "/factory",
        name: "factory",
        component: Factory,
    },
    {
        path: "/product",
        name: "product",
        component: Product,
    },
    {
        path: "/warehouse",
        name: "warehouse",
        component: WareHouse,
    },
    {
        path: "/billdetaile",
        name: "billdetail",
        component: BillDetail,
        
    },
    {
        path: "/banner",
        name: "banner",
        component: Banner,
    },

];
const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
});

export default router;