<template>
  <div class="sec2back">
    <SecDueComp v-for="(elem, index) in arraySec2"
    :key="index"
    :cardSec2='elem'/>
    
  </div>
</template>

<script>

import SecDueComp from './section/SecDueComp.vue'


export default {
  name: 'MainComp',
  props: {
   arraySec2: Array
  },
  components:{
    SecDueComp
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

.sec2back{
  background-color: purple;
  height: 100px;
}


</style>