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
import { TvPagination } from '@todovue/tv-pagination';
import '@todovue/tv-pagination/style.css';
import '@todovue/tv-button/style.css';

const page = ref(1);
</script>
