<template>
    <div class="statbox widget box box-shadow">
        <div class="widget-header">
            <div class="row">
                <div class="col-xl-12 col-md-12 col-sm-12 col-12">
                    <h4>Edit Department</h4>
                </div>
            </div>
        </div>
        <div class="widget-content widget-content-area">
            <form method="post" enctype="multipart/form-data" v-on:submit.prevent="onSubmitEditForm" v-if="departments">
                <input type="hidden" v-model="departments.id" />
                <div class="form-group row mb-4">
                    <label for="exampleFormControlInput1" class="col-xl-2 col-sm-3 col-sm-2 col-form-label">Code</label>
                    <div class="col-xl-6 col-lg-6 col-sm-6">
                        <input type="text" class="form-control" id="code" placeholder="" v-model="departments.code"
                            :class="{ error: codeError.status, success: codeSuccess.status }" />
                        <p class="text-error" v-if="codeError.status">
                            {{ codeError.text }}
                        </p>
                        <p class="success-text" v-if="codeSuccess.status">
                            {{ codeSuccess.text }}
                        </p>
                    </div>
                </div>
                <div class="form-group row mb-4">
                    <label for="hPassword" class="col-xl-2 col-sm-3 col-sm-2 col-form-label">Name</label>
                    <div class="col-xl-6 col-lg-6 col-sm-6">
                        <input type="text" class="form-control" id="name" placeholder="" v-model="departments.name"
                            :class="{ error: nameError.status, success: nameSuccess.status }" />
                        <p class="text-error" v-if="nameError.status">
                            {{ nameError.text }}
                        </p>
                        <p class="success-text" v-if="nameSuccess.status">
                            {{ nameSuccess.text }}
                        </p>
                    </div>
                </div>
                <fieldset class="form-group mb-4">
                    <div class="row">
                        <label class="col-form-label col-xl-2 col-sm-3 col-sm-2 pt-0">Status</label>
                        <div class="col-xl-10 col-lg-9 col-sm-10">
                            <div class="form-check">
                                <input class="form-check-input" type="radio" v-model="departments.status" :value="true"
                                    :checked="departments.status === true" id="status"
                                    style="width: 16px; height: 16px" />
                                <label class="form-check-label" for="flexCheckDefault">
                                    Action
                                </label>
                            </div>
                            <div class="form-check">
                                <input class="form-check-input" type="radio" v-model="departments.status" :value="false"
                                    :checked="departments.status === false || departments.status === ''" id="status"
                                    style="width: 16px; height: 16px" />
                                <label class="form-check-label" for="flexCheckChecked">
                                    No Action
                                </label>
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
import DepartmentService from "../../services/DepartmentService";
// import 'mosha-vue-toastify/dist/style.css';
// import { createToast } from 'mosha-vue-toastify';
export default {
    props: ["department"],
    data() {
        return {
            message: "",
            list_departments: null,
            departments: this.department,
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
        };
    },
    mounted() {
        DepartmentService.getAll().then((res) => {
            this.list_departments = res.data;
        });
    },
    methods: {
        onSubmitEditForm() {
            if (this.department.code.length == 0) {
                this.codeError = {
                    text: "Code cannot be empty",
                    status: true,
                };
                this.codeSuccess = {
                    text: "",
                    status: false,
                };
            } else if (this.department.code.length < 5) {
                this.codeError = {
                    text: "Code must be 5 characters or more",
                    status: true,
                };
                this.codeSuccess = {
                    text: "",
                    status: false,
                };
            } else if (this.department.code.length > 0 || this.department.code.length > 5) {
                this.codeSuccess = {
                    text: "Success!",
                    status: true,
                };
                this.codeError = {
                    text: "",
                    status: false,
                };
            } else {
                this.codeSuccess = {
                    text: "",
                    status: true,
                };
            }


            if (this.department.name.length == 0) {
                this.nameError = {
                    text: "Name cannot be empty",
                    status: true,
                };
                this.nameSuccess = {
                    text: "",
                    status: false,
                };
            } else if (this.department.name.length < 6 || this.department.name.length > 50) {
                this.nameError = {
                    text: "Name must be between 6 and 50 characters",
                    status: true,
                };
                this.nameSuccess = {
                    text: "",
                    status: false,
                };
            }else if (this.department.name.length > 0 || this.department.name.length < 6) {
                this.nameSuccess = {
                    text: "Success!",
                    status: true,
                };
                this.nameError = {
                    text: "",
                    status: false,
                };
            } else {
                this.nameSuccess = {
                    text: "",
                    status: true,
                };
            }

            let login = JSON.parse(localStorage.getItem("user"));
            if (login.role == 2) {
                if (this.codeSuccess.status == true && this.nameSuccess.status == true) {
                    DepartmentService.update(this.departments)
                        .then((res) => {
                            //Perform Success Action
                            this.departments = res.data;
                            res.data.files;
                        })
                        .catch((error) => {
                            // error.response.status Check status code
                            console.log(error);
                        })
                        .finally(() => {
                            //Perform action in always
                        });
                    this.$emit("ShowEditData", this.departments);
                }
            } else {
                alert("You are not authorized to perform this task");
            }
        },
    },
};
</script>
