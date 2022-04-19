const app = Vue.createApp({
  data() {
    return { //data objects
      courseGoal: "Finish the courese and learn Vue!", //flexible
      vueLink: "http://vuejs.org/"
    };
  },
  methods: {
    outputGoal() {
      const randomNumber = Math.random();
      if(randomNumber < 0.5) {
        return 'Learn Vue!';
      } else {
        return 'Master Vue!';
      }
    }
  }
});

app.mount("#user-goal");
