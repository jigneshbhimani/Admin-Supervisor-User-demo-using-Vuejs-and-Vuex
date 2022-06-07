<template>
  <div class="id">
    <div class="card">
      <div class="card-body">
        <div class="row">
          <div class="col">
            <h1 style="color: red">Admin List</h1>
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
              <th scope="col">Email</th>
              <th scope="col">Age</th>
              <th scope="col">Gender</th>
              <th scope="col">Add Supervisor</th>
            </tr>
          </thead>
          <tbody v-for="(admin, index) in admins" :key="index">
            <tr class="data">
              <th scope="row">{{ admin.id }}</th>
              <td>{{ admin.name }}</td>
              <td>{{ admin.email }}</td>
              <td>{{ admin.age }}</td>
              <td>{{ admin.gender }}</td>
              <td>
                <button
                  class="btn btn-outline-info"
                  @click="addSupervisor(admin)"
                  v-if="
                    (admin.id == superadmin && role) ||
                    (role == supervisorRole && role == userRole)
                  "
                >
                  Add
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
        <button class="btn btn-primary" @click="goToSupervisor">
          Supervisor
        </button>
      </div>
      <div class="col">
        <button class="btn btn-primary" @click="goToUser">User</button>
      </div>
    </div>
    <br />
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "admin",
  data() {
    return {
      superadmin: JSON.parse(localStorage.getItem("registerUser")).id,
      role: JSON.parse(localStorage.getItem("registerUser")).role == "Admin",
      supervisorRole:
        JSON.parse(localStorage.getItem("registerUser")).role == "Supervisor",
      userRole: JSON.parse(localStorage.getItem("registerUser")).role == "User",
    };
  },
  mounted() {
    this.$store.dispatch("loadAdmins");
  },
  computed: {
    ...mapState(["admins"]),
  },
  methods: {
    logout() {
      this.$router.push("/login");
    },
    addSupervisor(admin) {
      this.$router.push({
        name: "addSupervisor",
        params: admin,
      });
    },
    goToSupervisor() {
      this.$router.push("/supervisor");
    },
    goToUser() {
      this.$router.push("/user");
    },
  },
};
</script>
