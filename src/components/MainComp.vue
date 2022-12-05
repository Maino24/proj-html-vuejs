<template>
  <div class="containerMain">
    <div class="backgroundSecUno"> 
      <div class="cardSecUno">
        <SecUnoComp v-for="(elem, index) in arraySecUno"
        :key="index"
        :arrayCardSecUno="elem"/>
      </div>
    </div>
  </div> 
</template>

<script>

import SecUnoComp from '../components/SecUnoComp.vue'

export default {
  name: 'MainComp',
  props: {

  },
  components:{
    SecUnoComp
  },
  data( ){
    return{
       arraySecUno:[
          {name: 'Human Capital', paragrafo: 'Humanizing  business: Harness the power of technology to improve the way people work.'},
          {name: 'Core Business', paragrafo: 'Ita takes innovative approaches to transform, modernize, and run existig platforms.'},
          {name: 'Performance', paragrafo: 'Achieving maximum impact and value from investments in finance and supply chain.'}
       ]
    }
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

.containerMain{
  
}

 .backgroundSecUno{
    background-color: rgba(238, 244, 237, 1);  
  }

 .cardSecUno{
    width: 60%;
    margin: auto;
    display: flex;
    padding: 60px 0;
  }

</style>