<script setup lang="ts">
import { defineAsyncComponent } from 'vue'
import { useRoute, useRouter } from 'vue-router'

const route = useRoute()
const router = useRouter()
const slug = route.params.slug as string

// Dynamically import the markdown file based on the slug
const AsyncMarkdownComponent = defineAsyncComponent({
  loader: () => import(`../content/blog/${slug}.md`),
  onError: () => {
    // Basic fallback if post doesn't exist
    router.push('/blog')
  }
})
</script>

<template>
  <article class="max-w-3xl mx-auto py-12">
    <router-link to="/blog" class="inline-flex items-center gap-2 text-primary-500 hover:text-primary-400 mb-8 transition-colors font-medium">
      <i class="pi pi-arrow-left text-xs"></i> Back to Blog
    </router-link>
    
    <!-- The markdown content will be rendered inside this wrapper -->
    <div class="markdown-body bg-dark-900 rounded-xl">
      <AsyncMarkdownComponent />
    </div>
  </article>
</template>
