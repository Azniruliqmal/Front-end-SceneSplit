<template>
  <aside
    :class="[
      'bg-gray-400 text-white h-screen transition-all duration-300 flex flex-col justify-between shadow-lg',
      expanded ? 'w-80' : 'w-20'
    ]"
  >
    <!-- Top Section -->
    <div>
      <div class="flex items-center justify-between p-4">
        <div class="flex items-center gap-3">
          <img v-if="expanded" src="../assets/icon/Logo.png" alt="Logo" class="h-10" />
          <span v-if="expanded" class="text-2xl font-bold font-inter tracking-tight">
            Scene<span class="font-normal italic text-slategray">Split</span>
          </span>
        </div>
        <button
          class="ml-auto"
          @click="toggleSidebar"
          :aria-label="expanded ? 'Collapse sidebar' : 'Expand sidebar'"
        >
          <span class="material-icons text-slategray text-2xl">
            {{ expanded ? 'chevron_left' : 'chevron_right' }}
          </span>
        </button>
      </div>
      <div class="flex flex-col gap-2 px-2 mt-6">
        <RouterLink to="/projects" custom v-slot="{ navigate, isActive }">
          <SidebarLink materialIcon="snippet_folder" label="Projects" :expanded="expanded" :active="isActive" @click="navigate" />
        </RouterLink>
        <RouterLink to="/breakdown" custom v-slot="{ navigate, isActive }">
          <SidebarLink materialIcon="list_alt" label="Script Breakdown" :expanded="expanded" :active="isActive" @click="navigate" />
        </RouterLink>
        <RouterLink to="/budget" custom v-slot="{ navigate, isActive }">
          <SidebarLink materialIcon="attach_money" label="Budget" :expanded="expanded" :active="isActive" @click="navigate" />
        </RouterLink>
      </div>
    </div>
    <!-- Bottom Section -->
    <div class="mt-auto px-4 pb-6 w-full">
      <button
        @click="showPopup = true"
        class="flex items-center gap-3 w-full p-2 rounded-lg hover:bg-[#232733] transition"
      >
        <div class="w-10 h-10 rounded-full bg-[#232733] flex items-center justify-center text-yellow-400 font-bold text-lg">
          {{ userInitials }}
        </div>
        <div class="flex flex-col text-left">
          <span class="text-white font-semibold leading-tight">{{ userName }}</span>
          <span class="text-gray-400 text-xs">{{ userRole }}</span>
        </div>
      </button>
    </div>

    <!-- Logout Popup -->
    <div v-if="showPopup" class="fixed inset-0 z-50 flex items-center justify-center bg-black/40">
      <div class="bg-[#181C23] rounded-xl p-8 shadow-lg w-80 flex flex-col items-center">
        <div class="w-16 h-16 rounded-full bg-[#232733] flex items-center justify-center text-yellow-400 font-bold text-2xl mb-3">
          {{ userInitials }}
        </div>
        <div class="text-white font-semibold text-lg mb-1">{{ userName }}</div>
        <div class="text-gray-400 text-sm mb-6">{{ userRole }}</div>
        <button
          @click="logout"
          class="w-full bg-yellow-400 text-[#181A20] font-bold py-2 rounded hover:bg-yellow-500 transition mb-2"
        >
          Logout
        </button>
        <button
          @click="showPopup = false"
          class="w-full text-gray-400 hover:text-white text-sm py-1"
        >
          Cancel
        </button>
      </div>
    </div>
  </aside>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue'
import { useRouter } from 'vue-router'
import { useProjectStore } from '../stores/projectStore'
import SidebarLink from './SidebarLink.vue'

const expanded = ref(false)
const showPopup = ref(false)
const router = useRouter()
const projectStore = useProjectStore()

const userName = computed(() => projectStore.user?.name || 'User')
const userRole = computed(() => projectStore.user?.role || 'Member')
const userInitials = computed(() =>
  userName.value
    .split(' ')
    .map(n => n[0])
    .join('')
    .toUpperCase()
)

function toggleSidebar() {
  expanded.value = !expanded.value
}

function logout() {
  projectStore.logout()
  showPopup.value = false
  router.push({ name: 'Login' })
}
</script>
