<template>
  <q-footer bordered class="bg-white">
    <q-tabs
      no-caps
      active-color="primary"
      indicator-color="transparent"
      class="text-grey"
    >
      <q-route-tab
        v-for="navItem in store.state.navItems"
        :key="navItem.root"
        :to="navItem.to"
        :icon="navItem.icon"
      />
    </q-tabs>
  </q-footer>
</template>

<script>
import store from "src/myStore";

export default {
  name: "PageFooter",

  setup() {
    return {
      store,
    };
  },
};
</script>

<style></style>
