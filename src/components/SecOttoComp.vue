<template>
    <div class="card8">
        <h2 class="title8">{{arrayCardSecOtto.name}}</h2>
        <ul>
            <li class="liSpace"><i class="space fa-solid fa-chevron-right"></i>{{arrayCardSecOtto.li1}}</li>
            <li class="liSpace"><i class="space fa-solid fa-chevron-right"></i>{{arrayCardSecOtto.li2}}</li>
            <li class="liSpace"><i class="space fa-solid fa-chevron-right"></i>{{arrayCardSecOtto.li3}}</li>
            <li class="liSpace"><i class="space fa-solid fa-chevron-right"></i>{{arrayCardSecOtto.li4}}</li>
            <li class="liSpace"><i class="space fa-solid fa-chevron-right"></i>{{arrayCardSecOtto.li5}}</li>
            <li class="liSpace"><i class="space fa-solid fa-chevron-right"></i>{{arrayCardSecOtto.li6}}</li>
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
    color: rgba(192, 196, 208, 1);
    padding: 30px;
    background-color: rgba(25, 25, 31, 1);
    margin: 0 9px;
    border-radius: 5px;
    .title8{
        padding-bottom: 20px;
        color: white;
    }
    .liSpace{
        list-style: none;
        padding-top: 10px;
    }
    .space{
        padding-right: 5px;
    }
}

</style>