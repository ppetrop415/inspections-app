<template>
  <router-view />
</template>
<script>
import { defineComponent } from "vue";
import axios from "../src/api/axios";

export default defineComponent({
  name: "App",
  beforeCreate() {
    this.$store.commit("auth/initializeStore");

    if (this.$store.state.token) {
      axios.defaults.headers.common["Authorization"] =
        "Bearer " + this.$store.state.token;
    } else {
      axios.defaults.headers.common["Authorization"] = "";
    }

    this.$store.commit("inspections/initializeInspections");
    this.$store.commit("inspections/initializeInspection");
  },
});
</script>
