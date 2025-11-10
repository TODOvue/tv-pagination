import { computed } from 'vue'

export function usePagination(props, emit) {
  const totalPages = computed(() => {
    if (!props.totalItems || props.totalItems <= 0) return 1
    if (!props.pageSize || props.pageSize <= 0) return 1
    return Math.max(1, Math.ceil(props.totalItems / props.pageSize))
  })
  
  const currentPage = computed(() => {
    return Math.min(Math.max(1, props.modelValue), totalPages.value)
  })
  
  const isFirstPage = computed(() => currentPage.value <= 1)
  const isLastPage = computed(() => currentPage.value >= totalPages.value)
  
  const range = (start, end) => {
    if (start > end) return []
    return Array.from({ length: end - start + 1 }, (_, i) => start + i)
  }
  
  const items = computed(() => {
    const total = totalPages.value
    const current = currentPage.value
    const siblings = Math.max(0, props.siblingCount)
    const boundaries = Math.max(0, props.boundaryCount)
    
    if (total <= 0) return []
    
    const startPages = range(1, Math.min(boundaries, total))
    const endPages = range(Math.max(total - boundaries + 1, boundaries + 1), total)
    
    const leftSibling = Math.max(current - siblings, 1)
    const rightSibling = Math.min(current + siblings, total)
    
    const left = Math.max(leftSibling, boundaries + 1)
    const right = Math.min(rightSibling, total - boundaries)
    
    const shouldShowLeftEllipsis = left > boundaries + 2
    const shouldShowRightEllipsis = right < total - boundaries - 1
    
    const middle = range(left, right).filter(p => !startPages.includes(p) && !endPages.includes(p))
    
    const sequence = [
      ...startPages,
      ...(shouldShowLeftEllipsis ? ['ellipsis-left'] : []),
      ...middle,
      ...(shouldShowRightEllipsis ? ['ellipsis-right'] : []),
      ...endPages
    ]
    
    const uniqueSequence = [...new Set(sequence)]
    
    return uniqueSequence.map(token => {
      if (typeof token === 'number') {
        return {
          type: 'page',
          key: `page-${token}`,
          value: token,
          isActive: token === current
        }
      }
      return {
        type: 'ellipsis',
        key: token
      }
    })
  })
  
  const goTo = page => {
    if (typeof page !== 'number' || isNaN(page)) return
    
    const nextPage = Math.min(Math.max(1, page), totalPages.value)
    
    if (nextPage !== props.modelValue) {
      emit('update:modelValue', nextPage)
      emit('change', nextPage)
    }
  }
  
  const goToFirst = () => goTo(1)
  const goToLast = () => goTo(totalPages.value)
  const goToPrev = () => goTo(props.modelValue - 1)
  const goToNext = () => goTo(props.modelValue + 1)
  
  return {
    items,
    totalPages,
    currentPage,
    isFirstPage,
    isLastPage,
    goTo,
    goToFirst,
    goToLast,
    goToPrev,
    goToNext
  }
}
