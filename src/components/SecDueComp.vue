<template>
    <div class="containerCards">
         
            <div class="cardSecDue2">
                <div class="iconTitle">
                    <i class="icona" :class="`${arrayCardSecDue.icona}`"></i>
                    <div>{{arrayCardSecDue.name}}</div>
                </div>
                <div class="parag">{{arrayCardSecDue.paragrafo}}</div>
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
    width: calc(100% / 2);
    //border: 1px solid black;
    margin-top: 40px;
    padding-right: 20px;
  .iconTitle{
    display: flex;
    justify-items: center;
    font-size: 1.5rem;
    padding-bottom: 15px;
  }
  .icona{
    color: rgba(7, 155, 168, 1);
    padding-right: 10px;
  }
  .parag{
    color: rgb(137, 138, 141);
  }
  
}

</style>