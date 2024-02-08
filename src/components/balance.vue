<template>
  <p class="text-sm">YOUR BALANCE</p>
  <p class="text-2xl font-semibold">${{ total }}</p>
</template>

<script setup>
import { defineProps } from "vue";

const props = defineProps({
  total: {
    type: Number,
    required: true,
  },
});
</script>
