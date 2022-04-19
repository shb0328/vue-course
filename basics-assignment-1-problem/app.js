const app = Vue.createApp({
  data() {
    return {
      myName: "hyebeen",
      myAge: 27,
      imageUrl: "https://images.pexels.com/photos/9510858/pexels-photo-9510858.jpeg?w=500",
    };
  },
  methods: {
    randomNumber() {
      return Math.random();
    },
  },
});

app.mount("#assignment");
