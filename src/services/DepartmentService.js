import http from "../http-common";
class DepartmentService {
    getAll() {
        return http.get("/Department");
    }
    get(id) {
        return http.get(`/Department/${id}`);
    }
    create(data) {
        return http.post("/Department", data);
    }
    update(data) {
        return http.post(`/Department/PutDepartment`, data);
    }
    delete(id) {
            return http.delete(`/Department/${id}`);
        }
        //   deleteAll() {
        //     return http.delete(`/tutorials`);
        //   }
        //   findByTitle(title) {
        //     return http.get(`/tutorials?title=${title}`);
        //   }
}
export default new DepartmentService();