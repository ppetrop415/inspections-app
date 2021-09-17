<template>
  <q-footer bordered class="bg-white">
    <q-tabs
      no-caps
      active-color="primary"
      indicator-color="transparent"
      class="text-grey"
    >
      <q-route-tab
        v-for="navItem in navItems"
        :key="navItem.root"
        :to="navItem.to"
        :icon="navItem.icon"
      />
    </q-tabs>
  </q-footer>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "PageFooter",
  computed: {
    ...mapState("navItems", ["navItems"]),
  },
};
</script>

<style></style>
