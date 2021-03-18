<template>
  <div class="signup">
    <div>
      <form name="form" @submit.prevent="handleRegister">
        <div>
          <div class="form-group">
            <label for="username">Name</label>
            <input
              v-model="name"
              type="text"
              name="name"
            />
          </div>
          <div class="form-group">
            <label for="email">Email</label>
            <input
              v-model="email"
              type="email"
              name="email"
            />
          </div>
          <div class="form-group">
            <label for="phonenum">Phone Number</label>
            <input
              v-model="phonenum"
              type="phonenum"
              name="phonenume"
            />
          </div>
          <div class="form-group">
            <label for="password">Password</label>
            <input
              v-model="password"
              type="password"
              name="password"
            />
          </div>
          <div class="form-group">
            <button class="submit_button" :disabled="loading">
              <span
                v-show="loading"
              ></span>
              <span>Sign Up</span>
            </button>
          </div>
        </div>
      </form>

      <div v-if="message">
        {{ message }}
      </div>
    </div>
  </div>
</template>

<script>
import Api from "../api";
export default {
  name: "Register",
  data() {
    return {
      name: "",
      email: "",
      password: "",
      phonenum: "",
      isadmin: false,
      loading: false,
      message: "",
    };
  },
  methods: {
    handleRegister() {
      this.message = "";
      this.loading = true;
      Api.signup(this.email, this.password, this.name, this.isadmin, this.phonenum)
        .then(() => {
          this.$router.push("/login");
        })
        .catch((error) => {
          console.log(error);
          if (error.response) {
            this.message = error.response.data.message;
          }
          this.loading = false;
        });
    },
  },
};
</script>