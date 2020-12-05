
import axios from "axios";

export const contactsModule = {
    namespace :false,
    state(){
        return {
            contacts: []
        }
    },

    mutations: {
        setContacts: (state,payload ) =>{state.contacts = payload;}
    },

    getters: {
        getContacts: (state)=> {
            return state.contacts;
        }
    },
    actions:{

        async setContacts(context){
            try {
                const response= await axios.get('https://io-labs.fr/messenger/contacts.json')
                console.log('Response : ',response.data);
                context.commit('setContacts',response.data);
            }catch (e) {
                console.log('Error',e)
            }
        }
    }
}
