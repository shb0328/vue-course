const app = Vue.createApp({
  data() {
    return {
      friends: [ // from db ...
        {
          id:'manuel', 
          name:'Manuel Lorenz', 
          phone:'01234 5678 991', 
          email:'manuel@localhost.com'
        },
        {
          id:'julie', 
          name:'Julie Jones', 
          phone:'09876 543 221', 
          email:'julie@localhost.com'
        }
      ]
    };
  },
  methods: {
    toggleDetails() {
      this.detailsAreVisible = !this.detailsAreVisible;
    }
  }

});

app.component('friend-contact', {
  template: `
    <li>
      <h2>{{ friend.name }}</h2>
      <button @click="toggleDetails">{{ detailsAreVisible ? 'Hide' : 'Show' }} Details</button>
      <ul v-if="detailsAreVisible">
        <li><strong>Phone:</strong> {{ friend.phone}}</li>
        <li><strong>Email:</strong> {{ friend.email}}</li>
      </ul>
    </li>
  `,
  data() {
    return {
      detailsAreVisible: false,
      friend: {
        id:'manuel', 
        name:'Manuel Lorenz', 
        phone:'01234 5678 991', 
        email:'manuel@localhost.com'
      }
    };
  },
  methods: {
    toggleDetails() {
      this.detailsAreVisible = !this.detailsAreVisible;
    }
  }
}); //identifier, conflict object 
//identifier : 사용자 정의 HTML 요소 이름. 내장 HTML element와 충돌을 피하기 위해서 반드시 '-' (dash) 를 포함한다.
//conflict object : main app에 연결될 app의 개체 정보. capsulation. main app과 통신하지 않음, 자체 template이 필요하다
app.mount('#app');