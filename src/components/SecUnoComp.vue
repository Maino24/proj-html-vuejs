<template>
    <div class="cardSecUno1">
        
        <h2>{{arrayCardSecUno.name}}</h2>
        <div>{{arrayCardSecUno.paragrafo}}</div>
        
    </div>
</template>

<script>

    export default {
        name: 'SecUnoComp',

        props: {
            arrayCardSecUno: Object
        }

    }

</script>

<style lang="scss" scoped>
*{
  padding: 0;
  border: 0;
  box-sizing: border-box;
}

.cardSecUno1{
width: calc(100% / 3);
background-color: white;
//border: 1px solid black;
border-radius: 10px;
text-align: center;
margin: 0 20px;
padding: 20px;
/* --------------- INSERIRE ICONE ------------------*/
}

</style>