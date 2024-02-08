<template>
  <div>
    <p class="text-sms">History</p>
    <div class="border w-full mt-2 mb-2"></div>
    <div class="flex flex-col gap-2">
      <div
        v-for="transaction in transactions"
        :key="transaction.id"
        class="flex hover:"
      >
        <i
          class="pi pi-times text-red-600 w-1/12 hover:pi-times"
          @click="deletetransaction(transaction.id)"
        ></i>

        <div
          :class="
            transaction.amount < 0 ? ' border-r-red-600' : ' border-r-green-600'
          "
          class="bg-white flex w-11/12 text-sm justify-between p-2 border border-r-4"
        >
          <p>{{ transaction.text }}</p>
          <p>${{ transaction.amount }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { defineProps, defineEmits } from "vue";

const props = defineProps({
  transactions: {
    type: Array,
    required: true,
  },
});

const emit = defineEmits(["transactiondeleted"]);

const deletetransaction = (id) => {
  emit("transactiondeleted", id);
};

console.log(props.transactions);
</script>
