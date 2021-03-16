<template>
  <div class="login">
    <div class="login_box">
      <form name="form" @submit.prevent="handleLogin">
        <div class="form_group">
          <label for="email">Email</label>
          <input
            v-model="email"
            type="text"
            class="form_control"
            name="email"
          />
        </div>
        <div class="form_group">
          <label for="password">Password</label>
          <input
            v-model="password"
            type="password"
            class="form_control"
            name="password"
          />
        </div>
        <div class="form_group">
          <button class="login_button" :disabled="loading">
            <span>Login</span>
          </button>
        </div>
        <div class="form-group">
          <div v-if="message" class="message" role="alert">
            {{ message }}
          </div>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import Api from "../api";
import { setJwtToken } from "../auth";

export default {
  name: "Login",
  data() {
    return {
      email: "",
      password: "",
      loading: false,
      message: "",
    };
  },
  methods: {
    handleLogin() {
      this.loading = true;
      this.message = "";
      Api.login(this.email, this.password)
        .then((res) => {
          setJwtToken(res.data[0].token);
          if (this.$route.params.nextUrl != null) {
            this.$router.push(this.$route.params.nextUrl);
          } else {
            this.$router.push("/admin");
          }
        })
        .catch((error) => {
          console.log(error);
          if (error.response && error.response.status === 403) {
            this.message = error.response.data.message;
          }
          this.loading = false;
        });
    },
  },
};
</script>

<style scoped>
  
</style>