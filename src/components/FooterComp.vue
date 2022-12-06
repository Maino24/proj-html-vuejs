<template>
  <div class="footer">
    <div class="containerFooter">
      <div class="colonnaSinistraFooter">
        {{footer.piracy}} 
      </div>
      <div class="colonnaDestraFooter">
        <!--- icona -->
        {{footer.year}}
        <span class="word">{{footer.codings}}</span>
        <span>{{footer.point}}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'FooterComp',
  props: {
   footer: Array
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

.footer{
  background-color: black;
  padding: 50px 0;
  color: white;
  .containerFooter{
    width: 60%;
    margin: auto;
    display: flex;
    justify-content: space-between;
  .colonnaDestraFooter{
    .word{
      color: rgba(5, 130, 131, 1);
    }
  }
  }
}

</style>