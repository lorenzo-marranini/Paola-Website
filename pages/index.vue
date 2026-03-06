<template>
  <main>
    <HeroSection />
    <AboutSection />
    <GallerySection />
  </main>
</template>

<script setup>
import { useHead } from '#imports';
import HeroSection from "@/components/sections/HeroSection.vue";
import AboutSection from "@/components/sections/AboutSection.vue";
import GallerySection from "@/components/sections/GallerySection.vue";

useHead({
  title: 'Il mio Sito',
  meta: [
    { name: 'description', content: 'Un template base perfetto per nuovi progetti.' }
  ]
})
</script>