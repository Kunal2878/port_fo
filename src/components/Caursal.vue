<template>
    <v-carousel
      cycle
      height="400"
      hide-delimiters
      :show-arrows="false"
    >
      <v-carousel-item
        v-for="(slide, i) in slides"
        :key="i"
        class="h-100"
        >
        
       <div class="h-100 d-flex justify-center align-center" :style="{ backgroundImage: `url(${colors[i]})`, backgroundSize: 'cover' }">
       
        <v-img height="200" :src="slide" style="float: right;"></v-img>
       <!-- <v-container class="fluid">
  
      </v-container> -->
      <!-- <div class="h-100 " :style="{ backgroundImage: `url(${slide})`, backgroundSize: 'cover' }" > -->

    
</div>

        <!-- <v-sheet
          
          :style=""
          height="100%"
          class="d-flex justify-space-around align-center "
        >
       
          <div class="h1-text">hsjjsjk<br>lxllz</div>
            
               <v-img height="200px" contain :src="slide"></v-img> -->
        <!-- <v-sheet class="d-flex justify-end mb-6 "> -->
     
                <!-- <v-sheet class="ma-2 pa-2"><v-img height="200px" contain :src="slide"></v-img></v-sheet> -->
                
                <!-- </v-sheet> -->
                
               <!-- <v-img class="w-0" height="200px"  ></v-img>
                
                
         
        </v-sheet> -->
      </v-carousel-item>
    </v-carousel>
  </template>

  <script>
  export default {
    data () {
      return {
        colors: [
          // 'indigo',
          // 'warning',
          // 'linear-gradient(rgba(0, 0, 0, 0.5), rgba(52, 179, 241,0.5))'
          's1.jpg',
          'sh1.jpg',
          'w1.jpg',
          'g1.jpg',
          's2.jpg',
          'sh2.jpg',
          'w2.jpg',
          'g2.jpg',
          's3.jpg',
          'sh3.jpg',
          'w3.jpg',
          'g3.jpg'
         
        ],
        slides: [
          'nickiline.png',
          'adidas_cleat_football.png',
          'Gold_aple_watch_series4.png',
          'modern_rayban_golden.png',

          'fc_barcelona.png',
          'adidas_sky.png',
          'Smart_apple_watch_s3.png',
          'Modern_brown_eyeglasws.png',

          'autaralia_riugby.png',
          'adidas_predator.png',
          'Sony_green_smart.png',
          'Modern_black_eyeglasses.png'
        ],
        
      }
    },
  }
</script>


