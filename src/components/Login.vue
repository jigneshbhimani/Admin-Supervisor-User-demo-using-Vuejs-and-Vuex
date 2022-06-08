<template>
  <div class="container">
    <br /><br />
    <div class="col-md-4 col-md-offset-4" style="width: 80%; margin: 0 auto">
      <form class="col-md-4 col-md-offset-4" @submit.prevent="login">
        <div class="form-group">
          <label>Email</label>
          <br />
          <input
            type="email"
            class="form-control"
            placeholder="Enter email..."
            v-model="email"
          />
        </div>
        <br />
        <div class="form-group">
          <label>Password</label>
          <br />
          <input
            type="password"
            class="form-control"
            placeholder="Enter password..."
            v-model="password"
          />
        </div>
        <br />
        <div class="form-group">
          <label>Role</label>
          <br />
          <input
            type="text"
            class="form-control"
            placeholder="Admin | Supervisor | User"
            v-model="role"
          />
        </div>
        <br />
        <button type="submit" class="btn btn-outline-primary">Login</button>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: "login",
  data() {
    return {
      email: "",
      password: "",
      role: "",
    };
  },
  methods: {
    login() {
      var data = JSON.parse(localStorage.getItem("registerUser")); // get registerUser data from localStorage
      if (
        data.email == this.email && // check if email is same (localstorage) as entered email
        data.password == this.password && // check if password is same (localstorage) as entered password
        data.role == this.role // check if role is same (localstorage) as entered role
      ) {
        console.log("Login Successfully");
        this.$router.push("/admin"); // redirect to admin page
      } else {
        alert("Invalid Credentials"); // if credentials are not same, show alert
      }
    },
  },
};
</script>

<style scoped>
.container {
  position: relative;
}
</style>
