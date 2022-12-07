<template>
  <div class="containerMain">

    <!--- SEC. UNO -->
    
   <div class="backgroundSecUno"> 
      <div class="cardSecUno">
          <SecUnoComp v-for="(elem, index) in arraySecUno"
          :key="index"
          :arrayCardSecUno="elem"/>
      </div>
    </div>

    <!--- SEC. DUE -->
    
    <div class="backgroundSecDue">

      <!--- PALLINI TRA SECTION -->
      <div class="containerPallini">
        <div class="iconFirstRow">
          <div v-for="elem, index in 9" :key="index"><i class="icona" :class="`${iconaImg.icone}`"></i></div>
        </div>
        <div class="iconFirstRow">
          <div v-for="elem, index in 9" :key="index"><i class="icona" :class="`${iconaImg.icone}`"></i></div>
        </div>
        <div class="iconFirstRow">
          <div v-for="elem, index in 9" :key="index"><i class="icona" :class="`${iconaImg.icone}`"></i></div>
        </div>
        <div class="iconFirstRow">
          <div v-for="elem, index in 9" :key="index"><i class="icona" :class="`${iconaImg.icone}`"></i></div>
        </div>
      </div>  


      <div class="containerPallini1">
        <div class="iconFirstRow">
          <div v-for="elem, index in 9" :key="index"><i class="icona" :class="`${iconaImg.icone}`"></i></div>
        </div>
        <div class="iconFirstRow">
          <div v-for="elem, index in 9" :key="index"><i class="icona" :class="`${iconaImg.icone}`"></i></div>
        </div>
        <div class="iconFirstRow">
          <div v-for="elem, index in 9" :key="index"><i class="icona" :class="`${iconaImg.icone}`"></i></div>
        </div>
        <div class="iconFirstRow">
          <div v-for="elem, index in 9" :key="index"><i class="icona" :class="`${iconaImg.icone}`"></i></div>
        </div>
      </div>

        <div class="colonnaSinistra">
          <div class="widthSinistra">
            <h5 class="our">ABOUT THE NETWORK</h5>
            <h2 class="title"><span class="word">The</span> Company</h2>
            <div class="parag">For 12 years we have been providing audit and warranty, financial advice, risk advice, taxens and related services to select clients.</div>
            <div class="cardSecDue">
              <SecDueComp v-for="(elem, index) in arraySecDue"
              :key="index"
              :arrayCardSecDue="elem"/>
            </div>
          </div>
        </div>
      <div class="colonnaDestra">
      </div>
    </div> 

    <!--- SEC. TRE -->
    
    <div class="backgroundSecTre">
      
      <div class="cardSecTre3">
        <div class="over">
          <h5 class="our">OUR BUSINESS AREAS</h5>
          <h2 class="title">Excellence in <span class="word">Services</span></h2>
          <div class="p-b3">
            <p class="p">We are leaders in providing consultancy services with a set of cutting-edge technologies and a team of experienced and renowed professionals. These are some options that you can hire.</p>
            <button class="b">SEE ALL</button>
          </div>
        </div>
        <div class="cardSecTre">
        <SecTreComp v-for="(elem, index) in arraySecTre"
              :key="index"
              :arrayCardSecTre="elem"/>
        </div>
      </div>
    </div>

    <!--- SEC. QUATTRO -->
    <SecQuattroComp/>
   <!--- <div class="backgroundSecQuattro">
      <div class="cardSecQuattro4">
        <h5 id="">MONTHLY PLANS</h5>
        <h2>Pricing Table</h2>
        <p class="">We can help you deliver and execute your future, wherever you compete, using the latest technologies, from strategy development to implementation.</p>        
        <div class="cardSecQuattro">
        <SecQuattroComp v-for="(elem, index) in arraySecQuattro"
              :key="index"
              :arrayCardSecQuattro="elem"/>
        </div>
      </div>
    </div>--->

    <!--- SEC. CINQUE -->
    <SecCinqueComp/>

    <!--- SEC. SEI -->
    <SecSeiComp/>
   
    <!--- SEC. SETTE -->
    <SecSetteComp/>

    <!--- SEC. OTTO -->
    <div class="backgroundOtto">
      <div class="containerOtto">
        <div class="colonnaSinistra8">
          <img class="logoImg" src="../assets/logo-light.png" alt="">
          <div class="divSpace1">A Functional HTML Template for Corporate & Business.</div>
          <div class="divSpace"><i class=" ispace fa-solid fa-phone"></i>+1 (305) 1234-5678</div>
          <div class="divSpace"><i class=" ispace fa-solid fa-envelope"></i>hello@example.com</div>
          <div class="divSpace"><i class=" ispace fa-solid fa-location-dot"></i>Main Avenue, 987</div>
          <button class="button8">GET IN TOUCH</button>       
        </div>
        <div class="colonnaDestra8">
          <SecOttoComp v-for="(elem, index) in arraySecOtto"
              :key="index"
              :arrayCardSecOtto="elem"/>
        </div>
      </div>
    </div>

  </div> 
