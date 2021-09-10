<template>
  <page>
    <page-header>
      <template #title>Profile</template>
    </page-header>
    <page-body>
      <div class="page-body-spacer-header"></div>
      <q-separator inset class="q-mx-xl q-mt-xl" />
      <div class="q-pa-xl">
        <q-item class="align-center">
          <q-item-section avatar>
            <q-avatar size="64px">
              <img src="https://cdn.quasar.dev/img/avatar2.jpg" />
            </q-avatar>
          </q-item-section>

          <q-item-section>
            <q-item-label class="text-h6">Πετρόπουλος Παναγιώτης</q-item-label>
            <q-item-label caption>ppetropoulos@patt.gov.gr</q-item-label>
          </q-item-section>
        </q-item>
      </div>

      <q-separator inset class="q-mx-xl" />

      <div class="q-pa-xl">
        <q-item clickable v-ripple>
          <q-item-section avatar top>
            <q-avatar icon="place" color="grey" text-color="white" />
          </q-item-section>

          <q-item-section>
            <q-item-label lines="1">Κεντρικός Τομέας</q-item-label>
            <q-item-label caption>Ομόνοια</q-item-label>
          </q-item-section>

          <q-item-section side>
            <q-icon name="info" color="amber" />
          </q-item-section>
        </q-item>

        <q-item clickable v-ripple>
          <q-item-section avatar top>
            <q-avatar icon="person" color="grey" text-color="white" />
          </q-item-section>

          <q-item-section>
            <q-item-label lines="1">Συνεργάτης</q-item-label>
            <q-item-label caption>Κυριακάκη Σοφία</q-item-label>
          </q-item-section>

          <q-item-section side>
            <q-icon name="info" />
          </q-item-section>
        </q-item>

        <q-item clickable v-ripple>
          <q-item-section avatar top>
            <q-avatar icon="assignment" color="grey" text-color="white" />
          </q-item-section>

          <q-item-section>
            <q-item-label lines="1">Σύνολο Ελέγχων</q-item-label>
            <q-item-label caption>5045</q-item-label>
          </q-item-section>

          <q-item-section side>
            <q-icon name="info" />
          </q-item-section>
        </q-item>

        <q-item clickable v-ripple>
          <q-item-section avatar top>
            <q-avatar icon="assignment" color="grey" text-color="white" />
          </q-item-section>

          <q-item-section>
            <q-item-label lines="1">My favorite song</q-item-label>
            <q-item-label caption>Singing it all day</q-item-label>
          </q-item-section>

          <q-item-section side>
            <q-icon name="info" />
          </q-item-section>
        </q-item>

        <q-item clickable v-ripple>
          <q-item-section avatar top>
            <q-avatar icon="assignment" color="grey" text-color="white" />
          </q-item-section>

          <q-item-section>
            <q-item-label lines="1">My favorite song</q-item-label>
            <q-item-label caption>Singing it all day</q-item-label>
          </q-item-section>

          <q-item-section side>
            <q-icon name="info" />
          </q-item-section>
        </q-item>

        <q-separator inset class="q-mt-xl" />
      </div>
    </page-body>
  </page>
</template>

<script>
export default {
  name: "Images",
};
</script>
