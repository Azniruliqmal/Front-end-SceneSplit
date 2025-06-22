<template>
  <div class="min-h-screen flex items-center justify-center bg-[#181A20]">
    <div class="bg-[#181C23] rounded-xl shadow-lg p-10 w-full max-w-md flex flex-col items-center">
      <img src="../assets/icon/Logo.png" alt="Logo" class="h-14 mb-2" />
      <h2 class="text-3xl font-bold text-white mb-1 text-center">Scene<span class="font-normal italic text-yellow-400">Split</span></h2>
      <div class="text-gray-400 text-sm mb-8 text-center">Your AI Buddy for Filmmakers</div>
      <form @submit.prevent="onLogin" class="w-full">
        <div class="mb-4">
          <label class="block text-gray-300 mb-1" for="email">Email</label>
          <input
            v-model="email"
            id="email"
            type="email"
            required
            class="w-full px-4 py-2 rounded bg-[#232733] text-white border border-[#232733] focus:outline-none focus:border-yellow-400"
            placeholder="your@email.com"
          />
        </div>
        <div class="mb-2">
          <label class="block text-gray-300 mb-1" for="password">Password</label>
          <input
            v-model="password"
            id="password"
            type="password"
            required
            class="w-full px-4 py-2 rounded bg-[#232733] text-white border border-[#232733] focus:outline-none focus:border-yellow-400"
            placeholder="••••••••"
          />
        </div>
        <div class="flex justify-end mb-6">
          <a href="#" class="text-gray-400 text-xs hover:underline">Forgot password?</a>
        </div>
        <button
          type="submit"
          class="w-full bg-yellow-400 text-[#181A20] font-bold py-2 rounded hover:bg-yellow-500 transition mb-3"
        >
          Sign In
        </button>
        <button
          type="button"
          class="w-full border border-yellow-400 text-yellow-400 font-bold py-2 rounded hover:bg-yellow-400 hover:text-[#181A20] transition mb-6"
          @click="goToGuest"
        >
          Continue as Guest
        </button>
        <div class="flex items-center my-4">
          <div class="flex-1 h-px bg-gray-700"></div>
          <span class="mx-2 text-gray-400 text-xs">or</span>
          <div class="flex-1 h-px bg-gray-700"></div>
        </div>
        <div class="flex justify-center gap-4">
          <button type="button" class="bg-[#232733] rounded-md p-2">
            <img src="../assets/icon/google.svg" alt="Google" class="w-6 h-6" />
          </button>
          <button type="button" class="bg-[#232733] rounded-md p-2">
            <img src="../assets/icon/apple.svg" alt="Apple" class="w-6 h-6" />
          </button>
        </div>
        <div v-if="error" class="text-red-400 text-sm mt-4 text-center">{{ error }}</div>
      </form>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { useProjectStore } from '../stores/projectStore'

const email = ref('')
const password = ref('')
const error = ref('')
const router = useRouter()
const projectStore = useProjectStore()

function onLogin() {
  if (email.value && password.value) {
    projectStore.setLogin(true)
    projectStore.setUser({
      name: email.value.split('@')[0].replace(/^\w/, c => c.toUpperCase()),
      role: 'Director',
      email: email.value,
    })
    router.push({ name: 'ProjectsView' })
  } else {
    error.value = 'Please enter email and password'
  }
}

function goToGuest() {
  router.push({ name: 'GuestAccess' })
}
</script>