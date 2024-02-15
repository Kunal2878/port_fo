<template>
    <v-app :style="{background: $vuetify.theme.themes.dark.colors.f}">
      <v-container colors="primary" >
          <v-sheet 
              class="mt-0 mx-0 mr-0"
              elevation="18"
              width="100%"
              height="auto"
              color="black"
          >
              <v-slide-group mobile-break-point="1000"  center-active
              width="100%"
              class="mt-0 mx-0 mr-0"
              cover>
                
             
                  <v-slide-item v-for="(slide, i) in slides" :key="i" cover>
                      <v-card width="300"  color="#111111" class=" ml-xs-2 mr-0 rounded" cover>
                          <v-card-title class="mt-4">
                              <v-img height="200px" contain :src="slide.image"  class="mt-0" ></v-img>
                          </v-card-title>
                          <v-card-text>
                            <div class="d-flex justify-space-around align-center flex-row flex-sm-row ml-xs-2">
                              <b class="ma-xs-2 text-white">{{ slide.price }}€</b>
                              <v-btn
        variant="outlined"
        size="large"
        icon
        color="info"
      >
        <v-icon>mdi-cart</v-icon>
      </v-btn>
                            </div>
                            <div :style="{ height:'45px' }" class=" bg-brown-darken-3 rounded-xl rounded-be-0 text-white ml-4"><span class="d-flex justify-center ma-2 pa-2 text-center">{{ slide.title}}</span></div>
                             <v-divider/>
                          
                            <v-spacer/>
                             
                          </v-card-text>
                      </v-card>
                  </v-slide-item>
              </v-slide-group>
          </v-sheet>
      </v-container>
      <v-divider/>
      <v-container >
          <v-sheet 
              class="mt-0 mx-0"
              elevation="8"
              width="100%"
              height="auto"
              color="black"
          >
              <v-slide-group mobile-break-point="1000"  center-active
              width="100%">
                
             
                  <v-slide-item v-for="(slide, i) in slides2" :key="i">
                      <v-card width="300" class="ma-0" color="#111111" cover>
                          <v-card-title class="d-flex justify-center" cover>
                              <v-img height="200px" contain :src="slide.i"></v-img>
                          </v-card-title > 
                          <v-card-text class=" ma-xs-2 text-white">
                            <div class="d-flex justify-space-around align-center flex-row flex-sm-row">
                              <b class="ma-xs-2 text-lime-accent-1">{{ slide.p }}€</b>
                              <v-btn
                              variant="outlined"
                              size="large"
                              icon
                              color="blue-accent-3"
                              >
                              <v-icon>mdi-cart</v-icon>
                            </v-btn>
                          </div>
                          <div :style="{ height:'45px', alignItems:center}" class="bg-brown-darken-3 rounded-xl rounded-be-0 text-white ml-4"><span class="d-flex justify-center ma-2 pa-2 text-center">{{ slide.t}}</span></div>
                          <v-spacer/>
                             
                          </v-card-text>
                      </v-card>
                  </v-slide-item>
              </v-slide-group>
          </v-sheet>
      </v-container>
      <v-divider/>
      <v-container >
          <v-sheet 
              class="mt-0 mx-0"
              elevation="8"
              width="100%"
              height="auto"
              color="black"
          >
              <v-slide-group mobile-break-point="1000"  center-active
              width="100%">
                
             
                  <v-slide-item v-for="(slide, i) in spartan" :key="i">
                      <v-card width="300" class="ma-0" color="#111111" cover>
                          <v-card-title class="d-flex justify-center" cover>
                              <v-img height="200px" contain :src="slide.i"></v-img>
                          </v-card-title > 
                          <v-card-text class=" ma-xs-2 text-white">
                            <div class="d-flex justify-space-around align-center flex-row flex-sm-row">
                              <b class="ma-xs-2 text-lime-accent-1">{{ slide.p }}€</b>
                              <v-btn
                              variant="outlined"
                              size="large"
                              icon
                              color="blue-accent-3"
                              >
                              <v-icon>mdi-cart</v-icon>
                            </v-btn>
                          </div>
                          <div :style="{ height:'45px' }" class="bg-brown-darken-3 rounded-xl rounded-be-0 text-white ml-4"><span class="d-flex justify-center ma-2 pa-2 text-center">{{ slide.t}}</span></div>
                          <v-spacer/>
                             
                          </v-card-text>
                      </v-card>
                  </v-slide-item>
              </v-slide-group>
          </v-sheet>
      </v-container>
    </v-app>
  </template>
  
  
  
  <!-- <div id="app"></div> -->
  <script>
  // Looking for the v1.5 template?
  // https://codepen.io/johnjleider/pen/GVoaNe
  
  
  
  export default   {
  
    template: '#app-template',
    name:'Wristwatch',
    data: () => ({
      slides: [
        {
          title: 'Apple gold S2 smart watch',
          
         image: 'Apple_gold_smart.png' ,
         
          price: 559
        },
        {
          title: 'Apple blue S3 smart watch',
          image: 'Apple_blue.png',
          price: 609
        },
        {
          title: 'Apple 6s smart watch',
          image: 'Apple_6s_smart.png',
          price: 689
        },
        {
          title: 'Apple black white saart watch',
          image: 'Apple_black_white_saart.png',
          price: 66
        },
        {
          title: 'Apple cream S2 smart watch',
          image: 'Apple_cream_s2.png',
          price: 559
        },
        {
          title: 'Apple lime black smart watch',
          image: 'Apple_lime_black_smart.png',
          price: 609
        },
        {
          title: 'Apple lime sporty watch',
          image: 'Apple_lime_sporty_watch.png',
          price: 689
        },
        {
          title: 'Apple orange sports watch S2',
          image: 'Apple_orange_sports_watch_s2.png',
          price: 66
        },
        {
          title: 'Apple purple S2 smart watch',
          image: 'Apple_purple_s2.png',
          price: 66
        },
        {
          title: 'Apple silver smart watch',
          image: 'Apple_silver_smart.png',
          price: 66
        },
        {
          title: 'Apple ultimate black S4 smart watch',
          image: 'Apple_ultimet_black_s4.png',
          price: 66
        },
  
      ],
      slides2:[
  
        
        {
          t: 'Sony green yellow smart watch',
          i: 'Sony_green_smart.png',
          p: 66
        },
        {
          t: 'Sony black smart watch',
          i: 'Sony_black_smart_watch.png',
          p: 66
        },
        {
          t: 'Sony gear2 android smart watch',
          i: 'Sony_gear2_android.png',
          p: 66
        },
     
        {
          t: 'Sony gray smart watch',
          i: 'Sony_gray_smart.png',
          p: 66
        },
        {
          t: 'Sonyr ound blutooth smart watch',
          i: 'Sony_round_bluthooth.png',
          p: 66
        },
        {
          t: 'Sony smart android watch',
          i: 'Sony_smart_android_watch.png',
          p: 66
        },
        {
          t: 'Sony Xperia smart watch',
          i: 'Sony_Xperia _smart.png',
          p: 66
        },
        {
          t: 'Diving chronogrph sports watch',
          i: 'Diving_chronogrph_sports_watch.png',
          p: 66
        },
      
      ],
      spartan:[

      
      {
        t: 'Venso activity tracker smart watch',
        i: 'venso_activity_.png',
        p: 66
      },
      {
        t: 'Wearable technology activity tracker',
        i: 'wearable_tech_activity.png',
        p: 66
      },
      {
        t: 'Xiaomi band2 activity tracker',
        i: 'Xiaomi_band2_activity.png',
        p: 66
      },
      {
        t: 'Xiaomi Mi band activity tracker',
        i: 'Xiaomi_Mi_band_activity.png',
        p: 66
      },
      {
        t: 'Xiaomi amazfit activity tracker',
        i: 'xiaomi_amazfit_activity.png',
        p: 66
      },
      {
        t: 'starp clock sport watch',
        i: 'starp_clock_sport_watch.png',
        p: 66
      },
   
      {
        t: 'spartan blue sport smart watch',
        i: 'spartan_blue_sport.png',
        p: 66
      },
      {
        t: 'Spartan heart wrist watch',
        i: 'Spartan_heart_wrist.png',
        p: 66
      },
      {
        t: 'fitbit activity tracker smart watch',
        i: 'fitbit_activity.png',
        p: 66
      },
      {
        t: 'fitbit activity fitness tracker smart watch',
        i: 'fitbit_activity_fitness.png',
        p: 66
      },
      
     
    
    ]
    })
  }
  
  
  
  
  </script>