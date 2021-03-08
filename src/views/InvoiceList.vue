<template>
  <div class="w-full h-screen bg-gray-200 px-40 pt-10">
    <section class="flex justify-between mb-14">
      <div>
        <p class="font-semibold text-4xl">Invoices</p>
        <p class="text-gray-400 text-sm">There are 7 total invoices</p>
      </div>

      <div class="flex items-center cursor-pointer">
        <div class="flex mr-4">
          <p class="font-semibold text-sm">Filter by status</p>
          <p class="font-bold text-sm text-purple-600 pl-3">
            <i class="fa fa-angle-down"></i>
          </p>
        </div>
        <button class="flex items-center bg-purple-900 p-2 rounded-full">
          <div
            class="flex justify-center items-center bg-white h-7 w-7 rounded-full text-xl text-purple-600"
          >
            <i class="fas fa-plus"></i>
          </div>
          <p class="text-white text-sm font-semibold px-2">
            <router-link :to="{ name: 'InvoiceCreate' }">New Invoice</router-link>
          </p>
        </button>
      </div>
    </section>
    <section class="">
      <div
        v-for="invoice in invoiceData"
        :key="invoice.index"
        class="flex justify-between items-center bg-white shadow-md p-2 px-5 rounded-lg mb-5"
      >
        <p class="font-semibold">{{ invoice.invoiceNo }}</p>
        <p class="text-gray-400 text-sm font-semibold">{{ invoice.dueDate }}</p>
        <p class="text-gray-400 text-xs font-bold">{{ invoice.Name }}</p>
        <p class="font-semibold text-2xl">{{ invoice.price }}</p>
        <div class="flex items-center">
          <div class="flex items-center bg-green-100 rounded-md p-2 px-4">
            <p class="text-green-700 pr-2 font-bold">
              <i class="fas fa-circle"></i>
            </p>
            <p class="text-green-700 pl-2">{{ invoice.status }}</p>
          </div>
          <p class="text-purple-400 pl-3 font-bold">
            <i class="fas fa-angle-right cursor-pointer"></i>
          </p>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  data() {
    return {
      invoiceData: [
        {
          invoiceNo: "#RT5555",
          dueDate: "Due 19 Aug 2021",
          Name: "Ayo Ibosiola",
          price: "N19,000",
          status: "Paid",
        },
        {
          invoiceNo: "#RT5555",
          dueDate: "Due 19 Aug 2021",
          Name: "Ayo Ibosiola",
          price: "N19,000",
          status: "Paid",
        },
        {
          invoiceNo: "#RT5555",
          dueDate: "Due 19 Aug 2021",
          Name: "Ayo Ibosiola",
          price: "N19,000",
          status: "Paid",
        },
        {
          invoiceNo: "#RT5555",
          dueDate: "Due 19 Aug 2021",
          Name: "Ayo Ibosiola",
          price: "N19,000",
          status: "Paid",
        },
        {
          invoiceNo: "#RT5555",
          dueDate: "Due 19 Aug 2021",
          Name: "Ayo Ibosiola",
          price: "N19,000",
          status: "Paid",
        },
      ],
    };
  },
};
</script>

<style></style>
