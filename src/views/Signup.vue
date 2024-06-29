<template>
    <v-row justify="center" align="center" class="full_screen mx-2">
     <v-col cols="md-4">
   <v-card class="card" @mouseover="cardHover = true" @mouseleave="cardHover = false">
     <v-card class="card2" :class="{ 'hovered': cardHover }" transition="scale-transition">
       <v-form class="form" @submit.prevent="registerUser">
         <v-toolbar  class="heading d-flex justify-content-center" color="#171717">
     
           <v-toolbar-title class="d-flex justify-content-center">Signup</v-toolbar-title>
           <v-btn class="d-flex justify-content-center mr-8 close" @click="closeForm">X</v-btn>
         </v-toolbar>
         <v-text-field
           v-model="username"
           class="field"
           placeholder="Username"
           autocomplete="on"
           variant="solo-inverted"
           clearable
         >
           <template v-slot:prepend>
             <v-icon class="input-icon" color="rgb(0, 255, 200)">mdi-at</v-icon>
           </template>
         </v-text-field>
         <v-text-field
           v-model="Email"
           class="field"
           placeholder="Email"
           autocomplete="on"
           variant="solo-inverted"
           type="email"
           clearable
         >
           <template v-slot:prepend>
             <v-icon class="input-icon" color="rgb(0, 255, 200)">mdi-account</v-icon>
           </template>
         </v-text-field>
         <v-text-field
           v-model="password"
           class="field"
           autocomplete="on"
           placeholder="Password"
           variant="solo-inverted"
           clearable
           
           type="password"
         >
           <template v-slot:prepend>
             <v-icon class="input-icon" color="rgb(0, 255, 200)">mdi-lock</v-icon>
           </template>
         </v-text-field>
         <v-row class="btn my-6" justify="center">
           <v-btn class="button1" type="submit">Signup</v-btn>
          
         </v-row>
         <!-- <v-row class="btn2">
         <v-btn class="button3">Forgot Password</v-btn>
         <v-btn icon="$vuetify"></v-btn>
         </v-row> -->
      
       </v-form>
     </v-card>
   </v-card>
 </v-col>
 </v-row>
 </template>
 
 <script>
 import axios from 'axios';

 export default {
   data() {
     return {
       username: '',
       Email:'',
       password: '',
       cardHover: false
     };
   },
   methods: {
    closeForm() {
     this.$router.push('/');
    },
    registerUser() {
      axios.post('https://shoping-server.vercel.app/api/register', {

        username: this.username,
        Email:this.Email,
        password: this.password
        
      })
      .then(response => {
        // Registration successful
        console.log(response.data);
  const token = response.data.token;
  localStorage.setItem('token', token); // Store the token in localStorage or any other suitable storage
  this.$router.push('/login');
        // Redirect or show a success message
      })
      .catch(error => {
        // Registration failed
        console.log("error-",error);
        console.error(error);
        // Show an error message
      });
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
 
 }
 .card {
   background-image: linear-gradient(163deg, #00ff75 0%, #3700ff 100%);
   border-radius: 22px;
   transition: all 0.3s;
   background-color: black;
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

 .full_screen
 {
  
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 4;

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
 