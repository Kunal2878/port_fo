<template>
   <v-row justify="center" align="center" class="full_screen mx-2">
    <v-col cols="md-4">
  <v-card class="card" @mouseover="cardHover = true" @mouseleave="cardHover = false">
    <v-card class="card2" :class="{ 'hovered': cardHover}" transition="scale-transition">
      <v-form class="form" @submit.prevent="loginUser">
        <v-toolbar  class="heading d-flex justify-content-center" color="#171717">
    
          <v-toolbar-title class="d-flex justify-content-center">Login </v-toolbar-title>
          <v-btn class="d-flex justify-content-center mr-8 close" @click="closeForm">X</v-btn>
        </v-toolbar>
        <v-text-field
          v-model="Email"
          class="field"
          placeholder="Email"
          autocomplete="on"
          variant="solo-inverted"
          clearable
        >
          <template v-slot:prepend>
            <v-icon class="input-icon" color="rgb(0, 255, 200)">mdi-email</v-icon>
          </template>
        </v-text-field>
        <v-text-field
          v-model="password"
          class="field"
          placeholder="Password"
          variant="solo-inverted"
          clearable
          autocomplete="on"
          type="password"
        >
          <template v-slot:prepend>
            <v-icon class="input-icon" color="rgb(0, 255, 200)">mdi-lock</v-icon>
          </template>
        </v-text-field>
        <v-row class="btn" justify="center">
          <v-btn class="button1" type="submit">Login</v-btn>
          <v-btn class="button2" to="/signup">Sign Up</v-btn>
        </v-row>
        <v-row class="btn2">
        <v-btn class="button3" to="/sendemail">Forgot Password</v-btn>
        </v-row>
        <v-row justify="center" align="center" class="mb-2">
          <v-btn icon="mdi-google" style="color:rgb(0, 255, 200) ;background-color:#171717;"></v-btn>
            <v-btn icon="mdi-apple" style="color:rgb(0, 255, 200) ;background-color:#171717;"></v-btn>
            <v-btn icon="mdi-facebook" style="color:rgb(0, 255, 200) ;background-color:#171717;"></v-btn>
        </v-row> 
        <v-alert
        v-if="alertMessage"
      :value="true"
      variant="outlined"
      type="warning"
      prominent
      class="top-alert"
      border="top"
    >
   Incorrect Email or password
    </v-alert>
    <v-alert
      v-if="alertmessage"
      :value="true"
      variant="outlined"
      type="success"
      prominent
      closable
      class="top-alert"
      border="top"
    >
   Login Successful-redirect to home page
    </v-alert>
      </v-form>
  
    </v-card>
  </v-card>
</v-col>
</v-row>
</template>

<script scoped> // scoped is used to apply the script only to this components
 import axios from 'axios';
 import { mapActions } from 'vuex';
export default {
  data() {
    return {
      Email: '',
      password: '',
      cardHover: true,
      
      alertVisible: false,
      alertMessage: false,
      alertmessage: false,

    };
  },
  methods: {
    closeForm() {
     this.$router.push('/');
    },
    loginUser() {
      axios.post('https://shoping-server.vercel.app/api/login', {

        Email: this.Email,
        password: this.password
      })
      .then(response => {
    if(response.status === 200) { 
      // const token = response.data.token
      // localStorage.setItem('token', response.data.token);
      const userData = response.data.userData
      localStorage.setItem('userData', JSON.stringify(userData));
   
      this.alertmessage = true;
      this.login();
      setTimeout(() => {
            this.$router.push('/');
          }, 2000);
      
    } 
    else {
      this.alertMessage = true;
      
      // Handle login failure
    }
  })
      .catch(error => {
        // Login failed
        console.error(error);
        this.alertMessage = 'An error occurred during login';
        console.error(error);

        // Show an error message
      });
    },

    ...mapActions(['fetchData']), // Map the fetchData action from the store
    async login() {
      console("within login");
      const email = this.Email; // Replace with the user's email
      await this.fetchData(email); // Dispatch the action with the email
      }

  }
};
</script>

