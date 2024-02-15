<template>
  <v-row justify="center" align="center" class="full_screen mx-2">
    <v-col cols="md-12" class="f2">
      <v-card class="card">
        <v-card class="content">
          <v-card class="back">
            <div class="back-content">
              <v-avatar size="100" outlined rounded>
                <v-img  contain src="nike_airmax_outdoor.png"  class="mt-0" ></v-img>
              </v-avatar>
              <v-row class="mb-3" no-gutters style="width: 100%;" justify="center" align="center">
                <v-col cols="4" class="mr-2"> 
                  <v-text-field v-if="$store.state.isLogin" v-model="$store.state.Username" label="Username" outlined style="width: 100%;"></v-text-field>
    
                  <p>{{ $store.state.Username,$store.state.Email }}</p>
  
                 </v-col>
                <v-col cols="4">
                  <v-text-field v-model="email" label="Email" outlined style="width: 100%;"></v-text-field>
                </v-col>
              </v-row>
              <v-row class="mb-3" no-gutters style="width: 100%;" justify="center" align="center">
                <v-col cols="4" class="mr-2"> 
                  <v-text-field v-model="name" label="Name" outlined></v-text-field>
                </v-col>
                <v-col cols="4" class="mr-2"> 
                  <v-text-field v-model="country" label="Country"  outlined></v-text-field>
                </v-col>
              </v-row>
              <v-row class="mb-3" no-gutters style="width: 100%;" justify="center" align="center">
                <v-col cols="4" class="mr-2"> 
                  <v-text-field v-model="state" label="State"  outlined></v-text-field>
                </v-col>
                <v-col cols="6">
                <!-- <vue-tel-input
                  v-model="mobileNumber"
                  label="Mobile Number"
                  @input="handleMobileInput"
                  outlined
                ></vue-tel-input> -->
                

              </v-col>
         
              </v-row>

           
            </div>
          </v-card>
        </v-card>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>

export default{
  data() {
    return {
      username: "",
      email: "",
      name: "",
      mobileNumber: "",
      address: "",
      country: "",
      state: "",
    };
  },
  methods: {
    
  }

}

</script>

<style scoped>
  .f2 {
    width: 60%;
    height: 80%;
  }
  .card {
    width: 100%;
    height: 100%;
  }
  .content {
    width: 100%;
    height: 100%;
    transform-style: preserve-3d;
    transition: transform 300ms;
    box-shadow: 0px 0px 10px 1px #000000ee;
    border-radius: 5px;
  }
  .back {
    background-color: #151515;
    position: absolute;
    width: 100%;
    height: 100%;
    backface-visibility: hidden;
    -webkit-backface-visibility: hidden;
    border-radius: 5px;
    overflow: hidden;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .back::before {
    position: absolute;
    content: " ";
    display: block;
    width: 100%;
    height: 160%;
    background: linear-gradient(
      90deg,
      transparent,
      #ff9966,
      #ff9966,
      #ff9966,
      #ff9966,
      transparent
    );
    animation: rotation_481 5000ms infinite linear;
  }
  .back-content {
    position: absolute;
    width: 99%;
    height: 99%;
    background-color: #151515;
    border-radius: 5px;
    color: white;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 30px;
  }
  .full_screen {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 4;
  }
  @keyframes rotation_481 {
    0% {
      transform: rotateZ(0deg);
    }
    100% {
      transform: rotateZ(360deg);
    }
  }
</style>
