<template>
  <header 
    ref="header" 
    class="header-bg border-b-4 border-secondary fixed w-full top-0 z-50 shadow-lg transition-all duration-300"
  >
    <div class="max-w-[1400px] mx-auto">
      <div class="flex justify-between items-center h-20 px-4 md:px-8 text-white">
        
        <div class="flex items-center">
          <NuxtLink to="/#hero" class="text-2xl font-extrabold tracking-tight">
            Mio<span class="text-accent">Sito</span>
            </NuxtLink>
        </div>

        <nav class="hidden md:flex space-x-6"> 
          <NuxtLink
            v-for="(item, index) in menuItems"
            :key="index"
            :to="item.path"
            class="text-white hover-accent font-semibold transition-colors duration-300 py-2"
            @click="(e) => handleNavClick(item.path, e)"
          >
            {{ item.label }}
          </NuxtLink>
        </nav>

        <button
          class="md:hidden relative w-10 h-10 focus:outline-none text-white hover-accent transition-colors"
          @click="isMenuOpen = !isMenuOpen"
        >
          <div class="absolute inset-0 flex items-center justify-center">
            <div class="w-6 h-5 relative">
              <span 
                class="absolute w-full h-0.5 bg-current transform transition-all duration-300 ease-in-out"
                :class="[isMenuOpen ? 'rotate-45 top-2' : 'rotate-0 top-0']"
              ></span>
              <span 
                class="absolute w-full h-0.5 bg-current transform transition-all duration-300 ease-in-out top-2"
                :class="{ 'opacity-0': isMenuOpen }"
              ></span>
              <span 
                class="absolute w-full h-0.5 bg-current transform transition-all duration-300 ease-in-out"
                :class="[isMenuOpen ? '-rotate-45 top-2' : 'rotate-0 top-4']"
              ></span>
            </div>
          </div>
        </button>
      </div>

      <Transition
        enter-active-class="transition duration-300 ease-out"
        enter-from-class="transform -translate-y-4 opacity-0"
        enter-to-class="transform translate-y-0 opacity-100"
        leave-active-class="transition duration-200 ease-in"
        leave-from-class="transform translate-y-0 opacity-100"
        leave-to-class="transform -translate-y-4 opacity-0"
      >
        <div 
          v-if="isMenuOpen" 
          class="md:hidden flex flex-col py-4 px-6 space-y-2 border-t border-white/10 header-bg text-white absolute w-full left-0 shadow-2xl"
        >
          <NuxtLink
            v-for="(item, index) in menuItems"
            :key="index"
            :to="item.path"
            class="w-full text-left text-lg py-3 font-semibold hover-accent transition-colors border-b border-white/5 last:border-0"
            @click="(e) => handleNavClick(item.path, e)"
          >
            {{ item.label }}
          </NuxtLink>
        </div>
      </Transition>
    </div>
  </header>
</template>

<script setup>
import { useWindowScroll } from '@vueuse/core'
import { useScrollTo } from '~/composables/useScrollTo'
import { ref, watch } from 'vue'
import { useRoute, useRouter } from 'vue-router'

const route = useRoute()
const router = useRouter()
const header = ref(null)
const isMenuOpen = ref(false)
const lastScrollPosition = ref(0)
const { y: scrollY } = useWindowScroll()
const { scrollToElement } = useScrollTo()

// NOTA: Qui ho messo gli slash "/" davanti ai link con cancelletto #
const menuItems = [
  { label: 'Home', path: '/#hero' }
]

const handleNavClick = async (path, event) => {
  isMenuOpen.value = false

  // Se è un'ancora (es. /#partners o #partners)
  if (path.includes('#')) {
    event.preventDefault()
    
    // Prendi solo la parte dopo il # (es. "partners")
    const sectionId = path.substring(path.indexOf('#') + 1)
    const targetHash = '#' + sectionId

    if (route.path === '/') {
      // Se siamo già in home, scorri subito
      scrollToElement(targetHash)
    } else {
      // Se siamo in un'altra pagina (es. Tornei), vai in Home e poi scorri
      await router.push('/')
      // Diamo un attimo di tempo alla home di caricarsi
      setTimeout(() => {
        scrollToElement(targetHash)
      }, 100)
    }
  }
  // Se è un link normale, il tag <NuxtLink> farà il cambio pagina in automatico
}

watch(scrollY, (newY) => {
  if (isMenuOpen.value) return
  lastScrollPosition.value = newY
})
</script>

<style scoped>
/* Applichiamo i colori della tua palette globale */
.header-bg {
  background-color: var(--color-primary);
}

.border-secondary {
  border-color: var(--color-secondary);
}

.text-accent {
  color: var(--color-accent);
}

/* Classe personalizzata per l'hover */
.hover-accent:hover {
  color: var(--color-secondary);
}
</style>