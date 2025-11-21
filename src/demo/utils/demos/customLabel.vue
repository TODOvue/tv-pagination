<template>
  <TvPagination
    v-model="page"
    :total-items="150"
    :labels="customLabels"
  />
</template>

<script setup>
import { ref } from 'vue';
import { TvPagination } from '@todovue/tv-pagination';
import '@todovue/tv-pagination/style.css';
import '@todovue/tv-button/style.css';

const page = ref(1);
const customLabels = {
  first: 'Primera',
  prev: 'Anterior',
  next: 'Siguiente',
  last: 'Última'
}
</script>
