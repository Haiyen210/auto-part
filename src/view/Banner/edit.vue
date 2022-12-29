<template>
    <div class="statbox widget box box-shadow">
        <div class="widget-header">
            <div class="row">
                <div class="col-xl-12 col-md-12 col-sm-12 col-12">
                    <h4>Edit Banner</h4>
                </div>
            </div>
        </div>
        <div class="widget-content widget-content-area">
            <form method="post" enctype="multipart/form-data" v-on:submit.prevent="onSubmitEditForm" v-if="banners">
                <input type="hidden" v-model="banners.id" />
                <div class="form-group row mb-4">
                    <label for="exampleFormControlInput1" class="col-xl-2 col-sm-3 col-sm-2 col-form-label">Code</label>
                    <div class="col-xl-6 col-lg-6 col-sm-6">
                        <input type="text" class="form-control" id="code" placeholder="" v-model="banners.code" />
                    </div>
                </div>
                <div class="form-group row mb-4">
                    <label for="hPassword" class="col-xl-2 col-sm-3 col-sm-2 col-form-label">Name</label>
                    <div class="col-xl-6 col-lg-6 col-sm-6">
                        <input type="text" class="form-control" id="name" placeholder="" v-model="banners.name" />
                    </div>
                </div>
                <div class="form-group row mb-4">
                    <label for="hPassword" class="col-xl-2 col-sm-3 col-sm-2 col-form-label">Description</label>
                    <div class="col-xl-6 col-lg-6 col-sm-6">
                        <input type="text" class="form-control" id="name" placeholder=""
                            v-model="banners.description" />

                    </div>
                </div>
                <fieldset class="form-group mb-4">
                    <div class="row">
                        <label class="col-form-label col-xl-2 col-sm-3 col-sm-2 pt-0">Status</label>
                        <div class="col-xl-10 col-lg-9 col-sm-10">
                            <div class="form-check">
                                <input class="form-check-input" type="radio" v-model="banners.status" :value="true"
                                    :checked="banners.status === true" id="status" style="width: 16px; height: 16px" />
                                <label class="form-check-label" for="flexCheckDefault">
                                    Action
                                </label>
                            </div>
                            <div class="form-check">
                                <input class="form-check-input" type="radio" v-model="banners.status" :value="false"
                                    :checked="banners.status === false || banners.status === ''" id="status"
                                    style="width: 16px; height: 16px" />
                                <label class="form-check-label" for="flexCheckChecked">
                                    No Action
                                </label>
                            </div>
                        </div>
                    </div>
                </fieldset>
                <div class="form-group row mb-4">
                    <label class="col-form-label col-xl-2 col-sm-3 col-sm-2 pt-0">Image</label>
                    <div class="col-4">
                        <p class="btn btn-success btn-sm" @click="$refs.file.click()">
                            Choose file
                        </p>
                    </div>
                    <div class="col-8">
                        <label class="btn btn-default p-0">
                            <input type="file" accept="image/*" name="file" ref="file" @change="selectImage"
                                :hidden="true" />
                        </label>
                    </div>
                    <div class="col-xl-10 col-lg-9 col-sm-10">
                        <img :src="'http://localhost:54195/images/' + banners.images"
                            style="width: 600px; height: 500px; margin-left: 20%" v-if="ishowImage == false" />
                        <img v-bind:src="url" style="width: 600px; height: 500px; margin-left: 20%"
                            v-if="ishowImage == true" />
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
import BannerService from "../../services/BannerService";
import UploadService from "../../services/UploadService";
// import 'mosha-vue-toastify/dist/style.css';
// import { createToast } from 'mosha-vue-toastify';
export default {
    props: ["banner"],
    data() {
        return {
            message: "",
            currentImage: undefined,
            url: null,
            banners: this.banner,
            ishowImage: false,
            old: "localhost:54195/images/" + this.banner.image,
        };
    },
    methods: {
        selectImage() {
            this.currentImage = this.$refs.file.files.item(0);
            this.url = URL.createObjectURL(this.currentImage);
            this.banners.image = this.$refs.file.files.item(0).name;
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
            BannerService.update(this.banners)
                .then((res) => {
                    //Perform Success Action
                    this.banners = res.data;
                    res.data.files;
                    //   createToast({
                    //         title: 'Thành công',
                    //         description: 'Sửa banner thành công',
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
            this.$emit("ShowEditData", this.banners);
        },

    },
};
</script>
