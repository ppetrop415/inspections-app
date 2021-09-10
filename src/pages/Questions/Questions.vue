<template>
  <page>
    <page-body>
      <div class="full-width q-px-md">
        <q-input
          borderless
          v-model="text"
          placeholder="Αναζήτησε με ΑΦΜ"
          :dense="dense"
          class="full-width q-pa-xs"
        >
          <template v-slot:append>
            <q-icon
              v-if="text !== ''"
              name="close"
              @click="text = ''"
              class="cursor-pointer"
            />
            <q-icon name="search" />
          </template>

          <template v-slot:hint> Field hint </template>
        </q-input>
      </div>
      <q-separator />

      <!-- <div class="absolute-center text-grey-5 text-h5 text-center">
        Νέος Έλεγχος
      </div> -->

      <q-card class="my-card q-ma-xs">
        <q-item @click="confirm = true" clickable v-ripple>
          <q-item-section top avatar>
            <q-avatar color="grey" text-color="white" icon="local_cafe" />
          </q-item-section>
          <q-item-section>
            <q-item-label>Cafe Cafe</q-item-label>

            <q-item-label caption>Παπαδόπουλος Νικόλαος </q-item-label>
            <q-item-label caption>Βεακη 45, 10458, Περιστέρι </q-item-label>
          </q-item-section>

          <q-item-section side top>
            <q-item-label caption>Α.Α: 15815854</q-item-label>
            <q-item-label caption>ΑΦΜ: 058789568</q-item-label>
            <div caption>
              Σκορ:
              <q-badge color="teal" label="256" />
            </div>
          </q-item-section>
        </q-item>
      </q-card>

      <q-dialog v-model="confirm" persistent>
        <q-card>
          <q-card-section class="row items-center">
            <span class="q-ml-sm text-center text-h6"
              ><strong> Cafe Cafe - 058789568</strong></span
            >
          </q-card-section>
          <q-separator inset />

          <q-card-section class="row items-center">
            <span class="q-ml-sm text-justify"
              >Είσαι σίγουρος ότι θες να ξεκινήσεις εναν νέο υγειονομικό έλεγχο
              για αυτό το κατάστημα ;</span
            >
          </q-card-section>

          <q-card-actions align="right">
            <q-btn
              flat
              label="Κλείσιμο"
              color="primary"
              no-caps
              v-close-popup
            />
            <q-btn
              flat
              no-caps
              label="Συνέχεια"
              color="primary"
              to="/new-inspection/answer"
              v-close-popup
            />
          </q-card-actions>
        </q-card>
      </q-dialog>
    </page-body>
  </page>
</template>

<script>
import { ref } from "vue";

export default {
  name: "Questions",
  setup() {
    return {
      text: ref(""),
      dense: ref(true),
      confirm: ref(false),
    };
  },
};
</script>
