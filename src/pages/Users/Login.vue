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
import axios from "../../api/axios";
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
    async submit() {
      this.$store.commit("auth/setIsLoading", true);
      axios.defaults.headers.common["Authorization"] = "";
      localStorage.removeItem("token");

      const formData = {
        email: this.email,
        password: this.password,
      };

      await axios
        .post("auth/login/", formData)
        .then((response) => {
          const token = response.data.access;
          const user = {
            id: response.data.user.id,
            email: response.data.user.email,
            first_name: response.data.user.first_name,
            last_name: response.data.user.last_name,
          };

          axios.defaults.headers.common["Authorization"] = "Bearer " + token;

          this.$store.commit("auth/setToken", token);
          this.$store.commit("auth/setUser", user);

          localStorage.setItem("token", token);
          localStorage.setItem("email", response.data.user.email);
          localStorage.setItem("user_id", response.data.user.id);
          localStorage.setItem("first_name", response.data.user.first_name);
          localStorage.setItem("last_name", response.data.user.last_name);

          console.log(response.data);
        })
        .catch((e) => {
          console.log(e);
        });

      await axios.get("inspections/completed").then((response) => {
        this.$store.commit("inspections/setInspections", response.data);

        console.log(response.data);
        this.$router.push("/home");
      });

      this.$store.commit("auth/setIsLoading", false);
    },
  },
};
</script>