<style scoped>
.form {
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding-left: 2em;
  padding-right: 2em;
  padding-bottom: 0.4em;
  background-color: #171717;
  border-radius: 20px;
}
.input-icon{

   
  height: 1.3em;
  width: 1.3em;
  fill: rgb(0, 255, 200);
  padding-left: 0.6em;

}
.card {
  background-image: linear-gradient(163deg, #00ff75 0%, #3700ff 100%);
  border-radius: 22px;
  transition: all 0.3s;
  background-color: black;
}
.field ::placeholder{
  font-weight: 900;
}
.card2 {
  border-radius: 0;
  transition: all 0.2s;
}

.card2.hovered {
  transform: scale(0.98);
  border-radius: 20px;
}

.card:hover {
  box-shadow: 0px 0px 30px 1px rgba(0, 255, 117, 0.3);
}

.heading {
  display: flex;
  justify-content: center;
  text-align: center;
  margin: 2em;
  font-size: 1.6em;
  color: rgb(0, 255, 200);
}

.field {
  border-radius: 40px;
  padding: 0.2em;
  
  background-color: #0000002d;
  box-shadow: inset 2px 5px 10px rgb(5, 5, 5);

  /* background: none; */

  width: 100%;
  color: rgb(0, 255, 200);

}

.input-icon {
  height: 1.3em;
  width: 1.3em;
  fill: rgb(0, 255, 200);
}

.btn {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  margin-top: 2.5em;
}
.btn2{
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 40px;
}

.button1 {
  padding: 0.5em;
  padding-left: 1.1em;
  padding-right: 1.4em;
  border-radius: 5px;
  margin-right: 1em;
  transition: 0.4s ease-in-out;
  background-image: linear-gradient(163deg, #00ff75 0%, #3700ff 100%);
  color: rgb(255, 255, 255);
}

.button1:hover {
  background-image: linear-gradient(163deg, #00642f 0%, #13034b 100%);
  color: rgb(0, 255, 200);
}

.button2 {
  padding: 0.5em;
  padding-left: 2.3em;
  padding-right: 2.3em;
  border-radius: 5px;
  transition: 0.4s ease-in-out;
  background-image: linear-gradient(163deg, #00ff75 0%, #3700ff 100%);
  color: rgb(255, 255, 255);
}

.button2:hover {
  background-image: linear-gradient(163deg, #00642f 0%, #13034b 100%);
  color: rgb(0, 255, 200);
}

.button3 {
  padding: 0.8em;
  margin-bottom: 1em;
  border-radius: 5px;
  transition: 0.4s ease-in-out;
  background-image: linear-gradient(163deg, #00ff75 0%, #3700ff 100%);
  color: rgb(255, 255, 255);
}

.button3:hover {
  background-image: linear-gradient(163deg, #a00000fa 0%, #d10050 100%);
  color: rgb(251, 255, 19);
}

.v-input__control--outlined {
  background-color: #171717 !important;
}

.v-input__control--outlined input {
  color: rgb(0, 255, 200) !important;
}

.v-input__control--outlined .v-label {
  color: rgb(0, 255, 200) !important;
}

.v-input__prepend-inner .v-icon {
  fill: rgb(0, 255, 200) !important;
}
.full_screen{
  
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 4;

}

.top-alert {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  z-index: 4;
  margin: 20px;
  max-width: 400px;
  background-color: #000000f2;
}
.close {
    position: absolute;
    right: 10px;
    top: 10px;
    background-color: #494949;
    color: #ff0000;
    height: 30px;
    width: 30px;
    display: grid;
    place-items: center;
    border-radius: 50%;
    cursor: pointer;
    font-weight: 600;
    transition: .5s ease;
  }
</style>
