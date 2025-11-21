<template>
  <TvPagination
    v-model="page"
    :total-items="200"
    :sibling-count="1"
    :boundary-count="1"
    :show-icons="true"
  />
</template>

<script setup>
import { ref } from 'vue';
import { TvPagination } from '@todovue/tv-pagination';
import '@todovue/tv-pagination/style.css';
import '@todovue/tv-button/style.css';

const page = ref(1);
</script>
