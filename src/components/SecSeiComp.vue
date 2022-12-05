<template>
    <div class="backgroundSei">
        <div class="container6">
            <div class="colonnaSinistra6">
                <h5 class="our">NEWSLETTER</h5>
                <h2>Know First</h2>
                <div>Follow closely and receive content about our company and the news of the current market.</div>
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
            color: rgba(5, 130, 131, 1);
            font-size: 1rem;
        }
        .colonnaSinistra6{
            width: 45%;
            
        }
        .colonnaDestra6{
            width: 45%;
            .input6{
                width: 90%;
                padding: 10px;
                margin-top: 20px;
                border-radius: 5px;
                opacity: 0.5;
            }
            .button6{
                background-color: rgba(5, 130, 131, 1);
                color: white;
                margin-top: 20px;
                padding: 10px 20px;
                border-radius: 5px;
            }
        }
    }
}

</style>