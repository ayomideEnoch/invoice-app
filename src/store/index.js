import { createStore } from 'vuex'

const store = createStore({
  state () {
    return { 
        newInvoiceCreated: [],    
       }
  },
  mutations: {
      setNewInvoiceCreated(state, payload) {
          state.newInvoiceCreated = payload;
      }

  }
})

export default store;