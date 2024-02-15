<template>
        <v-row justify="center" align="center" class="full_screen mx-2">
      <v-col cols="md-12" class="f2 ">
    <div class="fingerprint-loader">
      <v-icon :class="iconClass">mdi-fingerprint</v-icon>
      <div class="scan-line"></div>
    </div>
      </v-col>
    </v-row>
  </template>
  
  <script>
  export default {
    data() {
      return {
        isScanning: true,
      };
    },
    computed: {
      iconClass() {
        return {
          'fingerprint-icon': true,
          'glowing': this.isScanning,
        };
      },
    },
    mounted() {
      this.startScanAnimation();
    },
    methods: {
      startScanAnimation() {
        setInterval(() => {
          this.isScanning = !this.isScanning;
        }, 1000); // Change the interval to control the animation speed
      },
    },
  };
  </script>
  
  <style scoped>
.full_screen {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 4;
  }
  .fingerprint-loader {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100%;
    
  }
  
  .fingerprint-icon {
    font-size: 8rem;
    color: #0fd734;
    animation: glowing 2s infinite;
  }
  
  .glowing {
    text-shadow: 0 0 5px rgba(0, 60, 255, 0.8), 0 0 10px rgba(0, 0, 255, 0.8),
      0 0 20px rgba(8, 0, 255, 0.8);
  }
  
  .scan-line {
  width: 50px;
  height: 2px;
  background-color: #0cabd7;
  margin-top: 10px;
  animation: scan 2s infinite;
}
.f2 {
  background-color: rgba(0, 0, 0, 0.807);
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
  @keyframes scan {
    0%, 100% {
      transform: translateX(-100%);
    }
    50% {
      transform: translateX(100%);
    }
  
  }
  
  @keyframes glowing {
    0% {
      text-shadow: 0 0 5px rgba(0, 176, 255, 0.8), 0 0 10px rgba(123, 0, 255, 0.8),
        0 0 20px rgba(0, 176, 255, 0.8);
    }
    50% {
      text-shadow: 0 0 20px rgba(0, 187, 255, 0.8), 0 0 30px rgba(255, 0, 157, 0.8),
        0 0 40px rgba(0, 176, 255, 0.8);
    }
    100% {
      text-shadow: 0 0 5px rgba(255, 0, 242, 0.8), 0 0 10px rgba(205, 13, 141, 0.8),
        0 0 20px rgba(0, 176, 255, 0.8);
    }
  }
  </style>
  