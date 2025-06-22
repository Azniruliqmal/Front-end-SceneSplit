<template>
  <div class="flex min-h-screen">
    <Sidebar v-if="showSidebar" />
    <main class="flex-1 bg-gray-950 text-white min-h-screen">
      <router-view />
    </main>
  </div>
</template>

<script setup lang="ts">
import { useRoute } from 'vue-router'
import Sidebar from './components/Sidebar.vue'

const route = useRoute()
const noSidebarRoutes = ['/login', '/guest'] // add more routes if needed

const showSidebar = !noSidebarRoutes.includes(route.path)
</script>
