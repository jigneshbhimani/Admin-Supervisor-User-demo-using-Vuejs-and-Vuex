<template>
  <div class="login">
    <br />
    <img
      alt="Vue logo"
      src="../assets/auth0.jpg"
      height="300px"
      width="600px"
    />
    <br />
    <br />
    <div>
      <h3>Login using auth0</h3>
      <br />
      <button
        type="button"
        class="btn btn-outline-primary btn-block"
        @click="loginClick()"
      >
        Login
      </button>
    </div>
  </div>
</template>

<script>
import { login } from "../utils/auth";

export default {
  name: "Home",
  components: {},
  methods: {
    loginClick() {
      login();
      this.$notify({
        group: "foo",
        title: "Success",
        text: "Login with auth0 is successfully",
        duration: 2000,
      });
    },
  },
};
</script>
