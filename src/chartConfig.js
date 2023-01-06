// import AccountAdminService from "./services/AccountAdminService"
// import AccountUserService from "./services/AccountUserService"
// import BannerService from "./services/BannerService"
// import BillServices from "./services/BillServices"
// import CategoryProductService from "./services/CategoryProductService"
// import DepartmentService from "./services/DepartmentService"
// import FactoryService from "./services/FactoryService"
// import OrderServices from "./services/OrderServices"
// import ProductService from "./services/ProductService"
// import WareHouseService from "./services/WareHouseService"
import axios from "axios";
export const data = {

    data() {
        return {
            banner: null,
            product: null,
            category: null,
            accountAdmin: null,
            accountUser: null,
            department: null,
            factory: null,
            warehouse: null,
            order: null,
            bill: null,
        }
    },
    mounted() {
        axios.get('http://localhost:54195/api/Banner/').then((res) => {
            this.banner = res.data.length;
        })
        axios.get('http://localhost:54195/api/Product/').then((res) => {
            this.product = res.data.length
        })
        axios.get('http://localhost:54195/api/CategoryProduct/').then((res) => {
            this.category = res.data.length
        })
        axios.get('http://localhost:54195/api/AccountAdmin/').then((res) => {
            this.accountAdmin = res.data.length
        })
        axios.get('http://localhost:54195/api/AccountUsers/').then((res) => {
            this.accountUser = res.data.length
        })
        axios.get('http://localhost:54195/api/Departments/').then((res) => {
            this.department = res.data.length
        })
        axios.get('http://localhost:54195/api/Factory/').then((res) => {
            this.factory = res.data.length
        })
        axios.get('http://localhost:54195/api/WareHouses/').then((res) => {
            this.warehouse = res.data.length
        })
        axios.get('http://localhost:54195/api/Order/').then((res) => {
            this.order = res.data.length
        })
        axios.get('http://localhost:54195/api/Bill/').then((res) => {
            this.bill = res.data.length
        })
    },

    labels: [
        'Product',
        'Category',
        'Banner',
        'AccountAdmin',
        'AccountUser',
        'Department',
        'Factory',
        'WareHouse',
        'Order',
        'Bill',

    ],

    datasets: [{
        label: 'Auto Ancillaries Limited',
        backgroundColor: '#f87979',
        // data: [this.product, this.category, this.banner, this.accountAdmin, this.accountUser, this.department, this.factory, this.warehouse, this.order, this.bill]
        data: [10, 20, 30, 40, 10, 30, 10, 15, 24, 13]
    }]
}

export const options = {
    responsive: true,
    maintainAspectRatio: false
}