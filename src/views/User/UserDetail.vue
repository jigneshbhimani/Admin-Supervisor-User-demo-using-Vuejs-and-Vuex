<template>
  <div class="container">
    <br /><br /><br /><br />
    <h1>{{ details.name }}</h1>
    <br /><br />
    <div class="card">
      <div class="card-body">Email: {{ details.email }}</div>
      <div class="card-body">Age: {{ details.age }}</div>
      <div class="card-body">Gender: {{ details.gender }}</div>
      <div class="card-body">Task: {{ details.task }}</div>
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
      localStorage.setItem("details", JSON.stringify(this.$route.params));
    }
  },
  mounted() {
    this.details = JSON.parse(localStorage.getItem("details"));
  },
};
</script>