<template>
  <div class="flex justify-between h-16 p-3 w-full border mt-3 bg-white">
    <div class="text-center w-2/5 text-sm font-medium">
      <p>INCOME</p>
      <p class="text-green-300">+${{ income }}</p>
    </div>
    <div class="h-full border"></div>
    <div class="text-center text-sm w-2/5 font-medium">
      <p>EXPENSE</p>
      <p class="text-red-400">-${{ expense }}</p>
    </div>
  </div>
</template>

<script setup>
import { defineProps } from "vue";

const props = defineProps({
  income: {
    type: Number,
    required: true,
  },
  expense: {
    type: Number,
    required: true,
  },
});
</script>
