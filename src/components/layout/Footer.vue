<script setup lang="ts">
const currentYear = new Date().getFullYear();
</script>

<template>
  <footer class="bg-dark-900 border-t border-dark-800 py-8 mt-12">
    <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mt-4 flex flex-col md:flex-row justify-between items-center text-slate-400 text-sm">
      <p>&copy; {{ currentYear }} Klisura Ilhan. All rights reserved.</p>
      
      <div class="flex space-x-6 mt-4 md:mt-0">
        <a href="https://github.com/ilhanklisura" target="_blank" rel="noopener noreferrer" class="hover:text-primary-400 transition-colors">
          <span class="sr-only">GitHub</span>
          <i class="pi pi-github text-xl"></i>
        </a>
        <a href="https://linkedin.com/in/ilhanklisura" target="_blank" rel="noopener noreferrer" class="hover:text-primary-400 transition-colors">
          <span class="sr-only">LinkedIn</span>
          <i class="pi pi-linkedin text-xl"></i>
        </a>
      </div>
    </div>
  </footer>
</template>
