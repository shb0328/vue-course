const app = Vue.createApp({
  data() {
    return {
      output: 'OUTPUT',
      confirmedOutput: 'OUTPUT'
    }
  },
  methods: {
    showAlert() {
      alert('event practice');
    },
    setOutput(event) {
      this.output = event.target.value;
    },
    confirmOutput(event) {
      this.confirmedOutput = event.target.value;
    }
  }
});
app.mount('#assignment');