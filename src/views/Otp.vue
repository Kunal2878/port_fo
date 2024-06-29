<template>
  <v-row justify="center" align="center" class="w-100 full_Screen mx-2">
    <v-col cols="md-6">
      <v-form class="form_">
        <v-btn class="close" @click="closeForm">X</v-btn>
  
        <v-card class="info">
          <v-card-title class="title">Two-Factor Verification</v-card-title>
          <v-card-text class="description">
            Enter the two-factor authentication code sent to your email
          </v-card-text>
  
          <v-row class="input-fields">
            <v-col v-for="(input, index) in inputs" :key="index" cols="3">
              <v-text-field
                v-model="input.value"
                placeholder=""
                type="tel"
                maxlength="1"
                ref="inputFields"
                @input="moveToNextField(index)"
              ></v-text-field>
            </v-col>
          </v-row>
        </v-card>
  
        <v-row class="action-btns">
          <v-btn class="verify" @click="verifyCode">Verify</v-btn>
          <v-btn class="clear" @click="clearFields">Clear</v-btn>
        </v-row>
      </v-form>
    </v-col>
  </v-row>
</template>

<script>
import axios from 'axios';

export default {
  data() {
  return {
    inputs: [
      { value: '' },
      { value: '' },
      { value: '' },
      { value: '' },
    ],
    otp: '', // New data property for storing OTP as a string
  };
},
  methods: {
    closeForm() {
      // Handle close form action
    },
    async verifyCode() {
      this.otp = this.inputs.map(input => input.value).join('');

      try {
        const response = await axios.post('https://shoping-server.vercel.app/api/verifyotp', {
       
          enteredOtp: this.otp
        });

        // Handle the response based on whether the OTP is valid or not
        if (response.data.message === 'OTP is valid') {
          console.log('OTP is valid');
          this.$router.push('/passwordchange');
          // Perform necessary actions after successful verification
        } else {
          console.log('Invalid OTP');
          // Handle invalid OTP case
        }
      } catch (error) {
        console.error(error);
        console.log("Error Occoured");
        // Handle error case
      }
    },
    clearFields() {
      this.inputs.forEach((input) => {
        input.value = '';
      });
    },
    moveToNextField(index) {
      if (index > 0 && this.inputs[index].value === '') {
        this.$refs.inputFields[index - 1].$el.querySelector('input').focus();
      } else if (index < this.inputs.length - 1) {
        this.$refs.inputFields[index + 1].$el.querySelector('input').focus();
      }
    },
  },
};
console.log()
</script>



<style scoped>
  .form_ {
    --glow-color: rgb(176, 255, 251);
    --glow-spread-color: rgba(123, 246, 255, 0.781);
    --enhanced-glow-color: rgb(182, 71, 71);
    --btn-color: rgba(65, 65, 65, 0.508);
    border: 2px solid var(--glow-color);
    padding: 25px;
    display: flex;
    min-width: 420px;
    flex-direction: column;
    align-items: center;
    overflow: hidden;
    color: var(--glow-color);
    background-color: var(--btn-color);
    border-radius: 20px;
    position: relative;
  }
  

  .info {
    margin-bottom: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    /* background-color: #0d0404d5; */
  }
  
  .title {
    color: #adda08;
    font-size: 1.6rem;
    font-weight: 900;
  }
  
  .description {
    /* color: #fff; */
    margin-top: 10px;
    font-size: 1rem;
  }
  

  .form_ .input-fields {
    display: flex;
  flex-direction: row;
  gap: 4px;
  flex-wrap: nowrap;

}


  
.form_ .input-fields input {
    flex: 1; /* Let the input fields occupy available space */
    height: 2.5em;
    outline: none;
    text-align: center;
    font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
    font-size: 1.5rem;
    color: #fff !important; /* Set text color to white */
    border-radius: 12px;
    border: 2.5px solid rgb(215, 24, 24);
    background-color: #000 !important; /* Set background color to black */
  }

  .form_ .input-fields input:focus {
    border: 1px solid rgb(99, 236, 241);
    box-shadow: inset -1px -1px 5px rgba(255, 255, 255, .6),
                inset 10px 10px 10px rgba(252, 247, 247, 0.889);
    transform: scale(1.05);
    transition: 0.5s;
  }
  
  .action-btns {
    display: flex;
    margin-top: 12px;
    gap: 0.5rem;
  }
  
  .verify {
    padding: 10px 20px;
    text-transform: uppercase;
    text-decoration: none;
    border-radius: 8px;
    font-size: 1rem;
    font-weight: 500;
    color: #00f7ff;
    text-shadow: none;
    background: transparent;
    box-shadow: transparent;
    border: 1px solid #ffffff80;
    transition: 0.5s ease;
    user-select: none;
  }
  
  .verify:hover,:focus {
    color: #ffffff;
    background: #00eeff;
    border: 1px solid #00e1ff;
    text-shadow: 0 0 5px #ffffff,
                0 0 10px #ffffff,
                0 0 20px #ffffff;
    box-shadow: 0 0 5px #00e1ff,
                0 0 20px #00e1ff,
                0 0 50px #00e1ff,
                0 0 100px #00e1ff;
  }
  
  .clear {
    padding: 10px 20px;
    text-transform: uppercase;
    text-decoration: none;
    border-radius: 8px;
    font-size: 1rem;
    font-weight: 500;
    color: #ff0000;
    text-shadow: none;
    background: transparent;
    box-shadow: transparent;
    border: 1px solid #ffffff80;
    transition: 0.5s ease;
    user-select: none;
  }
  
  .clear:hover,:focus {
    color: #ffffff;
    background: #ff0000;
    border: 1px solid #ff0000;
    text-shadow: 0 0 5px #ffffff,
                0 0 10px #ffffff,
                0 0 20px #ffffff;
    box-shadow: 0 0 5px #ff0000,
                0 0 20px #ff0000,
                0 0 50px #ff0000,
                0 0 100px #ff0000;
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
  
  .close:hover {
    background-color: rgba(255, 0, 0, 0.644);
    color: #fff;
  }

.full_Screen
{
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 5;
 
}

</style>