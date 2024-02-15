<!-- <template>
  <v-container >
    <v-row justify="space-around">
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

          <v-timeline density="compact" align="start">
            <v-timeline-item
              v-for="message in messages"
              :key="message.time"
              :dot-color="message.color"
              size="x-small"
            >
              <div class="mb-4">
                <div class="font-weight-normal">
                  <strong>{{ message.from }}</strong> @{{ message.time }}
                </div>
                <div>{{ message.message }}</div>
              </div>
            </v-timeline-item>
          </v-timeline>
        </v-card-text>
      </v-card>
    </v-row>
  </v-container>
</template>
<script>
  export default {
    data: () => ({
      messages: [
        {
          from: 'You',
          message: `Sure, I'll see you later.`,
          time: '10:42am',
          color: 'deep-purple-lighten-1',
          
        },
        {
          from: 'John Doe',
          message: 'Yeah, sure. Does 1:00pm work?',
          time: '10:37am',
          color: 'green',
        },
        {
          from: 'You',
          message: 'Did you still want to grab lunch today?',
          time: '9:47am',
          color: 'deep-purple-lighten-1',
        },
      ],
    }),
  }
</script> -->
<template>
  <v-card class="card" @mouseover="cardHover = true" @mouseleave="cardHover = false">
    <v-card class="card2" :class="{ 'hovered': cardHover }" transition="scale-transition">
      <v-form class="form">
        <v-toolbar dense class="heading" color="primary">
          <v-toolbar-title class="white--text">Login</v-toolbar-title>
        </v-toolbar>
        <v-text-field
          v-model="username"
          class="field"
          placeholder="Username"
          autocomplete="off"
          outlined
          dense
        >
          <template v-slot:prepend>
            <v-icon class="input-icon">mdi-account</v-icon>
          </template>
        </v-text-field>
        <v-text-field
          v-model="password"
          class="field"
          placeholder="Password"
          outlined
          dense
          type="password"
        >
          <template v-slot:prepend>
            <v-icon class="input-icon">mdi-lock</v-icon>
          </template>
        </v-text-field>
        <v-row class="btn" justify="center">
          <v-btn class="button1" @click="login">Login</v-btn>
          <v-btn class="button2">Sign Up</v-btn>
        </v-row>
        <v-btn class="button3">Forgot Password</v-btn>
      </v-form>
    </v-card>
  </v-card>
</template>

<script>
export default {
  data() {
    return {
      username: '',
      password: '',
      cardHover: false
    };
  },
  methods: {
    login() {
      // Implement your login logic here
    }
  }
};
</script>

<style scoped>
.card {
  background-image: linear-gradient(163deg, #00ff75 0%, #3700ff 100%);
  border-radius: 22px;
  transition: all 0.3s;
}

.card2 {
  border-radius: 0;
  transition: all 0.2s;
}

.card2.hovered {
  transform: scale(0.98);
  border-radius: 20px;
}

.card:hover {
  box-shadow: 0px 0px 30px 1px rgba(0, 255, 117, 0.3);
}

.heading {
  text-align: center;
  margin: 2em;
  font-size: 1.2em;
}

.field {
  border-radius: 25px;
  padding: 0.6em;
  color: white;
  background-color: #171717;
  box-shadow: inset 2px 5px 10px rgb(5, 5, 5);
}

.input-icon {
  height: 1.3em;
  width: 1.3em;
  fill: rgb(0, 255, 200);
}

.btn {
  margin-top: 2.5em;
  margin-bottom: 3em;
}

.button1 {
  padding: 0.5em;
  padding-left: 1.1em;
  padding-right: 1.1em;
  border-radius: 5px;
  margin-right: 0.5em;
  transition: 0.4s ease-in-out;
  background-image: linear-gradient(163deg, #00ff75 0%, #3700ff 100%);
  color: rgb(0, 0, 0);
}

.button1:hover {
  background-image: linear-gradient(163deg, #00642f 0%, #13034b 100%);
  color: rgb(0, 255, 200);
}

.button2 {
  padding: 0.5em;
  padding-left: 2.3em;
  padding-right: 2.3em;
  border-radius: 5px;
  transition: 0.4s ease-in-out;
  background-image: linear-gradient(163deg, #00ff75 0%, #3700ff 100%);
  color: rgb(0, 0, 0);
}

.button2:hover {
  background-image: linear-gradient(163deg, #00642f 0%, #13034b 100%);
  color: rgb(0, 255, 200);
}

.button3 {
  padding: 0.5em;
  border-radius: 5px;
  transition: 0.4s ease-in-out;
  background-image: linear-gradient(163deg, #00ff75 0%, #3700ff 100%);
  color: rgb(0, 0, 0);
}

.button3:hover {
  background-image: linear-gradient(163deg, #a00000fa 0%, #d10050 100%);
  color: rgb(255, 255, 255);
}

.v-input__control--outlined {
  background-color: #171717 !important;
}

.v-input__control--outlined input {
  color: rgb(0, 255, 200) !important;
}

.v-input__control--outlined .v-label {
  color: rgb(0, 255, 200) !important;
}

.v-input__prepend-inner .v-icon {
  fill: rgb(0, 255, 200) !important;
}
</style>
