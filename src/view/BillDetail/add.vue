<template>

    <div class="statbox widget box box-shadow">
        <div class="widget-header">
            <div class="row">
                <div class="col-xl-12 col-md-12 col-sm-12 col-12">
                    <h4>Add New Factory</h4>
                </div>
            </div>
        </div>
        <div class="widget-content widget-content-area">
            <form method="post" v-on:submit.prevent="onSubmitForm">
                <div class="form-group row mb-4">
                    <label for="hPassword" class="col-xl-2 col-sm-3 col-sm-2 col-form-label">BillID</label>
                    <div class="col-xl-6 col-lg-6 col-sm-6">
                        <select name="" id="billId" v-model="billdetail.billId"
                            :class="{ error: billIdError.status, success: billIdSuccess.status }">
                            <option value="" >Mời chọn</option>
                        </select>
                        <!-- <input type="text" class="form-control" id="address" placeholder="" v-model="account.address"
                            :class="{ error: addressError.status, success: addressSuccess.status }"> -->
                        <p class="text-error" v-if="billIdError.status">{{ billIdError.text }}</p>
                        <p class="success-text" v-if="billIdSuccess.status">{{ billIdSuccess.text }}
                        </p>
                    </div>
                </div>
                <div class="form-group row mb-4">
                    <label for="hPassword" class="col-xl-2 col-sm-3 col-sm-2 col-form-label">OrderDetailID</label>
                    <div class="col-xl-6 col-lg-6 col-sm-6">
                        <select name="" id="billId" v-model="billdetail.orderdetailId"
                            :class="{ error: orderdetailIdError.status, success: orderdetailIdSuccess.status }">
                            <option value="" >Mời chọn</option>
                        </select>
                        <!-- <input type="text" class="form-control" id="address" placeholder="" v-model="account.address"
                            :class="{ error: addressError.status, success: addressSuccess.status }"> -->
                        <p class="text-error" v-if="orderdetailIdError.status">{{ orderdetailIdError.text }}</p>
                        <p class="success-text" v-if="orderdetailIdSuccess.status">{{ orderdetailIdSuccess.text }}
                        </p>
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
import BillDetailService from '@/services/BillDetailService';
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
            billdetail: {
                id: null,
                billId: "",
                orderdetailId: "",
                
            },
            billIdError: {
                text: "",
                status: false,
            },
            billIdSuccess: {
                text: "",
                status: false,
            },
            orderdetailIdError: {
                text: "",
                status: false,
            },
            orderdetailIdSuccess: {
                text: "",
                status: false,
            }
        }

    },
    methods: {
        onSubmitForm() {
            if (this.billdetail.billId.length == 0) {
                this.billIdError = {
                    text: "bill cannot be empty",
                    status: true
                }

            } else if (this.billdetail.billId.length > 0) {
                this.billIdSuccess = {
                    text: "Success!",
                    status: true
                }
            } else {
                this.billIdError = {
                    text: "",
                    status: false
                }
            }

            if (this.billdetail.orderdetailId.length == 0) {
                this.orderdetailIdError = {
                    text: "orderdetail cannot be empty!",
                    status: true
                }

            
            } else if (this.billdetail.orderdetailId.length > 0) {
                this.orderdetailIdSuccess = {
                    text: "Success!",
                    status: true
                }
                this.orderdetailIdError = {
                    text: "",
                    status: false
                }
            } else {
                this.orderdetailIdError = {
                    text: "",
                    status: false
                }
            }

            
            if (this.billIdSuccess.status == true && this.orderdetailIdSuccess.status == true ) {
                BillDetailService.create(this.billdetail)
                    .then((res) => {
                        //Perform Success Action
                        this.ID = res.data.id;
                        this.billdetail.id = this.ID;
                        console.log(this.billdetail);
                        // createToast({
                        //     title: 'Success',
                        //     description: 'Thêm mới tài khoản Success',
                        //     type: 'success',
                        //     timeout: 5000,

                        // })
                        this.$emit("ShowData", this.billdetail);
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
