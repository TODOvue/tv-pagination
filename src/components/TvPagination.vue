<script setup>
import { watch, computed } from 'vue'
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
  showIcons: { type: Boolean, default: false },
  disabled: { type: Boolean, default: false },
  ariaLabel: { type: String, default: 'Pagination' },
  labels: {
    type: Object,
    default: () => ({ first: 'First', prev: 'Prev', next: 'Next', last: 'Last' })
  },
  buttonProps: { type: Object, default: () => ({}) },
  activeStyle: {
    type: Object,
    default: () => ({})
  },
  inactiveStyle: {
    type: Object,
    default: () => ({ backgroundColor: '#ffffff' })
  }
})

const emit = defineEmits(['update:modelValue', 'change'])

const { items, totalPages, isFirstPage, isLastPage, goTo, goToFirst, goToLast, goToNext, goToPrev } = usePagination(props, emit)

const activeCustomStyle = computed(() => {
  const style = props.activeStyle || {}
  return Object.keys(style).length ? style : undefined
})

const inactiveCustomStyle = computed(() => {
  const style = props.inactiveStyle || {}
  return Object.keys(style).length ? style : { backgroundColor: '#ffffff' }
})

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
          :custom-style="activeCustomStyle"
          :icon="showIcons ? 'arrow-left' : undefined"
          :disabled="disabled || isFirstPage"
          :aria-label="labels.first"
          @click-button="goToFirst"
        >
          {{ showIcons ? '' : labels.first }}
        </TvButton>
      </li>

      <li v-if="showPrevNext" class="tv-pagination__item">
        <TvButton
          rounded
          small
          type="icon"
          v-bind="buttonProps"
          :custom-style="activeCustomStyle"
          :icon="showIcons ? 'arrow-left' : undefined"
          :disabled="disabled || isFirstPage"
          :aria-label="labels.prev"
          @click-button="goToPrev"
        >
          {{ showIcons ? '' : labels.prev }}
        </TvButton>
      </li>

      <li v-for="item in items" :key="item.key" class="tv-pagination__item">
        <template v-if="item.type === 'page'">
          <TvButton
            rounded
            small
            type="icon"
            v-bind="buttonProps"
            :custom-style="item.isActive ? activeCustomStyle : inactiveCustomStyle"
            :disabled="disabled"
            :aria-current="item.isActive ? 'page' : undefined"
            :class="{ 'is-active': item.isActive }"
            @click-button="goTo(item.value)"
          >
            <slot name="page-label" :page="item.value" :active="item.isActive">
              {{ item.value }}
            </slot>
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
          :custom-style="activeCustomStyle"
          :icon="showIcons ? 'arrow-right' : undefined"
          :disabled="disabled || isLastPage"
          :aria-label="labels.next"
          @click-button="goToNext"
        >
          {{ showIcons ? '' : labels.next }}
        </TvButton>
      </li>

      <li v-if="showFirstLast" class="tv-pagination__item">
        <TvButton
          rounded
          small
          type="icon"
          v-bind="buttonProps"
          :custom-style="activeCustomStyle"
          :icon="showIcons ? 'arrow-right' : undefined"
          :disabled="disabled || isLastPage"
          :aria-label="labels.last"
          @click-button="goToLast"
        >
          {{ showIcons ? '' : labels.last }}
        </TvButton>
      </li>
    </ul>
  </nav>
</template>

<style lang="scss" src="../assets/scss/style.scss"></style>
