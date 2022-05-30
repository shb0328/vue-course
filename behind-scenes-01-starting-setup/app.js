const app = Vue.createApp({
  data() {
    return {
      currentUserInput: '',
      message: 'Vue is great!',
    };
  },
  methods: {
    saveInput(event) {
      this.currentUserInput = event.target.value;
    },
    setText() {
      this.message = this.currentUserInput;
    },
  },
});

app.mount('#app');//templete!!! 

const app2 = Vue.createApp({
  template: ` 
  <p>{{ ilove }}</p>
  `, //using backtick
  data() {
    return {
      ilove:'pizza'
    };
  }
});

app2.mount('#app2'); //templete!!! 

// vue deep dive with vanilla js
// vanilla js is not reactive

const data = {
  message: 'hello',
  longMessage: 'hello!!! world!!!'
}

const handler = {
  set(target, key, value) {
    if(key === 'message') {
      target.longMessage = value + 'world!';
    }
    target.message = value;
  }
}

const proxy = new Proxy(data, handler); // target = data

proxy.message = 'hello vue!'

console.log(proxy.longMessage);