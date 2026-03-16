<script setup lang="ts">
import { ref } from 'vue'

const formEndpoint = "https://formspree.io/f/xqeyyzko"

const formData = ref({
  name: '',
  email: '',
  message: '',
  company: ''
})

const isSubmitting = ref(false)
const submitSuccess = ref(false)
const submitError = ref(false)

const validateForm = () => {
  if (!formData.value.name) return false
  if (!formData.value.email) return false
  if (!formData.value.message) return false

  const emailRegex =
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/

  return emailRegex.test(formData.value.email)
}

const handleSubmit = async () => {

  if (!validateForm()) {
    submitError.value = true
    return
  }

  isSubmitting.value = true
  submitError.value = false

  try {

    const response = await fetch(formEndpoint, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        name: formData.value.name,
        email: formData.value.email,
        message: formData.value.message
      })
    })

    if (response.ok) {

      submitSuccess.value = true

      formData.value = {
        name: '',
        email: '',
        message: '',
        company: ''
      }

    } else {
      submitError.value = true
    }

  } catch (error) {
    submitError.value = true
  }

  isSubmitting.value = false

  setTimeout(() => {
    submitSuccess.value = false
  }, 5000)
}
</script>

<template>
  <div class="max-w-3xl mx-auto py-12">

    <header class="mb-12 text-center">
      <h1 class="text-4xl md:text-5xl font-bold text-slate-100 mb-4">
        Get in Touch
      </h1>

      <p class="text-xl text-slate-400">
        Have a project, idea or opportunity? Send me a message.
      </p>
    </header>

    <div
      class="bg-dark-800 p-8 md:p-10 rounded-2xl border border-dark-700 shadow-xl relative overflow-hidden"
    >

      <transition name="fade">
        <div
          v-if="submitSuccess"
          class="absolute inset-0 bg-dark-800/95 backdrop-blur-sm z-10 flex flex-col items-center justify-center text-center p-8"
        >
          <div
            class="w-16 h-16 bg-green-500/20 text-green-400 rounded-full flex items-center justify-center mb-4"
          >
            <i class="pi pi-check text-2xl"></i>
          </div>

          <h3 class="text-2xl font-bold text-slate-100 mb-2">
            Message Sent!
          </h3>

          <p class="text-slate-400">
            Thanks for reaching out. I'll get back to you soon.
          </p>
        </div>
      </transition>

      <div
        v-if="submitError"
        class="mb-6 p-4 rounded-lg bg-red-500/10 border border-red-500/30 text-red-400 text-sm"
      >
        Something went wrong. Please try again.
      </div>

      <form @submit.prevent="handleSubmit" class="space-y-6">

        <input
          type="text"
          v-model="formData.company"
          class="hidden"
        />

        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div class="space-y-2">
            <label class="block text-sm font-medium text-slate-300">
              Name
            </label>

            <input
              v-model="formData.name"
              type="text"
              required
              placeholder="John Doe"
              class="w-full px-4 py-3 bg-dark-900 border border-dark-700 rounded-lg text-slate-200 focus:outline-none focus:border-primary-500"
            />
          </div>

          <div class="space-y-2">
            <label class="block text-sm font-medium text-slate-300">
              Email
            </label>

            <input
              v-model="formData.email"
              type="email"
              required
              placeholder="john@example.com"
              class="w-full px-4 py-3 bg-dark-900 border border-dark-700 rounded-lg text-slate-200 focus:outline-none focus:border-primary-500"
            />
          </div>
        </div>

        <div class="space-y-2">
          <label class="block text-sm font-medium text-slate-300">
            Message
          </label>

          <textarea
            v-model="formData.message"
            rows="5"
            required
            placeholder="Tell me about your project..."
            class="w-full px-4 py-3 bg-dark-900 border border-dark-700 rounded-lg text-slate-200 focus:outline-none focus:border-primary-500 resize-none"
          ></textarea>

        </div>

        <button type="submit" :disabled="isSubmitting" class="w-full py-4 bg-primary-500 hover:bg-primary-600 text-white font-bold rounded-lg transition-colors shadow-lg flex items-center justify-center gap-2">

          <i
            v-if="isSubmitting"
            class="pi pi-spinner pi-spin"
          ></i>

          <span v-if="!isSubmitting">
            Send Message
          </span>

          <span v-else>
            Sending...
          </span>

        </button>
      </form>
    </div>

    <div class="mt-12 text-center text-slate-400">
      <p>Or email me directly</p>

      <a href="mailto:work@ilhanklisura.com" class="text-primary-500 hover:text-primary-400 font-medium text-lg mt-2 inline-block">
        work@ilhanklisura.com
      </a>
    </div>

  </div>
</template>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>