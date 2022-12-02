<template>
  <div class="containerHeader">
    <div id="containerHeaderTop">
      <div id="contattiHeader">
        <div>{{rightSide}}</div>
        <div>{{leftSide.phone}}</div>  
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HeaderComp',
  props: {
  rightSide: String,
  leftSide: Object,
  
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
}






</style>
