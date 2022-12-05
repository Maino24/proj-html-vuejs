<template>
    <div class="containerCards">
         
            <div class="cardSecDue2">
                <h2>{{arrayCardSecDue.name}}</h2>
                <div>{{arrayCardSecDue.paragrafo}}</div>
            </div>
    </div>    
</template>

<script>
    export default {
        name: 'SecDueComp',

        props:{
            arrayCardSecDue: Object
        }
    
    }
</script>

<style lang="scss" scoped>

*{
  padding: 0;
  border: 0;
  box-sizing: border-box;
}
.containerCards{
    
    border: 1px solid black;
  .cardSecDue2{
   
}
}

</style>