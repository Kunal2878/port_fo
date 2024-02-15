<!-- <template>
    <div class="pyramid-loader">
  <div class="wrapper">
    <span class="side side1"><img src="australia_e_sports.png"></span>
    <span class="side side2"><img src="adidas_fifa.png"></span>
    <span class="side side3"><img src="starp_clock_sport_watch.png"></span>
    <span class="side side4"><img src="starp_clock_sport_watch.png"></span>
    <span class="shadow"></span>
  </div>  
</div>
</template>
<script>
export default{
    name:'Rate'

}
</script>
<style>
.pyramid-loader {
  position: relative;
  width: 50%;
  height: 600px;
  margin-left: 20%;
  display: block;
  justify-content: center;
  align-items: center;
  transform-style: preserve-3d;
  transform: rotateX(-20deg);
}

.wrapper {
  position: relative;
 
  width: 100%;
  height: 100%;
  transform-style: preserve-3d;
  animation: spin 20s linear infinite;
}

@keyframes spin {
  100% {
    transform: rotateY(360deg);
  }
}

.pyramid-loader .wrapper .side {
  width:500px;
  height:500px;
/* you can choose any gradient or color you want */
  /* background: radial-gradient( #2F2585 10%, #F028FD 70%, #2BDEAC 120%); */
  position: absolute;
  top: 0;
  left:0;
  right: 0;
  bottom: 0;
  margin: auto;
  transform-origin: center top;
  clip-path: polygon(50% 0%, 0% 100%, 100% 100%);
}

.pyramid-loader .wrapper .side1 {
  
  
  transform: rotateZ(-30deg) rotateY(90deg);
  /* background: conic-gradient( #2BDEAC, #F028FD, #D8CCE6, #2F2585); */
  /* background-image: url("australia_e_sports.png"); */
}

.pyramid-loader .wrapper .side1 img{
  width:300px;
  height:250px;
  
  object-fit:cover;
  
}
.pyramid-loader .wrapper .side2 {
 
  transform: rotateZ(30deg) rotateY(90deg);
  /* background: conic-gradient( #2F2585, #D8CCE6, #F028FD, #2BDEAC); */
  /* background-image: url("adidas_fifa.png"); */
}
.pyramid-loader .wrapper .side2 img
{
  width:300px;
  height:250px;
  
  object-fit:cover;
}
.pyramid-loader .wrapper .side3 {
 
  transform: rotateX(30deg);
  /* background-image: url("starp_clock_sport_watch.png"); */
  /* background: conic-gradient( #2F2585, #D8CCE6, #F028FD, #2BDEAC); */
}
.pyramid-loader .wrapper .side3 img{
  width:300px;
  height:250px;
  object-position: center;

}
.pyramid-loader .wrapper .side4 {

  transform: rotateX(-30deg);
  /* background-image: url("Modern_black_eyeglasses.png"); */
  /* background: conic-gradient( #2BDEAC, #F028FD, #D8CCE6, #2F2585); */
}

.pyramid-loader .wrapper .shadow {
  width: 60px;
  height: 60px;
  background: #8B5AD5;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  margin: auto;
  transform: rotateX(90deg) translateZ(-40px);
  filter: blur(12px);
}
</style> -->
<template>
  <div class="pyramid-loader">
    <div class="wrapper">
      <span class="side side1"><img src="australia_e_sports.png"></span>
      <span class="side side2"><img src="adidas_fifa.png"></span>
      <span class="side side3"><img src="starp_clock_sport_watch.png"></span>
      <span class="side side4"><img src="starp_clock_sport_watch.png"></span>
      <span class="shadow"></span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Rate'
}
</script>

<style>
.pyramid-loader {
  position: relative;
  width: 50%;
  height: 600px;
  margin-left: 20%;
  display: block;
  justify-content: center;
  align-items: center;
  transform-style: preserve-3d;
  transform: rotateX(-20deg);
}

.wrapper {
  position: relative;
  width: 100%;
  height: 100%;
  transform-style: preserve-3d;
  animation: spin 20s linear infinite;
}

@keyframes spin {
  100% {
    transform: rotateY(360deg);
  }
}

.pyramid-loader .wrapper .side {
  width: 500px;
  height: 500px;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  margin: auto;
  transform-origin: center top;
  clip-path: polygon(50% 0%, 0% 100%, 100% 100%);
}

.pyramid-loader .wrapper .side1 {
  transform: rotateZ(-30deg) rotateY(90deg);
}

.pyramid-loader .wrapper .side1 img{
  width: 40%;
  height: 40%;
  object-fit: cover;
  margin: 20px;
}

.pyramid-loader .wrapper .side2 {
  transform: rotateZ(30deg) rotateY(90deg);
}

.pyramid-loader .wrapper .side2 img{
  width: 40%;
  height: 40%;
  object-fit: cover;
  margin: 20px;
}

.pyramid-loader .wrapper .side3 {
  transform: rotateX(30deg);
}

.pyramid-loader .wrapper .side3 img{
  width: 40%;
  height: 40%;
  object-fit: cover;
  margin: 20px;
}

.pyramid-loader .wrapper .side4 {
  transform: rotateX(-30deg);
}

.pyramid-loader .wrapper .side4 img{
  width: 80%;
  height: 80%;
  object-fit: cover;
  margin: 20px;
}

.pyramid-loader .wrapper .shadow {
  width: 60px;
  height: 60px;
  background: #8B5AD5;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  margin: auto;
  transform: rotateX(90deg) translateZ(-40px);
  filter: blur(12px);
}
</style>

