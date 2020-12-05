<template>
    <table style="width: 100%;">
    <div v-for="contact in contacts" :key="contact.id" >

        <Contact v-bind:contact="contact"/>

    </div>
    </table>
</template>

<script>
    import Contact from "./Contact";
    export default {
        name: "Contacts",
        components:{
            Contact
        },
        props: {

        },
        computed:{
            contacts(){
                return this.$store.getters.getContacts;
            }
        },
        created() {
            this.$store.dispatch('setContacts');
        }
    };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    h1 {
        margin: 40px 0 0;
    }
</style>
