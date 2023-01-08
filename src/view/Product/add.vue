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
                <div class="row">
                    <!-- <div class="col-xl-12 col-lg-12 col-sm-12"> -->
                    <div class="col-xl-6 col-lg-6 col-sm-6">
                        <div class="form-group">
                            <label for="exampleFormControlInput1"
                                class="col-xl-12 col-sm-12 col-sm-12 col-form-label">Product
                                Code</label>
                            <div class="col-xl-12 col-lg-12 col-sm-12">
                                <input type="text" class="form-control" id="code" placeholder="" v-model="product.code"
                                    :class="{ error: codeError.status, success: codeSuccess.status }" />
                                <p class="text-error" v-if="codeError.status">{{ codeError.text }}</p>
                                <p class="success-text" v-if="codeSuccess.status">{{ codeSuccess.text }}
                                </p>
                            </div>

                        </div>
                        <div class="form-group">
                            <label for="hPassword" class="col-xl-12 col-sm-12 col-sm-12 col-form-label">Product
                                Name</label>
                            <div class="col-xl-12 col-lg-12 col-sm-12">
                                <input type="text" class="form-control" id="name" placeholder="" v-model="product.name"
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
                                    placeholder="Click..." v-model="product.description"
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
                                    v-model="product.price"
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
                                    v-model="product.salePrice"
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
                                    v-model="product.quantity"
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
                                                v-model="product.categoryId">
                                                <option value="">Choose</option>
                                                <option v-for="item in categorys" :key="item.id"
                                                    :selected="product.categoryId === item.id" v-bind:value="item.id">{{
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
                                                v-model="product.wareHouseID">
                                                <option value="">Choose</option>
                                                <option v-for="item in warehouses" :key="item.id"
                                                    :selected="product.wareHouseID === item.id" v-bind:value="item.id">
                                                    {{ item.name }}
                                                </option>
                                            </select>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="form-group">
                            <label class="col-form-label col-xl-2 col-sm-3 col-sm-2 pt-0">Images</label>
                            <div class="col-4" style="margin-left: 20px;">
                                <p class="btn btn-success btn-sm" @click="$refs.file.click()">
                                    Choose file
                                </p>
                            </div>
                            <div class="col-8">
                                <label class="btn btn-default p-0">
                                    <input type="file" accept="image/*" ref="file" name="file" @change="selectImage"
                                        :hidden="true" />
                                </label>
                            </div>
                            <div class="col-xl-10 col-lg-9 col-sm-10">
                                <img v-if="url" :src="url"
                                    style="width: 300px; height: 250px; margin-left: 37%;margin-top: -20%;" />
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
import CategoryProductService from '@/services/CategoryProductService'
import UploadService from "../../services/UploadService";

export default {

    data() {
        return {
            message: "",
            currentImage: undefined,
            category: null,
            warehouses: null,
            categorys: null,
            url: null,
            ID: null,
            product: {
                id: null,
                code: "",
                name: "",
                description: "",
                categoryName: "",
                warehouseName: "",
                price: "",
                salePrice: "",
                quantity: "",
                categoryId: "",
                images: "",
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
        onSubmitForm() {
            if (this.product.code.length == 0) {
                this.codeError = {
                    text: "Code cannot be empty",
                    status: true
                };
                this.codeSuccess = {
                    text: "",
                    status: false
                }

            } else if (this.product.code.length < 4) {
                this.codeError = {
                    text: "Code must contain 4 characters",
                    status: true
                }
                this.codeSuccess = {
                    text: "",
                    status: false
                }

            } else if (this.product.code.length >= 4) {
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

            if (this.product.name.length == 0) {
                this.nameError = {
                    text: "NameProduct cannot be empty!",
                    status: true
                };
                this.nameSuccess = {
                    text: "",
                    status: false
                }

            } else if (this.product.name.length < 6 || this.product.name.length > 50) {
                this.nameError = {
                    text: "NameProduct must be between 6 and 50 characters",
                    status: true
                };
                this.nameSuccess = {
                    text: "",
                    status: false
                }

            } else if (this.product.name.length > 6 || this.product.name.length < 50) {
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

            if (this.product.description.length == 0) {
                this.descriptionError = {
                    text: "Description cannot be empty",
                    status: true
                };
                this.descriptionSuccess = {
                    text: "",
                    status: false
                }
            } else if (this.product.description.length > 0) {
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

            if (this.product.price.length == 0) {
                this.priceError = {
                    text: "Price cannot be empty",
                    status: true
                };
                this.priceSuccess = {
                    text: "",
                    status: false
                }
            } else if (this.product.price.length > 0) {
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

            if (this.product.salePrice.length == 0) {
                this.salePriceError = {
                    text: "salePrice cannot be empty",
                    status: true
                };
                this.salePriceSuccess = {
                    text: "",
                    status: false
                }
            } else if (this.product.salePrice.length > 0) {
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

            if (this.product.quantity.length == 0) {
                this.quantityError = {
                    text: "Quantity cannot be empty",
                    status: true
                };
                this.quantitySuccess = {
                    text: "",
                    status: false
                }
            } else if (this.product.quantity.length > 0) {
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

            if (this.product.categoryId == 0) {
                this.categoryIdError = {
                    text: "Must chosse CategoryId!",
                    status: true
                };
                this.categoryIdSuccess = {
                    text: "",
                    status: false
                }
            } else if (this.product.categoryId > 0) {
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

            if (this.product.images.length == 0) {
                this.imagesError = {
                    text: "Images cannot be empty!",
                    status: true
                };
                this.imagesSuccess = {
                    text: "",
                    status: false
                }

            } else if (this.product.images.length > 0) {
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

            if (this.product.wareHouseID == 0) {
                this.wareHouseIDError = {
                    text: "Must chosse wareHouseID!",
                    status: true
                };
                this.wareHouseIDSuccess = {
                    text: "",
                    status: false
                }

            } else if (this.product.wareHouseID > 0) {
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
            let login = JSON.parse(localStorage.getItem("user"));
            if (login.role == 2) {
                if (this.codeSuccess.status == true && this.nameSuccess.status == true && this.descriptionSuccess.status == true && this.salePriceSuccess.status == true && this.priceSuccess.status == true && this.quantitySuccess.status == true && this.imagesSuccess.status == true) {
                   
                    UploadService.upload(this.currentImage)
                        .then((response) => {
                            console.log();
                            this.message = response.data.message;
                        })
                        .catch((err) => {
                            this.message = "Unable to load image  ! " + err;
                            this.currentImage = undefined;
                        });
                    ProductService.create(this.product)
                        .then((res) => {
                            //Perform Success Action 
                            this.ID = res.data.id;
                            this.product.id = this.ID;
                            this.product.status = true;
                            this.product.categoryName = res.data.categoryName;
                            this.product.warehouseName = res.data.warehouseName;

                            console.log(this.product);

                            this.$emit("ShowData", this.product);
                        })
                        .catch((error) => {
                            // error.response.status Check status code
                            console.log(error);
                        })
                        .finally(() => {
                            //Perform action in always
                        });
                }
            } else {
                alert("You are not authorized to perform this task");
            }

        },
        selectImage() {
            this.currentImage = this.$refs.file.files.item(0);
            this.url = URL.createObjectURL(this.currentImage);
            this.product.images = this.$refs.file.files.item(0).name;
        },
    }

}
</script>
