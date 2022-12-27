import http from "../http-common";
class AccountService {
    getAll() {
        return http.get("/Account");
    }
    get(id) {
        return http.get(`/Account/${id}`);
    }
    create(data) {
        return http.post("/Account", data);
    }
    update(data) {
        return http.post(`/Account/PutAccount`, data);
    }
    delete(id) {
            return http.delete(`/Account/${id}`);
        }
        //   deleteAll() {
        //     return http.delete(`/tutorials`);
        //   }
        //   findByTitle(title) {
        //     return http.get(`/tutorials?title=${title}`);
        //   }
}
export default new AccountService();