<template>
  <div class="transition-all duration-300" :class="sidebarExpanded ? 'ml-80' : 'ml-20'">
    <!-- Fixed Header -->
    <div
      class="w-full relative bg-[#10131A] h-20 flex flex-row items-center justify-between py-[15px] pl-[19px] pr-[104px] box-border gap-0 text-left text-2xl text-white font-inter z-30"
      style="position: sticky; top: 0;"
    >
      <div class="flex items-center gap-6">
        <h1 class="text-2xl font-bold">Budget Management</h1>
        <select
          v-model="selectedProjectTitle"
          class="bg-[#181A20] text-white text-base font-semibold rounded-lg px-4 py-2 focus:outline-none border-none"
        >
          <option v-for="project in projects" :key="project.title" :value="project.title">{{ project.title }}</option>
        </select>
      </div>
      <div class="flex items-center gap-4">
        <button class="flex items-center gap-2 bg-[#232733] border border-[#3A3D46] text-white px-5 py-2 rounded-lg hover:bg-[#2d3038] transition" disabled>
          <svg class="w-5 h-5" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" d="M12 4v16m8-8H4" />
          </svg>
          Export
        </button>
        <button
          class="bg-yellow-400 hover:bg-yellow-500 text-[#181A20] font-semibold px-5 py-2 rounded-lg flex items-center gap-2 transition"
          @click="showAI = true"
        >
          <svg class="w-5 h-5" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
            <circle cx="12" cy="12" r="10" stroke="currentColor" stroke-width="2"/>
            <path d="M8 15h8M9 9h.01M15 9h.01" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
          </svg>
          AI Assistant
        </button>
      </div>
    </div>

    <!-- Main Content -->
    <div class="pt-24 pb-8 px-4">
      <div class="max-w-7xl mx-auto flex flex-col gap-10">
        <!-- Budget Summary Cards -->
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div class="bg-[#232733] rounded-xl p-6 flex flex-col gap-1">
            <div class="flex items-center gap-2 text-white text-sm">Total Budget
              <svg class="w-4 h-4 text-yellow-400" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                <circle cx="12" cy="12" r="10" stroke="currentColor" stroke-width="2"/>
                <path d="M12 8v4l2 2" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
              </svg>
            </div>
            <div class="text-2xl font-bold text-white">{{ summary.totalBudget }}</div>
            <div class="text-white text-xs">Approved budget</div>
          </div>
          <div class="bg-[#232733] rounded-xl p-6 flex flex-col gap-1">
            <div class="flex items-center gap-2 text-white text-sm">Spent
              <svg class="w-4 h-4 text-yellow-400" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                <path d="M5 12h14M12 5l7 7-7 7" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </div>
            <div class="text-2xl font-bold text-white">{{ summary.spent }}</div>
            <div class="text-white text-xs">{{ summary.spentPercent }}% of budget</div>
          </div>
          <div class="bg-[#232733] rounded-xl p-6 flex flex-col gap-1">
            <div class="flex items-center gap-2 text-white text-sm">Remaining
              <svg class="w-4 h-4 text-yellow-400" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                <rect x="4" y="4" width="16" height="16" rx="2" stroke="currentColor" stroke-width="2"/>
              </svg>
            </div>
            <div class="text-2xl font-bold text-white">{{ summary.remaining }}</div>
            <div class="text-white text-xs">{{ summary.remainingPercent }}% remaining</div>
          </div>
          <div class="bg-[#232733] rounded-xl p-6 flex flex-col gap-1">
            <div class="flex items-center gap-2 text-white text-sm">Projected Total
              <svg class="w-4 h-4 text-yellow-400" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                <circle cx="12" cy="12" r="10" stroke="currentColor" stroke-width="2"/>
                <path d="M12 8v4l2 2" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
              </svg>
            </div>
            <div class="text-2xl font-bold text-white">{{ summary.projectedTotal }}</div>
            <div class="text-white text-xs">{{ summary.projectedNote }}</div>
          </div>
        </div>

        <!-- Budget Breakdown -->
        <div class="bg-[#232733] rounded-2xl mx-auto w-full max-w-4xl p-8">
          <div class="flex items-center justify-between mb-6">
            <div class="text-lg font-bold">Budget Breakdown by Category</div>
            <div class="flex items-center gap-2">
              <button class="bg-[#181A20] rounded-lg px-3 py-2 text-gray-300 flex items-center gap-1">
                <svg class="w-5 h-5" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                  <path d="M4 6h16M4 12h16M4 18h16" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
                </svg>
              </button>
              <button class="bg-[#181A20] rounded-lg px-3 py-2 text-gray-300 flex items-center gap-1">
                <svg class="w-5 h-5" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                  <circle cx="12" cy="12" r="10" stroke="currentColor" stroke-width="2"/>
                  <path d="M12 8v4l2 2" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
                </svg>
              </button>
            </div>
          </div>
          <div v-for="cat in breakdown" :key="cat.name" class="mb-5">
            <div class="flex items-center justify-between">
              <div class="font-semibold" :style="{ color: cat.color }">{{ cat.name }}</div>
              <div class="font-semibold" :style="{ color: cat.color }">{{ cat.amount }}</div>
            </div>
            <div class="flex items-center gap-4 mt-1">
              <div class="flex-1 h-3 rounded-lg bg-[#44454A] relative overflow-hidden">
                <div
                  class="h-3 rounded-lg absolute left-0 top-0"
                  :style="{ width: cat.percent + '%', background: cat.color }"
                ></div>
              </div>
              <div class="text-gray-400 text-xs w-14">{{ cat.percent }}%</div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- AI Assistant Panel -->
    <AIChatPanel v-if="showAI" class="fixed top-0 right-0 z-50" @close="showAI = false" />
  </div>
