<template>
  <div class="">
    <section class="">
      <button
        @click="$router.go(-1)"
        class="flex justify-start items-center mb-6 focus:outline-none"
      >
        <i class="fa fa-angle-left mr-10 text-blue-600"></i>
        <p>Go back</p>
      </button>
      <div
        class="flex justify-between items-center bg-white shadow-md p-2 pl-12 pr-12 px-5 py-4 rounded-lg mb-5"
      >
        <div class="flex">
          <div class="flex items-center capitalize">
            <p class="mr-4">status</p>
          </div>
          <div
            class="bg-yellow-100 text-yellow-700 capitalize flex items-center p-2 w-24 rounded-md"
          >
            <i class="pr-2 text-xs fad fa-circle"></i>
            <p>pending</p>
          </div>
        </div>
        <div class="flex py-3 text-white">
          <button
            class="px-6 shadow-md bg-gray-300 rounded-2xl p-2 ml-4 capitalize focus:outline-none"
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
            <span class="text-gray-400">#</span>
            <span>XM9141</span>
          </div>
          <p class="capitalize text-gray-700">graphic design</p>
        </div>
        <div class="capitalize text-gray-700 text-right">
          <p class="">19 union terrace</p>
          <p class="">london</p>
          <p class="uppercase">e1 3ez</p>
          <p class="">united kingdom</p>
        </div>
      </div>
      <div class="flex justify-start pt-2 pb-8">
        <div class="capitalize">
          <p class="text-purple-900">invoice date</p>
          <p class="text-2xl pb-4">21 Aug 2021</p>
          <p class="text-purple-900">payment due</p>
          <p class="text-2xl">20 Sept 2021</p>
        </div>
        <div class="capitalize px-30 ml-28">
          <p class="text-purple-900">bill to</p>
          <p class="text-2xl">alex grim</p>
          <div class="text-gray-700">
            <p>84 church way</p>
            <p>bradford</p>
            <p class="uppercase">bd1 9pb</p>
            <p>united kingdom</p>
          </div>
        </div>
        <div class="px-32">
          <p class="text-purple-900">Sent to</p>
          <p class="text-xl">alexgrim@mail.com</p>
        </div>
      </div>
      <div class="flex justify-evenly bg-gray-100 shadow-xl rounded-md">
        <div class="capitalize py-10">
          <p class="text-black font-semibold">item name</p>
          <p class="py-10">banner design</p>
          <p class="">email design</p>
        </div>
        <div></div>
        <div class="uppercase py-10">
          <p class="text-black font-semibold">qty.</p>
          <p class="py-10">1</p>
          <p>2</p>
        </div>
        <div class="capitalize py-10">
          <p class="text-black font-semibold">price</p>
          <p class="py-10">#156.00</p>
          <p>#200.00</p>
        </div>
        <div class="capitalize py-10">
          <p class="text-black font-semibold">total</p>
          <p class="py-10">#156.00</p>
          <p>#400.00</p>
        </div>
      </div>
      <div
        class="flex justify-between bg-black px-28 shadow-xl rounded-md mb-10 text-white"
      >
        <p class="capitalize flex items-center text-sm">amount due</p>
        <p class="text-4xl py-4">#556.00</p>
      </div>
    </section>
  </div>
</template>

<script>
export default {};
</script>

<style></style>
