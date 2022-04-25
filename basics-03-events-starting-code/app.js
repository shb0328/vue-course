// document.querySelector('button').addEventListener();

const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name: '',
      confirmedName: ''
    };
  },
  methods: {
    add(num) {
      this.counter += num;
    },
    reduce(num) {
      this.counter -= num;
    },
    setName(event, lastName) {
      this.name = event.target.value; //event.target gives us access to the element on which the event occurred. just vanilla js.
    },
    submitForm(event) {
      alert('Submitted!');
    },
    confirmInput() {
      this.confirmedName = this.name;
    },
    resetInput() {
      this.name='';
    }
  }
});

app.mount('#events');
