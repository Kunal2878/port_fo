<template>
  <v-app class="full-screen" :style="{background: $vuetify.theme.themes.dark.colors.trans }">
  <v-card>
    <v-toolbar color="#111111">
      <v-app-bar-nav-icon></v-app-bar-nav-icon>

      <v-toolbar-title>Your Dashboard</v-toolbar-title>

      <v-spacer></v-spacer>

      <v-btn icon>
        <v-icon>mdi-magnify</v-icon>
      </v-btn>

      <v-btn icon>
        <v-icon>mdi-dots-vertical</v-icon>
      </v-btn>

      <template v-slot:extension>
        <v-tabs
          v-model="tab"
          align-tabs="title"
          
        >
          <v-tab
          color="#111111"
          class="text-white"
            v-for="item in items"
            :key="item"
            @click="appComponent=item"
           
           
          >
            {{ item }}
          </v-tab>
        </v-tabs>
      </template>
    </v-toolbar>

    <v-window v-model="curr">
      <v-window-item
        v-for="item in items"
        :key="item"
        @click="appComponent = item"
        

        
      >
        <v-card flat
        color="#111111">
          <v-card-text>
          <component :is="appComponent"/>
          <!-- <Tshirt/> -->
          </v-card-text>
        </v-card>
      </v-window-item>
    </v-window>
    <Tshirt v-if="false"/>
    <ShoesVue v-if="false"/>
    <EyewearVue v-if="false"/>
    <WristwatchVue v-if="false"/>
  </v-card>
  </v-app>
</template>

<script>
 import Tshirt from './Tshirt.vue';

import Shoes from './Shoes.vue';
import Eyewear from './Eyewear.vue';
import Wristwatch from './Wristwatch.vue';

export default {
  components:{Tshirt,Shoes,Eyewear,Wristwatch},
  data() {
        return {

            appComponent: Tshirt,
           curr : Tshirt,
            items: [
                "Tshirt",
                "Shoes",
                "Eyewear",
                "Wristwatch"
            ],
        };
    },
    
}
</script>
<style>
.full-screen{
  z-index: 1;
}

</style>