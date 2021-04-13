import { createStore, createLogger } from 'vuex';

const store = createStore({
  state () {
    return { 
        newInvoiceCreated: [],
        invoiceShowData: {},    
       }
  },
  mutations: {
      setNewInvoiceCreated(state, payload) {
          state.newInvoiceCreated.push(payload);
      },
      setInvoiceShowData(state, payload) {
        state.invoiceShowData = payload;
    }

  },
  plugins: [createLogger()]
})

export default store;