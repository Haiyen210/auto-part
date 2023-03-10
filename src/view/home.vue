<template>
    <!--  BEGIN CONTENT AREA  -->
    <div id="content" class="main-content">
        <div class="layout-px-spacing">

            <div class="row layout-top-spacing" style="margin-left: 4px;">
                <div class="statbox widget box box-shadow" style="width: 99%;">
                    <div class="row">
                        <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12" style="padding: 35px;">
                            <div class="row widget-statistic">
                                <div class="col-xl-3 col-lg-3 col-md-3 col-sm-3 col-12 layout-spacing">
                                    <div class="widget widget-one_hybrid widget-followers">
                                        <div class="widget-heading">
                                            <div class="w-title">
                                                <div class="w-icon">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                                                        fill="currentColor" class="bi bi-cart-check-fill"
                                                        viewBox="0 0 16 16">
                                                        <path
                                                            d="M.5 1a.5.5 0 0 0 0 1h1.11l.401 1.607 1.498 7.985A.5.5 0 0 0 4 12h1a2 2 0 1 0 0 4 2 2 0 0 0 0-4h7a2 2 0 1 0 0 4 2 2 0 0 0 0-4h1a.5.5 0 0 0 .491-.408l1.5-8A.5.5 0 0 0 14.5 3H2.89l-.405-1.621A.5.5 0 0 0 2 1H.5zM6 14a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm7 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm-1.646-7.646-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L8 8.293l2.646-2.647a.5.5 0 0 1 .708.708z" />
                                                    </svg>
                                                </div>
                                                <div class="">
                                                    <p class="w-value">{{ order }}</p>
                                                    <h5 class="">Order</h5>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="widget-content">
                                            <div class="w-chart">
                                                <div id="hybrid_followers"></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-xl-3 col-lg-3 col-md-3 col-sm-3 col-12 layout-spacing">
                                    <div class="widget widget-one_hybrid widget-referral">
                                        <div class="widget-heading">
                                            <div class="w-title">
                                                <div class="w-icon">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                                                        fill="currentColor" class="bi bi-credit-card"
                                                        viewBox="0 0 16 16">
                                                        <path
                                                            d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4zm2-1a1 1 0 0 0-1 1v1h14V4a1 1 0 0 0-1-1H2zm13 4H1v5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V7z" />
                                                        <path
                                                            d="M2 10a1 1 0 0 1 1-1h1a1 1 0 0 1 1 1v1a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1v-1z" />
                                                    </svg>
                                                </div>
                                                <div class="">
                                                    <p class="w-value">${{ formatPrice(total) }}</p>
                                                    <h5 class="">Total Liabilities</h5>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="widget-content">
                                            <div class="w-chart">
                                                <div id="hybrid_followers1"></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-xl-3 col-lg-3 col-md-3 col-sm-3 col-12 layout-spacing">
                                    <div class="widget widget-one_hybrid widget-engagement">
                                        <div class="widget-heading">
                                            <div class="w-title">
                                                <div class="w-icon">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                                                        fill="currentColor" class="bi bi-cart-check-fill"
                                                        viewBox="0 0 16 16">
                                                        <path
                                                            d="M.5 1a.5.5 0 0 0 0 1h1.11l.401 1.607 1.498 7.985A.5.5 0 0 0 4 12h1a2 2 0 1 0 0 4 2 2 0 0 0 0-4h7a2 2 0 1 0 0 4 2 2 0 0 0 0-4h1a.5.5 0 0 0 .491-.408l1.5-8A.5.5 0 0 0 14.5 3H2.89l-.405-1.621A.5.5 0 0 0 2 1H.5zM6 14a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm7 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm-1.646-7.646-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L8 8.293l2.646-2.647a.5.5 0 0 1 .708.708z" />
                                                    </svg>
                                                </div>
                                                <div class="">
                                                    <p class="w-value">${{formatPrice(totalSuccess)}}</p>
                                                    <h5 class="">revenue</h5>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="widget-content">
                                            <div class="w-chart">
                                                <div id="hybrid_followers3"></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-xl-3 col-lg-3 col-md-3 col-sm-3 col-12 layout-spacing">
                                    <div class="widget widget-one_hybrid widget-engagement">
                                        <div class="widget-heading">
                                            <div class="w-title">
                                                <div class="w-icon">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                                                        fill="currentColor" class="bi bi-cart-check-fill"
                                                        viewBox="0 0 16 16">
                                                        <path
                                                            d="M.5 1a.5.5 0 0 0 0 1h1.11l.401 1.607 1.498 7.985A.5.5 0 0 0 4 12h1a2 2 0 1 0 0 4 2 2 0 0 0 0-4h7a2 2 0 1 0 0 4 2 2 0 0 0 0-4h1a.5.5 0 0 0 .491-.408l1.5-8A.5.5 0 0 0 14.5 3H2.89l-.405-1.621A.5.5 0 0 0 2 1H.5zM6 14a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm7 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm-1.646-7.646-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L8 8.293l2.646-2.647a.5.5 0 0 1 .708.708z" />
                                                    </svg>
                                                </div>
                                                <div class="">
                                                    <p class="w-value">{{orderSuccess}}</p>
                                                    <h5 class="">Successful Order</h5>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="widget-content">
                                            <div class="w-chart">
                                                <div id="hybrid_followers3"></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="row">

                        <div class="col-lg-10" style="margin-left: 4%;">

                            <Bar v-if="data" :data="data" :options="options" style="height: 500px;width: 1142px;" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!--  END CONTENT AREA  -->
    <!-- END MAIN CONTAINER -->


</template>
<script>
import {
    Chart as ChartJS,
    Title,
    Tooltip,
    Legend,
    BarElement,
    CategoryScale,
    LinearScale
} from 'chart.js'
import { Bar } from 'vue-chartjs'
// import * as chartConfig from '../chartConfig.js'
import axios from "axios";
import OrderServices from '@/services/OrderServices';
import AccountUserService from '@/services/AccountUserService';
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend)
export default {
    components: {
        Bar
    },
    data() {
        return {
            loaded: false,
            data: null,
            options: {
                responsive: true,
                maintainAspectRatio: false
            },
            order: null,
            totalBebit: null,
            orderSuccess:null,
            totalOrderSuccess:null,
        }
    },
    async mounted() {
        console.log(this.data);
        try {
            const userlist = await axios.get('http://localhost:54195/api/Banner/get-data-chart')
            this.data = {
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
                ],
                datasets: [
                    {
                        label: 'Auto Ancillaries Limited',
                        backgroundColor: '#f87979',
                        data: userlist.data
                    }
                ]
            };
            // console.log(this.data.datasets.data);
        } catch (e) {
            console.error(e)
        }
        OrderServices.getAll().then((res) => {
            this.order = res.data.length;
        })
        AccountUserService.getOrderDebit().then((res) => {
            this.totalBebit = res.data
        })
        OrderServices.getAllSuccess().then((res)=> {
            this.orderSuccess = res.data.length;
        })
        OrderServices.getAllSuccess().then((res)=>{
            this.totalOrderSuccess = res.data
            console.log( this.totalOrderSuccess);
        })
    },
    computed: {
        total() {
            return this.totalBebit?.map(item => item.totalAmount).reduce((total, amount) => {return total + amount},0);
        },
        totalSuccess() {
            return this.totalOrderSuccess?.map(item => item.totalAmount).reduce((total, amount) => {return total + amount},0);
        }

    },
    methods:{
        formatPrice(value) {
            return new Intl.NumberFormat('en-US').format(value);
        }
    }


}
</script>