<template>
    <button v-on:click="emitId()" class="btn">
        <table>
        <tr >
        <td><img :src="message.sender.profileImage" class="imgs">  </td>
        <td>
            <p> <b>{{message.sender.name}} </b>    </p>

            <p>{{message.content}}</p>
        </td>
            <td>
                <div v-if="message.read===true"> <i class="fas fa-check-double" style="color: #51cf66;"></i> {{date}}</div>
                <div v-else > <i class="fas fa-check" style="color: #51cf66;"> </i> {{date}}</div>
            </td>
        </tr>
    </table>
    </button>
</template>

<script>

    import moment from "moment";

    export default {
        name: "Message",
        data() {
            return {
                date: moment(this.message.date).format('HH:mm'),
            }
        },
        props: {
            message : Object,
        },
        methods:{
            emitId(){
                this.$emit('lu', this.message.id);
            },
        },
        computed:{

        },


    };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    h1 {
        margin: 40px 0 0;
    }
    .imgs{
        border-radius: 70%;
        width: 80px;
    }
    .btn{
        background-color: white;
        border-color: white;
    }
</style>
