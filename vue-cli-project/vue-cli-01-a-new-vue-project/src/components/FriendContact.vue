<template>
  <li>
    <h2>{{ name }} {{ friendIsFavorite === '1' ? '(★)' : ''}}</h2>
    <button @click="toggleFavorite">toggle favorite</button>
    <button @click="toggleDetails">{{ detailsAreVisible ? 'Hide' : 'Show' }} Details</button>
    <ul v-if="detailsAreVisible">
      <li><strong>Phone: </strong>{{ phoneNumber }}</li>
      <li><strong>Email: </strong>{{ emailAddress }}</li>
    </ul>
  </li>
</template>


<script>
export default {
  props: [
    'name',
    'phoneNumber',
    'emailAddress',
    'isFavorite'
  ],
  data() {
    return {
      friendIsFavorite: this.isFavorite,
      detailsAreVisible: false,
      friend: {
          id:'manuel',
          name:'Manuel Lorenz',
          phone:'0123 456',
          email:'man@localhost.com'
        }
    };
  },
  methods: {
    toggleDetails() {
      this.detailsAreVisible = !this.detailsAreVisible;
      console.log(this.name);
      console.log(this.phoneNumber);
      console.log(this.emailAddress);
    },
    toggleFavorite() {
      if(this.friendIsFavorite === '1') {
        this.friendIsFavorite = '0';
      } else {
        this.friendIsFavorite = '1';
      }
    }
  }
};
</script>