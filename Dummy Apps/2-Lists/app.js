const app = Vue.createApp({
  data() {
    return {
      enteredGoalValue: "",
      goals: [],
    };
  },
  methods: {
    addGoal() {
      this.goals.push(this.enteredGoalValue);
    },
    removeGoal(index) {
      //SPLICE() en la posicion index, remover 1 elemento. Si quiero agregar goals.splice(index, 0, "goal 1", "goal 2");
      this.goals.splice(index, 1);
    },
  },
});

app.mount("#user-goals");
