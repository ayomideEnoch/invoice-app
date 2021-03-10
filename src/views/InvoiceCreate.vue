<template>
  <div class="">
    <p class="font-semibold text-4xl mb-14">New Invoice</p>
    <p class="text-purple-900 font-semibold mb-4">Bill From</p>

    <div class="mb-4">
      <label class="">
        <span class="text-gray-400">Steet Address</span>
        <input
          class="rounded-md w-full border border-gray-300 font-semibold"
          placeholder="Steet Address"
          type="text"
        />
      </label>
    </div>

    <div class="flex mb-8">
      <div class="w-1/3 mr-5">
        <label class="">
          <span class="text-gray-400">City</span>
          <input
            class="rounded-md w-full border border-gray-300 font-semibold"
            placeholder="City"
            type="text"
          />
        </label>
      </div>

      <div class="w-1/3 mr-5">
        <label class="">
          <span class="text-gray-400">Post Code</span>
          <input
            class="rounded-md w-full border border-gray-300 font-semibold"
            placeholder="Post Code"
            type="text"
          />
        </label>
      </div>

      <div class="w-1/3">
        <label class="">
          <span class="text-gray-400">Country</span>
          <input
            class="rounded-md w-full border border-gray-300 font-semibold"
            placeholder="Country"
            type="text"
          />
        </label>
      </div>
    </div>

    <p class="text-purple-900 font-semibold mb-4">Bill To</p>

    <div class="mb-4">
      <label class="">
        <span class="text-gray-400">Client's Name</span>
        <input
          class="rounded-md w-full border border-gray-300 font-semibold"
          placeholder="Client's Name"
          type="text"
        />
      </label>
    </div>

    <div class="mb-4">
      <label class="">
        <span class="text-gray-400">Client's Email</span>
        <input
          class="rounded-md w-full border border-gray-300 font-semibold"
          placeholder="Client's Email"
          type="email"
        />
      </label>
    </div>

    <div class="mb-4">
      <label class="">
        <span class="text-gray-400">Street Address</span>
        <input
          class="rounded-md w-full border border-gray-300 font-semibold"
          placeholder="Street Address"
          type="text"
        />
      </label>
    </div>

    <div class="flex mb-8">
      <div class="w-1/3 mr-5">
        <label class="">
          <span class="text-gray-400">City</span>
          <input
            class="rounded-md w-full border border-gray-300 font-semibold"
            placeholder="City"
            type="text"
          />
        </label>
      </div>

      <div class="w-1/3 mr-5">
        <label class="">
          <span class="text-gray-400">Post Code</span>
          <input
            class="rounded-md w-full border border-gray-300 font-semibold"
            placeholder="Post Code"
            type="text"
          />
        </label>
      </div>

      <div class="w-1/3">
        <label class="">
          <span class="text-gray-400">Country</span>
          <input
            class="rounded-md w-full border border-gray-300 font-semibold"
            placeholder="Country"
            type="text"
          />
        </label>
      </div>
    </div>

    <div class="flex mb-4">
      <div class="w-1/2 mr-10">
        <label class="">
          <span class="text-gray-400">Invoice Date</span>
          <input
            class="rounded-md w-full border border-gray-300 font-semibold"
            type="date"
          />
        </label>
      </div>

      <div class="w-1/2">
        <label class="">
          <span class="text-gray-400">Payment Terms</span>
          <select class="rounded-md w-full border border-gray-300 font-semibold">
            <option value="volvo">Net 30 Days</option>
            <option value="saab">Net 60 Days</option>
            <option value="mercedes">Net 90 Days</option>
          </select>
        </label>
      </div>
    </div>

    <div class="mb-8">
      <label class="">
        <span class="text-gray-400">Project Description</span>
        <input
          class="rounded-md w-full border border-gray-300 font-semibold"
          placeholder="Project Description"
          type="text"
        />
      </label>
    </div>

    <div>
      <p class="text-gray-500 text-xl font-semibold mb-4">Item List</p>
    </div>

    <div class="flex py-5 justify-end">
      <button class="px-6 bg-gray-300 rounded-2xl p-2 ml-4 focus:outline-none">
        <p class="text-black">Cancel</p>
      </button>
      <button
        class="px-6 shadow-md bg-blue-700 rounded-2xl p-2 ml-4 focus:outline-none text-white"
      >
        <p>Save Changes</p>
      </button>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style></style>
