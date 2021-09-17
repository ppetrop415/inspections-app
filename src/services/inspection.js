import api from "../api/axios";
import authHeader from "src/api/headers";

const END_POINT = "inspections/";

export default {
  getAll() {
    return api.get(`${END_POINT}completed/`, {
      headers: authHeader(),
    });
  },
  get(uuid) {
    return api.get(`${END_POINT}completed/${uuid}/`, {
      headers: authHeader(),
    });
  },
};
