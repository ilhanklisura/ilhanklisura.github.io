<script setup lang="ts">
defineProps<{
  title: string
  excerpt: string
  date: string
  readTime: string
  slug: string
  category?: string
}>()
</script>

<template>
  <router-link :to="`/blog/${slug}`" class="block group">
    <article class="p-6 bg-dark-800 rounded-xl border border-dark-700 hover:border-primary-500 transition-colors duration-300">
      <div class="flex items-center gap-3 text-xs text-slate-400 mb-3">
        <time :datetime="date" class="flex items-center gap-1">
          <i class="pi pi-calendar"></i> {{ date }}
        </time>
        <span>&bull;</span>
        <span class="flex items-center gap-1">
          <i class="pi pi-clock"></i> {{ readTime }} read
        </span>
        <template v-if="category">
          <span>&bull;</span>
          <span class="text-primary-400 font-medium">{{ category }}</span>
        </template>
      </div>
      
      <h3 class="text-xl font-bold text-slate-100 mb-2 group-hover:text-primary-400 transition-colors">{{ title }}</h3>
      <p class="text-slate-400 line-clamp-2">{{ excerpt }}</p>
      
      <div class="mt-4 text-primary-500 text-sm font-medium inline-flex items-center gap-1 group-hover:gap-2 transition-all">
        Read More <i class="pi pi-arrow-right text-xs"></i>
      </div>
    </article>
  </router-link>
</template>
