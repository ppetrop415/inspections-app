<template>
  <router-view />
</template>
<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "App",
  beforeCreate() {
    this.$store.commit("auth/initializeStore");
    this.$store.commit("inspections/initializeStore");
  },
});
</script>
