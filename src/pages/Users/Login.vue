<template>
  <q-page class="flex flex-center">
    <div class="full-width">
      <q-card class="q-mx-xl">
        <q-card-section>
          <div class="text-h4 flex flex-center q-mb-lg">
            <span class="text-dark text-weight-bolder">S</span>any<span
              class="text-primary text-weight-bolder"
              >H</span
            >ealth
          </div>
          <div class="text-h6 text-center">Login</div>
        </q-card-section>

        <q-card-section>
          <form>
            <q-input
              outlined
              v-model="text"
              placeholder="E-mail"
              class="q-mb-sm"
            >
              <template v-slot:prepend>
                <q-icon name="mail" />
              </template>
            </q-input>
            <q-input outlined v-model="text" placeholder="Password">
              <template v-slot:prepend>
                <q-icon name="lock" />
              </template>
            </q-input>
            <q-btn class="full-width q-mt-lg" to="/home" color="primary" rounded
              >Login</q-btn
            >
          </form>
        </q-card-section>

        <q-card-section
          ><q-btn color="primary" flat rounded
            >Forgot Password?</q-btn
          ></q-card-section
        >
      </q-card>
    </div>
  </q-page>
</template>

<script>
import { ref } from "vue";

export default {
  name: "Login",
  setup() {
    return {
      text: ref(""),
    };
  },
};
</script>
