<template>
    <div class="cardCinque">
       <div class="backgroundSecCinque">
        <div class="cardSecCinque5">
            <h5 class="our">OUR EDITORIAL CONTENT</h5>
            <h2 class="title">Latest <span class="word">News</span></h2>
            <div class="pb5">
                <p class="p5">Every week we publish content what is best in the business world.</p>  
                <button class="b5">SEE ALL</button>    
            </div> 
            <div class="containerCardSecCinque">

                <div class="cardSecCinque1">
                  <div class="user-day">
                    <i class="fa-regular fa-user"></i>
                    <div class="nameD">Andrea Miller</div>
                    <i class="nameD1 fa-regular fa-clock"></i>
                    <div >2 Days Ago</div>
                  </div>
                    <h4 class="parag">Increasing creativity is possible for everyone</h4>
                    <p class="paragHover">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            <!--- <SecCinqueComp v-for="(elem, index) in arraySecCinque"
                    :key="index"
                    :arrayCardSecCinque="elem"/>-->
                </div>
                
                <div class="cardSecCinque2">
                   <div class="user-day">
                    <i class="fa-regular fa-user"></i>
                    <div class="nameD">Andrea Miller</div>
                    <i class="nameD1 fa-regular fa-clock"></i>
                    <div >2 Days Ago</div>
                  </div>
                    <h4 class="parag">Because market research is part of the business plan</h4>
                    <p class="paragHover">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </div>

                <div class="cardSecCinque3">
                  <div class="user-day">
                    <i class="fa-regular fa-user"></i>
                    <div class="nameD">Andrea Miller</div>
                    <i class="nameD1 fa-regular fa-clock"></i>
                    <div >2 Days Ago</div>
                  </div>
                    <h4 class="parag">Working from home is now a trend</h4>
                    <p class="paragHover">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
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

*{
  padding: 0;
  border: 0;
  box-sizing: border-box;
}

.backgroundSecCinque{
  padding: 50px 0;
    .cardSecCinque5{
      width: 60%;
      margin: auto;
      margin-bottom: 70px;
      .our{
      color: rgba(7, 155, 168, 1);
      
      }
      .title{
        font-size: 3rem;
      }
      .word{
        color: rgba(7, 155, 168, 1);
        background-color: rgba(218, 236, 237, 1);
        padding: 10px 5px;
        border-radius: 5px;
      }
      .pb5{
        display: flex;
        margin: auto;
        justify-content: space-between;
        align-items: center;
        .b5{
          padding: 10px 20px;
          border-radius: 5px;
          background-color: rgba(5, 130, 131, 1);
          color: white;
        }
        .p5{
          color: rgb(149, 153, 165);
        }
      }

    .containerCardSecCinque{
      display: flex;
      justify-content: space-between;
      margin-top: 30px;

      /* ----- CARD UNO ---*/
    .cardSecCinque1{
      height: 300px;
      background: rgba(0,0,0,0.5)url(../assets/images/news-1.jpg);
      background-blend-mode: darken;
      background-size: cover;
      background-repeat: no-repeat;
      width: calc(100% / 3);
      color: white;
      border-radius: 15px;
      padding: 10px;
      .user-day{
        display: flex;
        padding: 10px;
        justify-content: center;
        display: none;
        .nameD{
          padding: 0 20px;
        }
        .nameD1{
          padding: 0 10px;
        }
      }
      .parag{
        padding: 0 20px;
        padding-top: 150px;
        font-size: 1.5rem;
        text-align: center;
        color: white;
      }
      .paragHover{
        display: none;
      }
      }
      /* ----- CARD UNO HOVER ---*/
      .cardSecCinque1:hover{
        background: rgba(0,0,0,0.5)url(../assets/images/news-1.jpg);
        background-blend-mode: darken;
        background-size: cover;
        background-repeat: no-repeat;
        filter: blur(0px);
        -webkit-filter: blur(1px);
        
      }
      .cardSecCinque1:hover .user-day{
          display: flex;
          //font-size: 1rem;
          color: white;
          
        }
      .cardSecCinque1:hover .paragHover {
          display: flex;
          //font-size: 1rem;
          color: white;
        }

        .cardSecCinque1:hover .parag{
          padding: 0 20px;
          padding-top: 20px;
          font-size: 1.5rem;
          text-align: center;
          color: white;
        }
          

      /* ----- CARD DUE ---*/
      .cardSecCinque2{
      height: 300px;
      background: rgba(0,0,0,0.5)url(../assets/images/news-2.jpg);
      background-blend-mode: darken;
      background-size: cover;
      background-repeat: no-repeat;
      width: calc(100% / 3);
      color: white;
      margin: 0 20px;
      border-radius: 15px;
      padding: 10px;
        .parag{
          padding: 20px;
          //padding-top: 180px;
          padding-top: 150px;
          font-size: 1.5rem;
          text-align: center;
          color: white;
        }
        .paragHover{
        display: none;
      }
      .user-day{
        display: flex;
        padding: 10px;
        justify-content: center;
        display: none;
        .nameD{
          padding: 0 20px;
        }
        .nameD1{
          padding: 0 10px;
        }
      }
      }
      /* ----- CARD DUE HOVER ---*/
      .cardSecCinque2:hover{
      height: 300px;
      background: rgba(0,0,0,0.5)url(../assets/images/news-2.jpg);
      background-blend-mode: darken;
      background-size: cover;
      background-repeat: no-repeat;
      filter: blur(0px);
      -webkit-filter: blur(1px);
        }

        .cardSecCinque2:hover .user-day{
          display: flex;
          //font-size: 1rem;
          color: white;
        }
        
      .cardSecCinque2:hover .paragHover {
          display: flex;
          font-size: 1rem;
          color: white;
        }
        
        .cardSecCinque2:hover  .parag{
          padding: 0 20px;
          padding-top: 20px;
          font-size: 1.5rem;
          text-align: center;
        }




      /* ----- CARD TRE ---*/
      .cardSecCinque3{
      height: 300px;
      background: rgba(0,0,0,0.5)url(../assets/images/news-3.jpg);
      background-blend-mode: darken;
      background-size: cover;
      background-repeat: no-repeat;
      width: calc(100% / 3);
      color: white;
      border-radius: 15px;
      padding: 10px;
      .parag{
        padding: 0 20px;
        padding-top: 150px;
        //padding-top: 70%;
        font-size: 1.5rem;
        text-align: center;
      }
      .paragHover{
        display: none;
      }
      .user-day{
        display: flex;
        padding: 10px;
        justify-content: center;
        display: none;
        .nameD{
          padding: 0 20px;
        }
        .nameD1{
          padding: 0 10px;
        }
      }
      }
      /* ----- CARD TRE HOVER ---*/
      .cardSecCinque3:hover{
      height: 300px;
      background: rgba(0,0,0,0.5)url(../assets/images/news-3.jpg);
      background-blend-mode: darken;
        background-size: cover;
        background-repeat: no-repeat;
        filter: blur(0px);
        -webkit-filter: blur(1px);
      }

      .cardSecCinque3:hover .user-day{
          display: flex;
          //font-size: 1rem;
          color: white;
        }
        
      .cardSecCinque3:hover .paragHover {
          display: flex;
          font-size: 1rem;
          color: white;
        }
        
        .cardSecCinque3:hover  .parag{
          padding: 0 20px;
          padding-top: 30px;
          font-size: 1.5rem;
          text-align: center;
        }

        
    }
      

    }
  }


</style>