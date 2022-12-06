<template>
  <div class="containerHeader">
    <div id="containerHeaderTop">
      <div id="contattiHeader">
        <div>{{headerTop.time}}</div>
        <div>{{headerTop.phone}}</div>  
        <div>{{headerTop.email}}</div> 
        <i class="fa-solid fa-magnifying-glass"></i> 
      </div>
    </div>
    <div id="containerHeaderBottom">
      <div class="containerContent">
        <img id="logoH" src="../assets/logo-light.png" alt="">
        
        <div class="contaierLista">
          <HeaderBottom
            v-for="(elem, index) in headerMenu" 
            :key="index"
            :headerMenu='elem'/>
        
        <button class="buttonGet">GET IN TOUCH</button>
        </div>
      </div>
      <div class="containerInferiore">
        <h1>Lead <span class="wordBack">Costumer</span></h1>
        <p class="parag">Successful strategies require data analysis, creativity and costumer focus, taking advantage of the latest technologies to offer excellent services.</p>
        <button class="buttonGet">GET IN TOUCH</button>
        <button class="buttonRead">READ MORE</button>
      </div>
     </div>
     
  </div>  
</template>

<script>

import HeaderBottom from '../components/HeaderBottom.vue'
/* import specific icons */
  

  

export default {
  name: 'HeaderComp',

  props: {
  headerTop: Object,
  headerMenu: Array
  },
  
  components: {
    HeaderBottom
  }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

*{
  padding: 0;
  border: 0;
  box-sizing: border-box;
}

#containerHeaderTop{
  width: 100%;
  height: 50px;
  background-color: rgba(33, 51, 62, 1);
  color: #e3e7df;

  #contattiHeader{
    width: 50%;
    display: flex;
    margin: auto;
    justify-content: space-between;
    padding: 15px 0;
    
  }

}

#containerHeaderBottom{
  //height: 600px;
  background: rgba(0,0,0,0.7)url(../assets/hero-image.png);
  background-size: cover;
  background-repeat: no-repeat;
  background-position: bottom;
  //filter: brightness(80%);
 background-blend-mode: darken;
 

  .containerContent{
    width: 60%;
    margin: auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-top: 50px;
    padding-bottom: 150px;
    .buttonGet{
      color: white;
      background-color: rgba(5, 130, 131, 1);
      padding: 10px 20px;
      border-radius: 5px;
    }
  }

  #logoH{
    width: 150px;
    //border: 2px solid black;
  }

  .contaierLista{
    display: flex;
    flex-direction: row;
    
    padding-left: 100px;
  }
  .containerInferiore{
    width: 60%;
    margin: auto;
    color: white;
    text-align: center;
    padding-bottom: 200px;
    .buttonGet{
      color: white;
      background-color: rgba(5, 130, 131, 1);
      padding: 15px 20px;
      border-radius: 5px;
      margin-right: 20px;
    }
    .wordBack{
      background: rgba(5, 130, 131, 0.2);
      padding: 5px;
    }

    .parag{
      padding: 0 150px;
      padding-bottom: 40px;
    }
    .buttonRead{
      color: white;
      background: none;
      border: 3px solid rgba(5, 130, 131, 1);
      padding: 10px 20px;
      border-radius: 5px;
    }
    h1{
      font-size: 4rem;
      font-weight: bold;
    }
  }

}






</style>
