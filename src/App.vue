<template>
  <div id="app">
    <HeaderComp :headerTop="headerTop"  :headerBottom="headerBottom"/>
    <MainComp/>
    <FooterComp/>
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
    FooterComp
  },

  data(){
    return{

      headerTop:{
        time: 'Open Hours: Mon - Sat - 9.00 - 18.00',
        phone: '+1 (305) 1234-5678',
        email: 'hello@example.com'
      } ,
      
      //icone

       headerBottom: [
        {name: 'Foo1', link: 'Bar1'}
       ]
       //es.  
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
