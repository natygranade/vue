<template>
  <the-header></the-header>
  <!-- <TheHeader /> -->
  <section id="final">
    <button @click="setSelectedComponent('active-goals')">Active Goals</button>
    <button @click="setSelectedComponent('manage-goals')">Manage Goals</button>
   
    <h3>Para seleccionar el componente a mostrar podría usar v-if</h3>

    <p> ~active-goals v-if="selectedComponent === 'active-goals'"> ~/active-goals> </p>
    <p> ~manage-goals v-if="selectedComponent === 'manage-goals'"> ~/manage-goals> </p>  

    <h3>Vue da el elemento "component". ~component <strong>:is</strong>="selectedComponent" </h3>
    <p>El atr <strong> "is" </strong>viene con este vue element, donde pongo el componente q quiero mostrar como value del atr. Ejemplo :is="'active-goals'" ( este componente tiene q estar en la app)</p>
   <!-- el value tiene q ser un string. -->
    <component :is="'active-goals'"></component>
<p>keep-alive, es un vue element que guarda el componente sin desmontarlo, cuando se oculta. Esto sire para no perder los datos cargados en un input, por ejemplo. </p> 
<!-- la data prop selectedComponent, tiene como value, un string -->
    <keep-alive>
      <component :is="selectedComponent"></component>
    </keep-alive>
  </section >

  <!--   uso la app de la carpeta lessons/1-starting-setup como componente 
    <app-1></app-1>
-->
</template>

<script>
import TheHeader from './components/layout/TheHeader.vue';
import ActiveGoals from './components/ActiveGoals.vue';
import ManageGoals from './components/ManageGoals.vue';


export default {
  components: {
    TheHeader,
    ActiveGoals,
    ManageGoals
  },
  data() {
    return {
      selectedComponent: '',
      activeUser: {
        name: 'Maximilian Schwarzmüller',
        description: 'Site owner and admin',
        role: 'admin',
      },
    };
  },
  methods: {
    setSelectedComponent(cmp) {
      this.selectedComponent = cmp;
    },
  },
};
</script>

<style>
html {
  font-family: sans-serif;
}

body {
  margin: 0;
}
#final{
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 50px;
}
button{
  padding: 8px 30px;
  color: aliceblue;
  border-radius: 50px;
  border: none;
  background-color:   rgb(29, 29, 117);
  margin: 10px;
}
input{
  padding: 20px 50px;
  border-radius: 50px;
  border: 1px solid grey ;
}
</style>