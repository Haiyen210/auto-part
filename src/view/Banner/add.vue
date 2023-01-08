<template>
    <div class="statbox widget box box-shadow">
        <div class="widget-header">
            <div class="row">
                <div class="col-xl-12 col-md-12 col-sm-12 col-12">
                    <h4>Add New Banner</h4>
                </div>
            </div>
        </div>
        <div class="widget-content widget-content-area">
            <form method="post" enctype="multipart/form-data" v-on:submit.prevent="onSubmitForm">
                <div class="form-group row mb-4">
                    <label for="exampleFormControlInput1" class="col-xl-2 col-sm-3 col-sm-2 col-form-label">Code</label>
                    <div class="col-xl-6 col-lg-6 col-sm-6">
                        <input type="text" class="form-control" id="code" placeholder="" v-model="banner.code"
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
                        <input type="text" class="form-control" id="name" placeholder="" v-model="banner.name"
                            :class="{ error: nameError.status, success: nameSuccess.status }" />
                        <p class="text-error" v-if="nameError.status">
                            {{ nameError.text }}
                        </p>
                        <p class="success-text" v-if="nameSuccess.status">
                            {{ nameSuccess.text }}
                        </p>
                    </div>
                </div>
                <div class="form-group row mb-4">
                    <label for="hPassword" class="col-xl-2 col-sm-3 col-sm-2 col-form-label">Description</label>
                    <div class="col-xl-6 col-lg-6 col-sm-6">
                        <input type="text" class="form-control" id="name" placeholder="" v-model="banner.description"
                            :class="{ error: nameError.status, success: nameSuccess.status }" />
                        <p class="text-error" v-if="nameError.status">
                            {{ nameError.text }}
                        </p>
                        <p class="success-text" v-if="nameSuccess.status">
                            {{ nameSuccess.text }}
                        </p>
                    </div>
                </div>

                <div class="form-group row mb-4">
                    <label class="col-form-label col-xl-2 col-sm-3 col-sm-2 pt-0">Images</label>
                    <div class="col-4">
                        <p class="btn btn-success btn-sm" @click="$refs.file.click()">
                            Choose file
                        </p>
                    </div>
                    <div class="col-8">
                        <label class="btn btn-default p-0">
                            <input type="file" accept="image/*" ref="file" name="file" @change="selectImage"
                                :hidden="true" />
                        </label>
                    </div>
                    <div class="col-xl-10 col-lg-9 col-sm-10">
                        <img v-if="url" :src="url" style="width: 600px; height: 500px; margin-left: 20%" />
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
export default {
    props: ["banners"],
    name: "add-banner",
    data() {
        return {
            getBanner: this.banners,
            message: "",
            currentImage: undefined,
            url: null,
            ID: null,
            a: null,
            banner: {
                id: null,
                code: "",
                name: "",
                description: "",
                image: "",
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
        BannerService.getAll().then((res) => {
            this.a = res.data
        })
    },
    methods: {
        onSubmitForm() {

            var codeSame;
            for (let i = 0; i < this.a.length; i++) {
                const element = this.a[i];
                if (this.banner.code == element.code) {
                    codeSame = element.code;
                    break;
                }
            }
            if (this.banner.code.length == 0) {
                this.codeError = {
                    text: "Code cannot be empty",
                    status: true,
                };
                this.codeSuccess = {
                    text: "",
                    status: false
                }
            } else if (this.banner.code.length < 4) {
                this.codeError = {
                    text: "Code must be 4 characters",
                    status: true,
                };
                this.codeSuccess = {
                    text: "",
                    status: false
                }
            } else if (this.banner.code == codeSame) {
                this.codeError = {
                    text: "Code already exists !",
                    status: true
                }
                this.codeSuccess = {
                    text: "",
                    status: false
                }
            } else if (this.banner.code.length < 4 || this.banner.code != codeSame) {
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

            if (this.banner.name.length == 0) {
                this.nameError = {
                    text: "Name cannot be empty",
                    status: true,
                };
                this.nameSuccess = {
                    text: "",
                    status: false
                }
            } else if (this.banner.name.length < 6 || this.banner.name.length > 50) {
                this.nameError = {
                    text: "Name must be between 6 and 50 characters",
                    status: true,
                };
                this.nameSuccess = {
                    text: "",
                    status: false
                }
            } else if (this.banner.name.length > 6 || this.banner.name.length < 50) {
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
            if (this.banner.description.length == 0) {
                this.descriptionError = {
                    text: "Description cannot be empty",
                    status: true,
                };
                this.descriptionSuccess = {
                    text: "",
                    status: false
                }
            } else if (this.banner.description.length > 6 || this.banner.description.length < 50) {
                this.descriptionSuccess = {
                    text: "Success!",
                    status: true,
                };
                this.descriptionError = {
                    text: "",
                    status: false,
                };
            } else {
                this.descriptionError = {
                    text: "",
                    status: false,
                };
            }
            if (this.codeSuccess.status == true && this.nameSuccess.status == true && this.descriptionSuccess.status == true) {
                let login = JSON.parse(localStorage.getItem("user"));
                if (login.role == 2) {
                    UploadService.upload(this.currentImage)
                        .then((response) => {
                            console.log(response);
                            this.message = response.data.message;
                        })
                        .catch((err) => {
                            this.message = "Unable to load image ! " + err;
                            this.currentImage = undefined;
                        });

                    BannerService.create(this.banner)
                        .then((res) => {
                            //Perform Success Action
                            this.ID = res.data.id;
                            this.banner.id = this.ID;
                            console.log(res.data);
                        })
                        .catch((error) => {
                            // error.response.status Check status code
                            console.log(error);
                        })
                        .finally(() => {
                            //Perform action in always
                        });
                    this.$emit("ShowData", this.banner);
                } else {
                    alert("You are not authorized to perform this task");
                }
            }
        },
        selectImage() {
            this.currentImage = this.$refs.file.files.item(0);
            this.url = URL.createObjectURL(this.currentImage);
            this.banner.image = this.$refs.file.files.item(0).name;
        },
    },
};
</script>
