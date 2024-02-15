<!-- <template>
    <v-parallax :src="Image" ><Rate/></v-parallax>
  </template>
  <script>

import Rate from './Rate.vue';
export default{
    components:{Rate},
    data() {

return {
    // Image:'landing_page.jpg',
    Image:'Rate.vue'
    };
    }
}
</script> -->
<template>
    <v-container class="bg-surface-variant h-screen w-100"
    >
      <v-row no-gutters class="h-100">
        <v-col cols="6" class="h-100">
          <v-sheet class="pa-2 h-100">
            <CaursalVue/>
          </v-sheet>
        </v-col>
        <v-col cols="6" class="h-100">
          <v-sheet class="pa-2 h-100">
            .v-col-6
          </v-sheet>
        </v-col>
      </v-row>
    </v-container>
  </template>
  <script>
import CaursalVue from './Caursal.vue';

</script>