<script setup lang="ts">
defineProps<{
  name: string
  icon?: string
}>()
</script>

<template>
  <span class="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md text-xs font-medium bg-dark-700/50 text-slate-300 border border-dark-600 hover:border-primary-500 hover:text-primary-400 transition-colors cursor-default">
    <i v-if="icon" :class="['pi', icon]"></i>
    {{ name }}
  </span>
</template>
