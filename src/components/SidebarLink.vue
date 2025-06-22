<template>
  <div
    class="flex items-center w-full max-w-full overflow-hidden p-2 rounded-lg hover:bg-[#232733] transition"
    :class="[
      active ? 'bg-gray-600' : '',
      !expanded ? 'justify-center px-0' : 'gap-3'
    ]"
    style="min-width:0;"
  >
    <span class="flex-shrink-0 flex items-center justify-center w-10 h-10">
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
      class="whitespace-nowrap font-semibold text-base overflow-hidden text-ellipsis"
      :style="{ color: active ? '#fff' : '#6B7280' }"
    >
      {{ label }}
    </span>
  </div>
</template>

<script setup>
defineProps({
  icon: String,
  iconSrc: String,
  materialIcon: String,
  label: String,
  expanded: Boolean,
  active: Boolean,
})
</script>
