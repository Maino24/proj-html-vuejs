<template>
  <div class="containerHeader">
    <div id="containerHeaderTop">
      <div id="contattiHeader">
        <div>{{headerTop.time}}</div>
        <div>{{headerTop.phone}}</div>  
        <div>{{headerTop.email}}</div>  
      </div>
    </div>

    <div>
      <HeaderBottom v-for="(elem, index) in headerBottom"
        :key="index"
        :cardHeader="elem"/>
    </div>

  </div>
</template>

<script>
import HeaderBottom from '../components/headerBottom/HeaderBottom.vue'

export default {
  name: 'HeaderComp',

  props: {
  headerTop: Object,
  headerBottom: Array
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
  height: 600px;
  background-image: url(../assets/hero-image.png);
  background-size: cover;
  background-repeat: no-repeat;
  background-position: bottom;
}






</style>
