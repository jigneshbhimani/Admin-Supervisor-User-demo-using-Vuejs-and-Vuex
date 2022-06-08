<template>
  <div class="container">
    <br /><br /><br /><br />
    <h2 style="color: blue">
      <b
        ><u>{{ details.name }}</u></b
      >
    </h2>
    <br /><br />
    <div class="card w-50" style="margin: auto">
      <div class="card-body"><b>Email: </b>{{ details.email }}</div>
      <div class="card-body"><b>Age: </b>{{ details.age }}</div>
      <div class="card-body"><b>Gender: </b>{{ details.gender }}</div>
      <div class="card-body"><b>Description: </b>{{ details.description }}</div>
      <div class="card-body"><b>Task: </b>{{ details.task }}</div>
      <div class="card-body"><b>Super Id: </b>{{ details.super_id }}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "user-detail",
  data() {
    return {
      details: this.$route.params,
    };
  },
  created() {
    if (this.$route.params.id !== undefined) {
      localStorage.setItem("details", JSON.stringify(this.$route.params)); // set details to localStorage
    }
  },
  mounted() {
    this.details = JSON.parse(localStorage.getItem("details")); // get details from localStorage
  },
};
</script>
