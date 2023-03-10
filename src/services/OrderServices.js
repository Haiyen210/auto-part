import http from "../http-common";
class OrderService {
    getAll() {
        return http.get("/Orders");
    }
    getAllSuccess() {
        return http.get("/Orders/orderSuccess");
    }
    get(id) {
        return http.get(`/Orders/${id}`);
    }
    getAllReturns() {
        return http.get("/Orders/orderReturn");
    }
    create(data) {
        return http.post("/Orders", data);
    }
    update(data) {
        return http.post("/Orders/PutOrder", data);
    }
    delete(id) {
        return http.delete(`/Orders/${id}`);
    }
    updateQuantity(data) {
        return http.post("/Orders/ProductQuantity", data)
    }
}
export default new OrderService();