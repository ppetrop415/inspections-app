<template>
  <q-scroll-area class="page-body absolute-top fit">
    <slot />
    <div class="page-body-spacer-footer"></div>
  </q-scroll-area>
</template>

<script>
export default {
  name: "PageBody",
};
</script>
