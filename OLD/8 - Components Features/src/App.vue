<template>
  <the-header></the-header>
  <!-- <TheHeader /> -->
  <div id="final">
    <button @click="setSelectedComponent('active-goals')">Active Goals</button>
    <button @click="setSelectedComponent('manage-goals')">Manage Goals</button>
    <!-- <active-goals v-if="selectedComponent === 'active-goals'"></active-goals>
    <manage-goals v-if="selectedComponent === 'manage-goals'"></manage-goals>-->
    <keep-alive>
      <component :is="selectedComponent"></component>
    </keep-alive>
  </div>

  <div>
    <!-- uso la app de la carpeta lessons/1-starting-setup como componente -->
    <app-1></app-1>
  </div>

  <div>
    <!-- uso la app de la carpeta lessons/1-starting-setup como componente -->
    <app-2></app-2>
  </div>

  <div>
    <app-3></app-3>
  </div>
</template>

<script>
import TheHeader from './components/layout/TheHeader.vue';
// import BadgeList from './components/BadgeList.vue';
// import UserInfo from './components/UserInfo.vue';
// import CourseGoals from './components/CourseGoals.vue';
import ActiveGoals from './components/ActiveGoals.vue';
import ManageGoals from './components/ManageGoals.vue';


export default {
  components: {
    TheHeader,
    ActiveGoals,
    ManageGoals,
  },
  data() {
    return {
      selectedComponent: 'active-goals',
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
  padding: 50px;
}
</style>