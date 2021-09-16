<template>
  <page>
    <page-header>
      <template #buttons-left>
        <q-btn color="teal" label="Σκόρ: 256" rounded no-caps />
      </template>
      <template #title
        ><span class="text-dark text-weight-bolder">S</span>any<span
          class="text-primary text-weight-bolder"
          >H</span
        >ealth</template
      >
      <template #buttons-right>
        <q-btn color="primary" label="submit" rounded />
      </template>
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
                <q-item-label caption>Διεύθυνση </q-item-label>
                <q-item-label>Βεακη 45, 10458, Περιστέρι </q-item-label>
                <q-item-label caption>Ιδιοκτήτης</q-item-label>
                <q-item-label>Παπαδόπουλος Νικόλαος </q-item-label>

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
              </q-item-section>
            </q-item>
          </q-card-section>

          <q-card-section>
            <q-expansion-item
              v-for="i in 10"
              :key="i"
              class="shadow-4 q-mb-sm overflow-hidden"
              style="border-radius: 30px"
              header-class="text-grey-8"
              expand-icon-class="text-primary"
            >
              <template v-slot:header>
                <q-item-section avatar>
                  <q-icon name="info" />
                </q-item-section>

                <q-item-section> Wifi settings {{ i }} </q-item-section>
              </template>

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
                  voluptas totam!
                </q-card-section>
                <q-card-section
                  class="col-sm-4 col-md-3 col-12 flex flex-center"
                >
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
                <q-card-section
                  class="col-sm-4 col-md-3 col-12 q-gutter-sm flex flex-center"
                >
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
