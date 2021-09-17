// import axios from "@/api/axios";

// import Inspection from "@/services/inspection";
import Auth from "src/services/auth";

export default {
  state: {
    token: null,
    error: null,
    isLoading: false,
    isAuthenticated: false,
    user: {
      id: 0,
      email: "",
      first_name: "",
      last_name: "",
    },
  },

  getters: {
    authenticated(state) {
      if (state.token) {
        return true;
      } else {
        return false;
      }
    },
    error(state) {
      return state.error;
    },
  },
  mutations: {
    initializeStore(state) {
      if (localStorage.getItem("token")) {
        state.token = localStorage.getItem("token");
        state.isAuthenticated = true;
        state.user.email = localStorage.getItem("email");
        state.user.id = localStorage.getItem("user_id");
        state.user.first_name = localStorage.getItem("first_name");
        state.user.last_name = localStorage.getItem("last_name");
      } else {
        state.token = "";
        state.isAuthenticated = false;
        state.user.email = "";
        state.user.id = 0;
        state.user.first_name = "";
        state.user.last_name = "";
      }
    },

    setIsLoading(state, status) {
      state.isLoading = status;
    },

    setToken(state, token) {
      state.token = token;
      state.isAuthenticated = true;
    },

    setUser(state, user) {
      state.user = user;
    },
  },
  actions: {
    async signIn({ commit }, credentials) {
      await Auth.login(credentials)
        .then((response) => {
          const token = response.data.access;

          const user = {
            id: response.data.user.id,
            email: response.data.user.email,
            first_name: response.data.user.first_name,
            last_name: response.data.user.last_name,
          };

          commit("setToken", token);
          commit("setUser", user);

          localStorage.setItem("token", token);
          localStorage.setItem("email", response.data.user.email);
          localStorage.setItem("user_id", response.data.user.id);
          localStorage.setItem("first_name", response.data.user.first_name);
          localStorage.setItem("last_name", response.data.user.last_name);

          console.log(response.data);
        })
        .catch((e) => {
          console.log(e);
        });
    },
  },
  namespaced: true,
};
