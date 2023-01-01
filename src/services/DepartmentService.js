import http from "../http-common";
class DepartmentService {
    getAll() {
        return http.get("/Departments");
    }
    get(id) {
        return http.get(`/Departments/${id}`);
    }
    create(data) {
        return http.post("/Departments", data);
    }
    update(data) {
        return http.post(`/Departments/PutDepartments`, data);
    }
    delete(id) {
            return http.delete(`/Departments/${id}`);
        }
        //   deleteAll() {
        //     return http.delete(`/tutorials`);
        //   }
        //   findByTitle(title) {
        //     return http.get(`/tutorials?title=${title}`);
        //   }
}
export default new DepartmentService();