</template>

<script setup lang="ts">
import { ref, computed, inject } from 'vue'
import AIChatPanel from '../components/AIChatPanel.vue'
import { useProjectStore } from '../stores/projectStore'

const sidebarExpanded = inject('sidebarExpanded', false)

const showAI = ref(false)
const projectStore = useProjectStore()
const projects = projectStore.projects
const selectedProjectTitle = ref(projects[0]?.title || '')

// Find the selected project object
const selectedProject = computed(() =>
  projects.find(p => p.title === selectedProjectTitle.value)
)

// Helper: parse RM value to number
function parseRM(val: string) {
  if (!val) return 0
  return Number(val.replace(/[^\d.]/g, ''))
}

// Budget summary logic
const summary = computed(() => {
  const budgetObj = selectedProject.value?.scriptBreakdown?.budget || {}
  // Sum all categories for total
  const totalBudget = Object.values(budgetObj)
    .map(v => parseRM(String(v)))
    .reduce((a, b) => a + b, 0)
  // For demo, let's say spent is 75% of total, remaining is 25%, projected is 97% of total
  const spent = Math.round(totalBudget * 0.75)
  const remaining = totalBudget - spent
  const projected = Math.round(totalBudget * 0.97)
  return {
    totalBudget: totalBudget ? `RM ${totalBudget.toLocaleString()}` : '-',
    spent: spent ? `RM${spent.toLocaleString()}` : '-',
    spentPercent: 75,
    remaining: remaining ? `RM${remaining.toLocaleString()}` : '-',
    remainingPercent: 25,
    projectedTotal: projected ? `RM${projected.toLocaleString()}` : '-',
    projectedNote: totalBudget ? '3% under budget' : ''
  }
})

// Budget breakdown by category
const categoryColors: Record<string, string> = {
  talent: '#00C6FB',
  location: '#FFD233',
  propsSet: '#3DD65B',
  wardrobeMakeup: '#A259FF',
  sfxVfx: '#FF6B6B',
  crew: '#FF9900',
  miscellaneous: '#FFB300'
}
const breakdown = computed(() => {
  const budgetObj = selectedProject.value?.scriptBreakdown?.budget || {}
  const total = Object.values(budgetObj)
    .map(v => parseRM(String(v)))
    .reduce((a, b) => a + b, 0)
  return Object.entries(budgetObj).map(([key, val]) => {
    const amount = parseRM(String(val))
    return {
      name: key
        .replace(/([A-Z])/g, ' $1')
        .replace(/^./, s => s.toUpperCase())
        .replace('Set', ' & Set')
        .replace('Vfx', 'VFX')
        .replace('Makeup', 'Makeup'),
      amount: `RM${amount.toLocaleString()}`,
      percent: total ? +(amount / total * 100).toFixed(1) : 0,
      color: categoryColors[key] || '#888'
    }
  })
})
</script>

<style scoped>
div[style*="linear-gradient"] {
  background: linear-gradient(90deg, #00C6FB 0%, #005BEA 100%) !important;
}
</style>
