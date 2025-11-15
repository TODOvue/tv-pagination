<script setup>
import { defineAsyncComponent } from 'vue'
import { demos } from "./utils/mocks.js"

const TvPagination = defineAsyncComponent(/* webpackChunkName: "TvBreadcrumbs" */() => import('../components/TvPagination.vue'))
</script>

<template>
  <tv-demo
    :component="TvPagination"
    :variants="demos"
    nameComponent="TvPagination"
    npmInstall="@todovue/tv-pagination"
    sourceLink="https://github.com/TODOvue/tv-pagination"
    urlClone="https://github.com/TODOvue/tv-pagination.git"
    version="1.0.1"
  />
</template>
