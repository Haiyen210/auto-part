<template>
    <div class="statbox widget box box-shadow">

        <div class="widget-header">
            <div class="row">
                <div class="col-xl-12 col-md-12 col-sm-12 col-12">
                    <h4>Edit WareHous</h4>
                </div>
            </div>
        </div>
        <div class="widget-content widget-content-area">
            <form method="post" v-on:submit.prevent="onSubmitEditForm" v-if="warehouses">
                <input type="hidden" v-model="warehouses.id">
                <div class="form-group row mb-4">
                    <label for="exampleFormControlInput1" class="col-xl-2 col-sm-3 col-sm-2 col-form-label">Warehouses
                        Code</label>
                    <div class="col-xl-6 col-lg-6 col-sm-6">
                        <input type="text" class="form-control" id="code" placeholder="" v-model="warehouses.code" />
                    </div>

                </div>
                <div class="form-group row mb-4">
                    <label for="hPassword" class="col-xl-2 col-sm-3 col-sm-2 col-form-label">Name</label>
                    <div class="col-xl-6 col-lg-6 col-sm-6">
                        <textarea class="form-control mb-4" rows="3" id="name" v-model="warehouses.name"></textarea>
                    </div>
                </div>

                <div class="form-group row mb-4">
                    <label for="hPassword" class="col-xl-2 col-sm-3 col-sm-2 col-form-label">Factory</label>
                    <div class="col-xl-6 col-lg-6 col-sm-6">
                        <select class="form-control basic" name="" id="factoryID" v-model="warehouses.factoryID">
                            <option value="">Choose</option>
                            <option v-for="item in factoryes" :key="item.id"
                                :selected="warehouses.factoryID === item.id" v-bind:value="item.id">{{ item.name }}
                            </option>
                        </select>

                    </div>
                </div>

                <fieldset class="form-group mb-4">
                    <div class="row">
                        <label class="col-form-label col-xl-2 col-sm-3 col-sm-2 pt-0">Status</label>
                        <div class="col-xl-10 col-lg-9 col-sm-10">
                            <div class="form-check">
                                <input class="form-check-input" type="radio" v-model="warehouses.status" :value="1"
                                    :checked="warehouses.status === 1" id="status" style="width: 16px;height: 16px;" />
                                <label class="form-check-label" for="flexCheckDefault"> Action
                                </label>
                            </div>
                            <div class="form-check">
                                <input class="form-check-input" type="radio" v-model="warehouses.status" :value="0"
                                    :checked="warehouses.status === 0" id="status" style="width: 16px;height: 16px;" />
                                <label class="form-check-label" for="flexCheckChecked"> No Action </label>
                            </div>
                        </div>
                    </div>
                </fieldset>
                <div class="form-group row">
                    <div class="col-sm-10">
                        <button type="submit" class="btn btn-primary mt-3">Save</button>
                    </div>
                </div>
            </form>
        </div>
    </div>
</template>
<script>
import FactoryService from '@/services/FactoryService';
import WareHouseService from '@/services/WareHouseService';
// import 'mosha-vue-toastify/dist/style.css';
// import { createToast } from 'mosha-vue-toastify';
export default {
    props: ['warehouse'],

    data() {

        return {
            warehouses: this.warehouse,
            url: null,
            factoryes: null,
            ishowImage: false,
            category: null,
            message: "",
            codeError: {
                text: "",
                status: false,
            },
            codeSuccess: {
                text: "",
                status: false,
            },
            nameError: {
                text: "",
                status: false,
            },
            nameSuccess: {
                text: "",
                status: false,
            },
            factoryIDError: {
                text: "",
                status: false,
            },
            factoryIDSuccess: {
                text: "",
                status: false,
            }
        }


    },
    mounted() {
        FactoryService.getAll()
            .then((res) => {
                this.factoryes = res.data;
            })
            .catch((error) => {
                console.log(error);

            })
            .finally(() => {

            })

    },
    methods: {

        onSubmitEditForm() {
            if (this.warehouses.code.length == 0) {
                this.codeError = {
                    text: "Code cannot be empty",
                    status: false
                }

            } else if (this.warehouses.code.length < 4) {
                this.codeError = {
                    text: "Code must contain 4 characters",
                    status: false
                }


            } else if (this.warehouses.code.length >= 4) {
                this.codeSuccess = {
                    text: "Success!",
                    status: true
                }
                this.codeError = {
                    text: "",
                    status: false
                }
            } else {
                this.codeSuccess = {
                    text: "",
                    status: true
                }
            }

            if (this.warehouses.name.length == 0) {
                this.nameError = {
                    text: "FullName cannot be empty!",
                    status: false
                }

            } else if (this.warehouses.name.length < 6 || this.warehouses.name.length > 50) {
                this.nameError = {
                    text: "FullName must be between 6 and 50 characters",
                    status: false
                }


            } else if (this.warehouses.name.length > 6 || this.warehouses.name.length < 50) {
                this.nameSuccess = {
                    text: "Success!",
                    status: true
                }
                this.nameError = {
                    text: "",
                    status: false
                }
            } else {
                this.nameSuccess = {
                    text: "",
                    status: true
                }
            }

            if (this.warehouses.factoryID.length == 0) {
                this.factorysError = {
                    text: "factory cannot be empty",
                    status: false
                }


            } else if (this.warehouses.factoryID.length > 0) {
                this.factoryIDSuccess = {
                    text: "Success!",
                    status: true
                }
                this.factoryIDError = {
                    text: "",
                    status: false
                }

            } else {
                this.factoryIDSuccess = {
                    text: "",
                    status: true
                }
            }
            if (this.codeSuccess.status == true && this.nameSuccess.status == true && this.factoryIDSuccess.status == true) {

            let login = JSON.parse(localStorage.getItem("user"));
            if (login.role == 2) {
                WareHouseService.update(this.warehouses)
                    .then((res) => {
                        console.log(res);
                        this.warehouses.factoryName = res.data.factoryName;
                    })
                    .catch((error) => {
                        // error.response.status Check status code
                        console.log(error);
                    })
                    .finally(() => {
                        //Perform action in always
                    });
                this.$emit("ShowEditData", this.warehouses);
            } else {
                alert("You are not authorized to perform this task");
            }
        }
        },
    }

}
</script>
