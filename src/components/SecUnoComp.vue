<template>
    <div class="cardSecUno">
        <div>
            <h4>{{arrayCardSecUno.name}}</h4>
            <p>{{arrayCardSecUno.paragrafo}}</p>
        </div>
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

.cardSecUno{
    
}

</style>