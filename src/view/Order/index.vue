<template>

    <div id="content" class="main-content">
        <div class="layout-px-spacing">

            <div class="row layout-top-spacing">
                <div id="tableProgress" class="col-lg-12 col-12 layout-spacing">

                    <div class="statbox widget box box-shadow" v-if="isShowEdit == false">
                        <div class="row" style="margin-top: 26px;">

                            <div class="col-12 col-sm-12 d-flex justify-content-sm-end justify-content-center mt-sm-0 mt-3"
                                style="margin-left: -23px;">
                                <select name="" v-model="sortatoz" @change="sortItems"
                                    style="margin-right: 34px;width: 158px;height: 40px;margin-top: 7px;border: 1px solid #bfc9d4;">
                                    <option value="">Sort by name</option>
                                    <option value="asc">Ascending</option>
                                    <option value="desc">Decrease</option>
                                </select>
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
                                    <h4>Order Management</h4>
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
                                            <th class="text-center">Action</th>
                                        </tr>
                                    </thead>
                                    <tbody v-if="query">
                                        <tr v-for="item in orderFilte" :key="item.iD">
                                            <td class="text-center">{{ item.code }}</td>
                                            <td>{{ item.name }}</td>
                                            <td>{{ format_date(item.createdDate) }}</td>
                                            <td>
                                                <span class="badge badge-warning" v-if="item.status == 0">Pending</span>
                                                <span class="badge badge-info" v-if="item.status == 1">Approved</span>
                                                <span class="badge badge-primary"
                                                    v-if="item.status == 2">Delivering</span>
                                                <span class="badge badge-success" v-if="item.status == 3">Successful
                                                    Delivery</span>
                                                <span class="badge badge-danger"
                                                    v-if="item.status == 4">Cancelled</span>
                                                <span class="badge badge-dark" v-if="item.status == 5">Returns</span>
                                                <span class="badge badge-warning" v-if="item.status == 6"> Payment
                                                    approval</span>
                                            </td>
                                            <td>${{ formatPrice(item.totalAmount) }}</td>
                                            <td class="text-center">
                                                <a href="javascript:void(0);" data-toggle="tooltip" data-placement="top"
                                                    title="" data-original-title="Edit" style="padding: 20px;"
                                                    v-on:click="onEdit(item)"><svg xmlns="http://www.w3.org/2000/svg"
                                                        width="24" height="24" viewBox="0 0 24 24" fill="none"
                                                        stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                                        stroke-linejoin="round" class="feather feather-edit-2">
                                                        <path
                                                            d="M17 3a2.828 2.828 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5L17 3z">
                                                        </path>
                                                    </svg></a>
                                                <a href="javascript:void(0);" data-toggle="tooltip"
                                                    v-on:click.stop.prevent="onDelete(item)" data-placement="top"
                                                    title="" data-original-title="Delete"><svg
                                                        xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                                        viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                                        stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                                                        class="feather feather-trash-2">
                                                        <polyline points="3 6 5 6 21 6"></polyline>
                                                        <path
                                                            d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2">
                                                        </path>
                                                        <line x1="10" y1="11" x2="10" y2="17"></line>
                                                        <line x1="14" y1="11" x2="14" y2="17"></line>
                                                    </svg></a>
                                            </td>
                                        </tr>
                                    </tbody>
                                    <tbody v-else-if="sortedItems">
                                        <tr v-for="(item, index) in sortedItems" :key="index">
                                            <td class="text-center">{{ item.code }}</td>
                                            <td>{{ item.name }}</td>
                                            <td>{{ format_date(item.createdDate) }}</td>
                                            <td>
                                                <span class="badge badge-warning" v-if="item.status == 0">Pending</span>
                                                <span class="badge badge-info" v-if="item.status == 1">Approved</span>
                                                <span class="badge badge-primary"
                                                    v-if="item.status == 2">Delivering</span>
                                                <span class="badge badge-success" v-if="item.status == 3">Successful
                                                    Delivery</span>
                                                <span class="badge badge-danger"
                                                    v-if="item.status == 4">Cancelled</span>
                                                <span class="badge badge-dark" v-if="item.status == 5">Returns</span>
                                                <span class="badge badge-warning" v-if="item.status == 6"> Payment
                                                    approval</span>
                                            </td>
                                            <td>${{ formatPrice(item.totalAmount) }}</td>
                                            <td class="text-center">
                                                <a href="javascript:void(0);" data-toggle="tooltip" data-placement="top"
                                                    title="" data-original-title="Edit" style="padding: 20px;"
                                                    v-on:click="onEdit(item)"><svg xmlns="http://www.w3.org/2000/svg"
                                                        width="24" height="24" viewBox="0 0 24 24" fill="none"
                                                        stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                                        stroke-linejoin="round" class="feather feather-edit-2">
                                                        <path
                                                            d="M17 3a2.828 2.828 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5L17 3z">
                                                        </path>
                                                    </svg></a>
                                                <a href="javascript:void(0);" data-toggle="tooltip"
                                                    v-on:click.stop.prevent="onDelete(item)" data-placement="top"
                                                    title="" data-original-title="Delete"><svg
                                                        xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                                        viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                                        stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                                                        class="feather feather-trash-2">
                                                        <polyline points="3 6 5 6 21 6"></polyline>
                                                        <path
                                                            d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2">
                                                        </path>
                                                        <line x1="10" y1="11" x2="10" y2="17"></line>
                                                        <line x1="14" y1="11" x2="14" y2="17"></line>
                                                    </svg></a>
                                            </td>
                                        </tr>
                                    </tbody>
                                    <tbody v-else>
                                        <tr v-for="item in paginated" :key="item.id">
                                            <td class="text-center">{{ item.code }}</td>
                                            <td>{{ item.name }}</td>
                                            <td>{{ format_date(item.createdDate) }}</td>
                                            <td>
                                                <span class="badge badge-warning" v-if="item.status == 0">Pending</span>
                                                <span class="badge badge-info" v-if="item.status == 1">Approved</span>
                                                <span class="badge badge-primary"
                                                    v-if="item.status == 2">Delivering</span>
                                                <span class="badge badge-success" v-if="item.status == 3">Successful
                                                    Delivery</span>
                                                <span class="badge badge-danger"
                                                    v-if="item.status == 4">Cancelled</span>
                                                <span class="badge badge-dark" v-if="item.status == 5">Returns</span>
                                                <span class="badge badge-warning" v-if="item.status == 6"> Payment
                                                    approval</span>
                                            </td>
                                            <td>${{ formatPrice(item.totalAmount) }}</td>

                                            <td class="text-center">
                                                <a href="javascript:void(0);" data-toggle="tooltip" data-placement="top"
                                                    title="" data-original-title="Edit" style="padding: 20px;"
                                                    v-on:click="onEdit(item)"><svg xmlns="http://www.w3.org/2000/svg"
                                                        width="24" height="24" viewBox="0 0 24 24" fill="none"
                                                        stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                                        stroke-linejoin="round" class="feather feather-edit-2">
                                                        <path
                                                            d="M17 3a2.828 2.828 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5L17 3z">
                                                        </path>
                                                    </svg></a>
                                                <a v-if="item.status == 4" href="javascript:void(0);"
                                                    data-toggle="tooltip" v-on:click.stop.prevent="onDelete(item)"
                                                    data-placement="top" title="" data-original-title="Delete"><svg
                                                        xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                                        viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                                        stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                                                        class="feather feather-trash-2">
                                                        <polyline points="3 6 5 6 21 6"></polyline>
                                                        <path
                                                            d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2">
                                                        </path>
                                                        <line x1="10" y1="11" x2="10" y2="17"></line>
                                                        <line x1="14" y1="11" x2="14" y2="17"></line>
                                                    </svg></a>
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
                    <a href="" v-if="isShowEdit == true || isShowAdd == true || isShowTrash == true"
                        v-on:click.prevent="back_to"><svg xmlns="http://www.w3.org/2000/svg" width="16" style="width: 32px;
                                height: 32px;" height="16" fill="currentColor" class="bi bi-arrow-left-circle-fill"
                            viewBox="0 0 16 16">
                            <path
                                d="M8 0a8 8 0 1 0 0 16A8 8 0 0 0 8 0zm3.5 7.5a.5.5 0 0 1 0 1H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H11.5z" />
                        </svg></a>
                    <EditOrder :order="showEdit" v-if="isShowEdit == true" @ShowEditData="getEdit($event)" />
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
import EditOrder from "@/view/Order/edit.vue"
import OrderServices from '@/services/OrderServices';
import moment from 'moment'
import OrderDetailService from '@/services/OrderDetailService';
export default {
    name: "Index",
    components: {
        EditOrder
    },
    data() {
        return {
            order: null,
            showEdit: null,
            isShowEdit: false,
            query: "",
            current: 1,
            pageSize: 5,
            isActive: false,
            sortatoz :""
        }
    },

    created() {
        OrderServices.getAll()
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
        },
        sortedItems() {
            return this.order;
        },

    },

    methods: {
        sortItems() {
            if (this.sortatoz === "asc") {
                return this.order.sort((a, b) => (a.name > b.name ? 1 : -1));
            } else {
                return this.order.sort((a, b) => (a.name > b.name ? -1 : 1));
            }
        },
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
        onEdit(data) {
            this.showEdit = data;
            this.isShowEdit = true
            console.log(data);
        },
        back_to() {
            this.isShowEdit = false
        },
        onTrash() {
            this.isShowTrash = true
        },
        getData(data) {
            this.order.push(data);
            console.log(data);
            this.isShowAdd = false;
            this.$forceUpdate();

        },
        getEdit(data) {
            for (let i = 0; i < this.order.length; i++) {
                if (this.order[i].id == data.id) {
                    this.order[i] = data;
                    this.$forceUpdate()
                    break;
                }
            }

            this.isShowEdit = false;
        },
        onDelete(item) {
            let login = JSON.parse(localStorage.getItem("user"));
            if (login.role == 2) {
                if (confirm("Are you sure you want to delete the product " + item.code)) {
                    OrderDetailService.delete(item.id).then((res) => {
                        console.log(res);
                        OrderServices.delete(item.id)
                            .then(response => {
                                console.log(response);
                                this.order.splice(this.order.findIndex(e => e.id == item.id), 1).push(response.data);
                            })
                            .catch(function (error) {
                                console.log(error)
                            })
                    }).catch((error) => {
                        console.log(error);
                    }).finally(() => { })

                }
            } else {
                alert("You are not authorized to perform this task");
            }
        }
    }

}
</script>
