<template>
  <page>
    <page-header>
      <template #title>SanyHealth</template>
    </page-header>
    <page-body>
      <div class="page-body-spacer-header"></div>

      <q-card v-for="i in 20" :key="i" class="my-card q-ma-xs">
        <q-item to="/home/child" clickable v-ripple>
          <q-item-section top avatar>
            <q-avatar color="grey" text-color="white" icon="local_cafe" />
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
    </page-body>
  </page>
</template>

<script>
export default {
  name: "Home",
};
</script>
