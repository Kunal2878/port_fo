<template>
  <v-row justify="center" align="center" class="full_screen mx-2 h-50">
    <v-col cols="md-4">
      
      <v-alert
      v-if="alertMessage"
    :value="true"
    variant="outlined"
    type="warning"
    prominent
    class="top-alert"
    border="top"
  >
 Incorrect Email
  </v-alert>
      <div class="input-container">
        <v-text-field
          v-model="Email"
          :label="'Enter your registered email/phone'"
          outlined
          color="white"
          dense
        ></v-text-field>
        <v-btn color="orange" dark @click="addemail">Send</v-btn>
      </div>
    </v-col>
    <div v-if="isLoading" class="fingerprint-loader">
      <Loader1Vue/>
      </div>
   
  </v-row>
  </template>
  
  <script scoped>
import axios from 'axios';
import Loader1Vue from './Loader1.vue';
  export default {
    components:{Loader1Vue},
    
    data() {
      return {
        Email: "",
        isLoading: false,
        alertMessage:false,
      };
    },
    methods: {
        addemail() {
          this.isLoading = true;


      axios.post('https://shoping-server.vercel.app/api/checkmail', {

      
        Email:this.Email,
        
        
      })
      .then(response => {
        // Registration successful
        if (response.status === 200 || response.status === 409) { 
          // Check the HTTP status code for success
    console.log("email found")
    localStorage.setItem('token', response.data.token);
     
      setTimeout(() => {
            this.$router.push('/otp');
          }, 500);
      
    } 
    if (response.status === 404){
     
        console.log("email not found");
     }
      })
      .catch(error => {
        // Registration failed
        setTimeout(() => {
          this.isLoading = false;
          this.alertMessage = true;
          // Automatically hide the alert after 2 seconds
          setTimeout(() => {
            this.alertMessage = false;
          }, 2000);
        }, 1000);
        console.log("error occurred");
        console.error(error);
      });

    }
  }
    };
  
  </script>
  
  <style scoped>
  .input-container {
    display: flex;
    background: white;
    border-radius: 1rem;
    background: linear-gradient(135deg, #23272F 0%, #14161a 100%);
    box-shadow: 6px 6px 10px #0e1013, -10px -10px 40px #383e4b;
    padding: 4.5rem;
    gap: 0.3rem;
  }
  
  .input-container input {
    border-radius: 0.8rem 0 0 0.8rem;
    background: #23272F;
    box-shadow: inset 5px 5px 10px #0e1013, inset -5px -5px 10px #383e4b, 0px 0px 100px rgba(255, 212, 59, 0), 0px 0px 100px rgba(255, 102, 0, 0);
    flex-basis: 75%;
    padding: 1rem;
    border: none;
    border: 1px solid transparent;
    color: white;
    transition: all 0.2s ease-in-out;
  }
  
  .input-container input:focus {
    border: 1px solid #FFD43B;
    outline: none;
    box-shadow: inset 0px 0px 10px rgba(255, 102, 0, 0.5), inset 0px 0px 10px rgba(255, 212, 59, 0.5), 0px 0px 100px rgba(255, 212, 59, 0.5), 0px 0px 100px rgba(255, 102, 0, 0.5);
  }
  
  .input-container button {
    flex-basis: 25%;
    padding: 1rem;
    font-weight: 900;
    letter-spacing: 0.3rem;
    text-transform: uppercase;
    color: #23272F;
    border: none;
    width: 100%;
    border-radius: 0 1rem 1rem 0;
    transition: all 0.2s ease-in-out;
  }
  
  .input-container button:hover {
    background: linear-gradient(135deg, rgb(255, 212, 59) 50%, rgb(255, 102, 0) 100%);
    box-shadow: 0px 0px 100px rgba(255, 212, 59, 0.5), 0px 0px 100px rgba(255, 102, 0, 0.5);
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
  </style>
  