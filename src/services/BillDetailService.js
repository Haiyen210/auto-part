import http from "../http-common";
class BillDetailService {
    getAll() {
<<<<<<<< HEAD:src/services/BillDetailService.js
        return http.get("http://localhost:54195/api/billdetail");
========
        return http.get("/accountadmins");
>>>>>>>> yen:src/services/AccountService.js
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
export default new BillDetailService();