<template>
    <v-row justify="center" align="center" class="full_screen mx-2">
      <v-col cols="md-4" class="f2 ">
        <h2 style="color: rgb(14, 233, 222);">Reset Password</h2>
        <div class="form__group field" style="margin-top: 40px;">
          <input type="password" class="form__field" placeholder="Name" required="true" v-model="newPassword">
          <label for="name" class="form__label">New Password</label>
        </div>
        <div class="form__group field" style="margin-top: 40px;">
          <input type="password" class="form__field" placeholder="Name" required="true" v-model="confirmPassword">
          <label for="name" class="form__label">Confirm Password</label>
        </div>
        <v-btn class="send-button" @click="resetPassword" color="primary">Send</v-btn>
      </v-col>
      <div v-if="isLoading" class="fingerprint-loader">
      <Loader1Vue/>
      </div>
    </v-row> 
  </template>
  
  <script>
import jwtDecode from 'jwt-decode';
import axios from 'axios';
import Loader1Vue from './Loader1.vue';
export default {
  components:{Loader1Vue},
  data() {
    return {
      newPassword: "",
      confirmPassword: "",
      isLoading: false, // Loading state flag

    };
  },
  methods: {
    resetPassword() {
      const token = localStorage.getItem('token');
     
      if (token) {
        
        const decodedToken = jwtDecode(token);
        const email = decodedToken.Email;

        if (this.newPassword === this.confirmPassword) {
          this.isLoading = true;
          // Perform reset password logic here using the 'email' variable
          console.log("Passwords match. Resetting password for email:", email);
          axios.post('https://shoping-server.vercel.app/api/changepass', {

      
Email:email,
newPassword:this.newPassword

})
.then(response => {

if (response.status === 200 || response.status === 409) { 
  // Check the HTTP status code for success
console.log("Password Changed Successfully");
// To delete the token
localStorage.removeItem('token');


setTimeout(() => {
    this.$router.push('/login');
  }, 1000);

} 
else{
console.log("email not found");
}
})
.catch(error => {
// Registration failed
console.log("error occoured");
console.error(error);
// Show an error message
});

  } 
        
        else {
          console.log("Passwords do not match. Please try again.");
        }
      } 
      
      else {
        console.log("Token not found. Please request OTP again.");
      }
    },
  },
};
</script>

  
  <style scoped>
  .full_screen {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 4;
  }
  
  .form__group {
    position: relative;
    padding: 20px 0 0;
    margin-left: 40px;
  }
  
  .form__field {
    font-family: inherit;
    width: 80%;
    border: none;
    border-bottom: 2px solid #05b97a; 
    margin-left: 40px;
    outline: 0;
    font-size: 17px;
    color: #fff;
    padding-bottom: 40px;
    background: transparent;
    transition: border-color 0.2s;
  }
  
  .form__field::placeholder {
    color: transparent;
  }
  
  .form__field:placeholder-shown ~ .form__label {
    font-size: 17px;
    cursor: text;
    top: 40px;
  }
  
  .form__label {
    position: absolute;
    top: 0;
    display: block;
    transition: 0.2s;
    font-size: 17px;
    color: #f4f1f5;
    pointer-events: none;
  }
  
  .form__field:focus {
    padding-bottom: 6px;
    font-weight: 700;
    border-width: 3px;
    border-image: linear-gradient(to right, #116399, #38caef);
    border-image-slice: 1;
  }
  
  .form__field:focus ~ .form__label {
    position: absolute;
    top: 0;
    display: block;
    transition: 0.2s;
    font-size: 17px;
    color: #38caef;
    font-weight: 700;
  }
  
  /* reset input */
  .form__field:required, .form__field:invalid {
    box-shadow: none;
  }
  
  .f2 {
  background-color: rgba(13, 5, 26, 0.592);
  height: 400px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
  .send-button {
    margin-top: 40px;
    width: 60%;
  }
  </style>
  