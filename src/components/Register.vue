<template>
  <div class="container">
    <br />
    <div class="col-md-4 col-md-offset-4" style="width: 80%; margin: 0 auto">
      <form class="col-md-4 col-md-offset-4" @submit.prevent="register">
        <div class="form-group">
          <label>Id</label>
          <br />
          <input
            type="number"
            class="form-control"
            placeholder="Enter id..."
            v-model="id"
            required
          />
        </div>
        <br />
        <div class="form-group">
          <label>Name</label>
          <br />
          <input
            type="text"
            class="form-control"
            placeholder="Enter name..."
            v-model="name"
            required
          />
        </div>
        <br />
        <div class="form-group">
          <label>Email</label>
          <br />
          <input
            type="email"
            class="form-control"
            placeholder="Enter email..."
            v-model="email"
            required
          />
        </div>
        <br />
        <div class="form-group">
          <label>Age</label>
          <br />
          <input
            type="number"
            class="form-control"
            placeholder="Enter age..."
            v-model="age"
            required
          />
        </div>
        <br />
        <div class="form-group">
          <label>Gender</label>
          <br />
          <input
            type="text"
            class="form-control"
            placeholder="Enter gender..."
            v-model="gender"
            required
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
            required
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
            required
          />
        </div>
        <br />
        <button type="submit" class="btn btn-outline-primary">Register</button>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: "register",
  data() {
    return {
      id: "",
      name: "",
      email: "",
      age: "",
      gender: "",
      password: "",
      role: "",
    };
  },
  methods: {
    register() {
      let registerUser = {
        id: this.id,
        name: this.name,
        email: this.email,
        age: this.age,
        gender: this.gender,
        password: this.password,
        role: this.role,
      };
      localStorage.setItem("registerUser", JSON.stringify(registerUser)); // store registerUser data in localstorage
      this.$notify({
        group: "foo",
        title: "Success",
        text: "Register is successfully",
        duration: 2000,
      });
      console.log("Register Successfully");
      this.$router.push("/login"); // redirect to login page
    },
  },
};
</script>

<style scoped>
.container {
  position: relative;
}
</style>
