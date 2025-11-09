import { computed } from 'vue'

export function usePagination(props, emit) {
  const totalPages = computed(() => Math.max(1, Math.ceil(props.totalItems / props.pageSize)))
  
  const isFirstPage = computed(() => props.modelValue <= 1)
  const isLastPage = computed(() => props.modelValue >= totalPages.value)
  
  const range = (start, end) => Array.from({ length: end - start + 1 }, (_, i) => start + i)
  
  const items = computed(() => {
    const total = totalPages.value
    const current = Math.min(Math.max(1, props.modelValue), total)
    const siblings = Math.max(0, props.siblingCount)
    const boundaries = Math.max(0, props.boundaryCount)
    
    const startPages = range(1, Math.min(boundaries, total))
    const endPages = range(Math.max(total - boundaries + 1, 1), total)
    
    const leftSibling = Math.max(current - siblings, 1)
    const rightSibling = Math.min(current + siblings, total)
    
    const left = Math.max(leftSibling, boundaries + 1)
    const right = Math.min(rightSibling, total - boundaries)
    
    const shouldShowLeftEllipsis = left > boundaries + 1
    const shouldShowRightEllipsis = right < total - boundaries
    
    const middle = range(left, right)
    
    const sequence = [
      ...startPages,
      ...(shouldShowLeftEllipsis ? ['ellipsis-left'] : []),
      ...middle,
      ...(shouldShowRightEllipsis ? ['ellipsis-right'] : []),
      ...endPages
    ]
    
    return sequence.map(token => {
      if (typeof token === 'number') {
        return { type: 'page', key: `p-${token}`, value: token, isActive: token === current }
      }
      return { type: 'ellipsis', key: token }
    })
  })
  
  
  const goTo = page => {
    const next = Math.min(Math.max(1, page), totalPages.value)
    if (next !== props.modelValue) {
      emit('update:modelValue', next)
      emit('change', next)
    }
  }
  
  
  const goToFirst = () => goTo(1)
  const goToLast = () => goTo(totalPages.value)
  const goToPrev = () => goTo(props.modelValue - 1)
  const goToNext = () => goTo(props.modelValue + 1)
  
  return { items, totalPages, isFirstPage, isLastPage, goTo, goToFirst, goToLast, goToPrev, goToNext }
}
