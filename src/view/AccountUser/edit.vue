<template>
    <div class="statbox widget box box-shadow">

        <div class="widget-header">
            <div class="row">
                <div class="col-xl-12 col-md-12 col-sm-12 col-12">
                    <h4>Edit Customer</h4>
                </div>
            </div>
        </div>
        <div class="widget-content widget-content-area">
            <form method="post" v-on:submit.prevent="onSubmitEditForm" v-if="accounts">
                <input type="hidden" v-model="accounts.id">
                <div class="form-group row mb-4">
                    <label for="exampleFormControlInput1" class="col-xl-2 col-sm-3 col-sm-2 col-form-label">Code</label>
                    <div class="col-xl-6 col-lg-6 col-sm-6">
                        <input type="text" class="form-control" id="code" placeholder="" v-model="accounts.code" />
                    </div>

                </div>
                <div class="form-group row mb-4">
                    <label for="hPassword" class="col-xl-2 col-sm-3 col-sm-2 col-form-label">FullName</label>
                    <div class="col-xl-6 col-lg-6 col-sm-6">
                        <textarea class="form-control mb-4" rows="3" id="name" v-model="accounts.name"></textarea>
                    </div>
                </div>
                <div class="form-group row mb-4">
                    <label for="exampleFormControlInput1"
                        class="col-xl-2 col-sm-3 col-sm-2 col-form-label">Email</label>
                    <div class="col-xl-6 col-lg-6 col-sm-6">
                        <input type="text" class="form-control" id="email" placeholder="" v-model="accounts.email" />
                    </div>

                </div>
                <div class="form-group row mb-4">
                    <label for="exampleFormControlInput1" class="col-xl-2 col-sm-3 col-sm-2 col-form-label">Phone</label>
                    <div class="col-xl-6 col-lg-6 col-sm-6">
                        <input type="text" class="form-control" id="phone" placeholder="" v-model="accounts.phone" />
                    </div>

                </div>
                <div class="form-group row mb-4">
                    <label for="exampleFormControlInput1" class="col-xl-2 col-sm-3 col-sm-2 col-form-label">Password</label>
                    <div class="col-xl-6 col-lg-6 col-sm-6">
                        <input type="password" class="form-control" id="password" placeholder=""
                            v-model="accounts.password" />
                    </div>

                </div>
                <div class="form-group row mb-4">
                    <label for="exampleFormControlInput1" class="col-xl-2 col-sm-3 col-sm-2 col-form-label">Address</label>
                    <div class="col-xl-6 col-lg-6 col-sm-6">
                        <input type="text" class="form-control" id="adress" placeholder="" v-model="accounts.address" />
                    </div>

                </div>
                <div class="form-group row mb-4">
                    <label for="hPassword" class="col-xl-2 col-sm-3 col-sm-2 col-form-label">Role</label>
                    <div class="col-xl-6 col-lg-6 col-sm-6">
                        <input type="text" class="form-control" id="address" placeholder="" v-model="accounts.role">
                    </div>
                </div>
                <fieldset class="form-group mb-4">
                    <div class="row">
                        <label class="col-form-label col-xl-2 col-sm-3 col-sm-2 pt-0">Gender</label>
                        <div class="col-xl-10 col-lg-9 col-sm-10">
                            <div class="form-check">
                                <input class="form-check-input" type="radio" v-model="accounts.gender" :value="true"
                                    :checked="accounts.gender === true" id="gender" style="width: 16px;height: 16px;" />
                                <label class="form-check-label" for="flexCheckDefault"> FeMale
                                </label>
                            </div>
                            <div class="form-check">
                                <input class="form-check-input" type="radio" v-model="accounts.gender" :value="false"
                                    :checked="accounts.gender === false || accounts.gender == null" id="gender"
                                    style="width: 16px;height: 16px;" />
                                <label class="form-check-label" for="flexCheckChecked"> Male </label>
                            </div>
                        </div>
                    </div>
                </fieldset>
                <fieldset class="form-group mb-4">
                    <div class="row">
                        <label class="col-form-label col-xl-2 col-sm-3 col-sm-2 pt-0">Status</label>
                        <div class="col-xl-10 col-lg-9 col-sm-10">
                            <div class="form-check">
                                <input class="form-check-input" type="radio" v-model="accounts.status" :value="true"
                                    :checked="accounts.status === true" id="status" style="width: 16px;height: 16px;" />
                                <label class="form-check-label" for="flexCheckDefault"> Action
                                </label>
                            </div>
                            <div class="form-check">
                                <input class="form-check-input" type="radio" v-model="accounts.status" :value="false"
                                    :checked="accounts.status === false" id="status"
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
import AccountService from '@/services/AccountUserService';
// import 'mosha-vue-toastify/dist/style.css';
// import { createToast } from 'mosha-vue-toastify';
export default {
    props: ['customer'],

    data() {

        return {
            accounts: this.customer,
            url: null,
            ishowImage: false,
            message: "",

        }

    },
    mounted(){
        console.log(this.accounts);
    },
    methods: {

        onSubmitEditForm() {
            AccountService.update(this.accounts)
                .then((res) => {
                    console.log(res);   
                })
                .catch((error) => {
                    // error.response.status Check status code
                    console.log(error);
                })
                .finally(() => {
                    //Perform action in always
                });
            this.$emit("ShowEditData", this.accounts);
        },
    }

}
</script>
