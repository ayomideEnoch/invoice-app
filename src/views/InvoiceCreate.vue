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

    <table class="table-fixed w-full mb-8">
      <thead>
        <tr class="text-gray-400 text-left mb-2">
          <th class="w-5/12">Item Name</th>
          <th class="w-1/12">Qty.</th>
          <th class="w-3/12">Price</th>
          <th class="w-2/12">Total</th>
          <th class="w-1/12"></th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td class="pr-6">
            <input
              class="rounded-md w-full border border-gray-300 font-semibold"
              placeholder="Banner "
              type="text"
            />
          </td>
          <td class="pr-2">
            <input
              class="rounded-md w-full border border-gray-300 font-semibold"
              placeholder="1 "
              type="number"
            />
          </td>
          <td class="pr-2">
            <input
              class="rounded-md w-full border border-gray-300 font-semibold"
              placeholder="156.00"
              type="number"
            />
          </td>
          <td><p>156.00</p></td>
          <td class="flex justify-center py-3 cursor-pointer text-red-400">
            <i class="fa fa-trash"></i>
          </td>
        </tr>
        <tr>
          <td class="pr-6">
            <input
              class="rounded-md w-full border border-gray-300 font-semibold"
              placeholder="Email"
              type="email"
            />
          </td>
          <td class="pr-2">
            <input
              class="rounded-md w-full border border-gray-300 font-semibold"
              placeholder="2"
              type="number"
            />
          </td>
          <td class="pr-2">
            <input
              class="rounded-md w-full border border-gray-300 font-semibold"
              placeholder="200.00"
              type="number"
            />
          </td>
          <td>
            <p>400.00</p>
          </td>
          <td class="flex justify-center py-3 cursor-pointer text-red-400">
            <i class="fa fa-trash"></i>
          </td>
        </tr>
      </tbody>
    </table>

    <div class="flex py-5 justify-end">
      <button class="text-white px-6 bg-red-400 rounded-2xl p-2 ml-4 focus:outline-none">
        <p>Cancel</p>
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
