import http from "../http-common";
class BillServices {
    get(id) {
        return http.get(`/Order/${id}`);
    }
    update(data) {
        return http.post(`/Order/${data.id}`, data);
    }
    delete(id) {
        return http.delete(`/Order/${id}`);
    }
}
export default new BillServices();