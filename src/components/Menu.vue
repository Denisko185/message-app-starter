<template>
    <br/>
    <table class="menu">
    <tr><router-link to="/contacts"> <td> <i class="fas fa-user-friends size=7x" ></i> </td></router-link>
        <td> <i class="fas fa-phone"></i> </td>
        <router-link to="/messages"> <td> <i class="fas fa-comments"></i> <span style="color: #0000FF;"> {{unreadMessages}}</span></td></router-link>
        <td> <i class="fas fa-credit-card"></i> </td>
        <td> <i class="fas fa-ellipsis-h"></i> </td></tr>
    </table><br/>
</template>

<script>
    export default {
        name: "Menu",
        props: {
            //unreadMessages: Number,
        },
        computed:{
            unreadMessages(){
               return  this.$store.getters.numberOfUnreadMessages;
            }
        }
    };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    h1 {
        margin: 40px 0 0;
    }
    .menu{
        width: 100%;
        height: 100%;
    }
</style>
