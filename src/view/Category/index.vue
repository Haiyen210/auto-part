<template>
        <!--  BEGIN CONTENT AREA  -->
        <div id="content" class="main-content">
            <div class="layout-px-spacing">

                <div class="row layout-top-spacing">
                    <div id="tableProgress" class="col-lg-12 col-12 layout-spacing">

                        <div class="statbox widget box box-shadow"
                            v-if="isShowEdit == false && isShowAdd == false && isShowTrash == false">
                            <div class="row"  style="margin-top: 26px;">
                                <div class="col-12 col-sm-5 d-flex justify-content-sm-start justify-content-center" >
                                    <a type="submit" class="btn btn-success mt-3" v-on:click.prevent="onAdd" style="margin-left: 24px;">Add New<svg
                                            xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                                            fill="currentColor" class="bi bi-plus" viewBox="0 0 16 16">
                                            <path
                                                d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z" />
                                        </svg></a>
                                    <a style="margin-left: 5%;" type="submit" class="btn btn-success mt-3"
                                        v-on:click.prevent="onTrash">Trash<svg viewBox="-61 0 512 512"
                                            xmlns="http://www.w3.org/2000/svg" width="16" height="16">
                                            <path
                                                d="m255 0h-120c-24.8125 0-45 20.1875-45 45v15h-60c-16.570312 0-30 13.429688-30 30v30c0 16.566406 13.429688 30 30 30h92.566406c25.570313 0 36.390625-19.378906 44.25-25.605469 2.796875-2.796875 6.664063-4.394531 10.605469-4.394531h182.578125c16.570312 0 30-13.433594 30-30 0-16.570312-13.429688-30-30-30h-60v-15c0-24.8125-20.1875-45-45-45zm15 60h-150v-15c0-8.277344 6.722656-15 15-15h120c8.277344 0 15 6.722656 15 15zm0 0" />
                                            <path
                                                d="m360 482c0 16.570312-13.429688 30-30 30s-30-13.429688-30-30 13.429688-30 30-30 30 13.429688 30 30zm0 0" />
                                            <path
                                                d="m330 422c1.40625 0 2.726562.320312 4.113281.414062l24.589844-272.414062h-175.070313c-3.925781 2.851562-22.941406 30-61.070312 30h-88.65625l23.867188 290.707031c1.90625 23.15625 21.605468 41.292969 44.855468 41.292969h175.714844c-5.167969-8.859375-8.34375-19.023438-8.34375-30 0-33.089844 26.910156-60 60-60zm-68.816406-40.707031c-6.273438 5.359375-15.761719 4.671875-21.140625-1.65625-5.390625-6.285157-4.644531-15.761719 1.65625-21.136719 4.832031-4.132812 7.472656-12.070312 3.179687-19.21875l-37.019531-61.6875c-3.9375-6.574219-10.3125-7.277344-12.859375-7.277344s-8.921875.703125-12.859375 7.277344l-37.019531 61.6875c-5.976563 9.96875 1.15625 22.71875 12.863281 22.71875h15.804687l-4.394531-4.394531c-5.859375-5.859375-5.859375-15.351563 0-21.210938s15.351563-5.859375 21.210938 0l29.980469 29.980469c5.835937 5.820312 5.875 15.390625 0 21.25l-29.980469 29.980469c-5.859375 5.859375-15.351563 5.859375-21.210938 0s-5.859375-15.351563 0-21.210938l4.394531-4.394531h-15.804687c-34.972656 0-56.597656-38.125-38.585937-68.160156l37.015624-61.683594c8.203126-13.683594 22.632813-21.839844 38.585938-21.839844s30.382812 8.15625 38.585938 21.839844l37.015624 61.683594c11.351563 18.925781 7.394532 43.082031-9.417968 57.453125zm0 0" />
                                        </svg></a>
                                </div>
                                <div
                                    class="col-12 col-sm-5 d-flex justify-content-sm-end justify-content-center mt-sm-0 mt-3" style="margin-left: 191px;">
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
                                        <h4>Category Management</h4>
                                    </div>
                                </div>
                            </div>
                            <div class="widget-content widget-content-area">
                                <div class="table-responsive">
                                    <table class="table table-bordered">
                                        <thead>
                                            <tr>
                                                <th class="text-center">Code</th>
                                                <th>Name</th>
                                                <th>Status</th>
                                                <th class="text-center">Action</th>
                                            </tr>
                                        </thead>

                                        <tbody v-if="query">
                                            <tr v-for="item in categoryFilte" :key="item.id">
                                                <td class="text-center">{{ item.code }}</td>
                                                <td>{{ item.name }}</td>
                                                <td>
                                                    <p class="text-success">
                                                        <span v-if="item.status">Action</span>
                                                        <span v-if="!item.status">No Action</span>
                                                    </p>
                                                </td>


                                                <td class="text-center">
                                                    <a href="javascript:void(0);" data-toggle="tooltip"
                                                        data-placement="top" title="" data-original-title="Edit"
                                                        style="padding: 20px;" v-on:click="onEdit(item)"><svg
                                                            xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                                            viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                                            stroke-width="2" stroke-linecap="round"
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
                                                            stroke-width="2" stroke-linecap="round"
                                                            stroke-linejoin="round" class="feather feather-trash-2">
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
                                                <td>
                                                    <p class="text-success">
                                                        <span v-if="item.status">Action</span>
                                                        <span v-if="!item.status">No Action</span>
                                                    </p>
                                                </td>
                                                <td class="text-center">
                                                    <a href="javascript:void(0);" data-toggle="tooltip"
                                                        data-placement="top" title="" data-original-title="Edit"
                                                        style="padding: 20px;" v-on:click="onEdit(item)"><svg
                                                            xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                                            viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                                            stroke-width="2" stroke-linecap="round"
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
                                                            stroke-width="2" stroke-linecap="round"
                                                            stroke-linejoin="round" class="feather feather-trash-2">
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
                                                    aria-label="Goto page 1">{{ item }}</span>
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
                        <CategoryEdit :category="showEdit" v-if="isShowEdit == true" @ShowEditData="getEdit($event)" />
                        <CategoryAdd v-if="isShowAdd == true" @ShowData="getData($event)" />
                        <CategoryTrash v-if="isShowTrash == true" @ShowDeleteData="getDeleteData($event)" />
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
import CategoryEdit from "../Category/edit.vue";
import CategoryAdd from "../Category/add.vue";
import CategoryTrash from "../Category/trash.vue";
import CategoryProductService from "@/services/CategoryProductService";
import "vue-awesome-paginate/dist/style.css";
// import 'mosha-vue-toastify/dist/style.css';
// import { createToast } from 'mosha-vue-toastify';
export default {
    name: "Index",
    components: {
        CategoryAdd,
        CategoryEdit,
        CategoryTrash,
    },
    data() {
        return {
            category: null,
            showEdit: null,
            showTrash: null,
            isShowEdit: false,
            isShowAdd: false,
            isShowTrash: false,
            query: "",
            current: 1,
            pageSize: 5,
            isActive: false
        }
    },
    created() {
        CategoryProductService.getAll()
            .then((res) => {
                this.category = res.data;
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
            return this.category && this.category.length
        },
        categoryFilte() {
            if (this.query) {
                return this.category.filter((category) => {
                    return (
                        category.name
                            .toLowerCase()
                            .indexOf(this.query.toLowerCase()) != -1
                    )
                })
            } else {
                return this.category;
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
                return this.category.slice(this.indexStart, this.indexEnd, this.totalPaginate);
            }
            else {
                return this.category;
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
        onEdit(data) {
            this.showEdit = data;
            this.isShowEdit = true
            console.log(data);
        },
        back_to() {
            this.isShowEdit = false,
                this.isShowAdd = false,
                this.isShowTrash = false
        },
        onAdd() {
            this.isShowAdd = true
        },
        onTrash() {
            this.isShowTrash = true
        },
        getData(data) {
            this.category.push(data);
            console.log(data);
            this.isShowAdd = false;
            this.$forceUpdate();

        },
        getDeleteData(data) {
            this.category.push(data);
            console.log(data);
            this.isShowTrash = false;
            this.$forceUpdate();

        },
        getEdit(data) {
            for (let i = 0; i < this.category.length; i++) {
                if (this.category[i].id == data.id) {
                    this.category[i] = data;
                    this.$forceUpdate();
                    break;
                }
            }

            console.log(this.category);
            this.isShowEdit = false;
        },
        onDelete(item) {
            if (confirm("Are you sure you want to delete " + item.code)) {
                CategoryProductService.temporaryDelete(item)
                    .then(response => {
                        console.log(response);
                        this.category.splice(this.category.findIndex(e => e.id == item.id), 1).push(response.data);
                    })
                    .catch(function (error) {
                        console.log(error)
                    })
            }
        }
    }

}
</script>