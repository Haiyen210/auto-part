import http from "../http-common";
class ProductService {
    getAll() {
        return http.get("/Products");
    }
    get(id) {
        return http.get(`/Products/${id}`);
    }
    create(data) {
        return http.post("/Products", data);
    }
    update(data) {
        return http.post(`/Products/PutProducts`, data);
    }
    delete(id) {
            return http.delete(`/Products/${id}`);
        }
        //   deleteAll() {
        //     return http.delete(`/tutorials`);
        //   }
        //   findByTitle(title) {
        //     return http.get(`/tutorials?title=${title}`);
        //   }
}
export default new ProductService();