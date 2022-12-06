<template>
    <div>
        <div class="backgroundSecUno"> 
            <div class="cardSecUno">
                
                <h2>Human Capital</h2>
                <div>Humanizing  business: Harness the power of technology to improve the way people work.</div>
            </div>
            <div class="cardSecUno">
                <h2>{{arrayCardSecUno.name}}</h2>
                <div>{{arrayCardSecUno.paragrafo}}</div>
            </div>
            <div class="cardSecUno">
                <h2>{{arrayCardSecUno.name}}</h2>
                <div>{{arrayCardSecUno.paragrafo}}</div>
            </div>
        </div>
        
    </div>

 <!---   <div class="cardSecUno1">       
        
        <h2>{{arrayCardSecUno.name}}</h2>
        <div>{{arrayCardSecUno.paragrafo}}</div>
        
    </div>-->
</template>

<script>

    export default {
        name: 'SecUnoComp',

       /* props: {
            arrayCardSecUno: Object
        }*/

    }

</script>

<style lang="scss" scoped>
*{
  padding: 0;
  border: 0;
  box-sizing: border-box;
}

.backgroundSecUno{
      background-color: rgba(238, 244, 237, 1);  

      .cardSecUno{
        width: 60%;
        margin: auto;
        display: flex;
        padding: 60px 0;
      }
}
.cardSecUno1{
width: calc(100% / 3);
background-color: white;
//border: 1px solid black;
border-radius: 10px;
text-align: left;
margin: 0 20px;
padding: 25px;
/* --------------- INSERIRE ICONE ------------------*/
}

</style>