<template>
  <div>
    <!-- Header Section Start -->
    <div class="w-full relative bg-gray-400 h-20 flex flex-row items-center justify-between py-[15px] pl-[19px] pr-[104px] box-border gap-0 text-left text-2xl text-white font-inter">
      <div class="flex flex-col items-start justify-start">
        <b class="relative leading-[28.8px]">Projects</b>
      </div>
      <div class="flex flex-row items-center justify-start gap-4 text-sm text-darkgray">
        <div class="w-60 rounded-lg bg-darkslategray h-10 flex flex-row items-center justify-start py-0 px-4 box-border gap-2 shadow-md transition-all duration-200 focus-within:ring-2 focus-within:ring-goldenrod hover:shadow-lg">
          <img class="w-7 h-7 object-cover" alt="" src="../assets/icon/Search Icon.svg" />
          <input
            v-model="searchQuery"
            type="text"
            placeholder="Search projects..."
            class="leading-[26.8px] bg-transparent outline-none text-white placeholder-gray w-full rounded-md transition-all duration-200"
          />
        </div>
        <div class="w-[120px] rounded-lg bg-gray-200 h-10 hidden flex-row items-center justify-center gap-2 text-goldenrod">
          <img class="w-4 h-4" alt="" src="../assets/icon/Search Icon.svg" />
          <div class="leading-[16.8px] font-semibold">AI Assistant</div>
        </div>
        <div class="w-[120px] rounded-lg bg-goldenrod h-10 flex flex-row items-center justify-center gap-1 cursor-pointer text-gray-100" @click="goToNewProject">
          <img class="w-4 h-4 object-cover" alt="" src="../assets/icon/Plus Icon.svg" />
          <div class="leading-[16.8px] font-semibold">New Project</div>
        </div>
      </div>
    </div>
    <!-- Header Section End -->

    <!-- Project Filter Tabs -->
    <div class="w-full relative flex flex-row items-center justify-start gap-4 text-left text-sm text-darkgray font-inter p-4">
      <div
        v-for="tab in ['All Projects', 'Active', 'In Review', 'Completed']"
        :key="tab"
        :class="[
          'rounded-lg h-10 flex flex-row items-center justify-center cursor-pointer px-4',
          tab === 'All Projects' ? 'w-[100px]' : 'w-20',
          activeTab === tab ? 'bg-goldenrod text-gray-200 font-semibold' : 'bg-gray-100 font-medium'
        ]"
        @click="setTab(tab)"
      >
        <div class="relative leading-[16.8px]">{{ tab }}</div>
      </div>
    </div>

    <!-- Projects Grid -->
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-4 py-8">
      <!-- Project Card -->
      <div
        v-for="(project, idx) in filteredProjects"
        :key="project.title + idx"
        class="bg-gray-300 rounded-xl p-6 shadow-lg flex flex-col gap-4"
      >
        <div class="flex justify-between items-center">
          <div>
            <h2 class="text-xl font-bold text-white">{{ project.title }}</h2>
            <p class="text-slategray text-sm">{{ project.genre }}</p>
          </div>
          <span :class="['text-xs font-bold px-3 py-1 rounded', project.statusColor]">{{ project.status }}</span>
        </div>
        <div class="text-slategray text-sm">
          <div class="flex justify-between"><span>Budget:</span> <span class="text-white font-semibold">{{ project.budget }}</span></div>
          <div class="flex justify-between"><span>Due Date:</span> <span class="text-white font-semibold">{{ project.dueDate }}</span></div>
          <div class="flex justify-between"><span>Team:</span> <span class="text-white font-semibold">{{ project.team }}</span></div>
        </div>
        <div class="self-stretch flex flex-row items-center justify-start gap-3 text-sm text-darkgray">
          <button
            class="flex-1 rounded-md bg-gray-200 h-9 flex flex-row items-center justify-center text-sm text-darkgray cursor-pointer transition hover:bg-gray-300"
            @click="onViewButtonContainerClick"
            type="button"
          >
            <div class="relative leading-[16.8px] font-medium">View Details</div>
          </button>
        </div>
      </div>
      <!-- Create New Project Card -->
      <div
        class="border-2 border-yellow-400 rounded-xl p-6 shadow-lg flex flex-col items-center justify-center gap-4 bg-gray-300 min-h-[220px] cursor-pointer transition hover:shadow-xl"
        @click="goToNewProject"
      >
        <div class="flex items-center justify-center mb-2">
          <div class="bg-[#232733] rounded-full w-12 h-12 flex items-center justify-center">
            <span class="text-yellow-400 text-3xl font-bold leading-none">+</span>
          </div>
        </div>
        <h2 class="text-lg font-bold text-white text-center">Create New Project</h2>
        <p class="text-slategray text-center text-sm leading-snug">Start a new film project<br />with AI-powered script analysis</p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import { useRouter } from 'vue-router'
import { useProjectStore } from '../stores/projectStore'

const projectStore = useProjectStore()

const activeTab = ref('All Projects')
const searchQuery = ref('')

const router = useRouter()

const filteredProjects = computed(() => {
  let filtered = projectStore.projects
  if (activeTab.value === 'Active') filtered = filtered.filter(p => p.status === 'ACTIVE')
  else if (activeTab.value === 'In Review') filtered = filtered.filter(p => p.status === 'REVIEW')
  else if (activeTab.value === 'Completed') filtered = filtered.filter(p => p.status === 'COMPLETED')
  if (searchQuery.value.trim()) {
    const q = searchQuery.value.trim().toLowerCase()
    filtered = filtered.filter(
      p =>
        (p.title && p.title.toLowerCase().includes(q)) ||
        (p.genre && p.genre.toLowerCase().includes(q)) ||
        (p.team && p.team.toLowerCase().includes(q))
    )
  }
  return filtered
})

function setTab(tab: string) {
  activeTab.value = tab
}

function onViewButtonContainerClick() {
  // Implement navigation or logic for viewing project details here
  // Example: router.push({ name: 'ProjectDetails', params: { id: project.id } })
}

function onNewProjectContainerClick() {
  // Add your code here
}

function goToNewProject() {
  router.push({ name: 'NewProject' })
}
</script>