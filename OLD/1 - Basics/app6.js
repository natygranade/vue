Vue.createApp({
  data() {
    return {
      counter: 0,
      name: '',
      confirmedName: ''
    };
  },
  //"watchers" leen los cambios de un "data" y ejecutan algo. SE TIENEN Q LLAMAR IGUAL QUE LA DATA. Sirven en el caso de que se quiera aplicar una accion si el valor de un data es "x"
  watch:{
counter(value){
  if(value > 50){
this.counter = 0
  }
}
  },
  //"computed properties" son methods que solo se ejecutan si se los llama en el html, "methods" se ejecutan cada vez que hay un cambio en cualquier parte del dom
  computed:{
// se los nombra como si fuera un data, no puede tener el mismo nombre q un data. Cuando se los llama en el html, vue lee los data y si no encuntra ninguno, busca en los computed
fullName(){
  console.log('running computed...');
  if( this.name === ''){
    return ''
  } 
  return  this.name + ' ' + 'Schwarzmüller';
}
  },
  methods: {
  setName(event, lastName){
 this.name = event.target.value + ' ' + lastName;
},
    outputFullName() {
      console.log('running method...');
      if( this.name === ''){
        return ''
      }
      return  this.name + ' ' + 'Schwarzmüller';
    },
    add(num) {
      this.counter = this.counter + num;
    },
    reduce(num) {
      this.counter = this.counter - num;
      // this.counter--;
    },
    reset() {
      this.name = ''
  },
  confirmInput(){
   this.confirmedName =  this.name
  }
}
}).mount('#events');


