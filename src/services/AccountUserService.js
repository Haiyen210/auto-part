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
        return http.post(`/AccountUsers/${data.id}`, data);
    }
    delete(id) {
        return http.delete(`/AccountUsers/${id}`);
    }


}
export default new AccountUserService();