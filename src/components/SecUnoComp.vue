<template>
        <div class="cardSecUno1">       
            <i class="icona" :class="`${arrayCardSecUno.icona}`"></i>
            <h2>{{arrayCardSecUno.name}}</h2>
            <div class="p">{{arrayCardSecUno.paragrafo}}</div>
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
    background-color: white;
    width: calc((100% / 3) - 10px);
    padding: 40px;
    border-radius: 5px;
}
.p{
    color: rgb(134, 135, 142);
}
.icona{
    font-size: 1.5rem ; 
    color: rgba(7, 155, 168, 1);
    background-color: rgba(218, 236, 237, 1);
    padding: 10px;
    border-radius: 50%;
}
/*.cardSecUno1{
    width: calc(100% / 3);
    background-color: white;
    //border: 1px solid black;
    border-radius: 10px;
    //text-align: left;
    //margin: 0 20px;
    //padding: 25px;

}*/

</style>