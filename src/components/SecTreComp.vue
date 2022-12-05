<template>
    <div class="cardTre">
        <h2 id="title">{{arrayCardSecTre.name}}</h2>
        <div>{{arrayCardSecTre.paragrafo}}</div>
        <button id="buttonCard">READ MORE</button>
    </div>
</template>

<script>
    export default {
        name: 'SecDueComp',

        props:{
            arrayCardSecTre: Object
        }
    }
</script>

<style lang="scss" scoped>

*{
  padding: 0;
  border: 0;
  box-sizing: border-box;
}

.cardTre{
    width: calc((100% / 3) - 40px);
    background-color: rgb(38, 38, 47);
    padding: 20px;
    margin: 20px 0;

    #buttonCard{
        background-color: rgb(38, 38, 47);
        color: white;
        padding: 5px 15px;
        border: 3px solid rgba(13, 90, 93, 1);
        border-radius: 5px;
        margin-top: 20px;
    }


}

</style>