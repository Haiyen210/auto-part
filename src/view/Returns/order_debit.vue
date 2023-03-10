<template>
    <div id="content" class="main-content">
        <div class="layout-px-spacing">

            <div class="row layout-top-spacing">
                <div id="tableProgress" class="col-lg-12 col-12 layout-spacing">
                    <div class="row" style="margin-top: 26px;">
                        <div class="col-12 col-sm-12 d-flex justify-content-sm-end justify-content-center mt-sm-0 mt-3"
                            style="margin-left: -23px;">
                            <div id="range-search_filter" class="dataTables_filter"><label><svg
                                        xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                        fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                        stroke-linejoin="round" class="feather feather-search"
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
                                <h4>Order Debit</h4>
                            </div>
                        </div>
                    </div>
                    <div class="ltn__myaccount-tab-content-inner">
                        <div class="table-responsive">
                            <table class="table table-bordered">
                                <thead>
                                    <tr>
                                        <th>#</th>
                                        <th>Account Name</th>
                                        <th>Phone</th>
                                        <th>Order Code</th>
                                        <th>Order Date</th>
                                        <th>WareHouse</th>
                                        <th>Total</th>
                                    </tr>
                                </thead>
                                <tbody v-if="query">
                                    <tr v-for="(item, index) in orderFilte" :key="index">
                                        <td>{{ index + 1 }}</td>
                                        <td>{{ item.fullName }}</td>
                                        <td>{{ item.phone }}</td>
                                        <td>{{ item.code }}</td>
                                        <td>{{ format_date(item.createdDate) }}</td>
                                        <td>{{ item.wareHouse }}</td>
                                        <td>{{ formatPrice(item.totalAmount) }}</td>

                                    </tr>
                                </tbody>
                                <tbody v-else>
                                    <tr v-for="(item, index) in paginated" :key="index">
                                        <td>{{ index + 1 }}</td>
                                        <td>{{ item.fullName }}</td>
                                        <td>{{ item.phone }}</td>
                                        <td>{{ item.code }}</td>
                                        <td>{{ format_date(item.createdDate) }}</td>
                                        <td>{{ item.wareHouse }}</td>
                                        <td>{{ formatPrice(item.totalAmount) }}</td>

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
</template>
<script>
import Account from "@/services/AccountUserService";
import moment from 'moment'
export default {
    data() {
        return {
            order_debit: null,
            query: "",
            current: 1,
            pageSize: 5,
            isActive: false
        }
    },
    mounted() {
        Account.getOrderDebit().then((res) => {
            this.order_debit = res.data
            console.log(this.order_debit);
        })

    },
    computed: {
        resultCount() {
            return this.order_debit && this.order_debit.length
        },
        orderFilte() {
            if (this.query) {
                return this.order_debit.filter((order_debit) => {
                    return (
                        order_debit.fullName
                            .toLowerCase()
                            .indexOf(this.query.toLowerCase()) != -1
                    )
                })
            } else {
                return this.order_debit;
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
                return this.order_debit.slice(this.indexStart, this.indexEnd, this.totalPaginate);
            } else {
                return this.order_debit;
            }
        }
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
        format_date(value) {
            if (value) {
                return moment(String(value)).format('DD-MM-YYYY')
            }
        },
        formatPrice(value) {
            return new Intl.NumberFormat('en-US').format(value);
        }
    }

}
</script>
