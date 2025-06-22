<template>
  <div class="min-h-screen flex items-center justify-center bg-[#181A20]">
    <div class="bg-[#181C23] rounded-xl shadow-lg p-10 w-full max-w-md flex flex-col items-center">
      <img src="../assets/icon/Logo.png" alt="Logo" class="h-14 mb-2" />
      <h2 class="text-3xl font-bold text-white mb-1 text-center">Scene<span class="font-normal italic text-yellow-400">Split</span></h2>
      <div class="text-gray-400 text-sm mb-8 text-center">Your AI Buddy for Filmmakers</div>
      <form @submit.prevent="onGuest" class="w-full">
        <div class="mb-4">
          <label class="block text-gray-300 mb-1" for="name">Your Name</label>
          <input
            v-model="name"
            id="name"
            type="text"
            required
            class="w-full px-4 py-2 rounded bg-[#232733] text-white border border-[#232733] focus:outline-none focus:border-yellow-400"
            placeholder="John Doe"
          />
        </div>
        <div class="mb-4">
          <label class="block text-gray-300 mb-1" for="guestEmail">Email (optional)</label>
          <input
            v-model="guestEmail"
            id="guestEmail"
            type="email"
            class="w-full px-4 py-2 rounded bg-[#232733] text-white border border-[#232733] focus:outline-none focus:border-yellow-400"
            placeholder="your@email.com"
          />
        </div>
        <div class="flex items-center mb-2">
          <input type="checkbox" id="agree" v-model="agree" class="accent-yellow-400 mr-2" required />
          <label for="agree" class="text-yellow-400 text-xs">I agree to the Terms of Service and Privacy Policy</label>
        </div>
        <div class="text-gray-400 text-xs mb-6">Note: Guest access is limited to 7 days</div>
        <button
          type="submit"
          class="w-full bg-yellow-400 text-[#181A20] font-bold py-2 rounded hover:bg-yellow-500 transition mb-3"
        >
          Continue as Guest
        </button>
        <button
          type="button"
          class="w-full border border-gray-400 text-gray-400 font-bold py-2 rounded hover:bg-gray-700 transition"
          @click="goToLogin"
        >
          Back to Login
        </button>
      </form>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { useProjectStore } from '../stores/projectStore'

const name = ref('')
const guestEmail = ref('')
const agree = ref(false)
const router = useRouter()
const projectStore = useProjectStore()

function onGuest() {
  if (!agree.value) return
  projectStore.setLogin(true)
  projectStore.setUser({
    name: name.value,
    role: 'Guest',
    email: guestEmail.value,
  })
  router.push({ name: 'ProjectsView' })
}

function goToLogin() {
  router.push({ name: 'Login' })
}
</script>