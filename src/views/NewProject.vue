<template>
  <div class="min-h-screen bg-[#181A20]">
    <!-- Header -->
    <div class="flex items-center justify-between px-8 py-5 bg-[#232733]">
      <h1 class="text-white text-xl font-bold">New Project</h1>
      <button
        class="bg-yellow-400 hover:bg-yellow-500 text-[#181A20] font-semibold px-5 py-2 rounded-lg flex items-center gap-2 transition"
        @click="$router.back()"
      >
        <svg class="w-4 h-4" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" d="M15 19l-7-7 7-7" />
        </svg>
        Back
      </button>
    </div>

    <!-- Main Content -->
    <div class="flex flex-col items-center mt-12">
      <!-- Upload Section -->
      <div class="w-full max-w-2xl">
        <div class="bg-[#232733] rounded-lg px-6 py-3 mb-10">
          <div class="text-white font-semibold text-base mb-1">Upload Your Script</div>
          <div class="text-gray-400 text-sm">Upload your PDF script to start scene analysis with AI</div>
        </div>
      </div>

      <!-- Upload Card -->
      <div class="w-full max-w-xl flex flex-col items-center">
        <div
          class="border-2 border-yellow-400 rounded-lg bg-[#181A20] flex flex-col items-center justify-center py-16 px-8 mb-10 w-full"
        >
          <svg class="w-10 h-10 text-yellow-400 mb-4" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" d="M12 4v16m8-8H4" />
          </svg>
          <div class="text-yellow-400 font-semibold text-base mb-1 text-center">
            Drop your script here or click to browse
          </div>
          <div class="text-gray-400 text-sm mb-4 text-center">
            Supports PDF, TXT, FDX, FOUNTAIN formats
          </div>
          <label class="inline-block">
            <input type="file" class="hidden" @change="onFileChange" />
            <span class="bg-yellow-400 hover:bg-yellow-500 text-[#181A20] font-semibold px-6 py-2 rounded transition cursor-pointer">
              Choose File
            </span>
          </label>
        </div>
      </div>

      <!-- Generate Button -->
      <button
        class="bg-yellow-400 hover:bg-yellow-500 text-[#181A20] font-semibold px-8 py-2 rounded-lg transition self-end mr-32"
        @click="onGenerate"
      >
        Generate
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { projects } from '../data/projects'
import { useProjectStore } from '../stores/projectStore'

const router = useRouter()
const file = ref<File | null>(null)
const projectStore = useProjectStore()

// Handle file input
function onFileChange(event: Event) {
  const target = event.target as HTMLInputElement
  if (target.files && target.files.length > 0) {
    file.value = target.files[0]
  }
}

// Handle Generate button
function onGenerate() {
  // Mock: Add new project to the projects array (in real app, use store or API)
  projects.push({
    title: file.value ? file.value.name.replace(/\.[^/.]+$/, "") : "Untitled Project",
    genre: "Unknown",
    status: "ACTIVE",
    statusColor: "bg-yellow-400 text-black",
    budget: "$0",
    dueDate: "TBD",
    team: "0 members"
  })
  router.push({ name: 'ProjectsView' })
}
</script>
