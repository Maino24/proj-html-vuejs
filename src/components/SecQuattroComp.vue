<template>
    <div class="cardQuattro">
        <h2>{{arrayCardSecQuattro.name}}</h2>
        <span>$</span><span id="number">{{arrayCardSecQuattro.price}}</span><span> / mo</span>
        <ul>
            <li>Standard Accounting</li>
            <li>Platform Access</li>
            <li>Business Orientation</li>
            <li>Dedicated Consultant</li>
            <li>Personal Assistance</li>
        </ul>
    </div>
</template>

<script>
    export default {
        name: 'SecQuattroComp',

        props: {
            arrayCardSecQuattro: Object
        }
    }
</script>

<style lang="scss" scoped>

*{
  padding: 0;
  border: 0;
  box-sizing: border-box;
}

.cardQuattro{
    width: calc(100% / 3);
    margin: auto;
    background-color: white;
    text-align: center;
    #number{
        font-size: 2rem;
    }
    li{
       list-style: none; 
       text-align: left;
       padding: 5px 0;
    }
    
}

</style>