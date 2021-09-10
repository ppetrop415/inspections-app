<template>
  <page>
    <page-header>
      <template #buttons-left>
        <page-header-btn-back label="Questions" />
      </template>
      <template #title>Answer</template>
    </page-header>
    <page-body>
      <div class="page-body-spacer-header"></div>
      <div>
        <q-card class="my-card" flat>
          <q-card-section>
            <q-item>
              <q-item-section>
                <q-item-label caption>Επωνυμία</q-item-label>
                <q-item-label>Cafe Cafe</q-item-label>
                <q-item-label caption>Ιδιοκτήτης</q-item-label>
                <q-item-label>Παπαδόπουλος Νικόλαος </q-item-label>
                <q-item-label caption>Διεύθυνση </q-item-label>
                <q-item-label>Βεακη 45, 10458, Περιστέρι </q-item-label>
                <q-item-label caption>Υγειονομικός Υπεύθυνος</q-item-label>

                <q-item-label>Παπαδόπουλος Νικόλαος </q-item-label>
                <q-item-label caption>Δραστηριότητα </q-item-label>
                <q-item-label
                  >Επιχείρηση Μαζικής Εστίασης Μερικής
                  Επεξεργασίας</q-item-label
                >
              </q-item-section>

              <q-item-section side top>
                <q-item-label caption>Αριθμός Άδειας</q-item-label>
                <q-item-label>15815854</q-item-label>
                <q-item-label caption>ΑΦΜ</q-item-label>
                <q-item-label>058789568</q-item-label>

                <div caption>
                  Σκορ:
                  <q-badge color="teal" label="256" />
                </div>
              </q-item-section>
            </q-item>
          </q-card-section>

          <q-card-section>
            <q-expansion-item
              v-for="i in 10"
              :key="i"
              class="shadow-4 q-mb-sm overflow-hidden"
              style="border-radius: 30px"
              icon="error"
              label="Counter"
              header-class="bg-primary text-white"
              expand-icon-class="text-white"
            >
              <q-card
                v-for="i in 10"
                :key="i"
                class="row items-center"
                bordered
              >
                <q-card-section class="col-sm-4 col-md-6 col-12 text-justify">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo
                  unde natus distinctio sint molestiae qui officia, quisquam
                  vero a fuga. Nisi enim, non eaque vel magni tempore laborum
                  voluptas totam! Lorem ipsum dolor sit amet consectetur
                  adipisicing elit. Incidunt blanditiis neque iure earum tenetur
                  officia animi cum. Cum eius quod minima est harum aliquid,
                  iste vel vero perferendis impedit et?
                </q-card-section>
                <q-card-section class="col-sm-4 col-md-3 col-12">
                  <q-btn-toggle
                    v-model="model"
                    toggle-color="primary"
                    :options="[
                      { label: 'One', value: 'one' },
                      { label: 'Two', value: 'two' },
                      { label: 'Three', value: 'three' },
                    ]"
                  />
                </q-card-section>
                <q-card-section class="col-sm-4 col-md-3 col-12 q-gutter-sm">
                  <q-btn round color="info" icon="info" />
                  <q-btn round color="primary" icon="edit" />
                  <q-btn round color="positive" icon="done" />
                </q-card-section>
              </q-card>
            </q-expansion-item>
          </q-card-section>
        </q-card>
      </div>
    </page-body>
  </page>
</template>

<script>
import { ref } from "vue";

export default {
  name: "Answer",
  setup() {
    return {
      model: ref(null),
    };
  },
};
</script>
