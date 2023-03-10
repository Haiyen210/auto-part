<template>
    <div class="statbox widget box box-shadow">
        <div class="row">
            <div class="card" style="width: 100%;">
                <form method="post" v-on:submit.prevent="onSubmitEditForm" v-if="orders && orderDetail">
                    <div class="widget-header card-header">
                        <div class="row">
                            <div class="col-xl-12 col-md-12 col-sm-12 col-12">
                                <h4 class="text-center"> INFORMATION LINE</h4>

                            </div>
                        </div>
                    </div>
                    <div class="widget-content widget-content-area" style="padding-top: 50px;padding-bottom: 33px;">
                        <div class="row">
                            <div class="col-md-8" style="padding-left: 40px;">
                                <div class="row">
                                    <div class="col-md-3"><b>Order Name:</b></div>
                                    <div class="col-md-8">{{ orders.name }}</div>
                                </div>
                                <div class="row">
                                    <div class="col-md-3"><b>Phone:</b></div>
                                    <div class="col-md-8">{{ orders.phone }}</div>
                                </div>
                                <div class="row">
                                    <div class="col-md-3"><b>Address:</b></div>
                                    <div class="col-md-8">{{ orders.address }}</div>
                                </div>
                                <div class="row">
                                    <div class="col-md-3"><b>Email:</b></div>
                                    <div class="col-md-8">{{ orders.email }}</div>
                                </div>
                            </div>
                            <div class="col-md-4">
                                <div class="col-xl-12 col-md-12 col-sm-12 col-12">
                                    <h4>Edit Status</h4>
                                </div>
                                <div class="col-xl-12 col-md-12 col-sm-12 col-12">
                                    <fieldset class="form-group mb-4">
                                        <div class="row">
                                            <label class="col-3" style="margin-top: 10px;">
                                                Status
                                            </label>

                                            <div class="col-8">

                                                <select class="form-control  basic" v-if="orders.status == 0" v-model="orders.status" id="status">
                                                    <option :selected="orders.status === 0" value="0" disabled>Pending
                                                    </option>
                                                    <option :selected="orders.status === 1" value="1">Approved</option>
                                                    <option :selected="orders.status === 2" value="2">Delivering
                                                    </option>
                                                    <option :selected="orders.status === 3" value="3">Successful
                                                        Delivery</option>
                                                    <option :selected="orders.status === 4" value="4">Cancelled
                                                    </option>
                                                    <option :selected="orders.status === 5" value="5" disabled>
                                                        Returns
                                                    </option>
                                                    <option :selected="orders.status === 6" value="6" disabled>
                                                        Payment approval
                                                    </option>
                                                   

                                                </select>

                                                <select class="form-control  basic" v-else-if="orders.status == 1" v-model="orders.status" id="status">
                                                    <option :selected="orders.status === 0" value="0" disabled>Pending
                                                    </option>
                                                    <option :selected="orders.status === 1" value="1" disabled>Approved
                                                    </option>
                                                    <option :selected="orders.status === 2" value="2">Delivering
                                                    </option>
                                                    <option :selected="orders.status === 3" value="3">Successful
                                                        Delivery</option>
                                                    <option :selected="orders.status === 4" value="4" disabled>
                                                        Cancelled
                                                    </option>
                                                    <option :selected="orders.status === 5" value="5" disabled>
                                                        Returns
                                                    </option>
                                                    <option :selected="orders.status === 6" value="6" disabled>
                                                        Payment approval
                                                    </option>
                                                </select>

                                                <select class="form-control  basic" v-else-if="orders.status == 2" v-model="orders.status" id="status">
                                                    <option :selected="orders.status === 0" value="0" disabled>Pending
                                                    </option>
                                                    <option :selected="orders.status === 1" value="1" disabled>Approved
                                                    </option>
                                                    <option :selected="orders.status === 2" value="2" disabled>
                                                        Delivering</option>
                                                    <option :selected="orders.status === 3" value="3">Successful
                                                        Delivery</option>
                                                    <option :selected="orders.status === 4" value="4" disabled>
                                                        Cancelled
                                                    </option>
                                                    <option :selected="orders.status === 5" value="5" disabled>
                                                        Returns
                                                    </option>
                                                    <option :selected="orders.status === 6" value="6" disabled>
                                                        Payment approval
                                                    </option>
                                                </select>
                                                <select class="form-control  basic" v-else-if="orders.status == 3" v-model="orders.status" id="status">
                                                    <option :selected="orders.status === 0" value="0" disabled>Pending
                                                    </option>
                                                    <option :selected="orders.status === 1" value="1" disabled>Approved
                                                    </option>
                                                    <option :selected="orders.status === 2" value="2" disabled>
                                                        Delivering</option>
                                                    <option :selected="orders.status === 3" value="3" disabled>
                                                        Successful Delivery</option>
                                                    <option :selected="orders.status === 4" value="4" disabled>
                                                        Cancelled
                                                    </option>
                                                    <option :selected="orders.status === 5" value="5">
                                                        Returns
                                                    </option>
                                                    <option :selected="orders.status === 6" value="6" disabled>
                                                        Payment approval
                                                    </option>
                                                </select>
                                                <select class="form-control  basic" v-else-if="orders.status == 4" v-model="orders.status" id="status">
                                                    <option :selected="orders.status === 0" value="0" disabled>Pending
                                                    </option>
                                                    <option :selected="orders.status === 1" value="1" disabled>Approved
                                                    </option>
                                                    <option :selected="orders.status === 2" value="2" disabled>
                                                        Delivering</option>
                                                    <option :selected="orders.status === 3" value="3" disabled>
                                                        Successful Delivery</option>
                                                    <option :selected="orders.status === 4" value="4" disabled>
                                                        Cancelled
                                                    </option>
                                                    <option :selected="orders.status === 5" value="5" disabled>
                                                        Returns
                                                    </option>
                                                    <option :selected="orders.status === 6" value="6" disabled>
                                                        Payment approval
                                                    </option>
                                                </select>
                                                <select class="form-control  basic" v-else v-model="orders.status" id="status">
                                                    <option :selected="orders.status === 0" value="0" disabled>Pending
                                                    </option>
                                                    <option :selected="orders.status === 1" value="1" disabled>Approved
                                                    </option>
                                                    <option :selected="orders.status === 2" value="2" disabled>
                                                        Delivering</option>
                                                    <option :selected="orders.status === 3" value="3" disabled>
                                                        Successful Delivery</option>
                                                    <option :selected="orders.status === 4" value="4" disabled>
                                                        Cancelled
                                                    </option>
                                                    <option :selected="orders.status === 5" value="5" disabled>
                                                        Returns
                                                    </option>
                                                    <option :selected="orders.status === 6" value="6" disabled>
                                                        Payment approval
                                                    </option>
                                                </select>
                                            </div>
                                        </div>
                                    </fieldset>
                                    <div class="form-group row" style="margin-top: -12px;">
                                        <div class="col-sm-10">
                                            <button type="submit" class="btn btn-primary mt-3">Save</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>


                    <input type="hidden" v-model="orders.id">
                    <input type="hidden" v-model="orders.code">
                    <input type="hidden" v-model="orders.name">
                    <input type="hidden" v-model="orders.email">
                    <input type="hidden" v-model="orders.phone">
                    <input type="hidden" v-model="orders.address">
                    <input type="hidden" v-model="orders.note">
                    <input type="hidden" v-model="orders.accountUserId">
                    <input type="hidden" v-model="orders.totalAmount">
                    <input type="hidden" v-model="orders.totalQuantity">

                    <div class="col-xl-12 col-md-12 col-sm-12 col-12">
                        <div class="card-body table-responsive" style="height: 553px;">
                            <table class="table table-head-fixed text-nowrap table-bordered">
                                <thead>
                                    <tr>
                                        <th>
                                            #
                                        </th>
                                        <th>
                                            Product Code
                                        </th>
                                        <th>
                                            Product Name
                                        </th>
                                        <th>
                                            Quantity
                                        </th>
                                        <th>
                                            Price
                                        </th>
                                       
                                        <th>
                                            Total
                                        </th>
                                        <th>
                                            Note
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>

                                    <tr v-for="(item, index) in orderDetail" :key="item.id">
                                        <td>
                                            {{ index +=1 }}
                                        </td>

                                        <td>
                                            {{ item.productCode }}
                                        </td>
                                        <td>
                                            {{ item.productName }}
                                        </td>
                                        <td>
                                            {{ item.quantity }}
                                        </td>
                                        <td>
                                            ${{ formatPrice(item.price ) }}
                                        </td>
                                        <td>
                                            ${{ formatPrice(item.price * item.quantity ) }}
                                        </td>
                                        <td>
                                            {{ orders.note }}
                                        </td>

                                    </tr>
                                    <tr style="text-align: right;">
                                        <td colspan="6"> <b>Shipping charges:</b> $40</td>
                                    </tr>
                                    <tr style="text-align: right;">
                                        <td colspan="6"> <b>Tax:</b> 10%</td>
                                    </tr>
                                    <tr style="text-align: right;">
                                        <td colspan="6"> <b>Total:</b> ${{ formatPrice(orders.totalAmount) }}</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </form>
            </div>

        </div>

    </div>


</template>
<script>
import OrderDetailService from '@/services/OrderDetailService'
import OrderServices from '@/services/OrderServices'
export default {
    props: ['order'],
    data() {
        return {
            orders: this.order,
            orderDetail: null
        }
    },
    created() {
        OrderDetailService.get(this.order.id).then((res) => {
            this.orderDetail = res.data;
        })
    },
    methods: {
        formatPrice(value) {
            return new Intl.NumberFormat('en-US').format(value);
        },
        onSubmitEditForm() {
            OrderServices.update(this.orders)
            .then((res) => {
                 console.log(res.data);
                 this.$emit("ShowEditData", this.orders);
                 })
                 .catch((error) => { console.log(error); })
                 .finally(() => { })
        }
    }

}
</script>