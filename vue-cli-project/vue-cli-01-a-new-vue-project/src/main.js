import { createApp } from 'vue';

import App from './App.vue';
import FriendContact from './components/FriendContact.vue';
import NewFriendForm from './components/NewFriendForm.vue';

const app = createApp(App);
app.component('friend-contact', FriendContact); // custom html element name, config object
app.component('new-friend-form', NewFriendForm); // custom html element name, config object
app.mount('#app');
