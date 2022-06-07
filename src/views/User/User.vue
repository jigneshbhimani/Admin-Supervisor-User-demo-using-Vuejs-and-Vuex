<template>
  <div class="id">
    <div class="card">
      <div class="card-body">
        <div class="row">
          <div class="col">
            <h1 style="color: red">User List</h1>
          </div>
          <div class="col">
            <button class="btn btn-outline-danger" @click="logout">
              Logout
            </button>
          </div>
        </div>
        <br />
        <table class="table table-dark">
          <thead>
            <tr>
              <th scope="col">ID</th>
              <th scope="col">Name</th>
              <th scope="col">Age</th>
              <th scope="col">Gender</th>
              <th scope="col">Details</th>
            </tr>
          </thead>
          <tbody v-for="(user, index) in users" :key="index">
            <tr class="data">
              <th scope="row">{{ user.id }}</th>
              <td>{{ user.name }}</td>
              <td>{{ user.age }}</td>
              <td>{{ user.gender }}</td>
              <td>
                <button
                  class="btn btn-outline-info"
                  @click="showDetails(user)"
                  v-if="
                    (user.id == superuser && role) ||
                    userRole ||
                    user.super_id == usersRolling
                  "
                >
                  Detail
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
    <br /><br />
    <div class="row">
      <div class="col">
        <button class="btn btn-outline-primary" @click="goToSupervisor">
          Go To Supervisor
        </button>
      </div>
      <div class="col">
        <button class="btn btn-outline-primary" @click="goToAdmin">
          Go To Admin
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "user",
  data() {
    return {
      superuser: JSON.parse(localStorage.getItem("registerUser")).id,
      role: JSON.parse(localStorage.getItem("registerUser")).role == "User",
      userRole:
        JSON.parse(localStorage.getItem("registerUser")).role == "Admin",
      usersRolling: localStorage.getItem("user_super_id"),
    };
  },
  mounted() {
    this.$store.dispatch("loadUsers");
  },
  computed: {
    ...mapState(["users"]),
  },
  methods: {
    logout() {
      this.$router.push("/login");
    },
    showDetails(user) {
      this.$router.push({
        name: "user-detail",
        params: user,
      });
    },
    goToSupervisor() {
      this.$router.push("/supervisor");
    },
    goToAdmin() {
      this.$router.push("/admin");
    },
  },
};
</script>
