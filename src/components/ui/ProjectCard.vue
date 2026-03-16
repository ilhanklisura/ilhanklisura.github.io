<script setup lang="ts">
import SkillBadge from './SkillBadge.vue'

defineProps<{
  title: string
  description: string
  image?: string
  technologies: string[]
  githubUrl?: string
  liveUrl?: string
}>()
</script>

<template>
  <div class="bg-dark-800 border border-dark-700 rounded-xl overflow-hidden hover:border-primary-500 transition-all duration-300 group hover:-translate-y-1 shadow-lg hover:shadow-primary-900/20 flex flex-col h-full">
    <div v-if="image" class="h-48 overflow-hidden">
      <img :src="image" :alt="title" class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
    </div>
    <div v-else class="h-48 bg-gradient-to-br from-dark-700 to-dark-900 flex items-center justify-center">
      <i class="pi pi-code text-4xl text-dark-500"></i>
    </div>
    
    <div class="p-6 flex flex-col flex-grow">
      <h3 class="text-xl font-bold text-slate-100 mb-2 group-hover:text-primary-400 transition-colors">{{ title }}</h3>
      <p class="text-slate-400 text-sm mb-4 flex-grow">{{ description }}</p>
      
      <div class="flex flex-wrap gap-2 mb-6">
        <SkillBadge v-for="tech in technologies" :key="tech" :name="tech" />
      </div>
      
      <div class="flex items-center gap-4 mt-auto">
        <a v-if="githubUrl" :href="githubUrl" target="_blank" rel="noopener noreferrer" class="text-slate-300 hover:text-primary-400 text-sm font-medium flex items-center gap-1 transition-colors">
          <i class="pi pi-github"></i> Code
        </a>
        <a v-if="liveUrl" :href="liveUrl" target="_blank" rel="noopener noreferrer" class="text-slate-300 hover:text-primary-400 text-sm font-medium flex items-center gap-1 transition-colors">
          <i class="pi pi-external-link"></i> Live Demo
        </a>
      </div>
    </div>
  </div>
</template>
