import { createStore } from 'vuex'

const store = createStore({
  state () {
    return { 
        newInvoiceCreated: [],
          
    
       }
  },
  mutations: {
      setNewInvoiceCreated(state, payload) {
          state.newInvoiceCreated.push({payload})
      }

  }
})

export default store;