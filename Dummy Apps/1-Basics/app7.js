Vue.createApp({
data(){
    return{
        activeItemA: false,
        activeItemB: false,
        activeItemC: false
    }
},
watch:{},
//para complejos cambios de classes se trae la logica de la class a un computed 
computed:{
    boxClassesA(){
      return  {active: this.activeItemA}
    },
    boxClassesB(){
        return  {active: this.activeItemB}
      },
      boxClassesC(){
        return  {active: this.activeItemC}
      }
},
methods:{
selected(item){
    if(item === 'a'){
        this.activeItemA = !this.activeItemA
        this.activeItemB = false 
        this.activeItemC = false
    }
    else if(item === 'b'){
        this.activeItemB = !this.activeItemB
        this.activeItemA = false 
        this.activeItemC = false
    }
    else if(item === 'c'){
        this.activeItemC = !this.activeItemC 
        this.activeItemA = false 
        this.activeItemB = false
    }
}
}
}).mount('#styling')