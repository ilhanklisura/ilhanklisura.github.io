<script setup lang="ts">
import { ref } from 'vue'
import BlogCard from '@/components/ui/BlogCard.vue'

// In a real app, this would be auto-generated from vite-plugin-pages or unplugin-vue-markdown
const posts = ref([
  {
    title: 'Vue 3 + TypeScript Enterprise UI Patterns',
    slug: 'vue3-typescript-enterprise-ui-patterns',
    excerpt: 'Exploring scalable architectural patterns for large Vue 3 applications using Composition API and strict TypeScript.',
    date: 'Mar 11, 2026',
    readTime: '8 min',
    category: 'Vue'
  },
  {
    title: 'EF Core & SQL Server Performance Checklist',
    slug: 'ef-core-sql-server-performance-checklist',
    excerpt: 'A comprehensive checklist for optimizing Entity Framework Core queries and SQL Server database performance.',
    date: 'Mar 11, 2026',
    readTime: '12 min',
    category: '.NET'
  },
  {
    title: 'Clean Architecture for Small Teams',
    slug: 'clean-architecture-for-small-teams',
    excerpt: 'How to implement Clean Architecture pragmatically without over-engineering when working with a small development team.',
    date: 'Mar 11, 2026',
    readTime: '10 min',
    category: 'Architecture'
  }
])
</script>

<template>
  <div class="max-w-4xl mx-auto py-12">
    <header class="mb-12">
      <h1 class="text-4xl md:text-5xl font-bold text-slate-100 mb-4">Blog</h1>
      <p class="text-xl text-slate-400 max-w-2xl">
        Thoughts, tutorials, and technical notes on software engineering, architecture, and web development.
      </p>
    </header>

    <div class="space-y-6">
      <template v-for="(post, index) in posts" :key="post.slug">
        <BlogCard 
          v-bind="post"
          class="animate-fade-in-up"
          :style="{ animationDelay: `${index * 0.1}s` }"
        />
      </template>
    </div>
  </div>
</template>

<style scoped>
.animate-fade-in-up {
  animation: fadeInUp 0.5s ease-out forwards;
  opacity: 0;
  transform: translateY(10px);
}

@keyframes fadeInUp {
  to { opacity: 1; transform: translateY(0); }
}
</style>
