import {messagesMock} from "../mocks/messages.mock";
import axios from "axios";

export const  messagesModule = {

    namespace: false,

    state(){
        return {
            messages: messagesMock,
        }
    },

    mutations: {
        setMessages: (state, payload) =>{ state.messages = payload; },
    },

    getters: {
        numberOfUnreadMessages: (state) =>{
            let a=0;
            state.messages.forEach(msg =>{
                if (msg.read===false)
                    a=a+1;
            })
            return a;
        },

        getMessages: (state)=> {
            let messagesClone = { ...state}.messages;
            return  messagesClone.sort(function(a,b) {
                return  new Date(a.date) - new Date(b.date);
            });
        },

    },
    actions:{
        async setMessages(context){
            try {
                const response= await axios.get('https://io-labs.fr/messenger/messages.json')
                context.commit('setMessages',response.data);
            }catch (e) {
                console.log('Error',e)
            }
        },

    }
}
