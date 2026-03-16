<script setup lang="ts">
import { ref, computed } from 'vue'
import ProjectCard from '@/components/ui/ProjectCard.vue'

const categories = [
  'All',
  'Fullstack',
  'Frontend',
  'Backend',
  'Mobile',
  'Tools'
]

const activeCategory = ref('All')

const projects = ref([
  {
    title: 'Eventify',
    description:
      'Full-stack event management platform built with .NET 8 and Vue 3.',
    technologies: ['Vue', 'TypeScript', '.NET', 'SQL Server'],
    githubUrl: 'https://github.com/ilhanklisura/eventify',
    category: 'Fullstack'
  },

  {
    title: 'V-Inspect',
    description:
      'Vehicle inspection management system rebuilt with .NET and Vue.',
    technologies: ['Vue', '.NET', 'SQL Server'],
    githubUrl: 'https://github.com/ilhanklisura/V-Inspect',
    category: 'Fullstack'
  },

  {
    title: 'FinancePal',
    description:
      'Mobile expense manager built with Kotlin and Jetpack Compose.',
    technologies: ['Kotlin', 'Android'],
    githubUrl: 'https://github.com/ilhanklisura/FinancePal',
    category: 'Mobile'
  },

  {
    title: 'WebScraper (Go)',
    description:
      'Lightweight web scraper built with Golang.',
    technologies: ['Go'],
    githubUrl: 'https://github.com/ilhanklisura/webscraper-golang',
    category: 'Tools'
  },

  {
    title: 'CLI Task Manager',
    description:
      'Command line task manager built in Go.',
    technologies: ['Go'],
    githubUrl: 'https://github.com/ilhanklisura/cli-golang',
    category: 'Tools'
  },

  {
    title: 'Frontend Web Projects',
    description:
      'Collection of frontend development projects built with HTML, CSS, JS and React.',
    technologies: ['HTML', 'CSS', 'JavaScript', 'React'],
    githubUrl: 'https://github.com/ilhanklisura/FFWD-2024',
    category: 'Frontend'
  }
])

const filteredProjects = computed(() => {
  if (activeCategory.value === 'All') {
    return projects.value
  }

  return projects.value.filter(
    project => project.category === activeCategory.value
  )
})
</script>

<template>
  <div class="max-w-6xl mx-auto py-12">

    <header class="mb-12">
      <h1 class="text-4xl md:text-5xl font-bold text-slate-100 mb-4">
        Projects
      </h1>
      <p class="text-xl text-slate-400 max-w-2xl">
        A collection of applications, tools and systems I have built across
        web, mobile and backend development.
      </p>
    </header>

    <div class="flex flex-wrap gap-3 mb-10">
      <button
        v-for="cat in categories"
        :key="cat"
        @click="activeCategory = cat"
        class="px-4 py-2 rounded-full text-sm font-medium transition"
        :class="activeCategory === cat
          ? 'bg-primary-500 text-white'
          : 'bg-dark-800 text-slate-400 border border-dark-700'"
      >
        {{ cat }}
      </button>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
      <ProjectCard
        v-for="project in filteredProjects"
        :key="project.title"
        v-bind="project"
      />
    </div>

  </div>
</template>