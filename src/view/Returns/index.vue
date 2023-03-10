<template>

    <div id="content" class="main-content">
        <div class="layout-px-spacing">

            <div class="row layout-top-spacing">
                <div id="tableProgress" class="col-lg-12 col-12 layout-spacing">

                    <div class="statbox widget box box-shadow" >
                        <div class="row" style="margin-top: 26px;">
                            <div class="col-12 col-sm-12 d-flex justify-content-sm-end justify-content-center mt-sm-0 mt-3"
                                style="margin-left: -23px;">
                                <div id="range-search_filter" class="dataTables_filter"><label><svg
                                            xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                            viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                                            stroke-linecap="round" stroke-linejoin="round"
                                            class="feather feather-search"
                                            style="position: absolute;top: 11px;right: 27px;width: 20px;color: #d3d3d3;">
                                            <circle cx="11" cy="11" r="8"></circle>
                                            <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                                        </svg><input type="search" class="form-control" placeholder="Search..."
                                            v-model="query" aria-controls="range-search"></label></div>
                            </div>
                        </div>
                        <div class="widget-header">
                            <div class="row">
                                <div class="col-xl-12 col-md-12 col-sm-12 col-12">
                                    <h4>Order Returns</h4>
                                </div>
                            </div>
                        </div>
                        <div class="widget-content widget-content-area">
                            <div class="table-responsive">
                                <table class="table table-bordered">
                                    <thead>
                                        <tr>
                                            <th class="text-center">Order Code</th>
                                            <th>Order Name</th>
                                            <th>Order Date</th>
                                            <th>Status</th>
                                            <th>Total Price</th>
                                            <th class="text-center"></th>
                                        </tr>
                                    </thead>
                                    <tbody v-if="query">
                                        <tr v-for="item in orderFilte" :key="item.iD">
                                            <td class="text-center">{{ item.code }}</td>
                                            <td>{{ item.name }}</td>
                                            <td>{{ format_date(item.createdDate) }}</td>
                                            <td>
                                                <span class="badge badge-dark" v-if="item.status == 5">Returns</span>
                                                <span class="badge badge-dark" v-if="item.status == 6">Payment
                                                    approval</span>
                                            </td>
                                            <td>${{ formatPrice(item.totalAmount) }}</td>
                                            <td class="text-center">
                                                <form method="post" v-on:submit.prevent="onEditFormStatus(item)"
                                                    v-if="order">
                                                    <button v-if="item.status == 6" class="label label-default"
                                                        style="margin-left: 16px;border: 0px;">Returns confirmation</button>
                                                </form>
                                            </td>
                                        </tr>
                                    </tbody>
                                    <tbody v-else>
                                        <tr v-for="item in paginated" :key="item.id">
                                            <td class="text-center">{{ item.code }}</td>
                                            <td>{{ item.name }}</td>
                                            <td>{{ format_date(item.createdDate) }}</td>
                                            <td>
                                                <span class="badge badge-dark" v-if="item.status == 5">Returns</span>
                                                <span class="badge badge-dark" v-if="item.status == 6">Payment
                                                    approval</span>
                                            </td>
                                            <td>${{ formatPrice(item.totalAmount) }}</td>

                                            <td class="text-center">
                                                <form method="post" v-on:submit.prevent="onEditFormStatus(item)"
                                                    v-if="order">
                                                    <button v-if="item.status == 6" class="label label-default"
                                                        style="margin-left: 16px;border: 0px;">Returns confirmation</button>
                                                </form>
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
                                            <span v-on:click.prevent="onCurrent(item)"
                                                v-bind:class="{ isActive: (item === current), 'text-dark': isActive == false }"
                                                class="btn-paginate pagination-link go-to has-text-orange"
                                                aria-label="Goto page 1">{{
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
                    
                </div>
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
import "vue-awesome-paginate/dist/style.css";
import OrderServices from '@/services/OrderServices';
import moment from 'moment'
import { ref } from "vue";
export default {
    name: "Index",

    data() {
        return {
            order: null,
            query: "",
            current: 1,
            pageSize: 5,
            isActive: false
        }
    },

    created() {
        OrderServices.getAllReturns()
            .then((res) => {
                this.order = res.data;
                console.log(res);
            })
            .catch((error) => {
                console.log(error);
            })
            .finally(() => {
                //Perform action in always
            })

    },

    computed: {
        resultCount() {
            return this.order && this.order.length
        },
        orderFilte() {
            if (this.query) {
                return this.order.filter((order) => {
                    return (
                        order.name
                            .toLowerCase()
                            .indexOf(this.query.toLowerCase()) != -1
                    )
                })
            } else {
                return this.order;
            }

        },
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
                return this.order.slice(this.indexStart, this.indexEnd, this.totalPaginate);
            } else {
                return this.order;
            }
        }

    },

    methods: {
        format_date(value) {
            if (value) {
                return moment(String(value)).format('DD-MM-YYYY')
            }
        },
        formatPrice(value) {
            return new Intl.NumberFormat('en-US').format(value);
        },
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
        onDelete(item) {
            let login = JSON.parse(localStorage.getItem("user"));
            if (login.role == 2) {
                if (confirm("Are you sure you want to delete the product " + item.code)) {
                    OrderServices.delete(item.id)
                        .then(response => {
                            console.log(response);
                            this.order.splice(this.order.findIndex(e => e.id == item.id), 1).push(response.data);


                        })
                        .catch(function (error) {
                            console.log(error)
                        })
                }
            } else {
                alert("You are not authorized to perform this task");
            }
        }
    },
    
    setup() {
        var order = ref(null);
        function onEditFormStatus(item) {
                item.status = 5;
            OrderServices.update(item)
                .then((res) => {
                    console.log(res.data);
                   order.value = res.data
                   OrderServices.updateQuantity(order.value).then();
                   
                })
                .catch((error) => {
                    console.log(error);
                })
                .finally(() => {
                });
                
        }
        return {onEditFormStatus }
    }

}
</script>
