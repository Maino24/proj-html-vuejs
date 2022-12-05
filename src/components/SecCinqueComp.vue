<template>
    <div class="cardCinque">
       <!--- <img :src="'../assets/images/${{arrayCardSecCinque.img}}'" alt="">-->
        <p>{{arrayCardSecCinque.name}}</p>
        <img :src="require(`../assets/images/${arrayCardSecCinque.img}`)" alt="">
    </div>
</template>

<script>

    export default {
        name: 'SecCinqueComp',

        props: {
            arrayCardSecCinque: Object
        }
    }   
</script>

<style lang="scss" scoped>

.cardCinque{
    width: calc(100% / 3);
    //background-image: url(../assets/images/news-1.jpg);
}

</style>