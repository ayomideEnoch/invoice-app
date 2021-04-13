<template>
  <div class="">
    <p class="font-semibold text-4xl mb-14">New Invoice</p>
    <p class="text-purple-900 font-semibold mb-4">Bill From</p>

    <div class="mb-4">
      <label class="">
        <span class="text-gray-400">Steet Address</span>
        <input
          v-model="invoiceDatabase.billFrom.streetAddress"
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
            v-model="invoiceDatabase.billFrom.city"
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
            v-model="invoiceDatabase.billFrom.postCode"
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
            v-model="invoiceDatabase.billFrom.country"
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
          v-model="invoiceDatabase.billTo.clientName"
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
          v-model="invoiceDatabase.billTo.clientEmail"
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
          v-model="invoiceDatabase.billTo.streetAddress"
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
            v-model="invoiceDatabase.billTo.city"
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
            v-model="invoiceDatabase.billTo.postCode"
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
            v-model="invoiceDatabase.billTo.country"
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
            v-model="invoiceDatabase.invoiceData.invoiceDate"
            class="rounded-md w-full border border-gray-300 font-semibold"
            type="date"
          />
        </label>
      </div>

      <div class="w-1/2">
        <label class="">
          <span class="text-gray-400">Payment Terms</span>
          <select
            v-model="invoiceDatabase.invoiceData.paymentTerms"
            class="rounded-md w-full border border-gray-300 font-semibold"
          >
            <option value="30 Days">Net 30 Days</option>
            <option value="60 Days">Net 60 Days</option>
            <option value="90 Days">Net 90 Days</option>
          </select>
        </label>
      </div>
    </div>

    <div class="mb-8">
      <label class="">
        <span class="text-gray-400">Project Description</span>
        <input
          v-model="invoiceDatabase.invoiceData.projectDescription"
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
          <th class="w-3/12">Item Name</th>
          <th class="w-2/12">Qty.</th>
          <th class="w-3/12">Price</th>
          <th class="w-2/12 text-center">Total</th>
          <th class="w-1/12"></th>
        </tr>
      </thead>
      <tbody class="">
        <tr v-for="(item, index) in invoiceDatabase.itemList" :key="item.index">
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
              v-model="item.quantity"
              class="rounded-md w-full border border-gray-300 font-semibold"
              placeholder=""
              type="number"
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
          <td>
            <p class="text-center">
              ₦{{ (item.price * item.quantity).toLocaleString() }}
            </p>
          </td>
          <td>
            <button
              @click="removeItem(index)"
              :disabled="invoiceDatabase.itemList.length === 1"
              class="cursor-pointer"
              :class="
                invoiceDatabase.itemList.length === 1 ? 'text-gray-500' : 'text-red-600 '
              "
            >
              <i class="fa fa-trash"></i>
            </button>
          </td>
        </tr>
        <tr>
          <td></td>
          <td></td>
          <td></td>
          <td>
            <p class="text-center font-bold">₦{{ total.toLocaleString() }}</p>
          </td>
          <td></td>
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

    <div class="flex justify-between items-center">
      <div>
        <router-link :to="{ name: 'Home' }"
          ><button
            class="text-white px-6 bg-red-600 rounded-2xl p-2 ml-4 focus:outline-none"
          >
            <p>Discard</p>
          </button>
        </router-link>
      </div>
      <div class="flex py-5 justify-end">
        <button
          @click="saveDraft"
          class="text-white px-6 bg-gray-500 rounded-2xl p-2 ml-4 focus:outline-none"
        >
          <p>Save as Draft</p>
        </button>
        <button
          @click="saveSend"
          class="px-6 shadow-md bg-blue-700 rounded-2xl p-2 ml-4 focus:outline-none text-white"
        >
          <p>Save & Send</p>
        </button>
      </div>
    </div>
    <!--  -->
    <div
      v-if="successModal"
      class="fixed z-10 inset-0 bg-black bg-opacity-20 h-screen w-full"
    >
      <div
        class="transition duration-500 ease-in-out transform translate-y-1 bottom-12 right-44 fixed z-20 bg-white rounded-xl"
      >
        <div class="text-center px-5 py-3">
          <i class="fal fa-check-circle text-green-500 text-4xl"></i>
          <p class="text-xl">Invoice entry success!</p>
        </div>
      </div>
    </div>
    <!--  -->
    <div
      v-if="failureModal"
      class="fixed z-10 inset-0 bg-black bg-opacity-20 h-screen w-full"
    >
      <div
        class="transition duration-500 ease-in-out transform translate-y-1 bottom-12 right-44 fixed z-20 bg-white rounded-xl"
      >
        <div class="text-center px-5 py-3">
          <i class="fal fa-times text-red-500 text-4xl"></i>
          <p class="text-xl">Invoice entry details incomplete!</p>
          <p class="">Client Name, Item Price and Invoice Date are compulsory fields.</p>
          <button
            @click="failureModal = false"
            class="my-2 bg-red-600 p-2 text-white rounded-xl focus:outline-none"
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      modalMsg: "",
      successModal: false,
      failureModal: false,
      invoiceDatabase: {
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
          invoiceNo: "",
          invoiceDate: "",
          paymentTerms: "",
          projectDescription: "",
          invoiceTotal: "",
          status: "",
        },
        itemList: [
          {
            itemName: "",
            quantity: 1,
            price: 0,
          },
        ],
      },
    };
  },
  computed: {
    total() {
      return this.invoiceDatabase.itemList.reduce(
        (acc, item) => acc + item.price * item.quantity,
        0
      );
    },
  },
  methods: {
    saveSend() {
      if (
        this.invoiceDatabase.invoiceData.invoiceTotal === "" &&
        this.invoiceDatabase.invoiceData.invoiceDate === "" &&
        this.invoiceDatabase.billTo.clientName === ""
      ) {
        this.failureMessage();
        return;
      } else {
        this.invoiceDatabase.invoiceData.invoiceTotal = this.total;
        this.invoiceDatabase.invoiceData.status = "Pending";
        let random = Math.floor(Math.random() * 1000).toString();
        this.invoiceDatabase.invoiceData.invoiceNo = "#" + random;
        let data = JSON.parse(JSON.stringify(this.invoiceDatabase));
        this.$store.commit("setNewInvoiceCreated", data);
        this.errorMsg = "Invoice entry successful!";
        this.successMessage();
      }
    },
    saveDraft() {
      this.invoiceDatabase.invoiceData.invoiceTotal = this.total;
      this.invoiceDatabase.invoiceData.status = "Draft";
      let random = Math.floor(Math.random() * 1000).toString();
      this.invoiceDatabase.invoiceData.invoiceNo = "#" + random;
      let data = JSON.parse(JSON.stringify(this.invoiceDatabase));
      this.$store.commit("setNewInvoiceCreated", data);
      this.errorMsg = "Invoice entry successful!";
      this.successMessage();
    },
    addItem() {
      this.invoiceDatabase.itemList.push({
        itemName: "",
        quantity: 1,
        price: 0,
      });
    },
    removeItem(index) {
      this.invoiceDatabase.itemList = this.invoiceDatabase.itemList.filter(
        (item, i) => i !== index
      );
    },
    successMessage() {
      this.successModal = true;
      setTimeout(() => {
        this.$router.push({ name: "Home" });
      }, 2500);
    },
    failureMessage() {
      this.failureModal = true;
    },
  },
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
