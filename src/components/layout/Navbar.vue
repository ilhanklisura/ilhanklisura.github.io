<script setup lang="ts">
import { ref } from 'vue'

const isMobileMenuOpen = ref(false)

const links = [
  { name: 'Home', path: '/' },
  { name: 'Projects', path: '/projects' },
  { name: 'Blog', path: '/blog' },
  { name: 'About', path: '/about' },
  { name: 'Resume', path: '/resume' },
  { name: 'Contact', path: '/contact' }
]
</script>

<template>
  <nav class="sticky top-0 z-50 w-full backdrop-blur-md bg-dark-900/80 border-b border-dark-800">
    <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex items-center justify-between h-16">
        <div class="flex-shrink-0">
          <router-link to="/" class="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary-400 to-primary-600 transition-transform hover:scale-105 inline-block">
            Klisura Ilhan
          </router-link>
        </div>
        
        <div class="hidden md:block">
          <div class="ml-10 flex items-baseline space-x-6">
            <router-link 
              v-for="link in links" 
              :key="link.path" 
              :to="link.path"
              class="text-slate-300 hover:text-primary-400 px-3 py-2 rounded-md text-sm font-medium transition-colors"
              active-class="text-primary-500 bg-dark-800"
            >
              {{ link.name }}
            </router-link>
          </div>
        </div>
        
        <div class="-mr-2 flex md:hidden">
          <button @click="isMobileMenuOpen = !isMobileMenuOpen" type="button" class="inline-flex items-center justify-center p-2 rounded-md text-slate-400 hover:text-white hover:bg-dark-800 focus:outline-none">
            <span class="sr-only">Open main menu</span>
            <i class="pi" :class="isMobileMenuOpen ? 'pi-times' : 'pi-bars'"></i>
          </button>
        </div>
      </div>
    </div>

    <transition
      enter-active-class="transition ease-out duration-100 transform"
      enter-from-class="opacity-0 scale-95"
      enter-to-class="opacity-100 scale-100"
      leave-active-class="transition ease-in duration-75 transform"
      leave-from-class="opacity-100 scale-100"
      leave-to-class="opacity-0 scale-95"
    >
      <div v-show="isMobileMenuOpen" class="md:hidden bg-dark-900 border-b border-dark-800 absolute w-full">
        <div class="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          <router-link 
            v-for="link in links" 
            :key="link.path" 
            :to="link.path"
            @click="isMobileMenuOpen = false"
            class="text-slate-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
            active-class="text-primary-500 bg-dark-800"
          >
            {{ link.name }}
          </router-link>
        </div>
      </div>
    </transition>
  </nav>
</template>
