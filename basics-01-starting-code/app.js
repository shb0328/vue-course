const app = Vue.createApp({ //Vue app object
  data() {
    //it merges it into a 'global Vue instance object'. So, into your 'Vue app object'.
    return { //data object
      courseGoalA: "Finish the courese and learn Vue!", //flexible
      courseGoalB: "<h3>Master Vue and build amazing apps!</h3>",//courseGoalB is not a variable or constant. it's a property of data object.
      vueLink: "http://vuejs.org/"
    };
  },
  methods: {
    outputGoal() {
      const randomNumber = Math.random();
      if(randomNumber < 0.5) {
        return this.courseGoalA; //'this' keyword doesn't refer to data object here.
      } else {
        return this.courseGoalB;
      }
    }
  }
});

app.mount("#user-goal");
