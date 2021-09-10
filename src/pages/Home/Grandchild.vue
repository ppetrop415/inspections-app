<template>
  <page>
    <page-header>
      <template #buttons-left>
        <page-header-btn-back label="Child" />
      </template>
      <template #title>Grandchild</template>
    </page-header>
    <page-body>
      <div class="page-body-spacer-header"></div>
      <div class="q-pa-lg">
        <div class="text-h5 q-mb-md">How deep is this?</div>
        <q-option-group
          v-model="group"
          :options="options"
          color="primary"
          class="q-mb-md"
          inline
          dense
        />
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
import { ref } from "vue";

export default {
  name: "Grandchild",
  setup() {
    return {
      group: ref("op1"),

      options: [
        {
          label: "Option 1",
          value: "op1",
        },
        {
          label: "Option 2",
          value: "op2",
        },
        {
          label: "Option 3",
          value: "op3",
        },
      ],
    };
  },
};
</script>
