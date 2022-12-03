<template>
  <div class="containerHeader">
    <div id="containerHeaderTop">
      <div id="contattiHeader">
        <div>{{headerTop.time}}</div>
        <div>{{headerTop.phone}}</div>  
        <div>{{headerTop.email}}</div>  
      </div>
    </div>
 <!---   <HeaderBottom
     v-for="(elem, index) in headerMenu" 
     :key="index"
     :headerMenu='elem'/>-->
     <div id="containerHeaderBottom">
      <div class="containerContent">
        <img id="logoH" src="../assets/logo-light.png" alt="">
        
        <div>
          <img id="logoH" src="../assets/hover-button1.png" alt="">
        </div>
      </div>
     </div>
  </div>  
</template>

<script>

export default {
  name: 'HeaderComp',

  props: {
  headerTop: Object,
  headerMenu: Array
  },
  
  components: {

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
  height: 600px;
  background-image: url(../assets/hero-image.png);
  background-size: cover;
  background-repeat: no-repeat;
  background-position: bottom;


  .containerContent{
    width: 60%;
    margin: auto;
    display: flex;
    justify-content: space-between;
  }

  #logoH{
    width: 200px;
    border: 2px solid black;
  }

}






</style>
