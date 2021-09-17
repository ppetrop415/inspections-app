// import axios from "@/api/axios";

import Inspection from "src/services/inspection";
// import Auth from "@/services/auth";

export default {
  state: {
    inspections: null,
    inspection: null,
  },

  getters: {},
  mutations: {
    setInspections(state, inspections) {
      state.inspections = inspections;

      localStorage.setItem("inspections", JSON.stringify(inspections));
    },

    setInspection(state, inspection) {
      state.inspection = inspection;

      localStorage.setItem("inspection", JSON.stringify(inspection));
    },

    initializeStore(state) {
      if (localStorage.getItem("inspections")) {
        state.inspections = JSON.parse(localStorage.getItem("inspections"));
      } else {
        state.inspections = null;
      }
    },
  },
  actions: {
    async getInspection({ commit }, uuid) {
      await Inspection.get(uuid)
        .then((response) => {
          commit("setInspection", response.data);
        })
        .catch((e) => {
          console.log(e);
        });
    },

    async getInspections({ commit }) {
      await Inspection.getAll()
        .then((response) => {
          commit("setInspections", response.data);
        })
        .catch((e) => {
          console.log(e);
        });
    },
  },
  namespaced: true,
};
