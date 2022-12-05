<template>
    <div class="cardCinque">
       <div class="backgroundSecCinque">
        <div class="cardSecCinque5">
            <h5 class="our">OUR EDITORIAL CONTENT</h5>
            <h2>Latest News</h2>
            <div class="pb5">
                <p class="p5">Every week we publish content what is best in the business world.</p>  
                <button class="b5">SEE ALL</button>    
            </div> 
            <div class="containerCardSecCinque">
                <div class="cardSecCinque1">
                    <h4 class="parag">Increasing creativity is possible for everyone</h4>
            <!--- <SecCinqueComp v-for="(elem, index) in arraySecCinque"
                    :key="index"
                    :arrayCardSecCinque="elem"/>-->
                </div>
                <div class="cardSecCinque2">
                    <h4 class="parag">Because market research is part of the business plan</h4>
                </div>
                <div class="cardSecCinque3">
                    <h4 class="parag">Working from home is now a trend</h4>
                </div>
            </div> 
        </div>
    </div>
    </div>
</template>

<script>

    export default {
        name: 'SecCinqueComp',

        props: {
            
        }
    }   
</script>

<style lang="scss" scoped>
.backgroundSecCinque{

    .cardSecCinque5{
      width: 60%;
      margin: auto;
      margin-bottom: 70px;
      .our{
      color: rgba(7, 155, 168, 1);
    }
      .pb5{
        display: flex;
        justify-content: space-between;
        
        .b5{
          height: 20%;
          padding: 10px 20px;
          border-radius: 5px;
          background-color: rgba(5, 130, 131, 1);
          color: white;
        }
      }

    .containerCardSecCinque{
      display: flex;
      justify-content: space-between;
      margin-top: 30px;
    .cardSecCinque1{
      height: 300px;
      background-image: url(../assets/images/news-1.jpg);
      background-size: cover;
      background-repeat: no-repeat;
      width: calc(100% / 3);
      color: white;
      border-radius: 15px;
      .parag{
        padding-left: 20px;
        padding-top: 200px;
        font-size: 1.5rem;
      }
      }
      .cardSecCinque2{
        height: 300px;
      background-image: url(../assets/images/news-2.jpg);
      background-size: cover;
      background-repeat: no-repeat;
      width: calc(100% / 3);
      color: white;
      margin: 0 20px;
      border-radius: 15px;
      .parag{
        padding-left: 20px;
        padding-top: 180px;
        font-size: 1.5rem;
      }
      }
      .cardSecCinque3{
        height: 300px;
      background-image: url(../assets/images/news-3.jpg);
      background-size: cover;
      background-repeat: no-repeat;
      width: calc(100% / 3);
      color: white;
      border-radius: 15px;
      .parag{
        padding-left: 20px;
        padding-top: 200px;
        font-size: 1.5rem;
      }
      }
    }
      

    }
  }


</style>