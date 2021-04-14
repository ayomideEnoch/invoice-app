<template>
  <div class="">
    <section class="">
      <button
        @click="$router.go(-1)"
        class="flex justify-start items-center mb-6 focus:outline-none"
      >
        <i class="fa fa-angle-left mr-10 text-blue-600"></i>
        <p class="font-bold">Go back</p>
      </button>
      <div
        class="flex justify-between items-center bg-white shadow-md p-2 pl-12 pr-12 px-5 py-4 rounded-lg mb-5"
      >
        <div class="flex">
          <div class="flex items-center capitalize">
            <p class="mr-4">status</p>
          </div>
          <div class="capitalize flex items-center p-2 w-24 rounded-md">
            <i class="pr-2 text-xs fad fa-circle"></i>
            <p>{{ dataShow.invoiceData.status }}</p>
          </div>
        </div>
        <div class="flex py-3 text-white">
          <button
            class="px-6 bg-gray-100 rounded-2xl p-2 ml-4 capitalize focus:outline-none"
          >
            <p class="text-black">edit</p>
          </button>
          <button
            class="px-6 shadow-md bg-red-500 rounded-2xl p-2 ml-4 capitalize focus:outline-none"
          >
            <p>delete</p>
          </button>
          <button
            class="px-6 shadow-md bg-blue-700 rounded-2xl p-2 ml-4 focus:outline-none"
          >
            <p>Mark as Paid</p>
          </button>
        </div>
      </div>
    </section>
    <section class="pt-6 bg-white shadow-md pl-12 pr-12 p-2 px-5 py-4 rounded-lg mb-5">
      <div class="flex justify-between">
        <div class="">
          <div class="font-semibold text-lg">
            <!-- <span class="text-gray-400">#</span> -->
            <span>{{ dataShow.invoiceData.invoiceNo }}</span>
          </div>
          <p class="capitalize text-gray-400">
            {{ dataShow.invoiceData.projectDescription }}
          </p>
        </div>
        <div class="capitalize text-gray-400 text-right">
          <p class="">dataShow.billFrom.streetAddress</p>
          <p class="">dataShow.billFrom.country</p>
          <p class="uppercase">dataShow.billTo.streetAddress</p>
          <p class="">dataShow.billTo.country</p>
        </div>
      </div>
      <div class="flex justify-start pt-2 pb-8">
        <div class="capitalize">
          <p class="text-gray-400">invoice date</p>
          <p class="font-semibold text-lg">dataShow.invoiceData.invoiceDate</p>
          <p class="text-gray-400">payment due</p>
          <p class="font-semibold text-lg">dataShow.invoiceData.invoiceDate</p>
        </div>
        <div class="capitalize px-30 ml-28">
          <p class="text-gray-400">bill to</p>
          <p class="font-semibold text-lg">alex grim</p>
          <div class="text-gray-400">
            <p>84 church way</p>
            <p>bradford</p>
            <p class="uppercase">bd1 9pb</p>
            <p>united kingdom</p>
          </div>
        </div>
        <div class="px-32">
          <p class="text-gray-400">Sent to</p>
          <p class="font-semibold text-lg">alexgrim@mail.com</p>
        </div>
      </div>
      <div class="flex justify-evenly bg-gray-50 shadow-xl rounded-t-md">
        <div class="capitalize py-10">
          <p class="text-gray-400 font-semibold">item name</p>
          <p class="py-10 font-semibold">banner design</p>
          <p class="font-semibold">email design</p>
        </div>
        <div></div>
        <div class="uppercase py-10">
          <p class="text-gray-400 font-semibold">qty.</p>
          <p class="py-10 font-semibold text-gray-400">1</p>
          <p class="font-semibold text-gray-400">2</p>
        </div>
        <div class="capitalize py-10">
          <p class="text-gray-400 font-semibold">price</p>
          <p class="py-10 text-gray-400 font-semibold">#156.00</p>
          <p class="font-semibold text-gray-400">#200.00</p>
        </div>
        <div class="capitalize py-10">
          <p class="text-gray-400 font-semibold">total</p>
          <p class="py-10 font-semibold">#156.00</p>
          <p class="font-semibold">#400.00</p>
        </div>
      </div>
      <div
        class="flex justify-between bg-gray-700 px-28 shadow-xl rounded-b-md mb-10 text-white"
      >
        <p class="capitalize flex items-center text-sm text-gray-300 font-semibold">
          amount due
        </p>
        <p class="text-4xl py-4">#556.00</p>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  data() {
    return {
      dataShow: {},
    };
  },

  mounted() {
    let data = JSON.parse(JSON.stringify(this.$store.state.invoiceShowData));
    this.dataShow = data;
    console.log(data);
  },
};
</script>

<style></style>
