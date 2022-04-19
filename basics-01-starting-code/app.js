const app = Vue.createApp({
  data() {
    return { //data objects
      courseGoal: "Finish the courese and learn Vue!", //flexible
      vueLink: "http://vuejs.org/"
    };
  },
});
app.mount("#user-goal");
