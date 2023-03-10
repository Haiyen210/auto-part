import http from "../http-common";
class AccountUserService {
    getAll() {
        return http.get("/AccountUsers");
    }
    get(id) {
        return http.get(`/AccountUsers/${id}`);
    }
    create(data) {
        return http.post("/AccountUsers", data);
    }
    update(data) {
        return http.post("/AccountUsers/PutAccountUser", data);
    }
    delete(id) {
        return http.delete(`/AccountUsers/${id}`);
    }
    getTrash() {
        return http.get("/AccountUsers/TrashAccountUsers");
    }
    temporaryDelete(data) {
        return http.post(`/AccountUsers/TemporaryDelete`, data);
    }
    repeat(data) {
        return http.post(`/AccountUsers/RepeatAccountUsers`, data);
    }
    getOrderDebit() {
        return http.get("/AccountUsers/GetOrderDebit");
    }

}
export default new AccountUserService();