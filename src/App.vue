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

#app{
  width: 100%;
}


</style>
