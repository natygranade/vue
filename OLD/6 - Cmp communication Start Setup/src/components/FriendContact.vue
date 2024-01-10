<template>
  <li>
    <h2>{{ name }} {{ isFavorite ? '(Fav)' : '' }}</h2>
    <button @click="favoriteToggle">Toggle Favorite</button>
    <button @click="toggleDetails">{{ detailsAreVisible ? 'Hide' : 'Show' }} Details</button>
    <button @click="deleteFriend">Remove Friend</button>
    <ul v-if="detailsAreVisible">
      <li :key="id">
        <strong>Phone:</strong>
        {{ phoneNumber }}
      </li>
      <li>
        <strong>Email:</strong>
        {{ email }}
      </li>
    </ul>
  </li>
</template>

<script>
export default {
// para q se vea mas facil si el componente tienen custom events, se agregan los emits. Puede ser "emits: ['toggle-favorite']" o agregar alguna condicion:
emits:{
'toggle-favorite': function (id) {
  if(id){
     return true
  }else{
console.warn('missing friend id')    
    return false
  } 
},
'delete-friend':function(id){
  if(id){
     return true
  }else{
console.warn('missing friend id')    
    return false
  } 
}
},
  // props: [ 'id','name', 'phoneNumber','email', 'isFavorite' ], Se puede pasar mas info para cada prop para validar datos y que se vea un err mas facil en console 
  props: {
    'id': {
      type: String,
      required: true
    },
    'name': {
      type: String,
      required: true
    }, 'phoneNumber': {
      type: String,
      required: true
    }, 'email': {
      type: String,
      required: true
    },
    'isFavorite': {
      type: Boolean,
      required: true,
      default: false
    }
  },
  data() {
    return {
      detailsAreVisible: false,
    };
  },
  methods: {
    toggleDetails() {
      this.detailsAreVisible = !this.detailsAreVisible;
    },
    favoriteToggle() {
      // $emit es un metodo de vue que envia un custom event del child component al parent, el parent va a escuchar ese evento. Min un parametro (el nombre del event), ademas puede enviar otra data. En este caso, el id del friend clickeado
    this.$emit('toggle-favorite', this.id)
    },
    deleteFriend(){
      this.$emit('delete-friend', this.id)
    }
  }
};
</script>