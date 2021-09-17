import { store } from "quasar/wrappers";
import { createStore } from "vuex";

import auth from "./auth";
import inspections from "./inspections";
import navItems from "./navItems";

export default store(function (/* { ssrContext } */) {
  const Store = createStore({
    modules: {
      auth,
      inspections,
      navItems,
    },

    strict: process.env.DEBUGGING,
  });

  return Store;
});
