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

      <q-infinite-scroll @load="onLoad" :offset="250">
        <q-card
          v-for="(item, index) in items"
          :key="index"
          class="my-card q-ma-xs"
        >
          <q-item to="/home/child" clickable v-ripple>
            <q-item-section top avatar>
              <q-avatar color="primary" text-color="white" icon="local_cafe" />
            </q-item-section>
            <q-item-section>
              <q-item-label>Cafe Cafe</q-item-label>

              <q-item-label caption>Παπαδόπουλος Νικόλαος </q-item-label>
              <q-item-label caption>Βεακη 45, 10458, Περιστέρι </q-item-label>
            </q-item-section>

            <q-item-section side top>
              <q-item-label caption>2 min ago</q-item-label>
              <div class="text-orange">
                <q-badge color="teal" label="10k" />
              </div>
              <q-item-label caption>058789568</q-item-label>
            </q-item-section>
          </q-item>
        </q-card>
        <template v-slot:loading>
          <div class="row justify-center q-my-md">
            <q-spinner-dots color="primary" size="40px" />
          </div>
        </template>
      </q-infinite-scroll>
    </page-body>
  </page>
</template>

<script>
import { ref } from "vue";

export default {
  name: "Home",
  setup() {
    const items = ref([{}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}]);

    return {
      items,
      onLoad(index, done) {
        setTimeout(() => {
          items.value.push({}, {}, {}, {}, {}, {}, {});
          done();
        }, 2000);
      },
    };
  },
};
</script>
