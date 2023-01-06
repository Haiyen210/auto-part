<template>

    <div class="statbox widget box box-shadow">
        <div class="widget-header">
            <div class="row">
                <div class="col-xl-12 col-md-12 col-sm-12 col-12">
                    <h4>Add New Factory</h4>
                </div>
            </div>
        </div>
        <div class="widget-content widget-content-area">
            <form method="post" v-on:submit.prevent="onSubmitForm">
                <div class="form-group row mb-4">
                    <label for="exampleFormControlInput1" class="col-xl-2 col-sm-3 col-sm-2 col-form-label">Code</label>
                    <div class="col-xl-6 col-lg-6 col-sm-6">
                        <input type="text" class="form-control" id="code" placeholder="" v-model="factory.code"
                            :class="{ error: codeError.status, success: codeSuccess.status }" />
                        <p class="text-error" v-if="codeError.status">{{ codeError.text }}</p>
                        <p class="success-text" v-if="codeSuccess.status">{{ codeSuccess.text }}
                        </p>
                    </div>

                </div>
                <div class="form-group row mb-4">
                    <label for="hPassword" class="col-xl-2 col-sm-3 col-sm-2 col-form-label">Name</label>
                    <div class="col-xl-6 col-lg-6 col-sm-6">
                        <input type="text" class="form-control" id="name" placeholder="" v-model="factory.name"
                            :class="{ error: nameError.status, success: nameSuccess.status }">
                        <p class="text-error" v-if="nameError.status">{{ nameError.text }}</p>
                        <p class="success-text" v-if="nameSuccess.status">{{ nameSuccess.text }}
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
import FactoryService from '@/services/FactoryService';
// import 'mosha-vue-toastify/dist/style.css';
// import { createToast } from 'mosha-vue-toastify';
export default {
    data() {
        return {
            message: "",
            currentImage: undefined,
            a: null,
            url: null,
            ID: null,
            factory: {
                id: null,
                code: "",
                name: "",
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
            }
        }

    },
    mounted(){
        FactoryService.getAll().then((res)=>{
            this.a = res.data
        })
    },
    methods: {
        onSubmitForm() {
            var codeSame;
            for (let i = 0; i < this.a.length; i++) {
                const element = this.a[i];
                if(this.factory.code == element.code){
                    codeSame = element.code;
                    break;
                }
            }
            if (this.factory.code.length == 0) {
                this.codeError = {
                    text: "Code cannot be empty",
                    status: true
                }
                this.codeSuccess = {
                    text: "",
                    status: false
                }
            } else if (this.factory.code.length < 5) {
                this.codeError = {
                    text: "Code must contain 5 characters",
                    status: true
                }
                this.codeSuccess = {
                    text: "",
                    status: false
                }

            } else if(this.factory.code == codeSame)
            {
                this.codeError = {
                    text: "Code already exists !",
                    status: true
                }
                this.codeSuccess = {
                    text: "",
                    status: false
                }
            }else if (this.factory.code.length >= 5 || this.factory.code == codeSame) {
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

            if (this.factory.name.length == 0) {
                this.nameError = {
                    text: "Name cannot be empty!",
                    status: true
                }
                this.nameSuccess = {
                    text: "",
                    status: false
                }

            } else if (this.factory.name.length < 6 || this.factory.name.length > 50) {
                this.nameError = {
                    text: "Name must be between 6 and 50 characters",
                    status: true
                }
                this.nameSuccess = {
                    text: "",
                    status: false
                }

            } else if (this.factory.name.length > 6 || this.factory.name.length < 50) {
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

            if (this.codeSuccess.status == true && this.nameSuccess.status == true ) {
                FactoryService.create(this.factory)
                    .then((res) => {
                        //Perform Success Action
                        this.ID = res.data.id;
                        this.factory.id = this.ID;
                        this.factory.status = true;
                        this.$emit("ShowData", this.factory);
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
