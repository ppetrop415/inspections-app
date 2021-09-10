<template>
  <page>
    <page-header>
      <template #buttons-left>
        <page-header-btn-back label="Home" />
      </template>
      <template #title>Child</template>
    </page-header>
    <page-body>
      <div class="page-body-spacer-header"></div>
      <div class="q-pa-lg">
        <div class="text-h5 q-mb-md">This is a child page</div>

        <q-btn
          to="/home/child/grandchild"
          label="Go to Grandchild Page"
          color="primary"
          class="full-width q-mb-md"
          rounded
          unelevated
          no-caps
        ></q-btn>

        <p v-for="i in 20" :key="i">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dignissimos
          ex neque voluptates necessitatibus amet ipsa assumenda repellat. Aut
          corporis magni veritatis, ut consequuntur similique, modi quod veniam,
          nihil iure fugiat!
        </p>
      </div>
    </page-body>
  </page>
</template>

<script>
export default {
  name: "Child",
};
</script>
