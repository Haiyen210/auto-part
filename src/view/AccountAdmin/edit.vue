<template>
    <div class="statbox widget box box-shadow">

        <div class="widget-header">
            <div class="row">
                <div class="col-xl-12 col-md-12 col-sm-12 col-12">
                    <h4>Edit account</h4>
                </div>
            </div>
        </div>
        <div class="widget-content widget-content-area">
            <form method="post" v-on:submit.prevent="onSubmitEditForm" v-if="accounts">
                <input type="hidden" v-model="accounts.id">
                <div class="form-group row mb-4">
                    <label for="exampleFormControlInput1" class="col-xl-2 col-sm-3 col-sm-2 col-form-label">Account
                        Name</label>
                    <div class="col-xl-6 col-lg-6 col-sm-6">
                        <input type="text" class="form-control" id="code" placeholder="" v-model="accounts.code"
                            :class="{ error: codeError.status, success: codeSuccess.status }" />
                        <p class="text-error" v-if="codeError.status">{{ codeError.text }}</p>
                        <p class="success-text" v-if="codeSuccess.status">{{ codeSuccess.text }}
                        </p>
                    </div>

                </div>
                <div class="form-group row mb-4">
                    <label for="hPassword" class="col-xl-2 col-sm-3 col-sm-2 col-form-label">FullName</label>
                    <div class="col-xl-6 col-lg-6 col-sm-6">
                        <input type="text" class="form-control" id="name" placeholder="" v-model="accounts.name"
                            :class="{ error: nameError.status, success: nameSuccess.status }">
                        <p class="text-error" v-if="nameError.status">{{ nameError.text }}</p>
                        <p class="success-text" v-if="nameSuccess.status">{{ nameSuccess.text }}
                        </p>
                    </div>
                </div>
                <div class="form-group row mb-4">
                    <label for="hPassword" class="col-xl-2 col-sm-3 col-sm-2 col-form-label">Email</label>
                    <div class="col-xl-6 col-lg-6 col-sm-6">
                        <input type="text" class="form-control" id="email" placeholder="" v-model="accounts.email"
                            :class="{ error: emailError.status, success: emailSuccess.status }">
                        <p class="text-error" v-if="emailError.status">{{ emailError.text }}</p>
                        <p class="success-text" v-if="emailSuccess.status">{{ emailSuccess.text }}
                        </p>
                    </div>
                </div>
                <div class="form-group row mb-4">
                    <label for="hPassword" class="col-xl-2 col-sm-3 col-sm-2 col-form-label">Phone</label>
                    <div class="col-xl-6 col-lg-6 col-sm-6">
                        <input type="text" class="form-control" id="phone" placeholder="" v-model="accounts.phone"
                            :class="{ error: phoneError.status, success: phoneSuccess.status }">
                        <p class="text-error" v-if="phoneError.status">{{ phoneError.text }}</p>
                        <p class="success-text" v-if="phoneSuccess.status">{{ phoneSuccess.text }}
                        </p>
                    </div>
                </div>
                <div class="form-group row mb-4">
                    <label for="hPassword" class="col-xl-2 col-sm-3 col-sm-2 col-form-label">Password</label>
                    <div class="col-xl-6 col-lg-6 col-sm-6">
                        <input type="password" class="form-control" id="password" placeholder=""
                            v-model="accounts.password"
                            :class="{ error: passwordError.status, success: passwordSuccess.status }">
                        <p class="text-error" v-if="passwordError.status">{{ passwordError.text }}</p>
                        <p class="success-text" v-if="passwordSuccess.status">{{ passwordSuccess.text }}
                        </p>
                    </div>
                </div>
                <div class="form-group row mb-4">
                    <label for="hPassword" class="col-xl-2 col-sm-3 col-sm-2 col-form-label">Address</label>
                    <div class="col-xl-6 col-lg-6 col-sm-6">
                        <input type="text" class="form-control" id="address" placeholder="" v-model="accounts.address"
                            :class="{ error: addressError.status, success: addressSuccess.status }">
                        <p class="text-error" v-if="addressError.status">{{ addressError.text }}</p>
                        <p class="success-text" v-if="addressSuccess.status">{{ addressSuccess.text }}
                        </p>
                    </div>
                </div>

                <div class="form-group row mb-4">
                    <label for="hPassword" class="col-xl-2 col-sm-3 col-sm-2 col-form-label">Date of birth</label>
                    <div class="col-xl-6 col-lg-6 col-sm-6">
                        <input type="text" class="form-control" id="birthday" placeholder=""
                            v-model="accounts.birthday">
                    </div>
                </div>
                <div class="form-group row mb-4">
                    <label for="hPassword" class="col-xl-2 col-sm-3 col-sm-2 col-form-label">Department</label>
                    <div class="col-xl-6 col-lg-6 col-sm-6">
                        <select class="form-control  basic" v-model="accounts.departmentId" id="departmentId">
                            <option value=""> Choose Department:</option>
                            <option v-for="item in department" :key="item.id"
                                :selected="accounts.departmentId === item.id" v-bind:value="item.id">{{ item.name }}
                            </option>
                        </select>
                    </div>
                </div>
                <div class="form-group row mb-4">
                    <label for="role" class="col-xl-2 col-sm-3 col-sm-2 col-form-label">Role</label>
                    <div class="col-xl-6 col-lg-6 col-sm-6">
                        <select class="form-control  basic" v-model="accounts.role" id="role">
                            <option value=""> Choose Role:</option>
                            <option v-bind:value="0" :selected="accounts.role == 0">Admin WareHouse</option>
                            <option v-bind:value="1" :selected="accounts.role == 1">Admin Factory</option>
                            <option v-bind:value="2" :selected="accounts.role == 2">Admin Management</option>
                        </select>

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
                                    :checked="accounts.gender === false" id="gender"
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
import AccountService from '@/services/AccountAdminService';
import DepartmentService from '@/services/DepartmentService';
export default {
    props: ['account'],

    data() {

        return {
            accounts: this.account,
            url: null,
            ishowImage: false,
            category: null,
            message: "",
            department: null,
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
            emailError: {
                text: "",
                status: false,
            },
            emailSuccess: {
                text: "",
                status: false,
            },
            phoneError: {
                text: "",
                status: false,
            },
            phoneSuccess: {
                text: "",
                status: false,
            },
            passwordError: {
                text: "",
                status: false,
            },
            passwordSuccess: {
                text: "",
                status: false,
            },
            addressError: {
                text: "",
                status: false,
            },
            addressSuccess: {
                text: "",
                status: false,
            },
            birthdayError: {
                text: "",
                status: false,
            },
            birthdaySuccess: {
                text: "",
                status: false,
            },
            roleError: {
                text: "",
                status: false,
            },
            roleSuccess: {
                text: "",
                status: false,
            }

        }


    },
    mounted() {
        DepartmentService.getAll()
            .then((res) => {
                this.department = res.data;
            })
            .catch((error) => {
                console.log(error);
            })
            .finally(() => {
                //Perform action in always
            })

    },
    methods: {

        onSubmitEditForm() {

            if (this.accounts.code.length == 0) {
                this.codeError = {
                    text: "Account name cannot be empty",
                    status: true
                }
                this.codeSuccess = {
                    text: "",
                    status: false
                }
            } else if (this.accounts.code.length < 4) {
                this.codeError = {
                    text: "Account name  must contain 4 characters",
                    status: true
                }
                this.codeSuccess = {
                    text: "",
                    status: false
                }

            } else if (this.accounts.code.length >= 4) {
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

            if (this.accounts.name.length == 0) {
                this.nameError = {
                    text: "FullName cannot be empty!",
                    status: true
                }
                this.nameSuccess = {
                    text: "",
                    status: false
                }

            } else if (this.accounts.name.length < 6 || this.accounts.name.length > 50) {
                this.nameError = {
                    text: "FullName must be between 6 and 50 characters",
                    status: true
                }
                this.nameSuccess = {
                    text: "",
                    status: false
                }
            } else if (this.accounts.name.length > 6 || this.accounts.name.length < 50) {
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

            const regex = /^\w+([.-]?\w+)*@[a-z]+([.-]?\w+)*(.\w{2,3})+$/;
            if (this.accounts.email.length == 0) {
                this.emailError.text = "Email cannot be empty!",
                    this.emailError.status = true
                this.emailSuccess = {
                    text: "",
                    status: false
                }
            } else if (!regex.test(this.accounts.email)) {
                this.emailError.text = "Email is not in the correct format !",
                    this.emailError.status = true
                this.emailSuccess = {
                    text: "",
                    status: false
                }
            } else if (regex.test(this.accounts.email)) {
                this.emailSuccess.text = "Success!!";
                this.emailSuccess.status = true;
                this.emailError.status = false
            } else {
                this.emailError.text = "",
                    this.emailError.status = false
            }

            if (this.accounts.phone.length == 0) {
                this.phoneError = {
                    text: "Phone cannot be empty",
                    status: true
                }
                this.phoneSuccess = {
                    text: "",
                    status: false
                }
            } else if (this.accounts.phone.length != 10) {
                this.phoneError = {
                    text: "Phone must contain 10 characters ",
                    status: true
                }
                this.phoneSuccess = {
                    text: "",
                    status: false
                }
            } else if (this.accounts.phone.length < 11 && this.accounts.phone.length > 9) {
                this.phoneSuccess = {
                    text: "Success!",
                    status: true
                }
                this.phoneError = {
                    text: "",
                    status: false
                }
            } else {
                this.phoneError = {
                    text: "",
                    status: false
                }
            }
            if (this.accounts.password.length == 0) {
                this.passwordError = {
                    text: "Password cannot be empty",
                    status: true
                }
                this.passwordSuccess = {
                    text: "",
                    status: false
                }

            } else if (this.accounts.password.length < 6) {
                this.passwordError = {
                    text: "Password must contain at least 6 characters ",
                    status: true
                }
                this.passwordSuccess = {
                    text: "",
                    status: false
                }
            } else if (this.accounts.password.length >= 6) {
                this.passwordSuccess = {
                    text: "Success!",
                    status: true
                }
                this.passwordError = {
                    text: "",
                    status: false
                }
            } else {
                this.passwordError = {
                    text: "",
                    status: false
                }
            }

            if (this.account.address.length == 0) {
                this.addressError = {
                    text: "Address cannot be empty",
                    status: true
                }
                this.addressSuccess = {
                    text: "",
                    status: false
                }
            } else if (this.account.address.length < 6 || this.account.address.length > 50) {
                this.addressError = {
                    text: "Address must be between 6 and 50 characters",
                    status: true
                }
                this.addressSuccess = {
                    text: "",
                    status: false
                }

            } else if (this.account.address.length > 6 || this.account.address.length < 50) {
                this.addressSuccess = {
                    text: "Success!",
                    status: true
                }
                this.addressError = {
                    text: "",
                    status: false
                }
            } else {
                this.addressError = {
                    text: "",
                    status: false
                }
            }

            if (this.codeSuccess.status == true && this.nameSuccess.status == true && this.emailSuccess.status == true && this.phoneSuccess.status == true && this.passwordSuccess.status == true && this.addressSuccess.status == true) {
                let login = JSON.parse(localStorage.getItem("user"));
                if (login.role == 2) {
                    AccountService.update(this.accounts)
                        .then((res) => {
                            this.accounts.departmentName = res.data.departmentName
                            this.$emit("ShowEditData", this.accounts);
                        })
                        .catch((error) => {
                            // error.response.status Check status code
                            console.log(error);
                        })
                        .finally(() => {
                            //Perform action in always
                        });

                } else {
                    alert("You are not authorized to perform this task");
                }
            }

        }
    }

}
</script>
