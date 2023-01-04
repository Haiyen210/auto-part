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
                        <input type="text" class="form-control" id="code" placeholder="" v-model="departments.code" />
                    </div>
                </div>
                <div class="form-group row mb-4">
                    <label for="hPassword" class="col-xl-2 col-sm-3 col-sm-2 col-form-label">Name</label>
                    <div class="col-xl-6 col-lg-6 col-sm-6">
                        <input type="text" class="form-control" id="name" placeholder="" v-model="departments.name" />
                    </div>
                </div>
                <fieldset class="form-group mb-4">
                    <div class="row">
                        <label class="col-form-label col-xl-2 col-sm-3 col-sm-2 pt-0">Status</label>
                        <div class="col-xl-10 col-lg-9 col-sm-10">
                            <div class="form-check">
                                <input class="form-check-input" type="radio" v-model="departments.status" :value="true"
                                    :checked="departments.status === true" id="status" style="width: 16px; height: 16px" />
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
import UploadService from "../../services/UploadService";
// import 'mosha-vue-toastify/dist/style.css';
// import { createToast } from 'mosha-vue-toastify';
export default {
    props: ["department"],
    data() {
        return {
            message: "",
            currentImage: undefined,
            url: null,
            departments: this.department,
            ishowImage: false,
            old: "localhost:54195/images/" + this.department.image,
        };
    },
    methods: {
        selectImage() {
            this.currentImage = this.$refs.file.files.item(0);
            this.url = URL.createObjectURL(this.currentImage);
            this.departments.image = this.$refs.file.files.item(0).name;
            this.ishowImage = true;
        },
        onSubmitEditForm() {
            UploadService.upload(this.currentImage)
                .then((response) => {
                    console.log();
                    this.message = response.data.message;
                })
                .catch((err) => {
                    this.message = "Unable to load image  ! " + err;
                    this.currentImage = undefined;
                });
            DepartmentService.update(this.departments)
                .then((res) => {
                    //Perform Success Action
                    this.departments = res.data;
                    res.data.files;
                    //   createToast({
                    //         title: 'Thành công',
                    //         description: 'Sửa department thành công',
                    //         type: 'success',
                    //         timeout: 5000,

                    //     })
                })
                .catch((error) => {
                    // error.response.status Check status code
                    console.log(error);
                })
                .finally(() => {
                    //Perform action in always
                });
            this.$emit("ShowEditData", this.departments);
        },

    },
};
</script>
