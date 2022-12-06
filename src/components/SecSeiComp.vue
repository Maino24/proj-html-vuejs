<template>
    <div class="backgroundSei">
        <div class="container6">
            <div class="colonnaSinistra6">
                <h5 class="our">NEWSLETTER</h5>
                <h2 class="title"><span class="word">Know</span> First</h2>
                <div class="parag">Follow closely and receive content about our company and the news of the current market.</div>
            </div>
            <div class="colonnaDestra6">
                <div>
                    <input class="input6" type="text" placeholder="Name">
                </div>
                <div>
                    <input class="input6" type="text" placeholder="Email">
                </div>
                <div>
                    <button class="button6">SUBSCRIBE</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'SecSeiComp'
    }
</script>

<style lang="scss" scoped>
*{
    padding: 0;
    border: 0;
    box-sizing: border-box;
}

.backgroundSei{
    background-image: url(../assets/images/bg-1.jpg);
    background-size: cover;
    padding: 200px 0;
    .container6{
        width: 60%;
        margin: auto;
        color: white;
        display: flex;
        justify-content: space-between;
        .our{
            color: rgba(5, 160, 166, 1);
            font-size: 1rem;
        }
        .colonnaSinistra6{
            width: 45%;
        .title{
            font-size: 2.5rem;
        }
        .word{
            background-color: rgba(23, 51, 56, 1);
            padding: 10px 15px;
            border-radius: 5px;
        }
        .parag{
            color: rgb(170, 175, 188);
            font-size: 1rem;
        }
        }

        .colonnaDestra6{
            width: 45%;
            //border: 1px solid white;
            .input6{
                width: 90%;
                padding: 15px;
                margin-top: 20px;
                border-radius: 5px;
                opacity: 0.5;
            }
            .button6{
                background-color: rgba(5, 130, 131, 1);
                color: white;
                margin-top: 20px;
                padding: 15px 20px;
                border-radius: 5px;
                margin-bottom: 0;
            }
        }
    }
}

</style>