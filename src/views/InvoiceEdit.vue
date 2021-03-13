<template>
  <div class="">
    <p class="font-semibold text-4xl mb-14">New Invoice</p>
    <p class="text-purple-900 font-semibold mb-4">Bill From</p>

    <div class="mb-4">
      <label class="">
        <span class="text-gray-400">Steet Address</span>
        <input
          v-model="billFrom.streetAddress"
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
            v-model="billFrom.city"
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
            v-model="billFrom.postCode"
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
            v-model="billFrom.country"
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
          v-model="billTo.clientName"
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
          v-model="billTo.clientEmail"
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
          v-model="billTo.streetAddress"
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
            v-model="billTo.city"
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
            v-model="billTo.postCode"
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
            v-model="billTo.country"
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
            v-model="invoiceData.invoiceDate"
            class="rounded-md w-full border border-gray-300 font-semibold"
            type="date"
          />
        </label>
      </div>

      <div class="w-1/2">
        <label class="">
          <span class="text-gray-400">Payment Terms</span>
          <select
            v-model="invoiceData.paymentTerms"
            class="rounded-md w-full border border-gray-300 font-semibold"
          >
            <option value="Net 30 Days">Net 30 Days</option>
            <option value="Net 60 Days">Net 60 Days</option>
            <option value="Net 90 Days">Net 90 Days</option>
          </select>
        </label>
      </div>
    </div>

    <div class="mb-8">
      <label class="">
        <span class="text-gray-400">Project Description</span>
        <input
          v-model="invoiceData.projectDescription"
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
        <tr class="text-gray-400 text-left pb-2">
          <th class="w-5/12">Item Name</th>
          <th class="w-1/12">Qty.</th>
          <th class="w-3/12">Price</th>
          <th class="w-2/12 text-center">Total</th>
          <th class="w-1/12"></th>
        </tr>
      </thead>
      <tbody class="">
        <tr v-for="(item, index) in itemList" :key="item.index">
          <td class="pr-6">
            <input
              v-model="item.itemName"
              class="rounded-md w-full border border-gray-300 font-semibold"
              placeholder="Item Name"
              type="text"
            />
          </td>
          <td class="pr-6">
            <input
              v-model="item.price"
              class="rounded-md w-full border border-gray-300 font-semibold"
              placeholder=""
              type="number"
            />
          </td>
          <td class="pr-6">
            <input
              v-model="item.quantity"
              class="rounded-md w-full border border-gray-300 font-semibold"
              placeholder=""
              type="number"
            />
          </td>
          <td>
            <p class="text-center">{{ item.quantity * item.price }}</p>
          </td>
          <td>
            <button
              @click="removeItem(index)"
              :disabled="itemList.length === 1"
              class="cursor-pointer"
              :class="itemList.length === 1 ? 'text-gray-500' : 'text-red-600 '"
            >
              <i class="fa fa-trash"></i>
            </button>
          </td>
        </tr>
      </tbody>
    </table>

    <div class="">
      <button
        @click="addItem"
        class="flex justify-center items-center bg-blue-500 rounded-full w-full text-white focus:outline-none p-2"
      >
        <i class="fa fa-plus"></i>
        <p class="pl-2">Add New Item</p>
      </button>
    </div>

    <div class="flex py-5 justify-end">
      <router-link :to="{ name: 'Home' }"
        ><button
          class="text-white px-6 bg-red-600 rounded-2xl p-2 ml-4 focus:outline-none"
        >
          <p>Cancel</p>
        </button></router-link
      >
      <button
        class="px-6 shadow-md bg-blue-700 rounded-2xl p-2 ml-4 focus:outline-none text-white"
      >
        <p>Save Changes</p>
      </button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      billFrom: {
        streetAddress: "",
        city: "",
        postCode: "",
        country: "",
      },
      billTo: {
        clientName: "",
        clientEmail: "",
        streetAddress: "",
        city: "",
        postCode: "",
        country: "",
      },
      invoiceData: {
        invoiceDate: "",
        paymentTerms: "",
        projectDescription: "",
      },
      itemList: [
        {
          itemName: "",
          quantity: "",
          price: "",
        },
        {
          itemName: "",
          quantity: "",
          price: "",
        },
      ],
    };
  },

  methods: {
    addItem() {
      this.itemList.push({
        itemName: "",
        quantity: "",
        price: "",
      });
    },
    removeItem(index) {
      this.itemList = this.itemList.filter((item, i) => i !== index);
    },
  },
  // computed: {
  //   calculateTotal: function () {
  //     for (let i = 0; i < this.itemList.length; i++) {
  //       let total = this.itemList[i].quantity * this.itemList[i].price;
  //       this.itemList[i].total = total;
  //     }
  //     let tt = 0;
  //     return tt;
  //   },
  // },
};
</script>

<style>
td {
  padding: 0.5rem;
}
th {
  padding: 0.25rem;
}
</style>
