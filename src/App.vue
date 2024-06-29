<template>
  
  <v-app :style="{background: $vuetify.theme.themes.dark.colors.f}">
    <!-- <Google_sign/> -->
    <!-- <LoginVue/> -->
    <!-- <OtpVue/> -->
    <v-row  v-if ="isLoader"
    class="d-flex">
  <v-col sm-col="12" md-col="12">
    <Loader1Vue/>
  </v-col>
</v-row>

    <v-row v-else class="d-flex">
  <v-col sm-col="12" md-col="12">
    <Sidebar v-if="userData" :username="userData.userName"/>
  </v-col>
  <v-col>
 <v-main class="main" >
   <v-divider/>
   <v-divider/><v-divider/>
   
   <!-- <LandingPage/> -->
  <Caursal/>
  <Ntabs/>
  
  <!-- <Navbar_btm/> -->
</v-main>
</v-col>
</v-row>
  </v-app>

</template>

<script >

import Navbar_btm from './components/Navbar_btm.vue'
import LandingPage from './components/LandingPage.vue'
import Ntabs from './components/Ntabs.vue'
import Caursal from './components/Caursal.vue'
import Sidebar from './components/Sidebar.vue'
import Google_sign from './views/Google_sign.vue'
import LoginVue from './views/Login.vue'
import Loader1Vue from './views/Loader1.vue'




  export default{
  
    name:'App',
    components:{ Navbar_btm, Ntabs, LandingPage,Loader1, Caursal,Sidebar, Google_sign,LoginVue},
    data () {
      return {
        isLoader:true,
        drawer: true,
        items: [
          { title: 'Home', icon: 'mdi-home-city' },
          { title: 'My Account', icon: 'mdi-account' },
          { title: 'Users', icon: 'mdi-account-group-outline' },
        ],
        rail: true,
      }
    },
    computed: {
    userData() {
      try {
        // Parse JSON string from local storage
        const storedData = JSON.parse(localStorage.getItem('userData'));
        if (storedData.token) {
          this.isLoader=false
          return storedData;
        } 
        
        else {
          this.isLoader=false
          return null; 
        }
      } catch (error) {
        console.error('Error parsing user data:', error);
        this.isLoader=false
        return null; // Return null in case of parsing error
      }
    }
  }

  }
</script>
<style>
/* Adjust z-index values here */
.main {
  position: relative;
  z-index:1 ;
}

.Sidebar {
  position: relative;
  z-index: 4;
}
</style>