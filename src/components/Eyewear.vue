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
                            <div :style="{ height:'45px' }" class="bg-brown-darken-3 rounded-xl rounded-be-0 text-white ml-4"><span class="d-flex justify-center ma-2 pa-2 text-center">{{ slide.title}}</span></div>
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
                          <div :style="{ height:'45px' }" class="bg-brown-darken-3 rounded-xl rounded-be-0 text-white ml-4"><span class="d-flex justify-center ma-2 pa-2 text-center">{{ slide.t}}</span></div>
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
                
             
                  <v-slide-item v-for="(slide, i) in modern" :key="i">
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
    name:'Eyewear',
    data: () => ({
      slides: [
        {
          title: 'Juibo Purple Blue sunglasses ',
          
         image: 'juibo_sunglass-purple_blue.png' ,
         
          price: 559
        },
        {
          title: 'julliet Rayban sunglasses',
          image: 'julliet_rayban_sunglass.png',
          price: 609
        },
        {
          title: 'Sports Red ultimate eyewear',
          image: 'red_sunglass.png',
          price: 689
        },
        {
          title: 'Oakley blusish green sports sunglass',
          image: 'Oakley_blusish_green_sunglass.png',
          price: 66
        },
        {
          title: 'Oakley jawbeaker purple eyewear',
          image: 'Oakley_jawbeaker_purple.png',
          price: 559
        },
        {
          title: 'Oakley jawbeaker sunglass',
          image: 'oakley_jawbeaker_sunglass.png',
          price: 609
        },
        {
          title: 'Oakley white bluish bicycle eyewear ',
          image: 'Oakley_white_bluish_bicyce_eyewear.png',
          price: 689
        },
      
  
      ],
      slides2:[
  
        
        {
          t: 'Rayban ultimate black eyewear',
          i: 'Rayban_ultimate_black.png',
          p: 66
        },
        {
          t: 'Rayban blue black eyewear',
          i: 'Rayban_blue_black.png',
          p: 66
        },
        {
          t: 'Rayban sun sports eyewear',
          i: 'Rayban_sun_sports.png',
          p: 66
        },
        {
          t: 'Rayban wayfarer red eyewear',
          i: 'rayban_wayfarer_red.png',
          p: 66
        },
        {
          t: 'Rayban wayfarer transparent eyewear',
          i: 'Rayban_wayfarer_transparent.png',
          p: 66
        },
        {
          t: 'Rayban under armour eyewear',
          i: 'Ray_ban_under_armour.png',
          p: 66
        },
        {
          t: 'Rayban black pro sports eyewear',
          i: 'Rayban_black_pro.png',
          p: 66
        },
        {
          t: 'Rayban black sporting eyewear',
          i: 'Rayban_black_sporting.png',
          p: 66
        },
        {
          t: 'blue_ocean_sunglass',
          i: 'blue_ocean_sunglass.png',
          p: 66
        },
        
       
      
      ],
      modern:[
      {
          t: 'Modern brown eyewear',
          i: 'Modern_brown_eyeglasws.png',
          p: 66
        },
      {
          t: 'Modern aviator fashion eyeglasses',
          i: 'modern_aviator_fashion_yeglass.png',
          p: 66
        },
      {
          t: 'Modern black eyeglasses',
          i: 'Modern_black_eyeglasses.png',
          p: 66
        },
      {
          t: 'modern rayban golden eyewear',
          i: 'modern_rayban_golden.png',
          p: 66
        },
      {
          t: 'Aviator black sunglasses',
          i: 'Aviator_black_sunglass.png',
          p: 66
        },
      {
          t: 'aviator sunglass sporty',
          i: 'aviator_sunglass_sports.png',
          p: 66
        },
  
      ]
    })
  }
  
  
  
  
  </script>