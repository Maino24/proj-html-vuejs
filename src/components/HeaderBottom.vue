<template>
        <ul class="cl">
            <li class="lista">{{headerMenu.name}}</li>
        </ul> 
</template>

<script>
    export default {
        name: 'HeaderBottom',

        props:{
            headerMenu: Object
        }
    }
</script>

<style lang="scss" scoped>

*{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
}

.cl{
    padding-right: 20px;
    
}

    .lista{
        list-style: none;
        color: white;
        font-size: 1rem;
        padding:  10px 2px;
        
    }



</style>