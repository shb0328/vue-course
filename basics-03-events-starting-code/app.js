// document.querySelector('button').addEventListener();

const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name: '',
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
      this.name = event.target.value + ' ' + lastName; //event.target gives us access to the element on which the event occurred. just vanilla js.
    },
    submitForm(event) {
      event.preventDefault(); //vanilla js
      alert('Submitted!');
    }
  }
});

app.mount('#events');
