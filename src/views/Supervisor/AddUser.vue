<template>
  <div class="id">
    <div class="card">
      <div class="card-body">
        <form class="form-group">
          <div class="col">
            <label><b>Name: </b></label>
            <input
              type="text"
              v-model="user.name"
              placeholder="Enter name..."
              required
            />
          </div>
          <br />
          <div class="col">
            <label><b>Email: </b></label>
            <input
              type="email"
              v-model="user.email"
              placeholder="Enter email..."
              required
            />
          </div>
          <br />
          <div class="col">
            <label><b>Age: </b></label>
            <input
              type="number"
              v-model="user.age"
              placeholder="Enter age..."
              required
            />
          </div>
          <br />
          <div class="col">
            <label><b>Gender: </b></label>
            <input
              type="text"
              v-model="user.gender"
              placeholder="Enter gender..."
              required
            />
          </div>
          <br />
          <div class="col">
            <label><b>Task: </b></label>
            <input
              type="text"
              v-model="user.task"
              placeholder="Enter task..."
              required
            />
          </div>
          <br />
          <div class="col">
            <label><b>Role:</b></label>
            <input type="text" v-model="user.role" readonly />
          </div>
          <br />
          <div class="col">
            <button class="btn btn-outline-primary" @click.prevent="addUser">
              Add User
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "Add User",
  data() {
    return {
      super_id: "",
      user: {
        name: "",
        email: "",
        age: "",
        gender: "",
        task: "",
        role: "user",
      },
    };
  },
  mounted() {
    this.super_id = JSON.parse(localStorage.getItem("registerUser")).id;
  },
  methods: {
    addUser() {
      this.user["super_id"] = this.super_id;
      localStorage.setItem("user_super_id", this.super_id);
      axios.post("http://localhost:3000/users", this.user).then(
        function (response) {
          console.log(response);
        }.bind(this)
      );
      this.$router.push("/user");
    },
  },
};
</script>

<style scoped>
.form-group {
  margin-top: 3rem;
}
</style>
