import http from "../http-common";
class WareHouseService {
    getAll() {
        return http.get("/WareHouse");
    }
    get(id) {
        return http.get(`/WareHouse/${id}`);
    }
    create(data) {
        return http.post("/WareHouse", data);
    }
    update(data) {
        return http.post(`/WareHouse/PutWareHouse`, data);
    }
    delete(id) {
            return http.delete(`/WareHouse/${id}`);
        }
        //   deleteAll() {
        //     return http.delete(`/tutorials`);
        //   }
        //   findByTitle(title) {
        //     return http.get(`/tutorials?title=${title}`);
        //   }
}
export default new WareHouseService();