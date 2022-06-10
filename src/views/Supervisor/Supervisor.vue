<template>
  <div class="id">
    <div class="card">
      <div class="card-body">
        <div class="row">
          <div class="col">
            <h1 style="color: red">Supervisor List</h1>
          </div>
          <div class="col">
            <button class="btn btn-outline-danger" @click="logout">
              Logout
            </button>
          </div>
        </div>
        <br />
        <table
          class="table table-dark"
          style="width: 70%; margin: auto; border-radius: 20px"
        >
          <thead class="thead-dark">
            <tr>
              <th scope="col">ID</th>
              <th scope="col">Name</th>
              <th scope="col">Gender</th>
              <th scope="col">Add User</th>
              <th scope="col">Details</th>
            </tr>
          </thead>
          <tbody v-for="(supervisor, index) in supervisors" :key="index">
            <tr class="data">
              <th scope="row">{{ supervisor.id }}</th>
              <td>{{ supervisor.name }}</td>
              <td>{{ supervisor.gender }}</td>
              <td>
                <button
                  class="btn btn-outline-primary"
                  @click="addUser"
                  v-if="supervisor.id == user && role"
                >
                  Add
                </button>
              </td>
              <td>
                <button
                  class="btn btn-outline-info"
                  @click="showDetails(supervisor)"
                  v-if="(supervisor.id == user && role) || adminRole"
                >
                  Detail
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
    <br />
    <div class="row">
      <div class="col">
        <button class="btn btn-primary" @click="goToUser">User</button>
      </div>
      <div class="col">
        <button class="btn btn-primary" @click="goToAdmin">Admin</button>
      </div>
    </div>
    <br />
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "supervisor",
  data() {
    return {
      user: JSON.parse(localStorage.getItem("registerUser")).id, // get registerUser's Id from localStorage
      role:
        JSON.parse(localStorage.getItem("registerUser")).role == "Supervisor", // check if registerUser's role is Supervisor
      adminRole:
        JSON.parse(localStorage.getItem("registerUser")).role == "Admin", // check if registerUser's role is Admin
    };
  },
  mounted() {
    this.$store.dispatch("loadSupervisors"); //dispatch actions from store
  },
  computed: {
    ...mapState(["supervisors"]),
  },
  methods: {
    logout() {
      this.$router.push("/login");
      this.$notify({
        group: "foo",
        title: "Success",
        text: "Logout is successfully",
        duration: 4000,
      });
    },
    showDetails(supervisor) {
      this.$router.push({
        name: "supervisor-detail",
        params: supervisor,
      });
    },
    goToUser() {
      this.$router.push("/user"); //go to user page
    },
    goToAdmin() {
      this.$router.push("/admin"); //go to admin page
    },
    addUser() {
      this.$router.push("/addUser");
    },
  },
};
</script>
