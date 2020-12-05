<template>
  <div class="head">
    <table>
      <tr>
       <td style="width: 75%;"> <h2 style="text-align: left"> Chats </h2></td>
        <span class="droit">
        <td> <i class="fas fa-search fa-2x " style="color: #0000FF;"></i> &nbsp; &nbsp;</td>
         <td> <i class="fas fa-plus fa-2x" style="color: #0000FF;"></i> </td>
        </span>
      </tr>
    </table>
  </div>
  <div class="app">
    <br/>
    <table class="menu">
      <tr><td style="color: blue;"><b><u> All</u> </b> &nbsp; </td>
        <td> <b> Favorites</b> &nbsp; </td>
        <td><b> Channels</b> </td>
        <td>  </td>
        <td>  </td></tr>
    </table>
      <router-view></router-view>
      <Menu/>
  </div>
</template>

<script>

import Menu from "./components/Menu";

export default {
  name: "App",
  components: {

    Menu
  },
  data(){
    return{
      a: 0,
    }
  },
  methods: {
    store(e){
      this.a=e;
    }
  },


};
</script>

<style>
html, body {
  height: 100%;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.app{
    align-content: center;
  }

.droit{
    align-items: end;
  }
.head{
    display: inline;
  }
</style>
