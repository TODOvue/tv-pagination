<script setup>
import { defineAsyncComponent } from 'vue'
import { demos } from "./utils/mocks.js"

const TvPagination = defineAsyncComponent(/* webpackChunkName: "tvPagination" */() => import('../components/TvPagination.vue'))
</script>

<template>
  <TvDemo
    :component="TvPagination"
    :variants="demos"
    :manual-emits="['update:modelValue', 'change']"
    hide-background
    component-name="TvPagination"
    npm-install="@todovue/tv-pagination"
    source-link="https://github.com/TODOvue/tv-pagination"
    url-clone="https://github.com/TODOvue/tv-pagination.git"
    version="1.1.3"
  />
</template>
