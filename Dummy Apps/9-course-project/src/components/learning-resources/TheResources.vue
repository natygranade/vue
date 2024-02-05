<template>
  <base-card>
  <div ref="eventlist">
    <!-- <base-button @click="setSelectedTab('stored-resources',$event)" :mode="storedResButtonMode">Stored Resources</base-button>
    <base-button @click="setSelectedTab('add-resource',$event)" :mode="addResButtonMode">Add Resource</base-button>  -->

    <base-button @click="setSelectedTab('stored-resources',$event)">Stored Resources</base-button>
    <base-button @click="setSelectedTab('add-resource',$event)"  class="flat">Add Resource</base-button>
  </div>
  </base-card>
  <!-- keep alive para que al pasar de un cmp a otro, los values del input no se borren -->
  <keep-alive>
    <component :is="selectedTab"></component>
  </keep-alive>
</template>

<script>
import StoredResources from './StoredResources.vue';
import AddResource from './AddResource.vue';

export default {
  components: {
    StoredResources,
    AddResource,
  },
  data() {
    return {
      btnList: [],
      selectedTab: 'stored-resources',
      storedResources: [
        {
          id: 'official-guide',
          title: 'Official Guide',
          description: 'The official Vue.js documentation.',
          link: 'https://vuejs.org',
        },
        {
          id: 'google',
          title: 'Google',
          description: 'Learn to google...',
          link: 'https://google.org',
        },
      ],
    };
  },
  provide() {
    return {
      resources: this.filteredResources,
      // resources: this.storedResources,
      addResource: this.addResource,
      deleteResource: this.removeResource
    };
  },
  mounted() {
  this.btnList = this.$refs.eventlist.children
},
// computed:{
//   storedResButtonMode(){
//    return this.selectedTab === "stored-resources" ? null : "flat"
//   },
//   addResButtonMode(){
//    return this.selectedTab === "add-resource" ? null : "flat"
//   }

// },
  methods: {
    setSelectedTab(tab, event) {
      this.selectedTab = tab;
      // para tener muchos botones distintos y cambiar el style del btn clickeado
      Array.from(this.btnList).forEach( btn =>{
        btn.classList.add("flat")
      })
      event.target.classList.remove( "flat")
    },
    addResource(title, description, url) {
      const newResource = {
        id: new Date().toISOString(),
        title: title,
        description: description,
        link: url,
      };
      this.storedResources.unshift(newResource);
      this.selectedTab = 'stored-resources';
    },
    removeResource(resId) {
      // const resIndex = this.storedResources.findIndex(res => res.id === resId);
      // this.storedResources.splice(resIndex, 1);
      this.filteredResources = this.storedResources.filter( res => {
          return res.id !== resId
        })
        console.log(this.storedResources);
    },
  },
};
</script>