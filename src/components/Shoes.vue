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
                
             
                  <v-slide-item v-for="(slide, i) in Nike" :key="i" cover>
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
                
             
                  <v-slide-item v-for="(slide, i) in adidas" :key="i">
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
                
             
                  <v-slide-item v-for="(slide, i) in Reebok" :key="i">
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
    name:'Shoes',
    data: () => ({
      Nike: [
        {
          title: 'Nike Golden Magic White Sneaker',
          
         image: 'nike_magic_1.png' ,
         
          price: 559
        },
        {
          title: 'Nike White_black Skateboarding shoes',
          image: 'nike_skate_boardng.png',
          price: 609
        },
        {
          title: 'Nike Air_max Red-White sneakers',
          image: 'nike_air_max_red_w.png',
          price: 689
        },
        {
          title: 'Nike fly_Wear altimate sneakers',
          image: 'nike_fly_wear.png',
          price: 166
        },
        {
          title: 'Nike Full Blue sneakers',
          image: 'nike_bluesneakers.png',
          price: 559
        },
        {
          title: 'Nike Airmax  outdoor Shoes',
          image: 'nike_airmax_outdoor.png',
          price: 609
        },
        {
          title: 'Nike Air force red shoes ',
          image: 'nike_air_force_red.png',
          price: 689
        },
        {
          title: 'Nike White Orange blend sneakers',
          image: 'nike_white_ora.png',
          price: 266
        },
        {
          title: 'Nike Air Max red shoes',
          image: 'nike_air_max_red.png',
          price: 66
        },
        {
          title: 'Nike Black Modern Sneakers ',
          image: 'nike_black.png',
          price: 66
        },
        {
          title: 'Nike Air force red black shoes',
          image: 'nike_air_f.png',
          price: 66
        },
        
        {
          title: 'Nike Black Basketball sneakers',
          image: 'nike_snea_basket.png',
          price: 66
        },
        
      ],
      adidas:[
  
        
        {
          t: 'Adidas Green grass sports footwear',
          i: 'green_grass_adidas_football.png',
          p: 636
        },
        {
          t: 'Adidas cleat light green sports shoes',
          i: 'adidas_cleat_light-green.png',
          p: 166
        },
        {
          t: 'Adidas predator red spots shoes',
          i: 'adidas_predator_red.png',
          p: 666
        },
        {
          t: 'Adidas Lime Claeat classic footwear',
          i: 'adidas_lime_cleat.png',
          p: 266
        },
        {
          t: 'Adidas Cleat ultimate gold footwear',
          i: 'adidas_cleat_football_gold.png',
          p: 666
        },
        {
          t: 'Adidas Sky sports shoes',
          i: 'adidas_sky.png',
          p: 366
        },
        {
          t: 'Adidas Air Red Black sports shoes ',
          i: 'adidas_air_ound.png',
          p: 166
        },
        {
          t: 'Adidas Yellow fifa sportwear',
          i: 'adidas_fifa.png',
          p: 466
        },
        {
          t: 'Adidas Cleat Blue white shoes',
          i: 'adidas_cleat_football.png',
          p: 266
        },
        {
          t: 'Adidas Predator black gold sportswear',
          i: 'adidas_predator.png',
          p: 366
        },
        {
          t: 'Adidas Hello sports shoes ',
          i: 'adidas_hello_sports.png',
          p: 466
        },
        
      ],
      Reebok:[

      
      {
        t: 'Reebok Green Black shoes',
        i: 'Reebok_greeen_black.png',
        p: 696
      },
      {
        t: 'Reebok Ultimate black shoes',
        i: 'reebok_ultimate_black.png',
        p: 66
      },
      {
        t: 'Reebok Blue yellow shoes ',
        i: 'reebok_blue_yellow.png',
        p: 686
      },
      {
        t: 'Reebok Black Dark pink shoes',
        i: 'Reebok_black_pink.png',
        p: 646
      },
      {
        t: 'Reebok black white blend sports_wear',
        i: 'reebok_sports_wear.png',
        p: 166
      },
      {
        t: 'Reebok unpaired black sshoes',
        i: 'unpaired_black.png',
        p: 266
      },
      
    ]
    })
  }
  
  
  
  
  </script>