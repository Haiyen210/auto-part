<template>

    <div class="statbox widget box box-shadow">
        <div class="widget-header">
            <div class="row">
                <div class="col-xl-12 col-md-12 col-sm-12 col-12">
                    <h4>Add New WareHouse</h4>
                </div>
            </div>
        </div>
        <div class="widget-content widget-content-area">
            <form method="post" v-on:submit.prevent="onSubmitForm">
                <div class="form-group row mb-4">
                    <label for="exampleFormControlInput1" class="col-xl-2 col-sm-3 col-sm-2 col-form-label">WareHouse Code</label>
                    <div class="col-xl-6 col-lg-6 col-sm-6">
                        <input type="text" class="form-control" id="code" placeholder="" v-model="warehouse.code"
                            :class="{ error: codeError.status, success: codeSuccess.status }" />
                        <p class="text-error" v-if="codeError.status">{{ codeError.text }}</p>
                        <p class="success-text" v-if="codeSuccess.status">{{ codeSuccess.text }}
                        </p>
                    </div>

                </div>
                <div class="form-group row mb-4">
                    <label for="hPassword" class="col-xl-2 col-sm-3 col-sm-2 col-form-label">Name</label>
                    <div class="col-xl-6 col-lg-6 col-sm-6">
                        <input type="text" class="form-control" id="name" placeholder="" v-model="warehouse.name"
                            :class="{ error: nameError.status, success: nameSuccess.status }">
                        <p class="text-error" v-if="nameError.status">{{ nameError.text }}</p>
                        <p class="success-text" v-if="nameSuccess.status">{{ nameSuccess.text }}
                        </p>
                    </div>
                </div>
                <div class="form-group row mb-4">
                    <label for="hPassword" class="col-xl-2 col-sm-3 col-sm-2 col-form-label">Quantity</label>
                    <div class="col-xl-6 col-lg-6 col-sm-6">
                        <input type="text" class="form-control" id="quantity" placeholder="" v-model="warehouse.quantity"
                            :class="{ error: quantityError.status, success: quantitySuccess.status }">
                        <p class="text-error" v-if="quantityError.status">{{ quantityError.text }}</p>
                        <p class="success-text" v-if="quantitySuccess.status">{{ quantitySuccess.text }}
                        </p>
                    </div>
                </div>
                <div class="form-group row mb-4">
                    <label for="hPassword" class="col-xl-2 col-sm-3 col-sm-2 col-form-label">FactoryID</label>
                    <div class="col-xl-6 col-lg-6 col-sm-6">
                        <select name="" id="categoryId" v-model="warehouse.factoryID"
                            :class="{ error: factoryIDError.status, success: factoryIDSuccess.status }">
                            <option value="" >Mời chọn</option>
                        </select>
                        <!-- <input type="text" class="form-control" id="address" placeholder="" v-model="account.address"
                            :class="{ error: addressError.status, success: addressSuccess.status }"> -->
                        <p class="text-error" v-if="factoryIDError.status">{{ factoryIDError.text }}</p>
                        <p class="success-text" v-if="factoryIDSuccess.status">{{ factoryIDSuccess.text }}
                        </p>
                    </div>
                </div>
                
                <fieldset class="form-group mb-4">
                    <div class="row">
                        <label class="col-form-label col-xl-2 col-sm-3 col-sm-2 pt-0">Status</label>
                        <div class="col-xl-10 col-lg-9 col-sm-10">
                            <div class="form-check">
                                <input class="form-check-input" type="radio" v-model="warehouse.status" :value="true"
                                    :checked="warehouse.status === true" id="status" style="width: 16px;height: 16px;" />
                                <label class="form-check-label" for="flexCheckDefault"> còm
                                </label>
                            </div>
                            <div class="form-check">
                                <input class="form-check-input" type="radio" v-model="warehouse.status" :value="false"
                                    :checked="warehouse.status === false" id="status"
                                    style="width: 16px;height: 16px;" />
                                <label class="form-check-label" for="flexCheckChecked"> hết </label>
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
    data() {
        return {
            message: "",
            currentImage: undefined,
            category: null,
            url: null,
            ID: null,
            warehouse: {
                id: null,
                code: "",
                name: "",
                quantity: "",
                status: true,
                factoryID: ""
                
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
            quantityError: {
                text: "",
                status: false,
            },
            quantitySuccess: {
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
    methods: {
        onSubmitForm() {
            if (this.warehouse.code.length == 0) {
                this.codeError = {
                    text: "Code cannot be empty",
                    status: true
                }

            } else if (this.warehouse.code.length < 5) {
                this.codeError = {
                    text: "Code must contain 5 characters",
                    status: true
                }


            } else if (this.warehouse.code.length >= 5) {
                this.codeSuccess = {
                    text: "Success!",
                    status: true
                }
                this.codeError = {
                    text: "",
                    status: false
                }
            } else {
                this.codeError = {
                    text: "",
                    status: false
                }
            }

            if (this.warehouse.name.length == 0) {
                this.nameError = {
                    text: "FullName cannot be empty!",
                    status: true
                }

            } else if (this.warehouse.name.length < 6 || this.warehouse.name.length > 50) {
                this.nameError = {
                    text: "FullName must be between 6 and 50 characters",
                    status: true
                }


            } else if (this.warehouse.name.length > 6 || this.warehouse.name.length < 50) {
                this.nameSuccess = {
                    text: "Success!",
                    status: true
                }
                this.nameError = {
                    text: "",
                    status: false
                }
            } else {
                this.nameError = {
                    text: "",
                    status: false
                }
            }

            
            if (this.warehouse.quantity.length == 0) {
                this.quantityError = {
                    text: "Phone cannot be empty",
                    status: true
                }

            } else if (this.warehouse.quantity.length > 0) {
                this.quantitySuccess = {
                    text: "Quantity must contain 0  ",
                    status: true
                }
            
            } else {
                this.quantityError = {
                    text: "",
                    status: false
                }
            }
            if (this.warehouse.factoryID.length == 0) {
                this.factoryIDError = {
                    text: "Password cannot be empty",
                    status: true
                }

            
            } else if (this.warehouse.password.length > 0) {
                this.factoryIDSuccess = {
                    text: "Success!",
                    status: true
                }
                this.factoryIDError = {
                    text: "",
                    status: false
                }
            } else {
                this.factoryIDError = {
                    text: "",
                    status: false
                }
            }

            if (this.codeSuccess.status == true && this.nameSuccess.status == true && this.quantitySuccess.status == true && this.factoryIDSuccess.status == true ) {
                WareHouseService.create(this.warehouse)
                    .then((res) => {
                        //Perform Success Action
                        this.ID = res.data.id;
                        this.warehouse.id = this.ID;
                        this.warehouse.status = true;
                        
                        console.log(this.warehouse);
                        // createToast({
                        //     title: 'Success',
                        //     description: 'Thêm mới tài khoản Success',
                        //     type: 'success',
                        //     timeout: 5000,

                        // })
                        this.$emit("ShowData", this.warehouse);
                    })
                    .catch((error) => {
                        // error.response.status Check status code
                        console.log(error);
                    })
                    .finally(() => {
                        //Perform action in always
                    });
            }

        },
    }

}
</script>
