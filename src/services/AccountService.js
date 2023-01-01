import http from "../http-common";
class AccountService {
    getAll() {
        return http.get("/accountadmins");
    }
    get(id) {
        return http.get(`/accountadmins/${id}`);
    }
    create(data) {
        return http.post("/accountadmins", data);
    }
    update(data) {
        return http.post(`/accountadmins/Putaccountadmins`, data);
    }
    delete(id) {
            return http.delete(`/accountadmins/${id}`);
        }
        //   deleteAll() {
        //     return http.delete(`/tutorials`);
        //   }
        //   findByTitle(title) {
        //     return http.get(`/tutorials?title=${title}`);
        //   }
}
export default new AccountService();