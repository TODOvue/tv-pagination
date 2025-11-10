<template>
  <TvPagination
    v-model="page"
    :total-items="100"
    :show-first-last="false"
  />
</template>

<script setup>
import { ref } from 'vue';
import TvPagination from '@todovue/tv-pagination';

const page = ref(1);
</script>
