<template>

  <v-layout   class="overflow-visible " style="height: 56px;margin-bottom: 0px;">
    <v-bottom-navigation
   
      v-model="value"
      :bg-color="color"
      mode="shift"
     
    >
      <v-btn>
        <v-icon>mdi-wallet-travel</v-icon>

        <span>My Orders</span>
      </v-btn>

      <v-btn>
        <v-icon>mdi-magnify</v-icon>

        <span>Search Products</span>
      </v-btn>

      <v-btn>
        <v-icon>mdi-heart</v-icon>

        <span>Favourite</span>
      </v-btn>

      <v-btn>
        <v-icon>mdi-human-female</v-icon>

        <span>Try On</span>
      </v-btn>
    </v-bottom-navigation>
  </v-layout>
</template>
<script>
  export default {
    data: () => ({ value: 1 }),

    computed: {
      color () {
        switch (this.value) {
          case 0: return 'blue-grey'
          case 1: return 'teal'
          case 2: return 'red'
          case 3: return 'indigo'
          default: return 'blue-grey'
        }
      },
    },
  }
</script>