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
import TvPagination from '@todovue/tv-pagination';

const page = ref(1);
</script>
