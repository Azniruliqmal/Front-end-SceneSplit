<template>
  <div
    class="flex items-center gap-4 py-3 px-4 rounded-xl hover:bg-gray-700 cursor-pointer w-full transition-colors duration-200"
    :class="active ? 'bg-gray-600' : ''"
  >
    <span>
      <span
        v-if="materialIcon"
        class="material-icons"
        :style="{
          color: active ? '#D4AF37' : '#6B7280',
          fontSize: '28px',
          verticalAlign: 'middle'
        }"
      >{{ materialIcon }}</span>
      <img v-else-if="iconSrc" :src="iconSrc" alt="icon" class="h-7 w-7 object-contain" />
      <span v-else>{{ icon }}</span>
    </span>
    <span
      v-if="expanded"
      class="whitespace-nowrap font-semibold text-base"
      :style="{ color: active ? '#fff' : '#6B7280' }"
    >
      {{ label }}
    </span>
  </div>
</template>

<script setup>
defineProps({
  icon: String,
  iconSrc: String, // New prop for local image path
  materialIcon: String, // Add this prop
  label: String,
  expanded: Boolean,
  active: Boolean,
})
</script>
