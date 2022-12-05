<template>
    <div>
        <div class="cardSecSette7"> 
            <div class="colonnaSinistra7">
                <h5 class="our">SEND A MESSAGE</h5>
                <h2>Get in Touch</h2>
                <div>We will respond to your message as soon as possible.</div>
                <div class="containerInput">
                    <input class="inputMargin" type="text" placeholder="Name">
                    <input type="text" placeholder="Email">
                    <input class="inputMargin" type="text" placeholder="Phone">
                    <input type="text" placeholder="More Info">
                    
                </div>
                <input class="inputMessage" type="text" placeholder="Message">
                <button class="buttonSend">SEND</button>
            </div>
            
            <div class="colonnaDestra7">
            <h3>Example Inc.</h3>
            <div>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</div>
            <div class="spaceTop">Prasent diam lacus, dapibus sed impredit consectetur.</div>
            <div class="contatti">
                <div class="spaceTop">
                <span >+1 (305) 1234-5678</span>
                </div>
                <div class="spaceTop">
                <span >hello@example.com</span>
                </div>
                <div class="spaceTop">
                <span >Main Avenue, 987</span>
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
      width: 70%;
      .our{
        color: rgba(5, 130, 131, 1);
      }
      .containerInput{
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        padding-top: 30px;
        input{
            flex-basis: 45%;
            border: 1px solid black;
            margin: 10px 0;
            padding-top: 10px;
            padding-bottom: 10px;
            padding-left: 10px;
        }
        .inputMargin{
            margin-right: 10px;
        }
      }
      .inputMessage{
            border: 1px solid black;
            width: 100%;
            padding-top: 10px;
            padding-bottom: 100px;
            padding-left: 10px;
        }
        .buttonSend{
            background-color: rgba(5, 130, 131, 1);
            color: white;
            padding: 5px 10px;
            margin-top: 20px;
            border-radius: 4px;
        }
    }

    /* COLONNA DESTRA */
    .colonnaDestra7{
        width: 25%;
      .contatti{
        color: rgba(5, 130, 131, 1);
       
      }
      .buttonView{
        color: rgba(5, 130, 131, 1);
        border: 2px solid rgba(5, 130, 131, 1);
        border-radius: 4px;
        padding: 5px 10px;
        background-color: white;
        margin-top: 30px;
      }
       .spaceTop{
        margin: 20px 0;
      }
      
    }
  }
</style>