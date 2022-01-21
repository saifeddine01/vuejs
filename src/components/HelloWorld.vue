<template>
  <div class="hello">
    <h1>Main Page HelloWorld</h1>
    <button @click="addtask">Add user</button>
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  name: "HelloWorld",
  props: {
    msg: String,
  },

  methods: {
    ...mapActions("tasks", ["addNewTask"]),
    addtask() {
      const newOne = {
        name: "Span",
        age: 25,
      };
      this.addNewTask(newOne)
    },
  },
};
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
