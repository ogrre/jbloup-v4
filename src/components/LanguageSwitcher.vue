<template>
  <div class="relative">
    <button
      @click="toggleDropdown"
      class="text-xs font-normal text-zinc-500 hover:text-zinc-200 transition-colors flex items-center gap-1"
      type="button"
    >
      <span>{{ currentLanguage.flag }} {{ currentLanguage.code.toUpperCase() }}</span>
      <svg
        class="w-3 h-3 fill-current transition-transform"
        :class="{ 'rotate-180': isOpen }"
        viewBox="0 0 20 20"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M10 12l-6-6h12l-6 6z"></path>
      </svg>
    </button>

    <!-- Dropdown -->
    <div
      v-if="isOpen"
      class="absolute top-full right-0 mt-2 py-2 bg-zinc-950 border border-zinc-800 shadow-lg z-50 min-w-[120px]"
      @click.stop
    >
      <button
        v-for="language in availableLanguages"
        :key="language.code"
        @click="changeLanguage(language.code)"
        class="w-full px-4 py-2 text-left text-xs font-normal text-zinc-500 hover:text-zinc-200 hover:bg-zinc-900 transition-colors flex items-center gap-2"
        :class="{ 'text-zinc-200 bg-zinc-900': language.code === locale }"
      >
        <span>{{ language.flag }}</span>
        <span>{{ language.name }}</span>
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, onUnmounted } from 'vue'
import { useI18n } from 'vue-i18n'
import { setStoredLocale } from '../i18n'

const { locale } = useI18n()
const isOpen = ref(false)

const availableLanguages = [
  {
    code: 'fr',
    name: 'Français',
    flag: '🇫🇷'
  },
  {
    code: 'en',
    name: 'English',
    flag: '🇺🇸'
  }
]

const currentLanguage = computed(() => {
  return availableLanguages.find(lang => lang.code === locale.value) || availableLanguages[0]
})

const toggleDropdown = () => {
  isOpen.value = !isOpen.value
}

const changeLanguage = (newLocale: string) => {
  locale.value = newLocale
  setStoredLocale(newLocale)
  isOpen.value = false
}

// Fermer le dropdown si on clique ailleurs
const handleClickOutside = (event: MouseEvent) => {
  const target = event.target as HTMLElement
  if (!target.closest('.relative')) {
    isOpen.value = false
  }
}

onMounted(() => {
  document.addEventListener('click', handleClickOutside)
})

onUnmounted(() => {
  document.removeEventListener('click', handleClickOutside)
})
</script>
