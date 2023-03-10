<template>

    <div class="statbox widget box box-shadow">
        <div class="widget-header">
            <div class="row">
                <div class="col-xl-12 col-md-12 col-sm-12 col-12">
                    <h4>Add New WareHouse</h4>
                </div>
            </div>
        </div>
        <div class="widget-content widget-content-area">
            <form method="post" v-on:submit.prevent="onSubmitForm">
                <div class="form-group row mb-4">
                    <label for="exampleFormControlInput1" class="col-xl-2 col-sm-3 col-sm-2 col-form-label">WareHouse
                        Code</label>
                    <div class="col-xl-6 col-lg-6 col-sm-6">
                        <input type="text" class="form-control" id="code" placeholder="" v-model="warehouse.code"
                            :class="{ error: codeError.status, success: codeSuccess.status }" />
                        <p class="text-error" v-if="codeError.status">{{ codeError.text }}</p>
                        <p class="success-text" v-if="codeSuccess.status">{{ codeSuccess.text }}
                        </p>
                    </div>

                </div>
                <div class="form-group row mb-4">
                    <label for="hPassword" class="col-xl-2 col-sm-3 col-sm-2 col-form-label">Name</label>
                    <div class="col-xl-6 col-lg-6 col-sm-6">
                        <input type="text" class="form-control" id="name" placeholder="" v-model="warehouse.name"
                            :class="{ error: nameError.status, success: nameSuccess.status }">
                        <p class="text-error" v-if="nameError.status">{{ nameError.text }}</p>
                        <p class="success-text" v-if="nameSuccess.status">{{ nameSuccess.text }}
                        </p>
                    </div>
                </div>

                <div class="form-group row mb-4">
                    <label for="hPassword" class="col-xl-2 col-sm-3 col-sm-2 col-form-label">Factory</label>
                    <div class="col-xl-6 col-lg-6 col-sm-6">
                        <select class="form-control basic" name="" id="factoryID" v-model="warehouse.factoryID">
                            <option value="">Choose</option>
                            <option v-for="item in factoryes" :key="item.id" :selected="warehouse.factoryID === item.id"
                                v-bind:value="item.id">{{ item.name }}</option>
                        </select>
                        <p class="text-error" v-if="factoryIDError.status">{{ factoryIDError.text }}</p>
                        <p class="success-text" v-if="factoryIDSuccess.status">{{ factoryIDSuccess.text }}
                        </p>
                        <p class="text-error" v-if="response">FactoryId already exists !
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
import WareHouseService from '@/services/WareHouseService';
import FactoryService from '@/services/FactoryService';
export default {
    data() {
        return {
            message: "",
            currentImage: undefined,
            factoryes: null,
            a:null,
            url: null,
            ID: null,
            warehouses:null,
            warehouse: {
                id: null,
                code: "",
                name: "",
                factoryID: "",
                factoryName:"",
                status: 1,
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
            factoryIDError: {
                text: "",
                status: false,
            },
            factoryIDSuccess: {
                text: "",
                status: false,
            }
        }

    },
    mounted() {
        FactoryService.getAll()
            .then((res) => {
                this.factoryes = res.data;
            })
            .catch((error) => {
                console.log(error);

            })
            .finally(() => {

            })
            WareHouseService.getAll()
            .then((res) => {
                this.warehouses = res.data;
            })
            .catch((error) => {
                console.log(error);

            })
            .finally(() => {

            })
    },
    methods: {
        onSubmitForm() {
            var FactoryIdSame;
            for (let i = 0; i < this.warehouses.length; i++) {
                const element = this.warehouses[i];
                if(this.warehouse.factoryID == element.factoryID){
                    FactoryIdSame = element.factoryID;
                    break;
                }
            }
            if (this.warehouse.code.length == 0) {
                this.codeError = {
                    text: "Code cannot be empty",
                    status: true
                }
                this.codeSuccess = {
                    text: "",
                    status: false
                }
            } else if (this.warehouse.code.length < 4) {
                this.codeError = {
                    text: "Code must contain 4 characters",
                    status: true
                }
                this.codeSuccess = {
                    text: "",
                    status: false
                }

            } else if (this.warehouse.code.length >= 4) {
                this.codeSuccess = {
                    text: "Success!",
                    status: true
                }
                this.codeError = {
                    text: "",
                    status: false
                }
            } else {
                this.codeSuccess = {
                    text: "",
                    status: true
                }
            }

            if (this.warehouse.name.length == 0) {
                this.nameError = {
                    text: "Warehouse name cannot be empty!",
                    status: true
                }
                this.nameError = {
                    text: "",
                    status: false
                }
            } else if (this.warehouse.name.length < 6 || this.warehouse.name.length > 50) {
                this.nameError = {
                    text: "Warehouse name must be between 6 and 50 characters",
                    status: true
                }
                this.nameError = {
                    text: "",
                    status: false
                }

            } else if (this.warehouse.name.length > 6 || this.warehouse.name.length < 50) {
                this.nameSuccess = {
                    text: "Success!",
                    status: true
                }
                this.nameError = {
                    text: "",
                    status: false
                }
            } else {
                this.nameSuccess = {
                    text: "",
                    status: true
                }
            }

        if(this.warehouse.factoryID == FactoryIdSame)
            {
                this.factoryIDError = {
                    text: "FactoryId already exists !",
                    status: true
                }
                this.factoryIDSuccess = {
                    text: "",
                    status: false
                }
            } else if (this.warehouse.factoryID != FactoryIdSame) {

                this.factoryIDSuccess = {
                    text: "Success!",
                    status: true
                }
                this.factoryIDError = {
                    text: "",
                    status: false
                }

            } else {
                this.factoryIDSuccess = {
                    text: "",
                    status: true
                }
            }
            let login = JSON.parse(localStorage.getItem("user"));
            if (login.role == 2) {
                if (this.codeSuccess.status == true && this.nameSuccess.status == true && this.factoryIDSuccess.status == true) {
                    WareHouseService.create(this.warehouse)
                        .then((res) => {
                            //Perform Success Action
                            this.ID = res.data.id;
                            this.warehouse.id = this.ID;
                            this.warehouse.status = 1;
                            this.warehouse.factoryName = res.data.factoryName;
                            this.$emit("ShowData", this.warehouse);
                        })
                        .catch((error) => {
                            console.log(error);
                        })
                        .finally(() => {
                            //Perform action in always
                        });
                }
            } else {
                alert("You are not authorized to perform this task");
            }
        },
    }

}
</script>
