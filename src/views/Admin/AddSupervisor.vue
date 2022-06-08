<template>
  <div class="id">
    <div class="card">
      <div class="card-body">
        <form class="form-group" style="margin: auto">
          <div class="col">
            <input
              type="text"
              v-model="supervisor.name"
              placeholder="Enter name..."
              required
              style="border-radius: 10px"
            />
          </div>
          <br />
          <div class="col">
            <input
              type="email"
              v-model="supervisor.email"
              placeholder="Enter email..."
              required
              style="border-radius: 10px"
            />
          </div>
          <br />
          <div class="col">
            <input
              type="number"
              v-model="supervisor.age"
              placeholder="Enter age..."
              required
              style="border-radius: 10px"
            />
          </div>
          <br />
          <div class="col">
            <input
              type="text"
              v-model="supervisor.gender"
              placeholder="Enter gender..."
              required
              style="border-radius: 10px"
            />
          </div>
          <br />
          <div class="col">
            <input
              type="text"
              v-model="supervisor.description"
              placeholder="Enter description..."
              required
              style="border-radius: 10px"
            />
          </div>
          <br />
          <div class="col">
            <input
              type="text"
              v-model="supervisor.task"
              placeholder="Enter task..."
              required
              style="border-radius: 10px"
            />
          </div>
          <br />
          <div class="col">
            <input
              type="text"
              v-model="supervisor.role"
              readonly
              style="border-radius: 10px"
            />
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
        description: "",
        task: "",
        role: "supervisor",
      },
    };
  },
  methods: {
    addSupervisor() {
      //add Supervisor
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
