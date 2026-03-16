<script setup lang="ts">
defineProps<{
  title: string
  company: string
  period: string
  description: string
  isLast?: boolean
}>()
</script>

<template>
  <div class="relative pl-8 pb-8">
    <div v-if="!isLast" class="absolute top-2 left-[11px] bottom-0 w-[2px] bg-dark-700"></div>
    
    <div class="absolute top-1 left-0 w-6 h-6 rounded-full bg-dark-800 border-2 border-primary-500 flex items-center justify-center z-10">
      <div class="w-2 h-2 rounded-full bg-primary-500"></div>
    </div>
    
    <div class="bg-dark-800 p-6 rounded-xl border border-dark-700 hover:border-dark-600 transition-colors">
      <div class="flex flex-col sm:flex-row sm:items-center justify-between mb-2 gap-2">
        <h3 class="text-lg font-bold text-slate-100">{{ title }}</h3>
        <span class="text-xs font-medium px-2.5 py-1 rounded-full bg-primary-900/30 text-primary-400 border border-primary-900/50 inline-block w-max">
          {{ period }}
        </span>
      </div>
      <h4 class="text-primary-500 font-medium mb-4 flex items-center gap-2">
        <i class="pi pi-building text-sm"></i> {{ company }}
      </h4>
      <p class="text-slate-400 text-sm whitespace-pre-line">{{ description }}</p>
    </div>
  </div>
</template>
