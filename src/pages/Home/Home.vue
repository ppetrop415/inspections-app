<template>
  <page>
    <page-header>
      <template #title
        ><span class="text-dark text-weight-bolder">S</span>any<span
          class="text-primary text-weight-bolder"
          >H</span
        >ealth</template
      >
    </page-header>
    <page-body>
      <div class="page-body-spacer-header"></div>

      <q-card
        v-for="(inspection, index) in inspections.results"
        :key="index"
        class="q-ma-xs"
      >
        <q-item @click="viewInspection(inspection)" clickable v-ripple>
          <q-item-section top avatar>
            <q-avatar color="primary" text-color="white" icon="local_cafe" />
          </q-item-section>
          <q-item-section>
            <q-item-label>{{
              inspection.inspection.branch_store.business
            }}</q-item-label>

            <q-item-label caption
              >{{
                inspection.inspection.branch_store.health_regulator.last_name
              }}
              {{
                inspection.inspection.branch_store.health_regulator.first_name
              }}
            </q-item-label>
            <q-item-label caption
              >{{ inspection.inspection.branch_store.address }}
              {{ inspection.inspection.branch_store.address_number }},
              {{ inspection.inspection.branch_store.zip_code }},
              {{ inspection.inspection.branch_store.state }}
            </q-item-label>
          </q-item-section>

          <q-item-section side top>
            <q-item-label caption> {{ inspection.completed }}</q-item-label>
            <div class="text-orange">
              <q-badge color="teal" :label="inspection.score" />
            </div>
            <q-item-label caption>{{
              inspection.inspection.branch_store.vat
            }}</q-item-label>
          </q-item-section>
        </q-item>
      </q-card>
      <template v-slot:loading>
        <div class="row justify-center q-my-md">
          <q-spinner-dots color="primary" size="40px" />
        </div>
      </template>
    </page-body>
  </page>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "Home",
  data() {
    return {
      onload: false,
    };
  },
  computed: {
    ...mapState("inspections", ["inspections"]),
  },
  methods: {
    viewInspection(item) {
      this.selectedItem = this.inspections.results.indexOf(item);
      this.editedItem = Object.assign({}, item);
      this.$router.push({
        name: "inspection-detail",
        params: {
          item: this.editedItem,
          uuid: this.editedItem.inspection.uuid,
        },
      });
    },
  },
};
</script>
