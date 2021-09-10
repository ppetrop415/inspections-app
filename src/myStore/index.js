import { reactive } from "vue";

const state = reactive({
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
});

const store = {
  state,
};

export default store;
