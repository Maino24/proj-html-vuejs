<template>
  <div class="containerMain">

    <div class="backgroundSecUno"> 
      <div class="cardSecUno">
        <SecUnoComp v-for="(elem, index) in arraySecUno"
        :key="index"
        :arrayCardSecUno="elem"/>
      </div>
    </div>
    <div class="backgroundSecDue">
      
        <div class="colonnaSinistra">
          <h5>ABOUT THE NETWORK</h5>
          <h2>The Company</h2>
          <div>For 12 years we have been providing audit and warranty, financial advice, risk advice, taxens and related services to select clients.</div>
          <div class="cardSecDue">
            <SecDueComp v-for="(elem, index) in arraySecDue"
            :key="index"
            :arrayCardSecDue="elem"/>
          </div>
        </div>
      
      <div class="colonnaDestra">
        
      </div>
    </div> 

  </div> 
</template>

<script>

import SecUnoComp from '../components/SecUnoComp.vue'
import SecDueComp from '../components/SecDueComp.vue'

export default {
  name: 'MainComp',
  props: {

  },
  components:{
    SecUnoComp,
    SecDueComp
  },
  data( ){
    return{
       arraySecUno:[
          {name: 'Human Capital', paragrafo: 'Humanizing  business: Harness the power of technology to improve the way people work.'},
          {name: 'Core Business', paragrafo: 'Ita takes innovative approaches to transform, modernize, and run existig platforms.'},
          {name: 'Performance', paragrafo: 'Achieving maximum impact and value from investments in finance and supply chain.'}
       ],
       arraySecDue:[
          {name: 'Tradition', paragrafo: 'Lorem ipsum dolor sit amet consectetur adipiscing elit.'},
          {name: 'Security', paragrafo: 'Lorem ipsum dolor sit amet consectetur adipiscing elit.'},
          {name: 'Certificate', paragrafo: 'Lorem ipsum dolor sit amet consectetur adipiscing elit.'},
          {name: 'Expertise', paragrafo: 'Lorem ipsum dolor sit amet consectetur adipiscing elit.'}
       ],
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
  width: 100%;

  /*-- SEC. UNO --*/

  .backgroundSecUno{
      background-color: rgba(238, 244, 237, 1);  

      .cardSecUno{
        width: 60%;
        margin: auto;
        display: flex;
        padding: 60px 0;
      }
  }

  .backgroundSecDue{
    width: 100%;
    display: flex;
    margin: auto;

    .colonnaSinistra{
      width: calc(100% / 2);
      //height: 600px;
      text-align: left;
      padding: 130px 0;
      padding-left: 200px;
      padding-right: 20px;
      
      .cardSecDue{
        display: flex;
        margin: auto;
        //width: calc(100% / 2);
        flex-wrap: wrap;
      }

    }

    .colonnaDestra{
      background-image: url(../assets/images/about-3.jpg);
      background-size: cover;
      background-position: center;
      width: calc(100% / 2);
      //height: 600px;
    }
  }


 
}
</style>