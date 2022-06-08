<template>
  <div class="id">
    <div class="card">
      <div class="card-body">
        <form class="form-group" style="margin: auto">
          <div class="col">
            <input
              type="text"
              v-model="user.name"
              placeholder="Enter name..."
              required
              style="border-radius: 10px"
            />
          </div>
          <br />
          <div class="col">
            <input
              type="email"
              v-model="user.email"
              placeholder="Enter email..."
              required
              style="border-radius: 10px"
            />
          </div>
          <br />
          <div class="col">
            <input
              type="number"
              v-model="user.age"
              placeholder="Enter age..."
              required
              style="border-radius: 10px"
            />
          </div>
          <br />
          <div class="col">
            <input
              type="text"
              v-model="user.gender"
              placeholder="Enter gender..."
              required
              style="border-radius: 10px"
            />
          </div>
          <br />
          <div class="col">
            <input
              type="text"
              v-model="user.description"
              placeholder="Enter description..."
              required
              style="border-radius: 10px"
            />
          </div>
          <br />
          <div class="col">
            <input
              type="text"
              v-model="user.task"
              placeholder="Enter task..."
              required
              style="border-radius: 10px"
            />
          </div>
          <br />
          <div class="col">
            <input
              type="text"
              v-model="user.role"
              readonly
              style="border-radius: 10px"
            />
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
      super_id: "", //those supervisor_id who logged in currently
      user: {
        name: "",
        email: "",
        age: "",
        gender: "",
        description: "",
        task: "",
        role: "user",
      },
    };
  },
  mounted() {
    this.super_id = JSON.parse(localStorage.getItem("registerUser")).id; //get registerUser's Id from localStorage == super_id
  },
  methods: {
    addUser() {
      this.user["super_id"] = this.super_id; //add super_id column to user
      localStorage.setItem("user_super_id", this.super_id); // store super_id in localstorage
      // add User
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
.col {
  border-radius: 10px;
}
</style>
