<template>

    <div class="statbox widget box box-shadow">
        <div class="widget-header">
            <div class="row">
                <div class="col-xl-12 col-md-12 col-sm-12 col-12">
                    <h4>Add New User</h4>
                </div>
            </div>
        </div>
        <div class="widget-content widget-content-area">
            <form method="post" v-on:submit.prevent="onSubmitForm">
                <div class="form-group row mb-4">
                    <label for="exampleFormControlInput1" class="col-xl-2 col-sm-3 col-sm-2 col-form-label">Code</label>
                    <div class="col-xl-6 col-lg-6 col-sm-6">
                        <input type="text" class="form-control" id="code" placeholder="" v-model="account.code"
                            :class="{ error: codeError.status, success: codeSuccess.status }" />
                        <p class="text-error" v-if="codeError.status">{{ codeError.text }}</p>
                        <p class="success-text" v-if="codeSuccess.status">{{ codeSuccess.text }}
                        </p>
                    </div>

                </div>
                <div class="form-group row mb-4">
                    <label for="hPassword" class="col-xl-2 col-sm-3 col-sm-2 col-form-label">FullName</label>
                    <div class="col-xl-6 col-lg-6 col-sm-6">
                        <input type="text" class="form-control" id="name" placeholder="" v-model="account.name"
                            :class="{ error: nameError.status, success: nameSuccess.status }">
                        <p class="text-error" v-if="nameError.status">{{ nameError.text }}</p>
                        <p class="success-text" v-if="nameSuccess.status">{{ nameSuccess.text }}
                        </p>
                    </div>
                </div>
                <div class="form-group row mb-4">
                    <label for="hPassword" class="col-xl-2 col-sm-3 col-sm-2 col-form-label">Email</label>
                    <div class="col-xl-6 col-lg-6 col-sm-6">
                        <input type="text" class="form-control" id="email" placeholder="" v-model="account.email"
                            :class="{ error: emailError.status, success: emailSuccess.status }">
                        <p class="text-error" v-if="emailError.status">{{ emailError.text }}</p>
                        <p class="success-text" v-if="emailSuccess.status">{{ emailSuccess.text }}
                        </p>
                    </div>
                </div>
                <div class="form-group row mb-4">
                    <label for="hPassword" class="col-xl-2 col-sm-3 col-sm-2 col-form-label">Phone</label>
                    <div class="col-xl-6 col-lg-6 col-sm-6">
                        <input type="text" class="form-control" id="phone" placeholder="" v-model="account.phone"
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
                            v-model="account.password"
                            :class="{ error: passwordError.status, success: passwordSuccess.status }">
                        <p class="text-error" v-if="passwordError.status">{{ passwordError.text }}</p>
                        <p class="success-text" v-if="passwordSuccess.status">{{ passwordSuccess.text }}
                        </p>
                    </div>
                </div>
                <div class="form-group row mb-4">
                    <label for="hPassword" class="col-xl-2 col-sm-3 col-sm-2 col-form-label">Address</label>
                    <div class="col-xl-6 col-lg-6 col-sm-6">
                        <input type="text" class="form-control" id="address" placeholder="" v-model="account.address"
                            :class="{ error: addressError.status, success: addressSuccess.status }">
                        <p class="text-error" v-if="addressError.status">{{ addressError.text }}</p>
                        <p class="success-text" v-if="addressSuccess.status">{{ addressSuccess.text }}
                        </p>
                    </div>
                </div>

                <div class="form-group row mb-4">
                    <label for="hPassword" class="col-xl-2 col-sm-3 col-sm-2 col-form-label">Date of birth</label>
                    <div class="col-xl-6 col-lg-6 col-sm-6">
                        <input type="date" class="form-control" id="birthday" placeholder="" v-model="account.birthday">

                    </div>
                </div>
                <fieldset class="form-group mb-4">
                    <div class="row">
                        <label class="col-form-label col-xl-2 col-sm-3 col-sm-2 pt-0">Gender</label>
                        <div class="col-xl-10 col-lg-9 col-sm-10">
                            <div class="form-check">
                                <input class="form-check-input" type="radio" v-model="account.gender" :value="0"
                                    id="gender" style="width: 16px;height: 16px;" />
                                <label class="form-check-label" for="flexCheckDefault"> FeMale
                                </label>
                            </div>
                            <div class="form-check">
                                <input class="form-check-input" type="radio" v-model="account.gender" :value="1"
                                    id="gender" style="width: 16px;height: 16px;" checked />
                                <label class="form-check-label" for="flexCheckChecked"> Male </label>
                            </div>
                        </div>
                    </div>
                </fieldset>
                <div class="form-group row mb-4">
                    <label for="hPassword" class="col-xl-2 col-sm-3 col-sm-2 col-form-label">Role</label>
                    <div class="col-xl-6 col-lg-6 col-sm-6">
                        <input type="text" class="form-control" id="address" placeholder="" v-model="account.role">
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
import AccountUserService from '@/services/AccountUserService.js';
import AccountService from '@/services/AccountUserService.js';
export default {
    data() {
        return {
            message: "",
            currentImage: undefined,
            accounts: null,
            url: null,
            ID: null,
            account: {
                id: null,
                code: "",
                name: "",
                email: "",
                phone: "",
                password: "",
                address: "",
                birthday: "",
                role: "",
                gender: "",
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
        AccountUserService.getAll()
            .then((res) => {
                this.accounts = res.data;
            })
            .catch((error) => {
                console.log(error);
            })
            .finally(() => {
                //Perform action in always
            })

    },
    methods: {
        onSubmitForm() {
            if (this.account.code.length == 0) {
                this.codeError = {
                    text: "Code cannot be empty",
                    status: true
                }
                this.codeSuccess = {
                        text: "",
                        status: false
                    }
            } else if (this.account.code.length < 5) {
                this.codeError = {
                    text: "Code must contain 5 characters",
                    status: true
                }
                this.codeSuccess = {
                        text: "",
                        status: false
                    }
            } else {
                var check_exist_code = true;
                for (var i = 0; i < this.accounts.length; i++) {
                    if (this.account.code === this.accounts[i].code) {
                        check_exist_code = false;
                    }
                }
                if (check_exist_code == false) {
                    this.codeError = {
                        text: "Code is exist ! Please change new !",
                        status: true
                    }
                    this.codeSuccess = {
                        text: "",
                        status: false
                    }
                } else if (this.account.code.length >= 5) {
                    this.codeSuccess = {
                        text: "Success!",
                        status: true
                    }
                    this.codeError = {
                        text: "",
                        status: false
                    }

                }
            }
            if (this.account.name.length == 0) {
                this.nameError = {
                    text: "FullName cannot be empty!",
                    status: true
                }
                this.nameSuccess = {
                    text: "",
                    status: false
                }
            } else if (this.account.name.length < 6 || this.account.name.length > 50) {
                this.nameError = {
                    text: "FullName must be between 6 and 50 characters",
                    status: true
                }
                this.nameSuccess = {
                    text: "",
                    status: false
                }
            } else if (this.account.name.length > 6 || this.account.name.length < 50) {
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
            if (this.account.email.length == 0 || this.account.email == '') {
                this.emailError.text = "Email cannot be empty!",
                this.emailError.status = true;
                this.emailSuccess.text = "";
                this.emailSuccess.status = false;

            } else if (!regex.test(this.account.email)) {
                this.emailError.text = "Email is not in the correct format !",
                this.emailError.status = true;
                this.emailSuccess.text = "";
                this.emailSuccess.status = false;
            } else if (regex.test(this.account.email)) {
                this.emailSuccess.text = "Success!!";
                this.emailSuccess.status = true;
                this.emailError.status = false
            } else {
                this.emailError.text = "",
                    this.emailError.status = false
            }
            const regex_phone = /\(?([0-9]{3})\)?([ .-]?)([0-9]{3})\2([0-9]{4})/;
            if (this.account.phone.length == 0) {
                this.phoneError = {
                    text: "Phone cannot be empty",
                    status: true
                }
                this.phoneSuccess = {
                    text: "",
                    status: false
                }
            } else if (!regex_phone.test(this.account.phone)) {
                this.phoneError.text = "Phone is not in the correct format !",
                this.phoneError.status = true;
                this.phoneSuccess = {
                    text: "",
                    status: false
                }
            } else if (this.account.phone.length != 10) {
                this.phoneError = {
                    text: "Phone must contain 10 characters ",
                    status: true
                }
                this.phoneSuccess = {
                    text: "",
                    status: false
                }
            } else if (this.account.phone.length < 11 && this.account.phone.length > 9) {
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
            if (this.account.password.length == 0) {
                this.passwordError = {
                    text: "Password cannot be empty",
                    status: true
                }
                this.passwordSuccess = {
                    text: "",
                    status: false
                }
            } else if (this.account.password.length < 8) {
                this.passwordError = {
                    text: "Password must contain at least 8 characters ",
                    status: true
                }
                this.passwordSuccess = {
                    text: "",
                    status: false
                }
            } else if (this.account.password.length >= 8) {
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
            if (this.account.role.length == 0) {
                this.roleError = {
                    text: "Role cannot be empty!",
                    status: true
                }
                this.roleSuccess = {
                    text: "",
                    status: false
                }
            } else if (this.account.role.length > 0) {
                this.roleSuccess = {
                    text: "Success!",
                    status: true
                }
                this.roleError = {
                    text: "",
                    status: false
                }
            } else {
                this.roleError = {
                    text: "",
                    status: false
                }
            }
            if (this.codeSuccess.status == true && this.nameSuccess.status == true && this.emailSuccess.status == true && this.phoneSuccess.status == true && this.passwordSuccess.status == true && this.addressSuccess.status == true) {
                if (this.account.gender.length == 0) {
                    this.account.gender = false;
                }
                AccountService.create(this.account)
                    .then((res) => {
                        //Perform Success Action
                        if (this.account.gender.length == 0) {
                            this.account.gender = false;
                        }
                        this.ID = res.data.id;
                        this.account.id = this.ID;
                        this.account.status = true;
                        this.account.gender == '' ? this.account.gender = true : this.account.gender = false;
                        console.log(this.account);
                        // createToast({
                        //     title: 'Success',
                        //     description: 'Thêm mới tài khoản Success',
                        //     type: 'success',
                        //     timeout: 5000,

                        // })
                        this.$emit("ShowData", this.account);
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
