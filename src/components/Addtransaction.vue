<template>
  <form class="flex flex-col gap-2" @submit.prevent="onsubmit">
    <p class="text-sm font-medium">Add new transaction</p>

    <label for="" class="text-sm">Text</label>
    <input
      v-model="text"
      type="text"
      name=""
      id=""
      placeholder="Enter text.."
      class="border w-full text-sm p-1.5 bg-white outline-none"
    />

    <label for="" class="text-sm font-medium"
      >Amount
      <p>(negative-expense, positive-income)</p>
    </label>
    <input
      v-model="amount"
      type="text"
      name=""
      id=""
      placeholder="Enter amount.."
      class="border w-full text-sm p-1.5 bg-white outline-none"
    />

    <button
      class="w-full p-1.5 font-medium text-white text-sm text-center bg-purple-400"
    >
      Add transaction
    </button>
  </form>
</template>

<script setup>
import { ref, defineEmits } from "vue";
import { useToast } from "vue-toastification";

const text = ref("");
const amount = ref("");
const toast = useToast();

const emit = defineEmits(["transactionsubmitted"]);

const onsubmit = () => {
  if (!text.value || !amount.value) {
    toast.error("both fields must be filled");
    return;
  }

  const data = {
    text: text.value,
    amount: parseFloat(amount.value),
  };
  emit("transactionsubmitted", data);
  console.log(text.value, amount.value);
  text.value = "";
  amount.value = "";
};
</script>
