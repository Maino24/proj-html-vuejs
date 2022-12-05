<template>
    <div class="card8">
        <h2 class="title8">{{arrayCardSecOtto.name}}</h2>
        <ul>
            <li class="liSpace">{{arrayCardSecOtto.li1}}</li>
            <li class="liSpace">{{arrayCardSecOtto.li2}}</li>
            <li class="liSpace">{{arrayCardSecOtto.li3}}</li>
            <li class="liSpace">{{arrayCardSecOtto.li4}}</li>
            <li class="liSpace">{{arrayCardSecOtto.li5}}</li>
            <li class="liSpace">{{arrayCardSecOtto.li6}}</li>
        </ul>
    </div>
</template>

<script>
    export default {
        name: 'SecOttoComp',
        props:{
            arrayCardSecOtto: Object
        }
    }
</script>

<style lang="scss" scoped>
*{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
}

.card8{
    width: calc(100% / 3);
    color: white;
    padding: 30px;
    background-color: rgba(25, 25, 31, 1);
    margin: 0 10px;
    border-radius: 5px;
    .title8{
        padding-bottom: 20px;
    }
    .liSpace{
        list-style: none;
        padding-top: 10px;
    }
}

</style>