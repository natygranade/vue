<template>
  <base-card>
  <div ref="eventlist">
    <base-button @click="setSelectedTab('stored-resources',$event)" :mode="storedResButtonMode">Stored Resources</base-button>
    <base-button @click="setSelectedTab('add-resource',$event)" :mode="addResButtonMode">Add Resource</base-button> 

  </div>
  </base-card>
  <!-- keep alive para que al pasar de un cmp a otro, los values del input no se borren -->
  <keep-alive>
    <component :is="selectedTab" :resourceToUpdate=" 'selectedTab === update-reource' ? resourceToUpdate : null"></component>
  </keep-alive>
  <button @click="log">log</button>
</template>

<script>
import StoredResources from './StoredResources.vue';
import AddResource from './AddResource.vue';

export default {
  components: {
    StoredResources,
    AddResource
  },
  data() {
    return {
      resourceToUpdate: {},
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
      resources: this.storedResources,
      // envio un method para ser usado en otro cmp 
      addResource: this.addResource,
      deleteResource: this.removeResource,
      setSelectedTab: this.setSelectedTab
    };
  },
  mounted() {

},
computed:{
  storedResButtonMode(){
   return this.selectedTab === "stored-resources" ? null : "flat"
  },
  addResButtonMode(){
   return this.selectedTab === "add-resource" ? null : "flat"
  }

},
  methods: {
    setSelectedTab(tab) {
      this.selectedTab = tab;
    
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
      Array.from(this.btnList).forEach( btn =>{
       console.log(btn);
      })

    },
    removeResource(resId) {
      const resIndex = this.storedResources.findIndex(res => res.id === resId);
      this.storedResources.splice(resIndex, 1);
    },
    log(){

      console.log(this.selectedTab);
    }
  },
};
</script>