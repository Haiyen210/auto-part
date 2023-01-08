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
                <div class="row">
                    <!-- <div class="col-xl-12 col-lg-12 col-sm-12"> -->
                    <div class="col-xl-6 col-lg-6 col-sm-6">
                        <div class="form-group">
                            <label for="exampleFormControlInput1"
                                class="col-xl-12 col-sm-12 col-sm-12 col-form-label">Product
                                Code</label>
                            <div class="col-xl-12 col-lg-12 col-sm-12">
                                <input type="text" class="form-control" id="code" placeholder="" v-model="products.code"
                                    :class="{ error: codeError.status, success: codeSuccess.status }" />
                                <p class="text-error" v-if="codeError.status">{{ codeError.text }}</p>
                                <p class="success-text" v-if="codeSuccess.status">{{ codeSuccess.text }}
                                </p>
                            </div>

                        </div>
                        <div class="form-group">
                            <label for="hPassword" class="col-xl-12 col-sm-12 col-sm-12 col-form-label">Products
                                Name</label>
                            <div class="col-xl-12 col-lg-12 col-sm-12">
                                <input type="text" class="form-control" id="name" placeholder="" v-model="products.name"
                                    :class="{ error: nameError.status, success: nameSuccess.status }">
                                <p class="text-error" v-if="nameError.status">{{ nameError.text }}</p>
                                <p class="success-text" v-if="nameSuccess.status">{{ nameSuccess.text }}
                                </p>
                            </div>
                        </div>

                        <div class="form-group">
                            <label for="hPassword"
                                class="col-xl-12 col-sm-12 col-sm-12 col-form-label">Description</label>
                            <div class="col-xl-12 col-lg-12 col-sm-12">
                                <textarea style="width: 100%;" name="" id="description" cols="50" rows="10"
                                    placeholder="Click..." v-model="products.description"
                                    :class="{ error: descriptionError.status, success: descriptionSuccess.status }">

                        </textarea>
                                <p class="text-error" v-if="descriptionError.status">{{ descriptionError.text }}</p>
                                <p class="success-text" v-if="descriptionSuccess.status">{{ descriptionSuccess.text }}
                                </p>
                            </div>
                        </div>

                    </div>

                    <div class="col-xl-6 col-lg-6 col-sm-6">

                        <div class="form-group">
                            <label for="hPassword" class="col-xl-12 col-sm-12 col-sm-12 col-form-label">Price</label>
                            <div class="col-xl-12 col-lg-12 col-sm-12">
                                <input type="text" class="form-control" id="price" placeholder=""
                                    v-model="products.price"
                                    :class="{ error: priceError.status, success: priceSuccess.status }">
                                <p class="text-error" v-if="priceError.status">{{ priceError.text }}</p>
                                <p class="success-text" v-if="priceSuccess.status">{{ priceSuccess.text }}
                                </p>
                            </div>
                        </div>
                        <div class="form-group">
                            <label for="hPassword"
                                class="col-xl-12 col-sm-12 col-sm-12 col-form-label">SalePrice</label>
                            <div class="col-xl-12 col-lg-12 col-sm-12">
                                <input type="text" class="form-control" id="salePrice" placeholder=""
                                    v-model="products.salePrice"
                                    :class="{ error: salePriceError.status, success: salePriceSuccess.status }">
                                <p class="text-error" v-if="salePriceError.status">{{ salePriceError.text }}</p>
                                <p class="success-text" v-if="salePriceSuccess.status">{{ salePriceSuccess.text }}
                                </p>
                            </div>
                        </div>
                        <div class="form-group">
                            <label for="hPassword" class="col-xl-12 col-sm-12 col-sm-12 col-form-label">Quantity</label>
                            <div class="col-xl-12 col-lg-12 col-sm-12">
                                <input type="number" class="form-control" id="quantity" placeholder=""
                                    v-model="products.quantity"
                                    :class="{ error: quantityError.status, success: quantitySuccess.status }">
                                <p class="text-error" v-if="quantityError.status">{{ quantityError.text }}</p>
                                <p class="success-text" v-if="quantitySuccess.status">{{ quantitySuccess.text }}
                                </p>
                            </div>
                        </div>

                        <div class="row">
                            <div class="col-lg-12" style="display: flex;">
                                <div class="col-lg-6" style="padding: 0;">
                                    <div class="form-group">
                                        <label for="hPassword"
                                            class="col-xl-12 col-sm-12 col-sm-12 col-form-label">Category</label>
                                        <div class="col-xl-12 col-lg-12 col-sm-12">
                                            <select class="form-control basic" name="" id="categoryId"
                                                v-model="products.categoryId">
                                                <option value="">Choose</option>
                                                <option v-for="item in categorys" :key="item.id"
                                                    :selected="products.categoryId === item.id" v-bind:value="item.id">
                                                    {{
                                                        item.name
                                                    }}</option>
                                            </select>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-lg-6" style="padding: 0;">
                                    <div class="form-group ">
                                        <label for="hPassword"
                                            class="col-xl-12 col-sm-12 col-sm-12 col-form-label">WareHouse</label>
                                        <div class="col-xl-12 col-lg-12 col-sm-12">
                                            <select class="form-control basic" name="" id="wareHouseID"
                                                v-model="products.wareHouseID">
                                                <option value="">Choose</option>
                                                <option v-for="item in warehouses" :key="item.id"
                                                    :selected="products.wareHouseID === item.id" v-bind:value="item.id">
                                                    {{ item.name }}
                                                </option>
                                            </select>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <fieldset class="form-group mb-4" style="margin-left: 15px;    margin-top: 10px;">
                            <div class="row">
                                <label class="col-form-label col-xl-2 col-sm-3 col-sm-2 pt-0">Status</label>
                                <div class="col-xl-10 col-lg-9 col-sm-10" style="display:flex">
                                    <div class="form-check" style="margin-right: 50px;">
                                        <input class="form-check-input" type="radio" v-model="products.status"
                                            :value="true" :checked="products.status === true" id="status"
                                            style="width: 16px;height: 16px;" />
                                        <label class="form-check-label" for="flexCheckDefault"> Sout
                                        </label>
                                    </div>
                                    <div class="form-check">
                                        <input class="form-check-input" type="radio" v-model="products.status"
                                            :value="false" :checked="products.status === false" id="status"
                                            style="width: 16px;height: 16px;" />
                                        <label class="form-check-label" for="flexCheckChecked"> Sout Out </label>
                                    </div>
                                </div>
                            </div>
                        </fieldset>
                        <div class="form-group">
                            <label class="col-form-label col-xl-2 col-sm-3 col-sm-2 pt-0">Images</label>
                            <div class="col-4" style="margin-left: 20px;">
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
                                    style="width: 300px; height: 250px; margin-left: 37%;margin-top: -20%;"
                                    v-if="ishowImage == false" />
                                <img v-bind:src="url"
                                    style="width: 300px; height: 250px; margin-left: 37%;margin-top: -20%;"
                                    v-if="ishowImage == true" />
                            </div>
                        </div>

                    </div>

                    <div class="form-group row">
                        <div class="col-sm-10">
                            <button type="submit" class="btn btn-primary mt-3">Save</button>
                        </div>
                    </div>
                    <!-- </div> -->

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
export default {
    props: ['product'],

    data() {

        return {
            products: this.product,
            categoryName: null,
            warehouseName: null,
            url: null,
            ishowImage: false,
            categorys: null,
            warehouses: null,
            message: "",
            old: "localhost:54195/images/" + this.product.images,
            currentImage: undefined,
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
            quantityError: {
                text: "",
                status: false,
            },
            quantitySuccess: {
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
            wareHouseIDError: {
                text: "",
                status: false,
            },
            wareHouseIDSuccess: {
                text: "",
                status: false,
            }
        }

    },
    mounted() {
        WareHouseService.getAll()
            .then((res) => {
                this.warehouses = res.data;
            })
            .catch((error) => {
                console.log(error);

            })
            .finally(() => {

            })
        CategoryProductService.getAll()
            .then((res) => {
                this.categorys = res.data;
            })
            .catch((error) => {
                console.log(error);

            })
            .finally(() => {

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
            if (this.products.code.length == 0) {
                this.codeError = {
                    text: "Code cannot be empty",
                    status: true
                };
                this.codeSuccess = {
                    text: "",
                    status: false
                }

            } else if (this.products.code.length < 4) {
                this.codeError = {
                    text: "Code must contain 4 characters",
                    status: true
                }
                this.codeSuccess = {
                    text: "",
                    status: false
                }

            } else if (this.products.code.length >= 4) {
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

            if (this.products.name.length == 0) {
                this.nameError = {
                    text: "NameProduct cannot be empty!",
                    status: true
                };
                this.nameSuccess = {
                    text: "",
                    status: false
                }

            } else if (this.products.name.length < 6 || this.products.name.length > 50) {
                this.nameError = {
                    text: "NameProduct must be between 6 and 50 characters",
                    status: true
                };
                this.nameSuccess = {
                    text: "",
                    status: false
                }

            } else if (this.products.name.length > 6 || this.products.name.length < 50) {
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

            if (this.products.description.length == 0) {
                this.descriptionError = {
                    text: "Description cannot be empty",
                    status: true
                };
                this.descriptionSuccess = {
                    text: "",
                    status: false
                }
            } else if (this.products.description.length > 0) {
                this.descriptionSuccess = {
                    text: "Success!",
                    status: true
                }
                this.descriptionError = {
                    text: "",
                    status: false
                }
            } else {
                this.descriptionSuccess = {
                    text: "",
                    status: true
                }
            }

            if (this.products.price.length == 0) {
                this.priceError = {
                    text: "Price cannot be empty",
                    status: true
                };
                this.priceSuccess = {
                    text: "",
                    status: false
                }
            } else if (this.products.price.length > 0) {
                this.priceSuccess = {
                    text: "Success!",
                    status: true
                }
                this.priceError = {
                    text: "",
                    status: false
                }
            } else {
                this.priceSuccess = {
                    text: "",
                    status: true
                }
            }

            if (this.products.salePrice.length == 0) {
                this.salePriceError = {
                    text: "SalePrice cannot be empty",
                    status: true
                };
                this.salePriceSuccess = {
                    text: "",
                    status: false
                }
            } else if (this.products.salePrice.length > 0) {
                this.salePriceSuccess = {
                    text: "Success!",
                    status: true
                }
                this.salePriceError = {
                    text: "",
                    status: false
                }
            } else {
                this.salePriceSuccess = {
                    text: "",
                    status: true
                }
            }

            if (this.products.quantity.length == 0) {
                this.quantityError = {
                    text: "Quantity cannot be empty",
                    status: true
                };
                this.quantitySuccess = {
                    text: "",
                    status: false
                }
            } else if (this.products.quantity.length > 0) {
                this.quantitySuccess = {
                    text: "Success!",
                    status: true
                }
                this.quantityError = {
                    text: "",
                    status: false
                }
            } else {
                this.quantitySuccess = {
                    text: "",
                    status: true
                }
            }

            if (this.products.categoryId == 0) {
                this.categoryIdError = {
                    text: "Must chosse CategoryId!",
                    status: true
                };
                this.categoryIdSuccess = {
                    text: "",
                    status: false
                }
            } else if (this.products.categoryId > 0) {
                this.categoryIdSuccess = {
                    text: "Success!",
                    status: true
                }
                this.categoryIdError = {
                    text: "",
                    status: false
                }
            } else {
                this.categoryIdSuccess = {
                    text: "",
                    status: true
                }
            }

            if (this.products.images.length == 0) {
                this.imagesError = {
                    text: "Images cannot be empty!",
                    status: true
                };
                this.imagesSuccess = {
                    text: "",
                    status: false
                }

            } else if (this.products.images.length > 0) {
                this.imagesSuccess = {
                    text: "Success!",
                    status: true
                }
                this.imagesError = {
                    text: "",
                    status: false
                }
            } else {
                this.imagesSuccess = {
                    text: "",
                    status: true
                }
            }

            if (this.products.wareHouseID == 0) {
                this.wareHouseIDError = {
                    text: "Must chosse wareHouseID!",
                    status: true
                };
                this.wareHouseIDSuccess = {
                    text: "",
                    status: false
                }

            } else if (this.products.wareHouseID > 0) {
                this.wareHouseIDSuccess = {
                    text: "Success!",
                    status: true
                }
                this.wareHouseIDError = {
                    text: "",
                    status: false
                }
            } else {
                this.wareHouseIDSuccess = {
                    text: "",
                    status: true
                }
            }
            if (this.codeSuccess.status == true && this.nameSuccess.status == true && this.descriptionSuccess.status == true && this.salePriceSuccess.status == true && this.priceSuccess.status == true && this.quantitySuccess.status == true && this.imagesSuccess.status == true) {

                let login = JSON.parse(localStorage.getItem("user"));
                if (login.role == 2) {
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
                        this.$emit("ShowEditData", this.products);
                } else {
                    alert("You are not authorized to perform this task");
                }
            }
        }
    }

}
</script>
