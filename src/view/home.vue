<template>
        <!--  BEGIN CONTENT AREA  -->
        <div id="content" class="main-content">
            <div class="layout-px-spacing">

                <div class="row layout-top-spacing" style="margin-left: 57px;">
                    <div class="statbox widget box box-shadow">
                        <div class="row">
                            <div class="col-lg-12">
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
            }
        }
    },
    async mounted() {
        console.log(this.data);
        try {
            const  userlist  = await axios.get('http://localhost:54195/api/Banner/get-data-chart')
            // this.data.datasets.data = userlist.data
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
                    'Bill',
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
    }


}
</script>