<template>
  <div class="">
    <section class="flex justify-between mb-14">
      <div>
        <p class="font-semibold text-4xl">Invoices</p>
        <p class="text-gray-400 text-sm">There are {{ invoice.length }} total invoices</p>
      </div>

      <div class="flex items-center">
        <button @click="dropdown = !dropdown" class="flex mr-4 focus:outline-none">
          <p class="font-semibold text-sm">Filter by status</p>
          <p class="font-bold text-sm text-purple-600 pl-3">
            <i class="fa fa-angle-down"></i>
          </p>
        </button>
        <div
          v-if="dropdown"
          class="bg-white w-32 absolute top-20 mt-1 right-72 mr-6 rounded-md text-sm py-2 shadow-md"
        >
          <p
            @click="allInvoice(), (dropdown = false)"
            class="py-1 p-3 hover:bg-green-100 cursor-pointer"
          >
            All
          </p>
          <p
            @click="filteredInvoice('Paid'), (dropdown = false)"
            class="py-1 p-3 hover:bg-green-100 cursor-pointer"
          >
            Paid
          </p>
          <p
            @click="filteredInvoice('Pending'), (dropdown = false)"
            class="py-1 p-3 hover:bg-yellow-100 cursor-pointer"
          >
            Pending
          </p>
        </div>
        <router-link :to="{ name: 'InvoiceCreate' }"
          ><button
            class="flex items-center bg-purple-900 p-2 rounded-full focus:outline-none"
          >
            <div
              class="flex justify-center items-center bg-white h-7 w-7 rounded-full text-xl text-purple-600"
            >
              <i class="fas fa-plus"></i>
            </div>
            <p class="text-white text-sm font-semibold px-2">New Invoice</p>
          </button>
        </router-link>
      </div>
    </section>
    <section class="">
      <div v-for="invoice in invoice" :key="invoice.index">
        <router-link
          :to="{ name: 'InvoiceShow' }"
          class="flex justify-between items-center bg-white shadow-md p-2 px-5 rounded-lg mb-5"
        >
          <p class="font-semibold">{{ invoice.invoiceNo }}</p>
          <p class="text-gray-400 text-sm font-semibold">{{ invoice.dueDate }}</p>
          <p class="text-gray-400 text-xs font-bold">{{ invoice.Name }}</p>
          <p class="font-semibold text-2xl">{{ invoice.price }}</p>
          <div class="flex items-center">
            <div
              class="flex items-center justify-center rounded-md p-2 w-24"
              :class="
                invoice.status === 'Paid'
                  ? 'bg-green-100 text-green-700'
                  : 'bg-yellow-100 text-yellow-700'
              "
            >
              <i class="pr-2 text-xs fad fa-circle"></i>
              <p class="text-sm text-center">{{ invoice.status }}</p>
            </div>
            <p class="text-purple-400 pl-3 font-bold">
              <i class="fas fa-angle-right cursor-pointer"></i>
            </p>
          </div>
        </router-link>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  data() {
    return {
      dropdown: false,
      invoice: [],
      invoiceData: [
        {
          invoiceNo: "#RT5555",
          dueDate: "Due 19 Aug 2021",
          Name: "Ayo Ibosiola",
          price: "₦11,200",
          status: "Pending",
        },
        {
          invoiceNo: "#RT5555",
          dueDate: "Due 19 Aug 2021",
          Name: "Ayo Ibosiola",
          price: "₦900",
          status: "Paid",
        },
        {
          invoiceNo: "#RT5555",
          dueDate: "Due 19 Aug 2021",
          Name: "Ayo Ibosiola",
          price: "₦19,000",
          status: "Paid",
        },
        {
          invoiceNo: "#RT5555",
          dueDate: "Due 19 Aug 2021",
          Name: "Ayo Ibosiola",
          price: "₦19,000",
          status: "Paid",
        },
        {
          invoiceNo: "#RT5555",
          dueDate: "Due 19 Aug 2021",
          Name: "Ayo Ibosiola",
          price: "₦19,000",
          status: "Pending",
        },
      ],
    };
  },
  methods: {
    filteredInvoice(status) {
      let result = this.invoiceData;
      let filter = result.filter(function (type) {
        return type.status === status;
      });
      this.invoice = filter;
    },
    allInvoice() {
      this.invoice = this.invoiceData;
    },
  },
  mounted() {
    this.allInvoice();
  },
};
</script>

<style></style>
