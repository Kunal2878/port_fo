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
                          <div :style="{ height:'48px' }" class="bg-brown-darken-3 rounded-xl rounded-be-0 text-white ml-4"><span class="d-flex justify-center ma-2 pa-2 text-center">{{ slide.title}}</span></div>
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
                        <div :style="{ height:'48px' }" class="bg-brown-darken-3 rounded-xl rounded-be-0 text-white ml-4"><span class="d-flex justify-center ma-2 pa-2 text-center">{{ slide.t}}</span></div>
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
  name:'Tshirt',
  data: () => ({
    slides: [
      {
        title: 'TERRA PC-BUSINESS ffgghh 5050S',
        
       image: 'bz_2018.png' ,
       
        price: 559
      },
      {
        title: 'TERRA PC-BUSINESS 5000',
        image: 'Argentina_2018.png',
        price: 609
      },
      {
        title: 'TERRA PC-Micro 6000SE SILENT GREENLINE ',
        image: 'f_m_2018.png',
        price: 689
      },
      {
        title: 'HP ENVY 5030 multifunction printer',
        image: 'mexico_2018.png',
        price: 66
      },
      {
        title: 'TERRA PC-BUSINESS 5050S',
        image: 'russia_2018.png',
        price: 559
      },
      {
        title: 'TERRA PC-BUSINESS 5000',
        image: 'germany_fc.png',
        price: 609
      },
      {
        title: 'TERRA PC-Micro 6000SE SILENT GREENLINE ',
        image: 'peru_2018.png',
        price: 689
      },
      {
        title: 'HP ENVY 5030 multifunction printer',
        image: 'Netherland_fc.png',
        price: 66
      },
      {
        title: 'HP ENVY 5030 multifunction printer',
        image: 'crotia_2018.png',
        price: 66
      },

    ],
    slides2:[

      
      {
        t: 'HP ENVY 5030 multifunction printer',
        i: 'sports_wear.png',
        p: 66
      },
      {
        t: 'HP ENVY 5030 multifunction printer',
        i: 'real_madrid.png',
        p: 66
      },
      {
        t: 'HP ENVY 5030 multifunction printer',
        i: 'paris_saint_fc.png',
        p: 66
      },
      {
        t: 'HP ENVY 5030 multifunction printer',
        i: 'cyclic_sport.png',
        p: 66
      },
      {
        t: 'HP ENVY 5030 multifunction printer',
        i: 'fc_bayan_munich.png',
        p: 66
      },
      {
        t: 'HP ENVY 5030 multifunction printer',
        i: 'paris_saint_fc.png',
        p: 66
      },
      {
        t: 'HP ENVY 5030 multifunction printer',
        i: 'fc_bayan_munich.png',
        p: 66
      },
      {
        t: 'HP ENVY 5030 multifunction printer',
        i: 'fc_barcelona.png',
        p: 66
      },
      {
        t: 'HP ENVY 5030 multifunction printer',
        i: 'australia_e_sports.png',
        p: 66
      },
      {
        t: 'HP ENVY 5030 multifunction printer',
        i: 'crotia_2018.png',
        p: 66
      },
      
     
    
    ]
  })
}




</script>