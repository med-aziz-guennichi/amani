import http from "./AxiosContext";
const getAll = () => {
  return http.get("/employe/getAll");
};
const get = id => {
  return http.get(`/employe/getbyId/${id}`);
};
const create = data => {
  return http.post("/employe/register", data);
};
const update = (id, data) => {
  return http.put(`/employe/update/${id}`, data);
};
const remove = id => {
  return http.delete(`/employe/delete/${id}`);
};
const findByName = title => {
    return http.get(`/employe/getbyname=${title}`);
  };
  export default {
    getAll,
    get,
    create,
    update,
    remove,
    findByName
  };