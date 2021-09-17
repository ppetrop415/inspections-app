import api from "../api/axios";

import authHeader from "../api/headers";

const END_POINT = "auth/";

export default {
  login(data) {
    return api.post(`${END_POINT}login/`, data);
  },
  logout() {
    return api.post(`${END_POINT}logout/`, {
      headers: authHeader(),
    });
  },
};
