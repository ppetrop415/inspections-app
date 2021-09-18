// import axios from "@/api/axios";

import Inspection from "../services/inspection";
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

    initializeInspections(state) {
      if (localStorage.getItem("inspections")) {
        state.inspections = JSON.parse(localStorage.getItem("inspections"));
      } else {
        state.inspections = null;
      }
    },
    initializeInspection(state) {
      if (localStorage.getItem("inspection")) {
        state.inspection = JSON.parse(localStorage.getItem("inspection"));
      } else {
        state.inspection = null;
      }
    },
  },
  actions: {
    getInspection({ commit }, uuid) {
      Inspection.get(uuid)
        .then((response) => {
          commit("setInspection", response.data);
        })
        .catch((e) => {
          console.log(e);
        });
    },

    getInspections({ commit }) {
      Inspection.getAll()
        .then((response) => {
          commit("setInspections", response.data);
          console.log(response.data);
        })
        .catch((e) => {
          console.log(e);
        });
    },
  },
  namespaced: true,
};
