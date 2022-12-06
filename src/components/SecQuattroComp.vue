<template>
    <div>
        <div class="backgroundSecQuattro">
            <div class="cardSecQuattro4">
                <div class="top">
                    <h5 id="our">MONTHLY PLANS</h5>
                    <h2 class="title"><span class="word">Pricing</span> Table</h2>
                    <p class="parag">We can help you deliver and execute your future, wherever you compete, using the latest technologies, from strategy development to implementation.</p>        
                </div>
                <div class="containerCards">
                    <div class="cardSecQuattro">
                        <i class="iarrow fa-solid fa-arrow-right"></i>
                        <i class="icon fa-solid fa-rocket"></i>
                        <h2>Standard</h2>
                        <div class="price"><span>$</span><span id="number"> 490</span><span> / mo</span></div>
                        <ul>
                            <div class="list"><li>Standard Accounting</li><i class="i fa-solid fa-check"></i></div>
                            <div class="list"><li>Platform Access</li><i class="i fa-solid fa-check"></i></div>
                            <div class="list"><li>Business Orientation</li><i class="i fa-solid fa-xmark"></i></div>
                            <div class="list"><li>Dedicated Consultant</li><i class="i fa-solid fa-xmark"></i></div>
                            <div class="list"><li>Personal Assistance</li><i class="i fa-solid fa-xmark"></i></div>
                        </ul>

                    </div>
                    <div class="cardSecQuattroPopular">
                        <i class="iarrow fa-solid fa-arrow-right"></i>
                        <div class="popular"><span id="pop">Most popular</span></div>
                        <i class="icon fa-solid fa-briefcase"></i>
                        <h2>Professional</h2>
                        <div class="price"><span>$</span><span id="number"> 890</span><span> / mo</span></div>
                        <ul>
                            <div class="list"><li>Standard Accounting</li><i class="i fa-solid fa-check"></i></div>
                            <div class="list"><li>Platform Access</li><i class="i fa-solid fa-check"></i></div>
                            <div class="list"><li>Business Orientation</li><i class="i fa-solid fa-check"></i></div>
                            <div class="list"><li>Dedicated Consultant</li><i class="i fa-solid fa-xmark"></i></div>
                            <div class="list"><li>Personal Assistance</li><i class="i fa-solid fa-xmark"></i></div>
                        </ul>

                    </div>
                    <div class="cardSecQuattro">
                        <i class="iarrow fa-solid fa-arrow-right"></i>
                        <i class="icon fa-regular fa-gem"></i>
                        <h2>Ultimate</h2>
                        <div class="price"><span>$</span><span id="number"> 1390</span><span> / mo</span></div>
                        <ul>
                            <div class="list"><li>Standard Accounting</li><i class="i fa-solid fa-check"></i></div>
                            <div class="list"><li>Platform Access</li><i class="i fa-solid fa-check"></i></div>
                            <div class="list"><li>Business Orientation</li><i class="i fa-solid fa-check"></i></div>
                            <div class="list"><li>Dedicated Consultant</li><i class="i fa-solid fa-check"></i></div>
                            <div class="list"><li>Personal Assistance</li><i class="i fa-solid fa-check"></i></div>
                        </ul>

                    </div>
                </div>
            </div>
        </div>
        
    </div>
  <!---  <div class="cardQuattro">
        <h2>{{arrayCardSecQuattro.name}}</h2>
        <span>$</span><span id="number">{{arrayCardSecQuattro.price}}</span><span> / mo</span>
        <ul>
            <li>Standard Accounting</li>
            <li>Platform Access</li>
            <li>Business Orientation</li>
            <li>Dedicated Consultant</li>
            <li>Personal Assistance</li>
        </ul>
    </div>-->
</template>

<script>
    export default {
        name: 'SecQuattroComp',

        props: {
            //arrayCardSecQuattro: Object
        }
    }
</script>

<style lang="scss" scoped>

*{
  padding: 0;
  border: 0;
  box-sizing: border-box;
}

.backgroundSecQuattro{

    background-color: rgba(238, 244, 237, 1);
    padding: 50px 0;
    #our{
        color: rgba(0, 166, 166, 1);
        font-weight: bold;
    }
    .title{
        font-weight: bold;
        font-size: 3rem;
    }

    .word{
        color: rgba(4, 128, 128, 1);
        background-color: rgba(204, 227, 222, 1);
        padding: 10px 20px;
    }
    .parag{
        color: rgb(149, 153, 165);
    }
    .cardSecQuattro4{
      width: 60%;
      margin: auto;
        li{
            list-style: none;
        }

    .top{
        text-align: center;
    }
    .containerCards{
        width: 100%;
        display: flex;
        margin: auto;
        justify-content: space-between;
        padding-top: 50px;
        align-items: center;
    }
      .cardSecQuattro{
      width: 30%;
      height: 400px;
      background-color: white;
      border-radius: 10px;
      padding: 30px;
      text-align: center;
      .icon{
        color: rgba(4, 128, 128, 1);
        font-size: 40px;
      }
      .price{
        color: rgba(4, 128, 128, 1);
        font-size: 1.2rem;
        font-weight: bold;
      }
      #number{
        font-size: 2rem;
      }
      .list{
        display: flex;
        justify-content: space-between;
        padding-top: 15px;
        color: rgb(149, 153, 165);
      }
      .i{
            color: rgba(4, 128, 128, 1);
        }
        .iarrow{
            display: none;
        }
      
    }
    .cardSecQuattro:hover{
        .iarrow{
            display: block;
            position: relative;
            bottom: 20px;
            left: 200px;
            color: rgba(4, 128, 128, 1)
        }
    }
    .cardSecQuattroPopular{
        height: 450px;
        width: 30%;
        background-color: white;
        border-radius: 10px;
        padding: 30px;
        text-align: center;
      }
      .popular{
        background-color: rgba(0, 166, 166, 1);
        color: white;
        position: relative; 
        width: 60px;   
        bottom: 20px;  
        right: 30px;
        border-bottom-right-radius: 20%;
        border-top-right-radius: 20%;
        }
        
      .icon{
        color: rgba(4, 128, 128, 1);
        font-size: 40px;
      }
      .price{
        color: rgba(4, 128, 128, 1);
        font-size: 1.2rem;
        font-weight: bold;
      }
      #number{
        font-size: 2rem;
      }
      .list{
        display: flex;
        justify-content: space-between;
        padding-top: 15px;
        color: rgb(149, 153, 165);
      }
      .i{
            color: rgba(4, 128, 128, 1);
        }
        .iarrow{
            display: none;
        }
    }
    .cardSecQuattroPopular:hover{
        .iarrow{
            display: block;
            position: relative;
            bottom: 20px;
            left: 200px;
            color: rgba(4, 128, 128, 1)
        }
    }
    
  }
/*
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
*/
</style>