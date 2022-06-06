<template>
  <div class="id">
    <div class="card">
      <div class="card-body">
        <form class="form-group">
          <div class="col">
            <label><b>Name: </b></label>
            <input
              type="text"
              v-model="supervisor.name"
              placeholder="Enter name..."
              required
            />
          </div>
          <br />
          <div class="col">
            <label><b>Email: </b></label>
            <input
              type="email"
              v-model="supervisor.email"
              placeholder="Enter email..."
              required
            />
          </div>
          <br />
          <div class="col">
            <label><b>Age: </b></label>
            <input
              type="number"
              v-model="supervisor.age"
              placeholder="Enter age..."
              required
            />
          </div>
          <br />
          <div class="col">
            <label><b>Gender: </b></label>
            <input
              type="text"
              v-model="supervisor.gender"
              placeholder="Enter gender..."
              required
            />
          </div>
          <br />
          <div class="col">
            <label><b>Task: </b></label>
            <input
              type="text"
              v-model="supervisor.task"
              placeholder="Enter task..."
              required
            />
          </div>
          <br />
          <div class="col">
            <label><b>Role:</b></label>
            <input type="text" v-model="supervisor.role" readonly />
          </div>
          <br />
          <div class="col">
            <button
              class="btn btn-outline-primary"
              @click.prevent="addSupervisor"
            >
              Add Supervisor
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
  name: "Add Supervisor",
  data() {
    return {
      supervisor: {
        name: "",
        email: "",
        age: "",
        gender: "",
        task: "",
        role: "supervisor",
      },
    };
  },
  methods: {
    addSupervisor() {
      axios.post("http://localhost:3000/supervisors", this.supervisor).then(
        function (response) {
          console.log(response);
        }.bind(this)
      );
      this.$router.push("/supervisor");
    },
  },
};
</script>

<style scoped>
.form-group {
  margin-top: 3rem;
}
</style>
