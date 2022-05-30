<template>
  <li>
    <h2>{{ name }} {{ friendIsFavorite ? '(★)' : ''}}</h2>
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
  // props: [
  //   'name',
  //   'phoneNumber',
  //   'emailAddress',
  //   'isFavorite'
  // ],
  props: {
    name: {
      type: String,
      required: true
    },
    phoneNumber: {
      type: String,
      required: true
    },
    emailAddress: {
      type: String,
      required: true
    },
    isFavorite: {
      type: Boolean,
      required: false,
      default: false
    }
  },
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
      this.friendIsFavorite = !this.friendIsFavorite;
    }
  }
};
</script>