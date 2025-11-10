<template>
  <TvPagination
    v-model="page"
    :total-items="500"
    :sibling-count="2"
    :boundary-count="2"
  />
</template>

<script setup>
import { ref } from 'vue';
import TvPagination from '@todovue/tv-pagination';

const page = ref(1);
</script>
