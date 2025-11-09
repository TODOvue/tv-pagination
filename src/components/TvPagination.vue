<script setup>
import { watch } from 'vue'
import TvButton from '@todovue/tv-button'
import { usePagination } from '../composables/usePagination.js'

const props = defineProps({
  modelValue: { type: Number, default: 1 },
  totalItems: { type: Number, required: true },
  pageSize: { type: Number, default: 10 },
  siblingCount: { type: Number, default: 1 },
  boundaryCount: { type: Number, default: 1 },
  showFirstLast: { type: Boolean, default: true },
  showPrevNext: { type: Boolean, default: true },
  disabled: { type: Boolean, default: false },
  ariaLabel: { type: String, default: 'Pagination' },
  labels: {
    type: Object,
    default: () => ({ first: 'First', prev: 'Prev', next: 'Next', last: 'Last' })
  },
  buttonProps: { type: Object, default: () => ({}) }
})


const emit = defineEmits(['update:modelValue', 'change'])

const { items, totalPages, isFirstPage, isLastPage, goTo, goToFirst, goToLast, goToNext, goToPrev } = usePagination(props, emit)

watch(
  () => props.modelValue,
  value => {
    if (value < 1) emit('update:modelValue', 1)
    else if (value > totalPages.value) emit('update:modelValue', totalPages.value)
  },
  { immediate: true }
)
</script>

<template>
  <nav class="tv-pagination" :aria-label="ariaLabel">
    <ul class="tv-pagination__list">
      <li v-if="showFirstLast" class="tv-pagination__item">
        <TvButton
          rounded
          small
          type="icon"
          v-bind="buttonProps"
          :disabled="disabled || isFirstPage"
          @click="goToFirst"
        >
          {{ labels.first }}
        </TvButton>
      </li>
      <li v-if="showPrevNext" class="tv-pagination__item">
        <TvButton
          rounded
          small
          type="icon"
          v-bind="buttonProps"
          :disabled="disabled || isFirstPage"
          @click="goToPrev"
        >
          {{ labels.prev }}
        </TvButton>
      </li>
      <li v-for="item in items" :key="item.key" class="tv-pagination__item">
        <template v-if="item.type === 'page'">
          <TvButton
            rounded
            small
            type="icon"
            v-bind="buttonProps"
            :disabled="disabled"
            :aria-current="item.isActive ? 'page' : undefined"
            :class="{ 'is-active': item.isActive }"
            @click="goTo(item.value)"
          >
            <slot name="page-label" :page="item.value" :active="item.isActive">{{ item.value }}</slot>
          </TvButton>
        </template>
        <template v-else-if="item.type === 'ellipsis'">
          <span class="tv-pagination__ellipsis" aria-hidden="true">…</span>
        </template>
      </li>
      <li v-if="showPrevNext" class="tv-pagination__item">
        <TvButton
          rounded
          small
          type="icon"
          v-bind="buttonProps"
          :disabled="disabled || isLastPage"
          @click="goToNext"
        >
          {{ labels.next }}
        </TvButton>
      </li>
      <li v-if="showFirstLast" class="tv-pagination__item">
        <TvButton
          rounded
          small
          type="icon"
          v-bind="buttonProps"
          :disabled="disabled || isLastPage"
          @click="goToLast"
        >
          {{ labels.last }}
        </TvButton>
      </li>
    </ul>
  </nav>
</template>

<style lang="scss" src="../assets/scss/style.scss"></style>
