<template>
  <div id="app">
    <HeaderComp :headerTop="headerTop"  :headerMenu="headerMenu"/>
    <MainComp/>
    <FooterComp :footer="footer"/>
  </div>
</template>

<script>
import HeaderComp from './components/HeaderComp.vue'
import MainComp from './components/MainComp.vue'
import FooterComp from './components/FooterComp.vue'

export default {
  name: 'App',
  components: {
    HeaderComp,
    MainComp,
    FooterComp, 
    
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

      footer:{
        piracy: 'Enjoy the low price. We are tracking any intention of piracy',
        year: '2020 NEXGEN is Proudly powered by ',
        codings: 'Codingds',
        point: '.'
      },
      
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

       
       //es.  


       /* ----- ARRAY SECONDA SEZIONE ----- */
      
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
