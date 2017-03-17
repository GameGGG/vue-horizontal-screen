<template>
  <nav>
    <div><router-link :class="active != 0 ? 'ra game_genius' : 'ra game_genius_active'" to="/"></router-link></div>
    <div><router-link :class="active != 1 ? 'ra service' : 'ra service_active'" to="/service"></router-link></div>
    <div><router-link :class="active != 2 ? 'ra record' : 'ra record_active'" to="/record"></router-link></div>
    <div><router-link :class="active != 3 ? 'ra platform' : 'ra platform_active'" to="/platform"></router-link></div>
  </nav>
</template>

<script>
export default {
    name: 'nav',
    data () {
        return {

        }
    },
    props:['active'],
    created(){
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  nav{
      width:1.5rem;
      height:100%;
      background:#14141e;
  }
  nav>div{
      height:25%;
      border-bottom:2px solid #3b405a;
      box-sizing:border-box;
      padding:0.2rem;
  }
  .game_genius{
      background:url(../assets/gamegenius.png) no-repeat center;
  }
  .game_genius_active{
      background:url(../assets/gamegenius_active.png) no-repeat center;
  }
  .service{
      background:url(../assets/service.png) no-repeat center;
  }
  .service_active{
      background:url(../assets/service_active.png) no-repeat center;
  }
  .platform{
      background:url(../assets/platform.png) no-repeat center;
  }
  .platform_active{
      background:url(../assets/platform_active.png) no-repeat center;
  }
  .record{
      background:url(../assets/record.png) no-repeat center;
  }
  .record_active{
      background:url(../assets/record_active.png) no-repeat center;
  }
  .ra{
      display:block;
      width:100%;
      height:100%;
      background-size:contain;
  }
</style>
