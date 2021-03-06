// document.querySelector('button').addEventListener();

const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name: '',
      lastname: '',
      // fullName: '',
      confirmedName: ''
    };
  },
  watch: {
    counter(value) {
      if(value > 50) {
        const that = this;
        setTimeout(function() {
          that.counter = 0;
        }, 2000);
        this.counter = 0;
      }
    }
    // name(value) { //connect data 'name', using lastest value
    //   if(value===''){
    //     this.fullName = '';
    //   } else {
    //     this.fullName = value + ' ' + this.lastname;
    //   }
    // },
    // lastname(value){
    //   if(value===''){
    //     this.fullName = '';
    //   } else {
    //     this.fullName = this.name + ' ' + value;
    //   }
    // }
  },
  computed: {
    fullName() {
      console.log('Running again...');
      if(this.name === '' || this.lastname === '') {
        return '';
      }
      return this.name + ' ' + this.lastname;
    }
  },
  methods: {
    outputFullName() {
      console.log('Running again...');
      if(this.name === '') {
        return '';
      }
      return this.name + ' ' + "So";
    },
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
      this.confirmedName = this.fullName;
    },
    resetInput() {
      this.name='';
    }
  }
});

app.mount('#events');
