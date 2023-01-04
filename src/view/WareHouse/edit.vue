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
                    <label for="exampleFormControlInput1" class="col-xl-2 col-sm-3 col-sm-2 col-form-label">Warehouses Code</label>
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
                    <label for="exampleFormControlInput1"
                        class="col-xl-2 col-sm-3 col-sm-2 col-form-label">Quantity</label>
                    <div class="col-xl-6 col-lg-6 col-sm-6">
                        <input type="number" class="form-control" id="quantity" placeholder="" v-model="warehouses.quantity" />
                    </div>

                </div>
                <div class="form-group row mb-4">
                    <label for="hPassword" class="col-xl-2 col-sm-3 col-sm-2 col-form-label">FactoryID</label>
                    <div class="col-xl-6 col-lg-6 col-sm-6">
                        <select class="form-control" name="" id="factoryID" v-model="warehouses.factoryID">
                            <option value="">Mời Chọn</option>
                        </select>
                        <!-- <input type="text" class="form-control" id="images" placeholder="" v-model="product.images"> -->
                    </div>
                </div>
                
                <fieldset class="form-group mb-4">
                    <div class="row">
                        <label class="col-form-label col-xl-2 col-sm-3 col-sm-2 pt-0">Status</label>
                        <div class="col-xl-10 col-lg-9 col-sm-10">
                            <div class="form-check">
                                <input class="form-check-input" type="radio" v-model="warehouses.status" :value="true"
                                    :checked="warehouses.status === true" id="status" style="width: 16px;height: 16px;" />
                                <label class="form-check-label" for="flexCheckDefault"> Action
                                </label>
                            </div>
                            <div class="form-check">
                                <input class="form-check-input" type="radio" v-model="warehouses.status" :value="false"
                                    :checked="warehouses.status === false" id="status"
                                    style="width: 16px;height: 16px;" />
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
import WareHouseService from '@/services/WareHouseService';
// import 'mosha-vue-toastify/dist/style.css';
// import { createToast } from 'mosha-vue-toastify';
export default {
    props: ['warehouse'],

    data() {

        return {
            warehouses: this.warehouse,
            url: null,
            ishowImage: false,
            category: null,
            message: "",
        }


    },
    methods: {

        onSubmitEditForm() {
            WareHouseService.update(this.warehouses)
                .then((res) => {
                    console.log(res);
                    // createToast({
                    //     title: 'Thành công',
                    //     description: 'Sửa tài khoản thành công',
                    //     type: 'success',
                    //     timeout: 5000,

                    // })    
                })
                .catch((error) => {
                    // error.response.status Check status code
                    console.log(error);
                })
                .finally(() => {
                    //Perform action in always
                });
            this.$emit("ShowEditData", this.warehouses);
        },
    }

}
</script>
