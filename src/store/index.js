import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    admins: [],
    supervisors: [],
    users: [],
  },
  mutations: {
    SET_ADMINS(state, val) {
      state.admins = val;
    },
    SET_SUPERVISORS(state, val) {
      state.supervisors = val;
    },
    SET_USERS(state, val) {
      state.users = val;
    },
  },
  actions: {
    loadAdmins({ commit }) {
      axios
        .get("http://localhost:3000/admins")
        .then((data) => {
          console.log(data.data);
          let admins = data.data;
          commit("SET_ADMINS", admins);
        })
        .catch((error) => {
          console.log(error);
        });
    },
    loadSupervisors({ commit }) {
      axios
        .get("http://localhost:3000/supervisors")
        .then((data) => {
          console.log(data.data);
          let supervisors = data.data;
          commit("SET_SUPERVISORS", supervisors);
        })
        .catch((error) => {
          console.log(error);
        });
    },
    loadUsers({ commit }) {
      axios
        .get("http://localhost:3000/users")
        .then((data) => {
          console.log(data.data);
          let users = data.data;
          commit("SET_USERS", users);
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
});
