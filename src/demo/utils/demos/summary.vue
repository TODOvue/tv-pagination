<template>
  <TvPagination
    v-model="page"
    :total-items="255"
    show-summary
    :page-size="20"
  />
</template>

<script setup>
import { ref } from 'vue';
import { TvPagination } from '@todovue/tv-pagination';
import '@todovue/tv-pagination/style.css';
import '@todovue/tv-button/style.css';

const page = ref(1);
</script>
