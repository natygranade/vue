<template>
  <section>
    <header>
      <h1>My Friends</h1>
    </header>
    <new-friend @add-friend="AddFriend"></new-friend>
    <ul>
      <friend-contact v-for="friend in friends" :name="friend.name" :email="friend.email" :id="friend.id"
        :phone-number="friend.phone" :is-favorite="friend.isFavorite" :key="friend.id"
        @toggle-favorite="toggleFavoriteStatus" @delete-friend="deleteFriend">
        <!-- los custom events usan @ como :v-on. Se ejecutara el custom event "toggle-favorite" en el click, donde se enviaran el id del friend del child al parent y se hara el metodo "toggleFavoriteStatus" -->
      </friend-contact>
    </ul>
  </section>
</template>

<script>

export default {
  data() {
    return {
      friends: [
        {
          id: "manuel",
          name: "Manuel Lorenz",
          phone: "0123 45678 90",
          email: "manuel@localhost.com",
          isFavorite: true
        },
        {
          id: "julie",
          name: "Julie Jones",
          phone: "0987 654421 21",
          email: "julie@localhost.com",
          isFavorite: false
        },
      ],
    };
  },
  methods: {
    // trae e id del friend clickeado. Con find(), se selecciona el friend con el id q viene del child
    toggleFavoriteStatus(friendId) {
      const friendSelected = this.friends.find((friend) => friend.id === friendId)
      friendSelected.isFavorite = !friendSelected.isFavorite
    },
    AddFriend(person) {
      this.friends.push({
        id: Date.now().toString(),
        name: person.nameValue,
        phone: person.phoneValue,
        email: person.emailValue,
        isFavorite: person.isFavoriteValue
      })
      console.log( this.friends);
    },
deleteFriend(id){
  this.friends = this.friends.filter(friend =>{
return id != friend.id
  })
  console.log(this.friends);
}
  }
};
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Jost&display=swap');

* {
  box-sizing: border-box;
}

html {
  font-family: "Jost", sans-serif;
}

body {
  margin: 0;
}

header {
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  margin: 3rem auto;
  border-radius: 10px;
  padding: 1rem;
  background-color: #58004d;
  color: white;
  text-align: center;
  width: 90%;
  max-width: 40rem;
}

form {
  width: 90%;
  margin: 60px auto;
  text-align: center;
}

#app ul {
  margin: 0;
  padding: 0;
  list-style: none;
}

#app li {
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  margin: 1rem auto;
  border-radius: 10px;
  padding: 1rem;
  text-align: center;
  width: 90%;
  max-width: 40rem;
}

#app h2 {
  font-size: 2rem;
  border-bottom: 4px solid #ccc;
  color: #58004d;
  margin: 0 0 1rem 0;
}

#app button {
  font: inherit;
  cursor: pointer;
  border: 1px solid #ff0077;
  background-color: #ff0077;
  color: white;
  padding: 0.05rem 1rem;
  box-shadow: 1px 1px 2px rgba(0, 0, 0, 0.26);
}

#app button:hover,
#app button:active {
  background-color: #ec3169;
  border-color: #ec3169;
  box-shadow: 1px 1px 4px rgba(0, 0, 0, 0.26);
}</style>