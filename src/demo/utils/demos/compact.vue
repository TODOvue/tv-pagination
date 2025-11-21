<template>
  <TvPagination
    v-model="page"
    :total-items="80"
    :show-prev-next="false"
    :sibling-count="0"
    :boundary-count="1"
  />
</template>

<script setup>
import { ref } from 'vue';
import { TvPagination } from '@todovue/tv-pagination';
import '@todovue/tv-pagination/style.css';
import '@todovue/tv-button/style.css';

const page = ref(1);
</script>
