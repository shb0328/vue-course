<template>
  <li>
    <h2>{{ name }} {{ isFavorite ? '(★)' : ''}}</h2>
    <button @click="toggleFavorite">toggle favorite</button>
    <button @click="toggleDetails">{{ detailsAreVisible ? 'Hide' : 'Show' }} Details</button>
    <ul v-if="detailsAreVisible">
      <li><strong>Phone: </strong>{{ phoneNumber }}</li>
      <li><strong>Email: </strong>{{ emailAddress }}</li>
    </ul>
    <button @click="$emit('delete', id)">Delete</button>
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
    id:{
      type: String,
      required: true
    },
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
  emits: ['toggle-favorite', 'delete'],
  /*
  emits: {
    'toggle-favorite' : function(id) {
      if(id) { // validation check
        return true;
      } else {
        console.warn('Id is missing');
        return false;
      }
    },
    'delete' : function(id) {
      if(id) { // validation check
        return true;
      } else {
        console.warn('Id is missing');
        return false;
      }
    }
  },  
  */
  data() {
    return {
      detailsAreVisible: false,
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
      this.$emit('toggle-favorite', this.id);
    },
    // deleteFriend() {
    //   this.$emit('delete');
    // }
  }
};
</script>