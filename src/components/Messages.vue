<template>

    <div v-for="message in messages" :key="message.id">
        <Message :message="message"  v-on:lu="markAsRead($event)"/>
    </div>
</template>

<script>
    import Message from "./Message";

    export default {
        name: "Messages",
        components : {
            Message
        },
        data(){
            return{
                //messages: messagesMock
            };

        },
        props: {

        },
        computed:{
            messages(){
                return this.$store.getters.getMessages;
            }
        },

        methods: {
            markAsRead(id){
                this.messages.find(x=> x.id===id).read=true;
            },

        },
        created() {
            this.$store.dispatch('setMessages');
            //this.sortMessagesByDate();
           // this.$emit('nbnonlu',this.countUnreadMsg()) ;
        },

    };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    h1 {
        margin: 40px 0 0;
    }
</style>
