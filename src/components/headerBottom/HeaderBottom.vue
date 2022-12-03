<template>
    <div class="">
      <div>  
        {{headerMenu.name}}
      </div>
    </div>
</template>

<script>
   export default {
        name: 'HeaderBottom',

        props:{
            headerMenu: Array
        }    
    }
</script>

<style lang="scss" scoped>



</style>