</template>

<script>

import SecUnoComp from '../components/SecUnoComp.vue'
import SecDueComp from '../components/SecDueComp.vue'
import SecTreComp from '../components/SecTreComp.vue'
import SecQuattroComp from '../components/SecQuattroComp.vue'
import SecCinqueComp from '../components/SecCinqueComp.vue'
import SecSeiComp from '../components/SecSeiComp.vue'
import SecSetteComp from '../components/SecSetteComp.vue'
import SecOttoComp from '../components/SecOttoComp.vue'

export default {
  name: 'MainComp',
  props: {

  },
  components:{
    SecUnoComp,
    SecDueComp,
    SecTreComp,
    SecQuattroComp,
    SecCinqueComp,
    SecSeiComp,
    SecSetteComp,
    SecOttoComp
  },
  data( ){
    return{
       arraySecUno:[
          {name: 'Human Capital', paragrafo: 'Humanizing  business: Harness the power of technology to improve the way people work.', icona: 'fa-solid fa-users'},
          {name: 'Core Business', paragrafo: 'Ita takes innovative approaches to transform, modernize, and run existig platforms.', icona: 'fa-solid fa-circle'},
          {name: 'Performance', paragrafo: 'Achieving maximum impact and value from investments in finance and supply chain.', icona: 'fa-solid fa-gauge'}
       ],
       arraySecDue:[
          {name: 'Tradition', paragrafo: 'Lorem ipsum dolor sit amet consectetur adipiscing elit.', icona: 'fa-solid fa-medal'},
          {name: 'Security', paragrafo: 'Lorem ipsum dolor sit amet consectetur adipiscing elit.', icona: 'fa-solid fa-lock'},
          {name: 'Certificate', paragrafo: 'Lorem ipsum dolor sit amet consectetur adipiscing elit.', icona: 'fa-solid fa-pen-to-square'},
          {name: 'Expertise', paragrafo: 'Lorem ipsum dolor sit amet consectetur adipiscing elit.', icona: 'fa-solid fa-graduation-cap'}
       ],

        iconaImg: {
          icone: 'fa-solid fa-circle'
        },

       arraySecTre:[
          {name: 'Audit', paragrafo: 'Lorem ipsum dolor sit amet consectetur adipiscing elit.', icona: 'fa-solid fa-computer'},
          {name: 'Financial Advisory', paragrafo: 'Lorem ipsum dolor sit amet consectetur adipiscing elit.', icona: 'fa-solid fa-briefcase'},
          {name: 'Analytics and M&A', paragrafo: 'Lorem ipsum dolor sit amet consectetur adipiscing elit.', icona: 'fa-solid fa-chart-simple'},
          {name: 'Midlle Marketing', paragrafo: 'Lorem ipsum dolor sit amet consectetur adipiscing elit.', icona: 'fa-solid fa-plane-departure'},
          {name: 'Legal Consulting', paragrafo: 'Lorem ipsum dolor sit amet consectetur adipiscing elit.', icona: 'fa-solid fa-earth-americas'},
          {name: 'Regulatory Risk', paragrafo: 'Lorem ipsum dolor sit amet consectetur adipiscing elit.', icona: 'fa-solid fa-box'},
       ],
      
     /*  arraySecQuattro:[
          {name: 'Standart', price: ' 490'},
          {name: 'Professional', price: ' 890'},
          {name: 'Ultimate', price: ' 1.390'},
       ],*/
       arraySecCinque:[
          {img: 'news-1.jpg', name: 'Increasing creativity is possible for everyone', person: 'Andrea Miller', day: '2 Days Ago', paragrafo: 'Lorem ipsum dolor sit amet consectetur adipiscing elit.',},
          {img: 'news-2.jpg', name: 'Because market research is part of the business plan', person: 'Andrea Miller', day: '2 Days Ago', paragrafo: 'Lorem ipsum dolor sit amet consectetur adipiscing elit.'},
          {img: 'news-3.jpg', name: 'Working from home is now a trend', person: 'Andrea Miller', day: '2 Days Ago', paragrafo: 'Lorem ipsum dolor sit amet consectetur adipiscing elit.'},
       ],
       arraySecOtto:[
          {name: 'About', li1: 'The Company', li2: 'Institutional', li3: 'Social & Events', li4: 'Innovation', li5: 'Environment', li6: 'Technology' },
          {name: 'Services', li1: 'Audit & Assurance', li2: 'Financial Advisory', li3: 'Analystics M&A', li4: 'Middle Marketing', li5: 'Legal Consulting', li6: 'Regulatory Risk'},
          {name: 'Support', li1: 'Responsibility', li2: 'Terms of Use', li3: 'About Cookies', li4: 'Privacy Policy', li5: 'Accessibility', li6: 'Information'},
       ],
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

*{
  padding: 0;
  border: 0;
  box-sizing: border-box;
}


.containerMain{
  width: 100%;

  /*-- SEC. UNO --*/
  .backgroundSecUno{
      background-color: rgba(238, 244, 237, 1);  
      padding: 100px 0;
      .cardSecUno{
        //border: 1px solid black;
        width: 60%;
        margin: auto;
        display: flex;
        justify-content: space-between;
      }
      /*.cardSecUno{
        width: 60%;
        margin: auto;
        padding: 60px 0;
        display: flex;
        justify-content: space-between;
      }*/
  }

  /*-- SEC. DUE --*/
  .backgroundSecDue{
    width: 100%;
    display: flex;
    margin: auto;
    justify-content: end;
    .containerPallini{
      position: relative;
      bottom: 30px;
      left: 85vh;
      //border: 1px solid blue;
    }
    .iconFirstRow{
      display: flex;
      color: #C0E9E9;
      font-size: 0.5rem;
      //border: 1px solid black;
      
    }
    .icona{
      padding-right: 5px;
      padding-top: 5px;
    }
    .containerPallini1{
      position: relative;
      top: 680px; 
      left: 70vh;
      //border: 1px solid blue;
      padding-right: 0;
      margin-right: 0;
    }
   
    .colonnaSinistra{
      width: 30%;
      text-align: left;
      padding: 130px 0;
      //padding-left: 300px;
      //border: 1px solid black;
      //padding-right: 20px;
      /*.widthSinistra{
        width: 30%;
        border: 1px solid black;
      }*/
      
      .cardSecDue{
        display: flex;
        margin: auto;
        //width: calc(100% / 2);
        flex-wrap: wrap;
      }
      .parag{
        color: rgb(137, 138, 141);
      }
      .our{
      color: rgba(7, 155, 168, 1);
      font-weight: bold;
    }
      .word{
      color: rgba(5, 130, 131, 1);
      background-color: rgba(218, 236, 237, 1);
      border-radius: 5px;
      padding: 10px 20px;
      }
    .title{
      font-size: 3rem;
    }
    }

    .colonnaDestra{
      background-image: url(../assets/images/about-3.jpg);
      background-size: cover;
      background-position: center;
      width: calc(100% / 2);
      //height: 600px;
    }
  }

  /*-- SEC. TRE --*/
    
  .backgroundSecTre{
    background-color: rgba(17, 17, 23, 1);

  .cardSecTre3{
      width: 60%;
      margin: auto;
      color: white;
      padding: 40px 0;
    }

    .cardSecTre{
      display: flex;
      margin: auto;
      flex-wrap: wrap;
      justify-content: space-between;
    }

    .our{
      color: rgba(7, 155, 168, 1);
      font-weight: bold;
    }
    .word{
      color: white;
      background-color: rgba(14, 39, 45, 1);
      padding: 10px 20px;
      }
    .title{
      font-size: 3rem;
    }  

    .p-b3{
      display: flex;
      width: 100%;
      justify-content: space-between;
      align-items: center;
      .p{
        width: 75%;
        color: rgb(182, 185, 194);
      }
      .b{
        width: 15%;
        height: 20%;
        background-color: rgba(17, 17, 23, 1);
        color: white;
        padding: 5px 8px;
        border: 3px solid rgba(13, 90, 93, 1);
        border-radius: 5px;
      }
      .b:hover{
        width: 15%;
        height: 20%;
        background-color: rgba(0, 166, 166, 1);
        color: white;
        padding: 5px 8px;
        border: 3px solid rgba(0, 166, 166, 1);
        border-radius: 5px;
      }
    }

  }
  
  /*-- SEC. QUATTRO --*/
 /* .backgroundSecQuattro{

    background-color: rgba(238, 244, 237, 1);

    .cardSecQuattro4{
      width: 60%;
      margin: auto;

      .cardSecQuattro{
      width: 100%;
      display: flex;
      justify-content: space-between;
      

      }

    }
  }*/
  /*-- SEC. OTTO --*/
  .backgroundOtto{
    background-color: rgba(17, 17, 23, 1);
    padding: 200px 0;
    .containerOtto{
      width: 60%;
      height: 300px;
      //border: 1px solid white;
      display: flex;
      margin: auto;
      justify-content: space-between;

      .colonnaSinistra8{
        width: 30%;
        color: rgba(192, 196, 208, 1);

        .divSpace1{
          padding: 25px 0;
        }

        .divSpace{
          padding-top: 10px;
        }
        .ispace{
          padding-right: 5px;
        }
        
        .logoImg{
          width: 60%;
        }
         .button8{
          border: 2px solid rgba(5, 130, 131, 1);
          border-radius: 5px;
          padding: 10px 20px;
          background-color: rgba(17, 17, 23, 1);
          color: white;
          margin-top: 40px;
          margin-bottom: 0;
        }
        .button8:hover{
          border: 2px solid rgba(5, 130, 131, 1);
          border-radius: 5px;
          padding: 10px 20px;
          background-color: rgba(5, 130, 131, 1);
          color: white;
          margin-top: 40px;
        }
      }
      .colonnaDestra8{
        width: 80%;
        display: flex;
        justify-content: space-between;
      }
    }
  }
 
}
</style>