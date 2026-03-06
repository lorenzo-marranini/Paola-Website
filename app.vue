<template>
  <div class="flex flex-col min-h-screen">
    <Header />

    <main class="flex-grow pt-[84px]">
      <NuxtPage />
    </main>

    <Footer />
  </div>
</template>

<script setup>
import { onMounted } from 'vue'
import Header from '~/components/layout/Header.vue'
import Footer from '~/components/layout/Footer.vue'
import { useScrollTo } from '~/composables/useScrollTo'

onMounted(() => {
  const { scrollToElement } = useScrollTo()
  if (window.location.hash) {
    setTimeout(() => {
      scrollToElement(window.location.hash)
    }, 100)
  }
})
</script>