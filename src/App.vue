<template>
  <div id="app">
    <HeaderComp :headerTop="headerTop"  :headerMenu="headerMenu"/>
    <MainComp   :sec2="arraySec2"/>
    <FooterComp/>
    <SecDueComp/>
  </div>
</template>

<script>
import HeaderComp from './components/HeaderComp.vue'
import MainComp from './components/MainComp.vue'
import FooterComp from './components/FooterComp.vue'
import SecDueComp from './components/section/SecDueComp.vue'

export default {
  name: 'App',
  components: {
    HeaderComp,
    MainComp,
    FooterComp, 
    SecDueComp
  },

  data(){
    return{

      headerTop:{
        time: 'Open Hours: Mon - Sat - 9.00 - 18.00',
        phone: '+1 (305) 1234-5678',
        email: 'hello@example.com'
      } ,

      headerMenu: [
        {name: 'HOME'},
        {name: 'ABOUT'},
        {name: 'SERVICES'},
        {name: 'PRICING'},
        {name: 'BLOG'},

      ],
      
      //icone

    /*  headerBottom:{
        logo: 'logo-light.png',
        nav: '',
        button1: '../assets/hover-button1.png',
        title1: 'LEAD',
        font: '',
        title2:'COSTUMER',
        paragrafo: 'Successful strategies require data analysis, creativity and costomer focus, taking advantage of the latest technologies to offer excellent services.',
        button2: '../assets/hover-button2.png',
        button3: '../assets/hover-button3.png'
      },*/

    //   headerBottom: [
     //   {name: 'Foo1', link: '../asstes/hero-image.png'}
      // ]
       //es.  


       /* ----- ARRAY SECONDA SEZIONE ----- */
       arraySec2:[
          {name: 'Human Capital', paragrafo: 'Humanizing  business: Harness the power of technology to improve the way people work.'},
          {name: 'Core Business', paragrafo: 'Ita takes innovative approaches to transform, modernize, and run existig platforms.'},
          {name: 'Performance', paragrafo: 'Achieving maximum impact and value from investments in finance and supply chain.'}
       ]
    }
  }
}
</script>

<style lang="scss">

*{
  padding: 0;
  border: 0;
  box-sizing: border-box;
}


</style>
