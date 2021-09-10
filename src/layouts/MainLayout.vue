<template>
  <q-layout view="lHh Lpr lFf">
    <q-footer bordered class="bg-white text-primary lt-sm">
      <q-tabs
        no-caps
        active-color="dark"
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

    <q-page-container>
      <router-view v-slot="{ Component }">
        <keep-alive>
          <component :is="Component" />
        </keep-alive>
      </router-view>
    </q-page-container>
  </q-layout>
</template>

<script>
import store from "src/myStore";

export default {
  name: "MainLayout",

  setup() {
    return {
      store,
    };
  },
};
</script>
