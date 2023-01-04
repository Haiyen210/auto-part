<template>
    <div class="statbox widget box box-shadow">
        <div class="widget-header">
            <div class="row">
                <div class="col-xl-12 col-md-12 col-sm-12 col-12">
                    <h4>Add New Department</h4>
                </div>
            </div>
        </div>
        <div class="widget-content widget-content-area">
            <form method="post" v-on:submit.prevent="onSubmitForm">
                <div class="form-group row mb-4">
                    <label for="exampleFormControlInput1" class="col-xl-2 col-sm-3 col-sm-2 col-form-label">Code</label>
                    <div class="col-xl-6 col-lg-6 col-sm-6">
                        <input type="text" class="form-control" id="code" placeholder="Enter Department Code" v-model="department.code"
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
                        <input type="text" class="form-control" id="name" placeholder="Enter Department Name" v-model="department.name"
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
                                <input class="form-check-input" type="radio" v-model="department.status" :value="true"
                                    id="status" style="width: 16px;height: 16px;" />
                                <label class="form-check-label" for="flexCheckDefault"> Action
                                </label>
                            </div>
                            <div class="form-check">
                                <input class="form-check-input" type="radio" v-model="department.status" :value="false"
                                    id="status" style="width: 16px;height: 16px;" />
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
import DepartmentService from "../../services/DepartmentService";
// import 'mosha-vue-toastify/dist/style.css';
// import { createToast } from 'mosha-vue-toastify';
export default {
    
    props: ["departments"],
    name: "add-department",
    data() {
        return {
            getDepartment: this.departments,
            message: "",
            currentImage: undefined,
            url: null,
            ID: null,
            department: {
                id: null,
                code: "",
                name: "",
                status: true,
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
        };
    }, 
    methods: {
        onSubmitForm() {
            
            if (this.department.code.length == 0) {
                this.codeError = {
                    text: "Code cannot be empty",
                    status: true,
                };
            } else if ( this.department.code.length > 6) {
                this.codeError = {
                    text: "Code must be longest 6 characters",
                    status: true,
                };
            } else if (this.department.code.length > 0 || this.department.code.length < 6) {
                this.codeSuccess = {
                    text: "Success!",
                    status: true,
                };
                 this.codeError = {
                    text: "",
                    status: false,
                };
            } else {
                this.codeError = {
                    text: "",
                    status: false,
                };
            }

            if (this.department.name.length == 0) {
                this.nameError = {
                    text: "Name cannot be empty",
                    status: true,
                };
            } else if (this.department.name.length < 6 || this.department.name.length > 50) {
                this.nameError = {
                    text: "Name must be between 6 and 50 characters",
                    status: true,
                };
            } else if (this.department.name.length > 6 || this.department.name.length < 50) {
                this.nameSuccess = {
                    text: "Success!",
                    status: true,
                };
                 this.nameError = {
                    text: "",
                    status: false,
                };
            } else {
                this.nameError = {
                    text: "",
                    status: false,
                };
            }
            if (this.codeSuccess.status == true && this.nameSuccess.status == true )  {
            
                DepartmentService.create(this.department)
                    .then((res) => {
                        //Perform Success Action
                        this.ID = res.data.id;
                        this.department.id = this.ID;
                        console.log(res.data);
                    })
                    .catch((error) => {
                        // error.response.status Check status code
                        console.log(error);
                    })
                    .finally(() => {
                        //Perform action in always
                    });
                this.$emit("ShowData", this.department);
            }
        },
      
    },
};
</script>
