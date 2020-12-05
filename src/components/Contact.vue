<template>
    <div class="slide-img" style="width: 100%;">
    <tr style="width: 100%;"><td style="width: 50%;"><img :src="contact.profileImage" class="imgs"> </td> <td> &nbsp; &nbsp; &nbsp;{{contact.name}}</td></tr>
    </div>
</template>

<script>
    export default {
        name: "Contacts",
        props: {
            contact: Object
        },
        computed:{

        }
    };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    h1 {
        margin: 40px 0 0;

    }
    .imgs{
        width: 80px;
    }
    .slide-img {max-width: 100%;height: 20%; width: auto;}
</style>
