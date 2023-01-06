<template>
<div class="statbox widget box box-shadow">

    <div class="widget-header">
        <div class="row">
            <div class="col-xl-12 col-md-12 col-sm-12 col-12">
                <h4>Detail <span style="color: cornflowerblue;"> {{ wareHouse.name }}</span> Code <span style="color: cornflowerblue;">{{ wareHouse.code }}</span></h4>
            </div>
        </div>
    </div>
    <div class="widget-content widget-content-area">
        <div class="table-responsive">
            <table class="table table-bordered">
                <thead>
                    <tr>
                        
                        <th>Product Code</th>
                        <th>Product Name</th>
                        <th>Product Price</th>
                        <th>Product SalePrice</th>
                        <th>Product Quantity</th>
                        <th>Product Image</th>
                        <th class="text-center">Action</th>
                    </tr>
                </thead>
                <tbody v-if="query">
                    <tr v-for="item in warehouses" :key="item.id">
                        
                        <td>{{ item.productCode }}</td>
                        <td>{{ item.productName }}</td>
                        <td>{{ item.productPrice }}</td>
                        <td>{{ item.productSalePrice }}</td>
                        <td>{{ item.productQuantity }}</td>
                        <td><img :src="'http://localhost:54195/images/' + item.productImages" style="width: 100px" /></td>
                        <td>
                            <p class="text-success">
                                <span v-if="item.productStatus">Action</span>
                                <span v-if="!item.productStatus">No Action</span>
                            </p>
                        </td>  
                    </tr>
                </tbody>
                <tbody v-else>
                    <tr v-for="item in paginated" :key="item.id">
                        
                        <td>{{ item.productCode }}</td>
                        <td>{{ item.productName }}</td>
                        <td>{{ item.productPrice }}</td>
                        <td>{{ item.productSalePrice }}</td>
                        <td>{{ item.productQuantity }}</td>
                        <td><img :src="'http://localhost:54195/images/' + item.productImages" style="width: 100px" /></td>
                        
                        <td>
                            <p class="text-success">
                                <span v-if="item.productStatus">Action</span>
                                <span v-if="!item.productStatus">No Action</span>
                            </p>
                        </td>
                        
                    </tr>
                </tbody>
            </table>
        </div>
        <div class="column is-12">
            <nav class="pagination is-right" role="navigation" aria-label="pagination">
                <ul class="pagination-list" v-if="totalPaginate > 1">
                    <li>
                        <a @click="prev" class="btn-paginate"> Prev </a>
                    </li>

                    <li v-for="item in totalPaginate" :key="item">
                        <span v-on:click.prevent="onCurrent(item)" v-bind:class="{ isActive: (item === current), 'text-dark': isActive == false }" class="btn-paginate pagination-link go-to has-text-orange" aria-label="Goto page 1">{{
                                                        item
                                                    }}</span>
                    </li>
                    <li>
                        <a class="btn-paginate" @click="next"> Next </a>
                    </li>
                </ul>
            </nav>
        </div>
    </div>
</div>
</template>


<style>
.pagination-list {
    list-style: none;
    display: flex;
}

.btn-paginate {
    margin-inline: 5px;
    cursor: pointer;
    border-style: groove;
    border-radius: 100%;
    text-align: center;
    padding: 10%;
    color: #000;

}

.isActive {
    background-color: #80b500;
    color: #ffff;
}
</style>

<script>
import WareHouseService from '@/services/WareHouseService';
// import 'mosha-vue-toastify/dist/style.css';
// import { createToast } from 'mosha-vue-toastify';
export default {
    props: ['warehouse'],

    data() {
        return {
            wareHouse: this.warehouse,
            warehouses: null,
            query: "",
            current: 1,
            pageSize: 5,
            isActive: false
        }
    },
    computed: {
        resultCount() {
            return this.warehouses && this.warehouses.length
        },
        // warehouseFilte() {
        //     if (this.query) {
        //         return this.warehouses.filter((warehouses) => {
        //             return (
        //                 warehouses.name
        //                     .toLowerCase()
        //                     .indexOf(this.query.toLowerCase()) != -1
        //             )
        //         })
        //     } else {
        //         return this.warehouses;
        //     }

        // },
        indexStart() {
            return (this.current - 1) * this.pageSize;
        },
        indexEnd() {
            return this.indexStart + this.pageSize;
        },
        totalPaginate() {
            if ((this.resultCount % 5) == 0) {
                return Math.floor(this.resultCount / 5);
            } else {
                return Math.floor(this.resultCount / 5) + 1;
            }
        },
        paginated() {
            console.log(this.resultCount);
            if (this.resultCount > 5) {
                return this.warehouses.slice(this.indexStart, this.indexEnd, this.totalPaginate);
            } else {
                return this.warehouses;
            }
        }
    },
    mounted() {
        WareHouseService.get(this.warehouse.id)
            .then((res) => {
                this.warehouses = res.data;
                console.log(res.data);
            })
            .catch((error) => {
                console.log(error);

            })
            .finally(() => {

            })

    },
    methods: {
        onCurrent(item) {

            this.isActive = true
            return this.current = item;
        },

        prev() {
            this.current--;
            if (this.current == 0) {
                return this.current = 1;
            }
        },
        next() {
            this.current++;
            if (this.current > this.totalPaginate) {
                return this.current = this.totalPaginate;
            }
        },
        back_to() {
            this.isShowDetail = false;
        },
    }
}
</script>
