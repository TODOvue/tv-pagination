<template>
  <TvPagination
    v-model="page"
    :total-items="300"
    :active-style="customActiveStyle"
  />
</template>

<script setup>
import { ref } from 'vue';
import TvPagination from '@todovue/tv-pagination';

const page = ref(1);
const customActiveStyle = ref({
  backgroundColor: '#10b981',
  color: '#ffffff'
});
</script>
