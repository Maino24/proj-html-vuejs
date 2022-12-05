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

    <!--- SEC. TRE -->
    <div class="backgroundSecTre">
      <div class="cardSecTre3">
        <h5 id="our">OUR BUSINESS AREAS</h5>
        <h2>Excellence in Services</h2>
        <div class="p-b3">
          <p class="p">We are leaders in providing consultancy services with a set of cutting-edge technologies and a team of experienced and renowed professionals. These are some options that you can hire.</p>
          <button class="b">SEE ALL</button>
        </div>
        <div class="cardSecTre">
        <SecTreComp v-for="(elem, index) in arraySecTre"
              :key="index"
              :arrayCardSecTre="elem"/>
        </div>
      </div>
    </div>



  </div> 
</template>

<script>

import SecUnoComp from '../components/SecUnoComp.vue'
import SecDueComp from '../components/SecDueComp.vue'
import SecTreComp from '../components/SecTreComp.vue'

export default {
  name: 'MainComp',
  props: {

  },
  components:{
    SecUnoComp,
    SecDueComp,
    SecTreComp
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
       arraySecTre:[
          {name: 'Audit', paragrafo: 'Lorem ipsum dolor sit amet consectetur adipiscing elit.',},
          {name: 'Financial Advisory', paragrafo: 'Lorem ipsum dolor sit amet consectetur adipiscing elit.'},
          {name: 'Analytics and M&A', paragrafo: 'Lorem ipsum dolor sit amet consectetur adipiscing elit.'},
          {name: 'Midlle Marketing', paragrafo: 'Lorem ipsum dolor sit amet consectetur adipiscing elit.'},
          {name: 'Legal Consulting', paragrafo: 'Lorem ipsum dolor sit amet consectetur adipiscing elit.'},
          {name: 'Regulatory Risk', paragrafo: 'Lorem ipsum dolor sit amet consectetur adipiscing elit.'},
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

  /*-- SEC. DUE --*/

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

  /*-- SEC. TRE --*/
  .backgroundSecTre{
    
    background-color: rgba(17, 17, 23, 1);

  .cardSecTre3{
      width: 60%;
      margin: auto;
      color: white;
      padding: 40px 0;
    }

    .cardSecTre{
      display: flex;
      margin: auto;
      flex-wrap: wrap;
      justify-content: space-between;
    }

    #our{
      color: rgba(7, 155, 168, 1);
    }

    .p-b3{
      display: flex;
      width: 100%;
      justify-content: space-between;
      align-items: center;
      .p{
        width: 75%;
      }
      .b{
        width: 15%;
        height: 20%;
        background-color: rgba(17, 17, 23, 1);
        color: white;
        padding: 5px 8px;
        border: 3px solid rgba(13, 90, 93, 1);
        border-radius: 5px;
      }
    }

  }
  

 
}
</style>