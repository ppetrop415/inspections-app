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
              v-model="email"
              autocomplete="email"
              placeholder="E-mail"
              class="q-mb-sm"
              type="email"
            >
              <template v-slot:prepend>
                <q-icon name="mail" />
              </template>
            </q-input>
            <q-input
              outlined
              v-model="password"
              autocomplete="current-password"
              placeholder="Password"
              type="password"
            >
              <template v-slot:prepend>
                <q-icon name="lock" />
              </template>
              <template v-slot:append>
                <q-icon name="visibility" />
              </template>
            </q-input>
            <q-btn
              class="full-width q-mt-lg"
              :loading="isLoading"
              @click="submit"
              color="primary"
              rounded
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
import { mapState, mapActions } from "vuex";

export default {
  name: "Login",
  data() {
    return {
      email: "",
      password: "",
      loading: false,
    };
  },
  computed: {
    ...mapState("auth", ["isLoading"]),
  },
  methods: {
    ...mapActions("auth", ["signIn"]),
    ...mapActions("inspections", ["getInspections"]),

    async submit() {
      const formData = {
        email: this.email,
        password: this.password,
      };

      await this.signIn(formData);
      await this.getInspections().then(this.$router.push("/home"));

      this.$store.commit("auth/setIsLoading", false);
    },
  },
};
</script>
