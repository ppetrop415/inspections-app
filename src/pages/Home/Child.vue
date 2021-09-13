<template>
  <page>
    <page-header>
      <template #buttons-left>
        <page-header-btn-back />
      </template>
      <template #title>Child</template>
    </page-header>
    <page-body>
      <div class="page-body-spacer-header"></div>
      <div>
        <q-card class="my-card" flat>
          <q-card-section>
            <div class="text-h5 text-center q-my-md">Στοιχεία Ελέγχου</div>

            <q-item>
              <q-item-section>
                <q-item-label caption>UUID</q-item-label>
                <q-item-label
                  >d24dd339-6241-44cc-909f-e90fab42edd9</q-item-label
                >
                <q-item-label caption>Επιθεωρητής 1</q-item-label>
                <q-item-label>Παπαδόπουλος Νικόλαος </q-item-label>
                <q-item-label caption>Επιθεωρητής 2</q-item-label>
                <q-item-label>Κυριακάκη Σοφία </q-item-label>
              </q-item-section>

              <q-item-section side>
                <q-item-label caption>Ημ/νια & Ώρα έναρξης</q-item-label>
                <q-item-label class="text-black"
                  >29-08-2021 07:26:43</q-item-label
                >
                <q-item-label caption>Ημ/νια & Ώρα λήξης</q-item-label>
                <q-item-label class="text-black"
                  >29-08-2021 08:26:43</q-item-label
                >
                <q-item-label caption>Σκορ</q-item-label>
                <q-badge color="teal" label="256" />
              </q-item-section>
            </q-item>

            <div class="text-h5 text-center q-my-md">Στοιχεία Επιχείρησης</div>

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
                <q-item-label caption>Σκορ</q-item-label>
                <q-badge color="teal" label="256" />
              </q-item-section>
            </q-item>
          </q-card-section>

          <q-card-section>
            <div class="text-h5 text-center q-my-md">Αποτελέσματα Ελέγχου</div>
            <q-table
              :grid="$q.screen.xs"
              :rows="rows"
              :columns="columns"
              row-key="name"
              flat
              bordered
            >
              <template v-slot:header="props">
                <q-tr :props="props">
                  <q-th
                    v-for="col in props.cols"
                    :key="col.name"
                    :props="props"
                    class="text-h6 text-white bg-primary"
                  >
                    {{ col.label }}
                  </q-th>
                </q-tr>
              </template>
            </q-table>
          </q-card-section>
        </q-card>
      </div>
    </page-body>
  </page>
</template>

<script>
import { ref } from "vue";

const columns = [
  {
    name: "desc",
    required: true,
    label: "Περιγραφή",
    align: "left",
    field: "name",
    sortable: true,
  },
  {
    name: "calories",
    align: "center",
    label: "Αποτέλεσμα",
    field: "calories",
    sortable: true,
  },
  { name: "fat", label: "Σχόλια - Παρατηρήσεις", field: "fat", sortable: true },
];

const rows = [
  {
    name: "Frozen Yogurt",
    calories: 159,
    fat: 6.0,
    carbs: 24,
  },
  {
    name: "Ice cream sandwich",
    calories: 237,
    fat: 9.0,
    carbs: 37,
  },
  {
    name: "Eclair",
    calories: 262,
    fat: 16.0,
    carbs: 23,
  },
  {
    name: "Cupcake",
    calories: 305,
    fat: 3.7,
    carbs: 67,
  },
  {
    name: "Gingerbread",
    calories: 356,
    fat: 16.0,
    carbs: 49,
  },
  {
    name: "Jelly bean",
    calories: 375,
    fat: 0.0,
    carbs: 94,
  },
  {
    name: "Lollipop",
    calories: 392,
    fat: 0.2,
    carbs: 98,
  },
  {
    name: "Honeycomb",
    calories: 408,
    fat: 3.2,
    carbs: 87,
  },
  {
    name: "Donut",
    calories: 452,
    fat: 25.0,
    carbs: 51,
  },
  {
    name: "KitKat",
    calories: 518,
    fat: 26.0,
    carbs: 65,
  },
];

export default {
  name: "Child",
  setup() {
    return {
      model: ref(null),

      columns,
      rows,
    };
  },
};
</script>
