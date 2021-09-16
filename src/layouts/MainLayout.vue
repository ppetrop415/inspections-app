<template>
  <q-layout view="lHh Lpr lFf">
    <page-footer />
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
export default {
  name: "MainLayout",

  setup() {
    return {};
  },
};
</script>
