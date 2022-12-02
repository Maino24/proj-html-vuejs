<template>
  <div id="app">
    <HeaderComp :rightSide="headerRightT" :leftSide="headerLeftT"/>
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

      headerRightT: 'Open Hours: Mon - Sat - 9.00 - 18.00',
      
      //icone

      headerLeftT: {
       phone: '+1 (305) 1234-5678',
       email: 'hello@example.com'
      },  
       //es.  {name: 'Foo1', 'link': 'Bar1'}
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
