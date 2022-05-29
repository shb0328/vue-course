const app = Vue.createApp({
  data() {
    return {
      enteredValue: '',
      tasks: [],
      visible : true
    };
  },
  computed: {
    buttonCaption() {
      return this.visible ? 'Hide' : 'Show';
    }
  },
  methods: {
    addTask() {
      this.tasks.push(this.enteredValue);
    },
    toggle() {
      this.visible = !this.visible
    }
  } 
});

app.mount('#assignment');