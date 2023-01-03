import http from "../http-common";
class CategoryService {
    getAll() {
        return http.get("/CategoryProducts");
    }
    get(id) {
        return http.get(`/CategoryProducts/${id}`);
    }
    create(data) {
        return http.post("/CategoryProducts", data);
    }
    update(data) {
        return http.post(`/CategoryProducts/PutAccount`, data);
    }
    delete(id) {
            return http.delete(`/CategoryProducts/${id}`);
        }
        //   deleteAll() {
        //     return http.delete(`/tutorials`);
        //   }
        //   findByTitle(title) {
        //     return http.get(`/tutorials?title=${title}`);
        //   }
}
export default new CategoryService();