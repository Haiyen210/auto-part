<template>

    <div class="statbox widget box box-shadow">
        <div class="widget-header">
            <div class="row">
                <div class="col-xl-12 col-md-12 col-sm-12 col-12">
                    <h4>Add New Category</h4>
                </div>
            </div>
        </div>
        <div class="widget-content widget-content-area">
            <form method="post" v-on:submit.prevent="onSubmitForm">
                <div class="form-group row mb-4">
                    <label for="exampleFormControlInput1" class="col-xl-2 col-sm-3 col-sm-2 col-form-label">Code</label>
                    <div class="col-xl-6 col-lg-6 col-sm-6">
                        <input type="text" class="form-control" id="code" placeholder="" v-model="category.code"
                            :class="{ error: codeError.status, success: codeSuccess.status }" />
                        <p class="text-error" v-if="codeError.status">{{ codeError.text }}</p>
                        <p class="success-text" v-if="codeSuccess.status">{{ codeSuccess.text }}
                        </p>
                    </div>

                </div>
                <div class="form-group row mb-4">
                    <label for="hPassword" class="col-xl-2 col-sm-3 col-sm-2 col-form-label">Name</label>
                    <div class="col-xl-6 col-lg-6 col-sm-6">
                        <input type="text" class="form-control" id="name" placeholder="" v-model="category.name"
                            :class="{ error: nameError.status, success: nameSuccess.status }">
                        <p class="text-error" v-if="nameError.status">{{ nameError.text }}</p>
                        <p class="success-text" v-if="nameSuccess.status">{{ nameSuccess.text }}
                        </p>
                    </div>
                </div>
                <div class="form-group row mb-4">
                    <label for="hPassword" class="col-xl-2 col-sm-3 col-sm-2 col-form-label">Description</label>
                    <div class="col-xl-6 col-lg-6 col-sm-6">
                        <input type="text" class="form-control" id="name" placeholder="" v-model="category.description"
                            :class="{ error: descriptionError.status, success: descriptionSuccess.status }">
                        <p class="text-error" v-if="descriptionError.status">{{ descriptionError.text }}</p>
                        <p class="success-text" v-if="descriptionSuccess.status">{{ descriptionSuccess.text }}
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
import CategoryProductService from '@/services/CategoryProductService';
// import 'mosha-vue-toastify/dist/style.css';
// import { createToast } from 'mosha-vue-toastify';
export default {
    data() {
        return {
            message: "",
            currentImage: undefined,
           a:null,
            url: null,
            ID: null,
            category: {
                id: null,
                code: "",
                name: "",
                description:"",
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
            descriptionError: {
                text: "",
                status: false,
            },
            descriptionSuccess: {
                text: "",
                status: false,
            }
        }

    },
    mounted(){
        CategoryProductService.getAll().then((res)=>{
            this.a = res.data
        })
    },
    methods: {
        onSubmitForm() {
            var codeSame;
            for (let i = 0; i < this.a.length; i++) {
                const element = this.a[i];
                if(this.category.code == element.code){
                    codeSame = element.code;
                    break;
                }
            }
            if (this.category.code.length == 0) {
                this.codeError = {
                    text: "Code cannot be empty",
                    status: true
                }
                this.codeSuccess = {
                    text: "",
                    status: false
                }
            } else if (this.category.code.length < 5) {
                this.codeError = {
                    text: "Code must contain 5 characters",
                    status: true
                }
                this.codeSuccess = {
                    text: "",
                    status: false
                }

            } else if(this.category.code == codeSame)
            {
                this.codeError = {
                    text: "Code already exists !",
                    status: true
                }
                this.codeSuccess = {
                    text: "",
                    status: false
                }
            }else if (this.category.code.length >= 5 || this.category.code != codeSame) {
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

            if (this.category.name.length == 0) {
                this.nameError = {
                    text: "Name cannot be empty!",
                    status: true
                }
                this.nameSuccess = {
                    text: "",
                    status: false
                }

            } else if (this.category.name.length < 6 || this.category.name.length > 50) {
                this.nameError = {
                    text: "Name must be between 6 and 50 characters",
                    status: true
                }
                this.nameSuccess = {
                    text: "",
                    status: false
                }

            } else if (this.category.name.length > 6 || this.category.name.length < 50) {
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
            if (this.category.description.length == 0) {
                this.descriptionError = {
                    text: "Description cannot be empty",
                    status: true
                }
                this.descriptionSuccess = {
                    text: "",
                    status: false
                }
            } else if (this.category.description.length > 0) {
                this.descriptionSuccess = {
                    text: "Success!",
                    status: true
                }
                this.descriptionError = {
                    text: "",
                    status: false
                }
            } else {
                this.descriptionError = {
                    text: "",
                    status: false
                }
            }
            if (this.codeSuccess.status == true && this.nameSuccess.status == true  && this.descriptionSuccess.status == true) {
                CategoryProductService.create(this.category)
                    .then((res) => {
                        //Perform Success Action
                        this.ID = res.data.id;
                        this.category.id = this.ID;
                        this.category.status = true;
                        
                        console.log(this.category);
                        this.$emit("ShowData", this.category);
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
