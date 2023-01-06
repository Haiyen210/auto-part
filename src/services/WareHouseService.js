import http from "../http-common";
class WareHouseService {
    getAll() {
        return http.get("/warehouses");
    }
    get(id) {
        return http.get(`/warehouses/${id}`);
    }
    create(data) {
        return http.post("/warehouses", data);
    }
    update(data) {
        return http.post(`/warehouses/Putwarehouse`, data);
    }
    delete(id) {
            return http.delete(`/warehouses/${id}`);
        }
        //   deleteAll() {
        //     return http.delete(`/tutorials`);
        //   }
        //   findByTitle(title) {
        //     return http.get(`/tutorials?title=${title}`);
        //   }
}
export default new WareHouseService();