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
                        <input type="text" class="form-control" id="code" placeholder="Enter Department Code"
                            v-model="department.code"
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
                        <input type="text" class="form-control" id="name" placeholder="Enter Department Name"
                            v-model="department.name"
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
            list_departments: null,
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
    mounted() {
        DepartmentService.getAll().then((res) => {
            this.list_departments = res.data;
        });
    },
    methods: {
        onSubmitForm() {
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
            } else {
                var check_exist = true;
                for (var i = 0; i < this.list_departments.length; i++) {
                    if (this.department.code === this.list_departments[i].code) {
                        check_exist = false;
                    }
                }
                if (check_exist == false) {
                    this.codeError = {
                        text: "Code is exist ! Please change new !",
                        status: true
                    }
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
                }
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
            } else {
                var check_exist_name = true;
                for (var j = 0; j < this.list_departments.length; j++) {
                    if (this.department.name === this.list_departments[j].name) {
                        check_exist_name = false;
                    }
                }
                if (check_exist_name == false) {
                    this.nameError = {
                        text: "Name is exist ! Please change new !",
                        status: true
                    }
                    this.nameSuccess = {
                        text: "",
                        status: false,
                    };
                } else if (this.department.name.length > 0 || this.department.name.length < 6) {
                    this.nameSuccess = {
                        text: "Success!",
                        status: true,
                    };
                    this.nameError = {
                        text: "",
                        status: false,
                    };
                }
            }
            let login = JSON.parse(localStorage.getItem("user"));
            if (login.role == 2) {
                if (this.codeSuccess.status == true && this.nameSuccess.status == true) {

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
            } else {
                alert("You are not authorized to perform this task");
            }
        },

    },
};
</script>
