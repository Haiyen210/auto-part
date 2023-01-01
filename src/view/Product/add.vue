<template>

    <div class="statbox widget box box-shadow">
        <div class="widget-header">
            <div class="row">
                <div class="col-xl-12 col-md-12 col-sm-12 col-12">
                    <h4>Add New Product</h4>
                </div>
            </div>
        </div>
        <div class="widget-content widget-content-area">
            <form method="post" v-on:submit.prevent="onSubmitForm">
                <div class="form-group row mb-4">
                    <label for="exampleFormControlInput1" class="col-xl-2 col-sm-3 col-sm-2 col-form-label">Product Code</label>
                    <div class="col-xl-6 col-lg-6 col-sm-6">
                        <input type="text" class="form-control" id="code" placeholder="" v-model="product.code"
                            :class="{ error: codeError.status, success: codeSuccess.status }" />
                        <p class="text-error" v-if="codeError.status">{{ codeError.text }}</p>
                        <p class="success-text" v-if="codeSuccess.status">{{ codeSuccess.text }}
                        </p>
                    </div>

                </div>
                <div class="form-group row mb-4">
                    <label for="hPassword" class="col-xl-2 col-sm-3 col-sm-2 col-form-label">Product Name</label>
                    <div class="col-xl-6 col-lg-6 col-sm-6">
                        <input type="text" class="form-control" id="name" placeholder="" v-model="product.name"
                            :class="{ error: nameError.status, success: nameSuccess.status }">
                        <p class="text-error" v-if="nameError.status">{{ nameError.text }}</p>
                        <p class="success-text" v-if="nameSuccess.status">{{ nameSuccess.text }}
                        </p>
                    </div>
                </div>
                <div class="form-group row mb-4">
                    <label for="hPassword" class="col-xl-2 col-sm-3 col-sm-2 col-form-label">Description</label>
                    <div class="col-xl-6 col-lg-6 col-sm-6">
                        <textarea name="" id="description" cols="50" rows="10" placeholder="Click..." v-model="product.description"
                            :class="{ error: descriptionError.status, success: descriptionSuccess.status }">

                        </textarea>
                        <!-- <input type="text" class="form-control" id="email" placeholder="" v-model="account.email"
                            :class="{ error: emailError.status, success: emailSuccess.status }"> -->
                        <p class="text-error" v-if="descriptionError.status">{{ descriptionError.text }}</p>
                        <p class="success-text" v-if="descriptionSuccess.status">{{ descriptionSuccess.text }}
                        </p>
                    </div>
                </div>
                <div class="form-group row mb-4">
                    <label for="hPassword" class="col-xl-2 col-sm-3 col-sm-2 col-form-label">Price</label>
                    <div class="col-xl-6 col-lg-6 col-sm-6">
                        <input type="text" class="form-control" id="price" placeholder="" v-model="product.price"
                            :class="{ error: priceError.status, success: priceSuccess.status }">
                        <p class="text-error" v-if="priceError.status">{{ priceError.text }}</p>
                        <p class="success-text" v-if="priceSuccess.status">{{ priceSuccess.text }}
                        </p>
                    </div>
                </div>
                <div class="form-group row mb-4">
                    <label for="hPassword" class="col-xl-2 col-sm-3 col-sm-2 col-form-label">SalePrice</label>
                    <div class="col-xl-6 col-lg-6 col-sm-6">
                        <input type="text" class="form-control" id="price" placeholder="" v-model="product.Saleprice"
                            :class="{ error: salePriceError.status, success: salePriceSuccess.status }">
                        <p class="text-error" v-if="salePriceError.status">{{ salePriceError.text }}</p>
                        <p class="success-text" v-if="salePriceSuccess.status">{{ salePriceSuccess.text }}
                        </p>
                    </div>
                </div>
                <div class="form-group row mb-4">
                    <label for="hPassword" class="col-xl-2 col-sm-3 col-sm-2 col-form-label">Image</label>
                    <div class="col-xl-6 col-lg-6 col-sm-6">
                        <input type="text" class="form-control" id="price" placeholder="" v-model="product.images"
                            :class="{ error: imagesError.status, success: imagesSuccess.status }">
                        <p class="text-error" v-if="imagesError.status">{{ imagesError.text }}</p>
                        <p class="success-text" v-if="imagesSuccess.status">{{ imagesSuccess.text }}
                        </p>
                    </div>
                </div>
                <fieldset class="form-group mb-4">
                    <div class="row">
                        <label class="col-form-label col-xl-2 col-sm-3 col-sm-2 pt-0">Status</label>
                        <div class="col-xl-10 col-lg-9 col-sm-10">
                            <div class="form-check">
                                <input class="form-check-input" type="radio" v-model="product.status" :value="true"
                                    :checked="product.status === true" id="status" style="width: 16px;height: 16px;" />
                                <label class="form-check-label" for="flexCheckDefault"> còm
                                </label>
                            </div>
                            <div class="form-check">
                                <input class="form-check-input" type="radio" v-model="product.status" :value="false"
                                    :checked="product.status === false" id="status"
                                    style="width: 16px;height: 16px;" />
                                <label class="form-check-label" for="flexCheckChecked"> hết </label>
                            </div>
                        </div>
                    </div>
                </fieldset>

                <div class="form-group row mb-4">
                    <label for="hPassword" class="col-xl-2 col-sm-3 col-sm-2 col-form-label">Category</label>
                    <div class="col-xl-6 col-lg-6 col-sm-6">
                        <select name="" id="categoryId" v-model="product.category"
                          >
                          <option v-for="item in categorys" :key="item.id" :selected="product.category === item.id" v-bind:value="item">{{ item.name }}</option>
                        </select>
                    </div>
                </div> 
                <div class="form-group row mb-4">
                    <label for="hPassword" class="col-xl-2 col-sm-3 col-sm-2 col-form-label">WareHouseId</label>
                    <div class="col-xl-6 col-lg-6 col-sm-6">
                        <select name="" id="warehouseId" v-model="product.warehouse">
                            <option value="" >Choose</option>
                            <option v-for="item in warehouses" :key="item.id" :selected="product.warehouseId === item.id" v-bind:value="item">{{ item.name }}</option>
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
import CategoryServie from '@/services/CategoryService'
// import 'mosha-vue-toastify/dist/style.css';
// import { createToast } from 'mosha-vue-toastify';
export default {
    data() {
        return {
            message: "",
            currentImage: undefined,
            category: null,
            warehouses : null,
            categorys: null,
            url: null,
            ID: null,
            product: {
                id: null,
                code: "",
                name: "",
                description: "",
                price: "",
                salePrice: "",
                category:"",
                categoryId: "",
                images: "Fuys.jpg",
                wareHouseID: "",       
                status: true           
            },
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
            descriptionError: {
                text: "",
                status: false,
            },
            descriptionSuccess: {
                text: "",
                status: false,
            },
        
            priceError: {
                text: "",
                status: false,
            },
            priceSuccess: {
                text: "",
                status: false,
            },
            
            salePriceError: {
                text: "",
                status: false,
            },
            salePriceSuccess: {
                text: "",
                status: false,
            },
            categoryIdError: {
                text: "",
                status: false,
            },
            categoryIdSuccess: {
                text: "",
                status: false,
            },
            imagesError: {
                text: "",
                status: false,
            },
            imagesSuccess: {
                text: "",
                status: false,
            },
            warehouseIdError:{
                text: "",
                status: false,
            },
            warehouseIdSuccess:{
                text: "",
                status: false,
            }
            
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
            CategoryServie.getAll()
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
        onSubmitForm() {
            // if (this.product.code.length == 0) {
            //     this.codeError = {
            //         text: "Code cannot be empty",
            //         status: true
            //     }

            // } else if (this.product.code.length < 5) {
            //     this.codeError = {
            //         text: "Code must contain 5 characters",
            //         status: true
            //     }


            // } else if (this.product.code.length >= 5) {
            //     this.codeSuccess = {
            //         text: "Success!",
            //         status: true
            //     }
            //     this.codeError = {
            //         text: "",
            //         status: false
            //     }
            // } else {
            //     this.codeError = {
            //         text: "",
            //         status: false
            //     }
            // }

            // if (this.product.name.length == 0) {
            //     this.nameError = {
            //         text: "NameProduct cannot be empty!",
            //         status: true
            //     }

            // } else if (this.product.name.length < 6 || this.product.name.length > 50) {
            //     this.nameError = {
            //         text: "NameProduct must be between 6 and 50 characters",
            //         status: true
            //     }


            // } else if (this.product.name.length > 6 || this.product.name.length < 50) {
            //     this.nameSuccess = {
            //         text: "Success!",
            //         status: true
            //     }
            //     this.nameError = {
            //         text: "",
            //         status: false
            //     }
            // } else {
            //     this.nameError = {
            //         text: "",
            //         status: false
            //     }
            // }

            // if (this.product.description.length == 0) {
            //     this.phoneError = {
            //         text: "Description cannot be empty",
            //         status: true
            //     }
            // } else if (this.product.phone.length > 0) {
            //     this.descriptionSuccess = {
            //         text: "Success!",
            //         status: true
            //     }
            //     this.descriptionSuccess = {
            //         text: "",
            //         status: false
            //     }
            // } else {
            //     this.descriptionSuccess = {
            //         text: "",
            //         status: false
            //     }
            // }
            
            // if (this.product.tax.length == 0) {
            //     this.taxError = {
            //         text: "Tax cannot be empty",
            //         status: true
            //     }
            // } else if (this.product.password.length > 0 ) {
            //     this.taxSuccess = {
            //         text: "Success!",
            //         status: true
            //     }
            //     this.taxError = {
            //         text: "",
            //         status: false
            //     }
            // } else {
            //     this.taxError = {
            //         text: "",
            //         status: false
            //     }
            // }

            // if (this.product.price.length == 0) {
            //     this.priceError = {
            //         text: "Price cannot be empty",
            //         status: true
            //     }
            // } else if (this.product.price.length > 0) {
            //     this.priceSuccess = {
            //         text: "Success!",
            //         status: true
            //     }
            //     this.priceError = {
            //         text: "",
            //         status: false
            //     }
            // } else {
            //     this.priceError = {
            //         text: "",
            //         status: false
            //     }
            // }

            // if (this.product.categoryId.length == 0) {
            //     this.categoryIdError = {
            //         text: "CategoryId cannot be empty!",
            //         status: true
            //     }

            // } else if(this.product.categoryId.length > 0){
            //     this.categoryIdSuccess = {
            //         text: "Success!",
            //         status: true
            //     }
            //     this.categoryIdError = {
            //         text: "",
            //         status: false
            //     }
            // }else {
            //     this.categoryIdError = {
            //         text: "",
            //         status: false
            //     }
            // }

            // if (this.product.images.length == 0) {
            //     this.imagesError = {
            //         text: "Images cannot be empty!",
            //         status: true
            //     }

            // } else if(this.product.images.length > 0){
            //     this.imagesSuccess = {
            //         text: "Success!",
            //         status: true
            //     }
            //     this.imagesError = {
            //         text: "",
            //         status: false
            //     }
            // }else {
            //     this.imagesError = {
            //         text: "",
            //         status: false
            //     }
            // }

            // if (this.product.warehouseId.length == 0) {
            //     this.warehouseIdError = {
            //         text: "Images cannot be empty!",
            //         status: true
            //     }

            // } else if(this.product.warehouseId.length > 0){
            //     this.warehouseIdSuccess = {
            //         text: "Success!",
            //         status: true
            //     }
            //     this.warehouseIdError = {
            //         text: "",
            //         status: false
            //     }
            // }else {
            //     this.warehouseIdError = {
            //         text: "",
            //         status: false
            //     }
            // }
                     

            // if (this.codeSuccess.status == true && this.nameSuccess.status == true && this.descriptionSuccess.status == true && this.taxSuccess.status == true && this.priceSuccess.status == true && this.categoryIdSuccess.status == true && this.imagesSuccess.status == true && this.warehouseIdSuccess.status == true && this.createdDateSuccess.status == true && this.modifiedDateSuccess.status == true) {
                this.product.warehouseId = this.product.warehouse.id;
                this.product.categoryId = this.product.category.id;
                ProductService.create(this.product)
                    .then((res) => {
                        //Perform Success Action
                        this.ID = res.data.id;
                        this.product.id = this.ID;
                        this.product.status = true;
                        this.product.createdDate == Date(); 
                        console.log(this.product);
                        // createToast({
                        //     title: 'Success',
                        //     description: 'Thêm mới tài khoản Success',
                        //     type: 'success',
                        //     timeout: 5000,

                        // })
                        this.$emit("ShowData", this.product);
                    })
                    .catch((error) => {
                        // error.response.status Check status code
                        console.log(error);
                    })
                    .finally(() => {
                        //Perform action in always
                    });
            // }

        },
    }

}
</script>
