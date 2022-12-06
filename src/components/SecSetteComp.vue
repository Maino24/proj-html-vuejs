<template>
    <div>
        <div class="cardSecSette7"> 
            <div class="colonnaSinistra7">
                <h5 class="our">SEND A MESSAGE</h5>
                <h2 class="title">Get in <span class="word">Touch</span></h2>
                <div class="p">We will respond to your message as soon as possible.</div>
                <div class="containerInput">
                    <input class="input7 inputMargin" type="text" placeholder="Name"><img class="imgName" src="../assets/images/image (1).png" alt="">
                    <input class="input7" type="text" placeholder="Email">
                    <input class="input7 inputMargin" type="text" placeholder="Phone">
                    <i class="fa-solid fa-chevron-down"></i><input class="input7" type="text" placeholder="More Info">
                    
                </div>
                <input class="inputMessage" type="text" placeholder="Message">
                <button class="buttonSend">SEND</button>
            </div>
            
            <div class="colonnaDestra7">
            <h3>Example Inc.</h3>
            <div class="p">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</div>
            <div class="p spaceTop">Prasent diam lacus, dapibus sed impredit consectetur.</div>
            <div class="contatti">
                <div class="spaceTop">
                  <i class=" ispace fa-solid fa-phone"></i><span>+1 (305) 1234-5678</span>
                </div>
                <div class="spaceTop">
                  <i class=" ispace fa-solid fa-envelope"></i><span>hello@example.com</span>
                </div>
                <div class="spaceTop">
                  <i class=" ispace fa-solid fa-location-dot"></i><span> Avenue, 987</span>
                </div>
            </div>
            <button class="buttonView">VIEW MAP</button>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'SecSetteComp'
    }
</script>

<style lang="scss" scoped>
 /*-- SEC. SEI --*/
 
  .cardSecSette7{
    padding: 100px 0;
    width: 60%;
    margin: auto;
    display: flex;
    justify-content: space-between;
    /* COLONNA SINISTRA */
    .colonnaSinistra7{
      width: 65%;
      .title{
        font-size: 3rem;
      }
      .word{
        color: rgba(5, 130, 131, 1);
        background-color: rgba(218, 236, 237, 1);
        padding: 10px 15px;
        border-radius: 3px;
      }
      .our{
        color: rgba(5, 130, 131, 1);
      }
      .containerInput{
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        padding-top: 30px;
        .input7{
            flex-basis: 45%;
            //border: 1px solid black;
            margin: 10px 0;
            padding-top: 10px;
            padding-bottom: 10px;
            padding-left: 10px;
            background-color: rgba(236, 236, 236, 1);
            border-radius: 5px;
        }
        .inputMargin{
            margin-right: 10px;
        }
        .imgName{
          width: 15px;
          height: 20px;
          position: relative;
          top: 18px;
          right: 50px;
        }
        .fa-chevron-down{
          position: relative;
          left: 270px;
          top: 20px;
          //border: 1px solid black;
          color: rgb(149, 153, 165);
        }
      }
      .inputMessage{
            //border: 1px solid black;
            width: 100%;
            padding-top: 10px;
            padding-bottom: 100px;
            padding-left: 10px;
            background-color: rgba(236, 236, 236, 1);
            border-radius: 5px;
        }
        .buttonSend{
            background-color: rgba(5, 130, 131, 1);
            color: white;
            padding: 10px 20px;
            margin-top: 20px;
            border-radius: 4px;
        }
        .p{
          color: rgb(149, 153, 165);
        }
    }

    /* COLONNA DESTRA */
    .colonnaDestra7{
        width: 30%;
      .contatti{
        color: rgba(5, 130, 131, 1);
       
      }
      .buttonView{
        color: rgba(5, 130, 131, 1);
        border: 2px solid rgba(5, 130, 131, 1);
        border-radius: 4px;
        padding: 10px 20px;
        background-color: white;
        margin-top: 30px;
      }
      .buttonView:hover{
        color: white;
        border-radius: 5px;
        padding: 10px 20px;
        background-color: rgba(5, 130, 131, 1);
        margin-top: 30px;
      }
       .spaceTop{
        margin: 20px 0;
        display: flex;
        align-items: center;
      }
      .ispace{
        padding: 5%;
        background-color: rgba(223, 239, 240, 1);
        border-radius: 50%;
        margin-right: 10px;
        font-size: 1rem;
      }
      .p{
        color: rgb(149, 153, 165);
      }
      
    }
  }
</style>