<template>
<div class="statbox widget box box-shadow" v-if="isShowEdit == false && isShowAdd == false && isShowTrash == false">
    <div class="row" style="margin-top: 26px;">
        <div class="col-12 col-sm-6 d-flex justify-content-sm-end justify-content-center mt-sm-0 mt-3">
            <div id="range-search_filter" class="dataTables_filter"><label><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-search" style="position: absolute;top: 11px;right: 27px;width: 20px;color: #d3d3d3;">
                        <circle cx="11" cy="11" r="8"></circle>
                        <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                    </svg><input type="search" class="form-control" placeholder="Search..." v-model="query" aria-controls="range-search"></label></div>
        </div>
    </div>
    <div class="widget-header">
        <div class="row">
            <div class="col-xl-12 col-md-12 col-sm-12 col-12">
                <h4>Trash Product Management</h4>
            </div>
        </div>
    </div>
    <div class="widget-content widget-content-area">
        <div class="table-responsive">
            <table class="table table-bordered">
                <thead>
                    <tr>
                        <th class="text-center">Code Product</th>
                        <th>Product Name</th>
                        <th>Price</th>
                        <th>SalePrice</th>
                        <th>Image</th>
                        <th>Category Name</th>
                        <th>WareHouse Name</th>
                        <th>Status</th>
                        <th class="text-center">Action</th>
                    </tr>
                </thead>

                <tbody v-if="query">
                    <tr v-for="item in productFilte" :key="item.id">
                        <td class="text-center">{{ item.code }}</td>
                        <td>{{ item.name }}</td>
                        <td>{{ item.price }}</td>
                        <td>{{ item.salePrice }}</td>
                        <td><img :src="'http://localhost:54195/images/' + item.images" style="width: 100px" /></td>
                        <td>{{item.categoryName }}</td>
                        <td>{{item.warehouseName}}</td>
                        <td>
                            <p class="text-danger">
                                <span v-if="item.status">Sout</span>
                                <span v-if="!item.status">Sout out</span>
                            </p>
                        </td>

                        <td class="text-center">
                            <a href="javascript:void(0);" data-toggle="tooltip" data-placement="top" title="" data-original-title="Edit" style="padding: 20px;" v-on:click="onEdit(item)"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-edit-2">
                                    <path d="M17 3a2.828 2.828 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5L17 3z">
                                    </path>
                                </svg></a>
                            <a href="javascript:void(0);" data-toggle="tooltip" v-on:click.stop.prevent="onDelete(item)" data-placement="top" title="" data-original-title="Delete"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-trash-2">
                                    <polyline points="3 6 5 6 21 6"></polyline>
                                    <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2">
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
                        <td>{{ item.price }}</td>
                        <td>{{ item.salePrice }}</td>
                        <td><img :src="'http://localhost:54195/images/' + item.images" style="width: 100px" /></td>
                        <td>{{item.categoryName }}</td>
                        <td>{{item.warehouseName}}</td>
                        <td>
                            <p class="text-danger">
                                <span v-if="item.status">Sout</span>
                                <span v-if="!item.status">Sout out</span>
                            </p>
                        </td>
                        <td class="text-center">
                            <a href="javascript:void(0);" data-toggle="tooltip" data-placement="top" title="" data-original-title="Edit" style="padding: 20px;" v-on:click="onRepeat(item)"><svg enable-background="new 0 0 64 64" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                    <g id="_x32_4-Repeat">
                                        <g>
                                            <path d="m49 29.0000954c-.5527344 0-1 .4472656-1 1v5c0 3.859375-3.140625 7-7 7h-17v-5c0-.3789063-.2138672-.7246094-.5527344-.8945313-.3378906-.1679688-.7441406-.1328125-1.046875.0947266l-8 6c-.2519531.1884765-.4003906.4853515-.4003906.7998047s.1484375.6113281.4003906.7998047l8 6c.1757813.1328125.3876953.2001953.5996094.2001953.1523438 0 .3056641-.0351563.4472656-.1054688.3388672-.1699219.5527344-.515625.5527344-.8945312v-5h17c4.9628906 0 9-4.0371094 9-9v-5c0-.5527344-.4472656-1-1-1zm-27 18-5.3330078-4 5.3330078-4z" />
                                            <path d="m15 35.0000954c.5527344 0 1-.4472656 1-1v-5c0-3.859375 3.140625-7 7-7h17v5c0 .3789063.2138672.7246094.5527344.8945313.1416015.0703124.2949219.1054687.4472656.1054687.2119141 0 .4238281-.0673828.5996094-.2001953l8-6c.2519531-.1884766.4003906-.4853516.4003906-.7998047s-.1484375-.6113281-.4003906-.7998047l-8-6.000001c-.3027344-.2285156-.7089844-.2636719-1.046875-.0947266-.3388672.1699219-.5527344.5156251-.5527344.8945313v5.000001h-17c-4.9628906 0-9 4.0371094-9 9v5c0 .5527343.4472656 1 1 1zm27-18 5.3330078 4-5.3330078 4z" />
                                        </g>
                                    </g>
                                </svg>
                            </a>
                            <a href="javascript:void(0);" data-toggle="tooltip" v-on:click.stop.prevent="onDelete(item)" data-placement="top" title="" data-original-title="Delete"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-trash-2">
                                    <polyline points="3 6 5 6 21 6"></polyline>
                                    <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2">
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
import ProductService from "@/services/ProductService";
import "vue-awesome-paginate/dist/style.css";
// import 'mosha-vue-toastify/dist/style.css';
// import { createToast } from 'mosha-vue-toastify';
export default {
    name: "Index",
    components: {},
    data() {
        return {
            product: null,
            showEdit: null,
            isShowEdit: false,
            isShowAdd: false,
            isShowTrash: false,
            query: "",
            current: 1,
            pageSize: 5,
            isActive: false,
            trash: this.pro,
        }
    },
    created() {
        ProductService.getTrash()
            .then((res) => {
                this.product = res.data;
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
            return this.product && this.product.length
        },
        productFilte() {
            if (this.query) {
                return this.product.filter((product) => {
                    return (
                        product.name
                        .toLowerCase()
                        .indexOf(this.query.toLowerCase()) != -1
                    )
                })
            } else {
                return this.product;
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
                return this.product.slice(this.indexStart, this.indexEnd, this.totalPaginate);
            } else {
                return this.product;
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
        onRepeat(item) {
            ProductService.repeat(item)
                .then(response => {
                    console.log(response);
                    this.product.splice(this.product.findIndex(e => e.id == item.id), 1).push(response.data);
                    this.$emit("ShowDeleteData", item);
                })
                .catch(function (error) {
                    console.log(error)
                })
        },
        onDelete(item) {
            if (confirm("Are you sure you want to delete " + item.code)) {
                console.log(item.id);
                ProductService.delete(item.id)
                    .then(response => {
                        console.log(response);
                        this.product.splice(this.product.findIndex(e => e.id == item.id), 1).push(response.data);
                    })
                    .catch(function (error) {
                        console.log(error)
                    })
            }
        }
    }

}
</script>
