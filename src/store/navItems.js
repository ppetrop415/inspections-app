// import axios from "@/api/axios";

// import Inspection from "@/services/inspection";
// import Auth from "@/services/auth";

export default {
  state: {
    navItems: [
      {
        root: "/home",
        to: "/home",
        icon: "home",
        label: "Home",
      },

      {
        root: "/new-inspection",
        to: "/new-inspection",
        icon: "note_add",
        label: "Questions",
      },
      {
        root: "/images",
        to: "/images",
        icon: "person",
        label: "Images",
      },
    ],
    usePageTransition: false,
  },

  getters: {},
  mutations: {},
  actions: {},
  namespaced: true,
};
