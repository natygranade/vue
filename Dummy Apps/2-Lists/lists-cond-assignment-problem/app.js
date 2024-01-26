const app = Vue.createApp({
  data() {
    return {
      taskInput: "",
      tasks: [],
      visible: true,
      btnCaption: "Hide List",
    };
  },
  methods: {
    addTask() {
      this.tasks.push(this.taskInput);
      this.taskInput = "";
    },
    toggleVisibility() {
      this.visible = !this.visible;
      !this.visible
        ? (this.btnCaption = "Show List")
        : (this.btnCaption = "Hide List");
    },
  },
});

app.mount("#assignment");
