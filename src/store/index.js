import { createStore, createLogger } from 'vuex';

const store = createStore({
  state () {
    return { 
        newInvoiceCreated: [],    
       }
  },
  mutations: {
      setNewInvoiceCreated(state, payload) {
          state.newInvoiceCreated.push(payload);
      }

  },
  plugins: [createLogger()]
})

export default store;