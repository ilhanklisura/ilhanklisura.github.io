<script setup lang="ts">
import TimelineItem from '@/components/ui/TimelineItem.vue'
import SkillBadge from '@/components/ui/SkillBadge.vue'

const skills = {
  frontend: ['Vue 3','React','TypeScript','JavaScript'],

  backend: ['C#','.NET','Golang','Python','Node.js'],

  databases: ['SQL Server','PostgreSQL','MongoDB','Redis','Elasticsearch'],

  devops: ['Git','GitHub Actions','Jenkins'],

  containers: ['Docker','Kubernetes'],

  cloud: ['Azure', 'AWS', 'Google Cloud'],

  infrastructure: ['Linux','Windows Server','Nginx'],

  ai: ['OpenAI API','Gemini API','Anthropic API','LLaMA','RAG','AI/ML'],

  voice_ai: ['ElevenLabs','Coqui TTS'],

  automation: ['n8n', 'Make'],

  communication: ['REST APIs','gRPC']
}

const skillSections = [
  { title: 'Frontend', key: 'frontend' },
  { title: 'Backend', key: 'backend' },
  { title: 'Databases', key: 'databases' },
  { title: 'DevOps', key: 'devops' },
  { title: 'Containers', key: 'containers' },
  { title: 'Cloud', key: 'cloud' },
  { title: 'Infrastructure', key: 'infrastructure' },
  { title: 'AI & LLM', key: 'ai' },
  { title: 'Voice AI', key: 'voice_ai' },
  { title: 'Automation', key: 'automation' },
  { title: 'Communication', key: 'communication' }
]

const experience = [
  {
    title: 'Medior Software Engineer',
    company: 'Orbicode d.o.o. Sarajevo',
    period: 'Sept 2024 - Present',
    description: `Software Engineer focused on building large-scale enterprise systems across backend, frontend, and database architecture, with strong experience in SQL reporting, secure integrations, and workflow-driven HR and financial platforms. Currently specializing in AI systems development, designing hybrid architectures that combine on-premise LLM infrastructure with cloud AI services. Experienced in building RAG pipelines, scalable .NET AI service layers, and AI-powered document analysis and automation solutions.`
  },
  {
    title: 'Junior Software Engineer',
    company: 'Orbicode d.o.o. Sarajevo',
    period: 'Sept 2023 - Sept 2024',
    description: 'Contributed to the development of enterprise management systems across backend and frontend, with a focus on SQL optimization and responsive UI components. Assisted in integrating backend and frontend features for workflow automation and participated in testing complex reporting and tracking functionalities. Collaborated with senior engineers through code reviews and architectural discussions.'
  },
  {
    title: 'Software Development Internship',
    company: 'BH Telecom d.d. Sarajevo',
    period: 'Aug 2023 - Sept 2023',
    description: 'Completed a university internship focused on enterprise software development. Assisted with backend and frontend tasks, API integrations, and database queries while gaining practical experience with software design and agile development processes.'
  },
  {
    title: 'IT Administrator & Web Developer',
    company: 'IPI - "Institut za privredni inženjering" d.o.o. Zenica',
    period: 'Jan 2021 - May 2023',
    description: 'Maintained internal IT infrastructure and provided technical support for hardware and network systems. Developed and managed the company’s WordPress website, focusing on performance optimization, SEO, and ongoing updates.'
  }
]
</script>

<template>
  <div class="max-w-4xl mx-auto py-12">
    
    <header class="mb-12">
      <h1 class="text-4xl md:text-5xl font-bold text-slate-100 mb-4">About me</h1>
      <p class="text-xl text-slate-400">
        A brief overview of my background, skills, and experience.
      </p>
    </header>

    <div class="grid grid-cols-1 md:grid-cols-12 gap-12">

      <div class="md:col-span-5 space-y-12">

        <section>
          <h2 class="text-2xl font-bold text-slate-200 mb-4 flex items-center gap-2">
            <i class="pi pi-user text-primary-500"></i> Biography
          </h2>

          <div class="prose prose-invert text-slate-400">
            <p>
              Experienced in building scalable enterprise and SaaS web applications using C#/.NET, React, Vue.js + TypeScript and SQL databases (SQL Server, PostgreSQL). 
            </p>
            <p>
              Skilled in clean architecture, REST APIs, CI/CD pipelines (Jenkins, GitHub Actions) and AI integrations using tools such as LLaMA, OpenAI, Anthropic, Gemini, ElevenLabs, Coqui TTS and n8n. Currently exploring Golang, Python and AI technologies while continuously improving system performance and user experience.
            </p>
          </div>
        </section>

        <!-- SKILLS -->
        <section>
          <h2 class="text-2xl font-bold text-slate-200 mb-6 flex items-center gap-2">
            <i class="pi pi-code text-primary-500"></i> Technical Skills
          </h2>

          <div class="space-y-6">

            <div
              v-for="section in skillSections"
              :key="section.key"
            >
              <h3 class="text-sm font-semibold text-slate-500 uppercase tracking-wider mb-3">
                {{ section.title }}
              </h3>

              <div class="flex flex-wrap gap-2">
                <SkillBadge
                  v-for="skill in skills[section.key]"
                  :key="skill"
                  :name="skill"
                />
              </div>

            </div>

          </div>
        </section>

      </div>

      <!-- RIGHT COLUMN -->
      <div class="md:col-span-7">

        <section>

          <h2 class="text-2xl font-bold text-slate-200 mb-8 flex items-center gap-2">
            <i class="pi pi-briefcase text-primary-500"></i> Work Experience
          </h2>

          <div class="mt-4">

            <TimelineItem
              v-for="(job, index) in experience"
              :key="job.company + job.title"
              v-bind="job"
              :isLast="index === experience.length - 1"
            />

          </div>

        </section>

      </div>

    </div>

  </div>
</template>