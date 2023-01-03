import http from "../http-common";
class AccountAdminService {
    getAll() {
        return http.get("/AccountAdmin");
    }
    get(id) {
        return http.get(`/AccountAdmin/${id}`);
    }
    getEmail(email) {
        return http.get(`/AccountAdmin/getemail/${email}`)
    }
    create(data) {
        return http.post("/AccountAdmin", data);
    }
    update(data) {
        return http.post(`/AccountAdmin/PutAccountAdmin`, data);
    }
    delete(id) {
            return http.delete(`/AccountAdmin/${id}`);
        }
        //   deleteAll() {
        //     return http.delete(`/tutorials`);
        //   }
        //   findByTitle(title) {
        //     return http.get(`/tutorials?title=${title}`);
        //   }
}
export default new AccountAdminService();