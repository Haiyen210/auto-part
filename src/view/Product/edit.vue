<template>
    <div class="statbox widget box box-shadow">

        <div class="widget-header">
            <div class="row">
                <div class="col-xl-12 col-md-12 col-sm-12 col-12">
                    <h4>Edit Product</h4>
                </div>
            </div>
        </div>
        <div class="widget-content widget-content-area">
            <form method="post" v-on:submit.prevent="onSubmitEditForm" v-if="products">
                <input type="hidden" v-model="products.id">
                <div class="form-group row mb-4">
                    <label for="exampleFormControlInput1" class="col-xl-2 col-sm-3 col-sm-2 col-form-label">Product Code</label>
                    <div class="col-xl-6 col-lg-6 col-sm-6">
                        <input type="text" class="form-control" id="code" placeholder="" v-model="products.code" />
                    </div>

                </div>
                <div class="form-group row mb-4">
                    <label for="hPassword" class="col-xl-2 col-sm-3 col-sm-2 col-form-label">Product Name</label>
                    <div class="col-xl-6 col-lg-6 col-sm-6">
                        <textarea class="form-control mb-4" rows="3" id="name" v-model="products.name"></textarea>
                    </div>
                </div>
                <div class="form-group row mb-4">
                    <label for="exampleFormControlInput1"
                        class="col-xl-2 col-sm-3 col-sm-2 col-form-label">Description</label>
                    <div class="col-xl-6 col-lg-6 col-sm-6">
                        <input type="text" class="form-control" id="description" placeholder="" v-model="products.description" />
                    </div>

                </div>
                <div class="form-group row mb-4">
                    <label for="exampleFormControlInput1" class="col-xl-2 col-sm-3 col-sm-2 col-form-label">Price</label>
                    <div class="col-xl-6 col-lg-6 col-sm-6">
                        <input type="text" class="form-control" id="price" placeholder=""
                            v-model="products.price" />
                    </div>

                </div>
                <div class="form-group row mb-4">
                    <label for="exampleFormControlInput1" class="col-xl-2 col-sm-3 col-sm-2 col-form-label">SalePrice</label>
                    <div class="col-xl-6 col-lg-6 col-sm-6">
                        <input type="text" class="form-control" id="salePrice" placeholder=""
                            v-model="products.salePrice" />
                    </div>

                </div>
                <div class="form-group row mb-4">
                    <label for="exampleFormControlInput1" class="col-xl-2 col-sm-3 col-sm-2 col-form-label">Quantity</label>
                    <div class="col-xl-6 col-lg-6 col-sm-6">
                        <input type="text" class="form-control" id="salePrice" placeholder=""
                            v-model="products.quantity" />
                    </div>

                </div>
                <div class="form-group row mb-4">
                    <label class="col-form-label col-xl-2 col-sm-3 col-sm-2 pt-0">Image</label>
                    <div class="col-4">
                        <p class="btn btn-success btn-sm" @click="$refs.file.click()">
                            Choose file
                        </p>
                    </div>
                    <div class="col-8">
                        <label class="btn btn-default p-0">
                            <input type="file" accept="image/*" name="file" ref="file" @change="selectImage"
                                :hidden="true" />
                        </label>
                    </div>
                    <div class="col-xl-10 col-lg-9 col-sm-10">
                        <img :src="'http://localhost:54195/images/' + products.images"
                            style="width: 600px; height: 500px; margin-left: 20%" v-if="ishowImage == false" />
                        <img v-bind:src="url" style="width: 600px; height: 500px; margin-left: 20%"
                            v-if="ishowImage == true" />
                    </div>
                </div>
                <fieldset class="form-group mb-4">
                    <div class="row">
                        <label class="col-form-label col-xl-2 col-sm-3 col-sm-2 pt-0">Status</label>
                        <div class="col-xl-10 col-lg-9 col-sm-10">
                            <div class="form-check">
                                <input class="form-check-input" type="radio" v-model="products.status" :value="true"
                                    :checked="products.status === true" id="status" style="width: 16px;height: 16px;" />
                                <label class="form-check-label" for="flexCheckDefault"> Action
                                </label>
                            </div>
                            <div class="form-check">
                                <input class="form-check-input" type="radio" v-model="products.status" :value="false"
                                    :checked="products.status === false" id="status"
                                    style="width: 16px;height: 16px;" />
                                <label class="form-check-label" for="flexCheckChecked"> No Action </label>
                            </div>
                        </div>
                    </div>
                </fieldset>
                <div class="form-group row mb-4">
                    <label for="hPassword" class="col-xl-2 col-sm-3 col-sm-2 col-form-label">Category</label>
                    <div class="col-xl-6 col-lg-6 col-sm-6">
                        <select class="form-control basic" name="" id="categoryId" v-model="products.categoryId">
                          <option value="" >Choose</option>
                          <option v-for="item in categorys" :key="item.id" :selected="products.categoryId === item.id" v-bind:value="item.id">{{ item.name }}</option>
                        </select>
                    </div>
                </div> 
                <div class="form-group row mb-4">
                    <label for="hPassword" class="col-xl-2 col-sm-3 col-sm-2 col-form-label">WareHouse</label>
                    <div class="col-xl-6 col-lg-6 col-sm-6">
                        <select class="form-control basic" name="" id="wareHouseID" v-model="products.wareHouseID">
                            <option value="" >Choose</option>
                            <option v-for="item in warehouses" :key="item.id" :selected="products.wareHouseID === item.id" v-bind:value="item.id">{{ item.name }}</option>
                        </select>
                
                    </div>
                </div>
                
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
import ProductService from '@/services/ProductService';
import WareHouseService from '@/services/WareHouseService';
import CategoryProductService from '@/services/CategoryProductService';
import UploadService from "../../services/UploadService";
// import 'mosha-vue-toastify/dist/style.css';
// import { createToast } from 'mosha-vue-toastify';
export default {
    props: ['product'],

    data() {

        return {
            products: this.product,
            categoryName : null,
            warehouseName: null,
            url: null,
            
            ishowImage: false,
            categorys: null,
            warehouses: null,
            message: "",
            old: "localhost:54195/images/" + this.product.images,
            currentImage: undefined,
        }

    },
    mounted(){
        WareHouseService.getAll()
            .then((res) => {
                this.warehouses = res.data;
            })
            .catch((error) => {
                console.log(error);

            })
            .finally(()=>{

            })
            CategoryProductService.getAll()
            .then((res) => {
                this.categorys = res.data;
            })
            .catch((error) => {
                console.log(error);

            })
            .finally(()=>{

            })
            },
            
    methods: {
        selectImage() {
            this.currentImage = this.$refs.file.files.item(0);
            this.url = URL.createObjectURL(this.currentImage);
            this.products.images = this.$refs.file.files.item(0).name;
            this.ishowImage = true;
        },
        onSubmitEditForm() {
            UploadService.upload(this.currentImage)
                .then((response) => {
                    console.log();
                    this.message = response.data.message;
                })
                .catch((err) => {
                    this.message = "Unable to load image  ! " + err;
                    this.currentImage = undefined;
                });
            ProductService.update(this.products)
                .then((res) => {     
                    console.log(res);
                    this.products.categoryName = res.data.categoryName;
                    this.products.warehouseName = res.data.warehouseName;
                       
                })
                .catch((error) => {
                    // error.response.status Check status code
                    console.log(error);
                })
                .finally(() => {
                    //Perform action in always
                });
            this.$emit("ShowEditData", this.product);
        },
    }

}
</script>
