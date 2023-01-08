<template>
    <div class="statbox widget box box-shadow">

        <div class="widget-header">
            <div class="row">
                <div class="col-xl-12 col-md-12 col-sm-12 col-12">
                    <h4>Edit Factory</h4>
                </div>
            </div>
        </div>
        <div class="widget-content widget-content-area">
            <form method="post" v-on:submit.prevent="onSubmitEditForm" v-if="factorys">
                <input type="hidden" v-model="factorys.id">
                <div class="form-group row mb-4">
                    <label for="exampleFormControlInput1" class="col-xl-2 col-sm-3 col-sm-2 col-form-label">Code</label>
                    <div class="col-xl-6 col-lg-6 col-sm-6">
                        <input type="text" class="form-control" id="code" placeholder="" v-model="factorys.code"
                            :class="{ error: codeError.status, success: codeSuccess.status }" />
                        <p class="text-error" v-if="codeError.status">{{ codeError.text }}</p>
                        <p class="success-text" v-if="codeSuccess.status">{{ codeSuccess.text }}
                        </p>
                    </div>

                </div>
                <div class="form-group row mb-4">
                    <label for="hPassword" class="col-xl-2 col-sm-3 col-sm-2 col-form-label">Name</label>
                    <div class="col-xl-6 col-lg-6 col-sm-6">
                        <textarea class="form-control mb-4" rows="3" id="name" v-model="factorys.name"
                            :class="{ error: nameError.status, success: nameSuccess.status }"></textarea>
                        <p class="text-error" v-if="nameError.status">{{ nameError.text }}</p>
                        <p class="success-text" v-if="nameSuccess.status">{{ nameSuccess.text }}
                        </p>
                    </div>
                </div>

                <fieldset class="form-group mb-4">
                    <div class="row">
                        <label class="col-form-label col-xl-2 col-sm-3 col-sm-2 pt-0">Status</label>
                        <div class="col-xl-10 col-lg-9 col-sm-10">
                            <div class="form-check">
                                <input class="form-check-input" type="radio" v-model="factorys.status" :value="true"
                                    :checked="factorys.status === true" id="status" style="width: 16px;height: 16px;" />
                                <label class="form-check-label" for="flexCheckDefault"> Action
                                </label>
                            </div>
                            <div class="form-check">
                                <input class="form-check-input" type="radio" v-model="factorys.status" :value="false"
                                    :checked="factorys.status === false" id="status"
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
import FactoryService from '@/services/FactoryService';
export default {
    props: ['factory'],

    data() {

        return {
            factorys: this.factory,
            url: null,
            ishowImage: false,
            message: "",
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

    methods: {
        onSubmitEditForm() {

            if (this.factorys.code.length == 0) {
                this.codeError = {
                    text: "Code cannot be empty",
                    status: true
                }
                this.codeSuccess = {
                    text: "",
                    status: false
                }
            } else if (this.factorys.code.length < 4) {
                this.codeError = {
                    text: "Code must contain 4 characters",
                    status: true
                }
                this.codeSuccess = {
                    text: "",
                    status: false
                }

            } else if (this.factorys.code.length >= 4) {
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

            if (this.factorys.name.length == 0) {
                this.nameError = {
                    text: "Name cannot be empty!",
                    status: true
                }
                this.nameSuccess = {
                    text: "",
                    status: false
                }

            } else if (this.factorys.name.length < 6 || this.factorys.name.length > 50) {
                this.nameError = {
                    text: "Name must be between 6 and 50 characters",
                    status: true
                }
                this.nameSuccess = {
                    text: "",
                    status: false
                }

            } else if (this.factorys.name.length > 6 || this.factorys.name.length < 50) {
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
            if (this.codeSuccess.status == true && this.nameSuccess.status == true) {
                let login = JSON.parse(localStorage.getItem("user"));
                if (login.role == 2) {
                    FactoryService.update(this.factorys)
                        .then((res) => {
                            console.log(res);

                        })
                        .catch((error) => {
                            // error.response.status Check status code
                            console.log(error);
                        })
                        .finally(() => {
                            //Perform action in always
                        });
                    this.$emit("ShowEditData", this.factorys);
                } else {
                    alert("You are not authorized to perform this task");
                }
            }
        },
    }

}
</script>
