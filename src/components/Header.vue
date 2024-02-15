<template>
  
   <v-app-bar
    style="padding: 0px 90px;"
    elevation="6"
   light
    elevate-on-scroll
    
    >
<v-tool-bar-title>Shopsmrt</v-tool-bar-title>
<v-spacer/>

<v-list  class="d-flex align-center ">
  <v-list-item link v-for="(menu,index) in menus" :key="index" :to="menu.route">
    <v-list-item-title>{{ menu.title }}</v-list-item-title>
</v-list-item>
<v-btn>
  <v-icon icon="mdi-magnify" />
  </v-btn>
</v-list>
    </v-app-bar>
 
</template>
<script>
  export default{
    name:'Header',
    data(){
return{
  menus:[
    {title:'Home',route:'home'},
    {title:'About Us',route:'aboutus'},
    {title:'Contact Us',route:'contactus'},
    {title:'Pricing',route:'pricing'}
    ]
}
    }
  }
</script>