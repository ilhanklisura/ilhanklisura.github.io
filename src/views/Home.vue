<script setup lang="ts">
import { ref } from 'vue'
import ProjectCard from '@/components/ui/ProjectCard.vue'

const heroSkills = [
  { name: 'Vue 3', icon: 'devicon-vuejs-plain colored' },
  { name: 'TypeScript', icon: 'devicon-typescript-plain colored' },
  { name: 'C# / .NET', icon: 'devicon-dotnetcore-plain colored' },
  { name: 'PostgreSQL', icon: 'devicon-postgresql-plain colored' },
  { name: 'Go', icon: 'devicon-go-plain colored' },
  { name: 'Docker', icon: 'devicon-docker-plain colored' }
]

const featuredProjects = ref([
  {
    title: 'Eventify',
    description:
      'Eventify is a full-stack event management platform rebuilt with .NET 8 (Web API + EF Core + SQL Server) and Vue 3. It includes JWT authentication, RBAC permissions, SignalR real-time notifications and OpenAPI documented APIs.',
    technologies: ['Vue 3', 'TypeScript', '.NET 8', 'SQL Server', 'EF Core'],
    githubUrl: 'https://github.com/ilhanklisura/eventify'
  },

  {
    title: 'V-Inspect',
    description:
      'V-Inspect is a refactored vehicle inspection management platform rebuilt with .NET 8, Vue 3 and SQL Server supporting vehicle registration, inspection scheduling and reporting.',
    technologies: ['Vue 3', 'TypeScript', '.NET 8', 'SQL Server'],
    githubUrl: 'https://github.com/ilhanklisura/V-Inspect'
  }
])
</script>

<template>
  <div class="space-y-24 pb-12">

    <section class="min-h-[70vh] flex flex-col justify-center items-start">
      <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary-900/30 text-primary-400 border border-primary-900/50 text-sm font-medium mb-6">
        <span class="relative flex h-2 w-2">
          <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary-400 opacity-75"></span>
          <span class="relative inline-flex rounded-full h-2 w-2 bg-primary-500"></span>
        </span>
        Available for new opportunities
      </div>

      <h1 class="text-5xl md:text-7xl font-extrabold text-slate-100 tracking-tight leading-tight mb-6">
        Hi, I'm
        <span class="bg-clip-text text-transparent bg-gradient-to-r from-primary-400 to-primary-600">
          Ilhan Klisura.
        </span><br />
        I build modern web apps.
      </h1>

      <p class="text-xl md:text-2xl text-slate-400 max-w-3xl mb-10 leading-relaxed font-light">
        Software Engineer building scalable enterprise systems and AI-powered
        applications using .NET, Vue, and modern AI technologies.
      </p>

      <div class="mb-4 text-xs uppercase tracking-widest text-slate-500">
        Tech Stack
      </div>

      <div class="flex flex-wrap gap-3 mb-12">
        <div
          v-for="skill in heroSkills"
          :key="skill.name"
          class="flex items-center gap-2 px-3 py-1.5 rounded-md border border-slate-700 bg-slate-900/40 text-slate-300 text-sm font-medium transition-all hover:border-primary-500 hover:text-white hover:shadow-lg hover:shadow-primary-500/10"
        >
          <i :class="skill.icon" class="text-base"></i>
          {{ skill.name }}
        </div>
      </div>

      <div class="grid grid-cols-2 gap-4 max-w-md">
        <router-link
          to="/projects"
          class="px-6 py-4 bg-primary-500 hover:bg-primary-600 text-white font-bold rounded-lg transition-colors shadow-lg shadow-primary-500/30 text-center"
        >
          View My Work
        </router-link>

        <router-link
          to="/contact"
          class="px-6 py-4 bg-dark-800 hover:bg-dark-700 text-slate-200 border border-dark-600 font-bold rounded-lg transition-colors text-center"
        >
          Let's Talk
        </router-link>
      </div>
    </section>

    <section>
      <div class="flex justify-between items-end mb-10">
        <div>
          <h2 class="text-3xl font-bold text-slate-100 flex items-center gap-3">
            Featured Projects
          </h2>

          <p class="text-slate-400 mt-2">
            Some things I've built recently
          </p>
        </div>

        <router-link
          to="/projects"
          class="hidden sm:flex text-primary-500 hover:text-primary-400 font-medium items-center gap-1 transition-colors"
        >
          View All
        </router-link>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
        <ProjectCard
          v-for="project in featuredProjects"
          :key="project.title"
          v-bind="project"
        />
      </div>
    </section>

  </div>
</template>