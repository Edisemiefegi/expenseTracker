<template>
  <div
    class="w-screen h-screen flex justify-center items-center flex-col bg-gray-200"
  >
    <div class="w-80 flex flex-col gap-5">
      <p class="text-lg font-semibold">Expense Tracker</p>

      <div>
        <balance :total="+total" />
        <incomeExpenses :income="+income" :expense="+expense" />
      </div>

      <history :transactions="transactions" @transactiondeleted="handledelet" />
      <Addtransaction @transactionsubmitted="handletransactions" />
    </div>
  </div>
</template>

<script setup>
import balance from "../components/balance.vue";
import incomeExpenses from "../components/incomeExpenses.vue";
import history from "../components/history.vue";
import Addtransaction from "../components/Addtransaction.vue";

import { computed, ref, onMounted } from "vue";
import { useToast } from "vue-toastification";

const toast = useToast();

const transactions = ref([]);

onMounted(() => {
  const savedTransactions = JSON.parse(localStorage.getItem("transactions"));

  if (savedTransactions) {
    transactions.value = savedTransactions;
  }
});

const total = computed(() => {
  return transactions.value
    .reduce((acc, transaction) => {
      return acc + transaction.amount;
    }, 0)
    .toFixed(2);
});

const income = computed(() => {
  return transactions.value
    .filter((e) => e.amount > 0)
    .reduce((acc, transaction) => {
      return acc + transaction.amount;
    }, 0)
    .toFixed(2);
});

const expense = computed(() => {
  return transactions.value
    .filter((e) => e.amount < 0)
    .reduce((acc, transaction) => {
      return acc + transaction.amount;
    }, 0)
    .toFixed(2);
});

// add transaction

const handletransactions = (data) => {
  transactions.value.push({
    id: generateId(),
    text: data.text,
    amount: data.amount,
  });

  saveTransactionstoLS();
  toast.success("transaction added");
  console.log(data);
};

const generateId = () => {
  return Math.floor(Math.random() * 10000);
};

const handledelet = (id) => {
  transactions.value = transactions.value.filter((e) => e.id !== id);

  saveTransactionstoLS();
  toast.success("transaction deleted");
};

const saveTransactionstoLS = () => {
  localStorage.setItem("transactions", JSON.stringify(transactions.value));
};
</script>
