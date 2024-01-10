<template>
    <form @submit.prevent="sendData">
        <label for="name">Name
        </label>
            <input type="text" name="name" id="name" v-model="person.nameValue">
        <label for="phone">Phone
        </label>
            <input type="text" name="phone" id="phone" v-model="person.phoneValue">
        <label for="email">Email
        </label>
            <input type="email" name="email" id="email" v-model="person.emailValue">
        <label for="favorite">Is Favorite?
        </label>
            <input type="checkbox" name="favorite" id="favorite" value="true" v-model="person.isFavoriteValue">
        <button type="submit" >Add Friend</button>
    </form>
</template>
<script>
export default {
    emits: [
        'add-friend'
    ],
    props: {
    
  },
    data() {
        return {
          person:{  
            id: "",
            nameValue: "",
            phoneValue: "",
            emailValue:"",
            isFavoriteValue: false
        }}
    },
    methods: {
sendData(){
    this.$emit('add-friend', this.person )
}
    }
}
</script>