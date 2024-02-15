<template>
  <v-sheet
    class="mx-auto"
    elevation="8"
    max-width="auto"
    height="auto"
    color="black"
  >
    <v-slide-group
      v-model="model"
      class="pa-4"
      center-active
      show-arrows
    >
      <v-slide-group-item
        v-for="n in 2"
        :key="n"
        v-slot="{ isSelected, toggle }"
      >
        <v-card
          :color="isSelected ? 'primary' : 'grey-lighten-1'"
          class="ma-4"
          height="auto"
          width="300"
        
        >
        

          <v-card width="300">
        <v-img
          height="200"
          width="auto"
          src="https://cdn.pixabay.com/photo/2020/07/12/07/47/bee-5396362_1280.jpg"
          cover
          class="text-white"
        >
          <v-toolbar
            color="rgba(0, 0, 0, 0)"
            theme="dark"
          >
            <template v-slot:prepend>
              <v-btn icon="$menu"></v-btn>
            </template>

            <v-toolbar-title class="text-h6">
              Messages
            </v-toolbar-title>

            <template v-slot:append>
              <v-btn icon="mdi-dots-vertical"></v-btn>
            </template>
          </v-toolbar>
        </v-img>

        <v-card-text>
          <div class="font-weight-bold ms-1 mb-2">
            Today
          </div>
          <div v-for="m in messages" :key="m.id">
            <div v-for="i in 1">
              <li v-if="m[i].id=messages[i].id">
              
                
              </li>

            </div>
          </div>

          <!-- <v-timeline density="compact" align="start">
            <v-timeline-item
            
              v-for="n in 3"
              :key="messages.id"
            
              
              size="x-small"
            >
              <div class="mb-4">
                <div class="font-weight-normal"
                >
                <strong>{{ message[0].from }}</strong> @{{ message[0].time }}
                {{ messages.id }}
              </div >
              
                <div>{{ messages[messages.id].name}}</div>
              </div>
            </v-timeline-item>
          </v-timeline> -->
        </v-card-text>
      </v-card>
        </v-card>
      </v-slide-group-item>
    </v-slide-group>
  </v-sheet>
</template>
<script>
// import Shirt from './Shirt.vue';
  export default {
    components:{},
    data: () => ({
      model: null,
      messages: [
        {id:0,
          from: 'You',
          message: `Sure, I'll see you later.`,
          time: '10:42am',
          color: 'deep-green-lighten-1',
          name:'brad'
          
        },
        { id:1,
          from: 'You',
          message: `Sure, I'll see you later.`,
          time: '20:42am',
          color: 'deep-purple-lighten-1',
          name:'john'
          
        }
        // [{
        //   from: 'You',
        //   message: `Sure, I'll see you later.`,
        //   time: '10:42am',
        //   color: 'deep-purple-lighten-1',
          
        // }],
        // [{
        //   from: 'You',
        //   message: `Sure, I'll see you later.`,
        //   time: '10:42am',
        //   color: 'deep-purple-lighten-1',
          
        // }],
        // [{
        //   from: 'You',
        //   message: `Sure, I'll see you later.`,
        //   time: '10:42am',
        //   color: 'deep-purple-lighten-1',
          
        // }],
        // [{
        //   from: 'You',
        //   message: `Sure, I'll see you later.`,
        //   time: '10:42am',
        //   color: 'deep-purple-lighten-1',
          
        // }],
        // [{
        //   from: 'You',
        //   message: `Sure, I'll see you later.`,
        //   time: '10:42am',
        //   color: 'deep-purple-lighten-1',
          
        // }],
        // [{
        //   from: 'You',
        //   message: `Sure, I'll see you later.`,
        //   time: '10:42am',
        //   color: 'deep-purple-lighten-1',
          
        // }],
        // [{
        //   from: 'You',
        //   message: `Sure, I'll see you later.`,
        //   time: '10:42am',
        //   color: 'deep-purple-lighten-1',
          
        // }],
        // [{
        //   from: 'You',
        //   message: `Sure, I'll see you later.`,
        //   time: '10:42am',
        //   color: 'deep-purple-lighten-1',
          
        // }],
        // [{
        //   from: 'You',
        //   message: `Sure, I'll see you later.`,
        //   time: '10:42am',
        //   color: 'deep-purple-lighten-1',
          
        // }],
        // [{
        //   from: 'You',
        //   message: `Sure, I'll see you later.`,
        //   time: '10:42am',
        //   color: 'deep-purple-lighten-1',
          
        // }],
        // [{
        //   from: 'You',
        //   message: `Sure, I'll see you later.`,
        //   time: '10:42am',
        //   color: 'deep-purple-lighten-1',
          
        // }],
        
        

      
      ],
    }),
  }
</script>