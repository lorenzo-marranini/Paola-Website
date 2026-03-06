<template>
  <section class="py-20 bg-primary overflow-hidden relative z-10">
    <div class="max-w-[1600px] mx-auto px-4 mb-12 text-center">
      <h2 ref="titleRef" class="text-4xl md:text-5xl font-extrabold text-gray-900">
        Esplora la nostra gallery
      </h2>
    </div>

    <div ref="sliderRef" class="relative overflow-hidden w-full">
      
      <div 
        ref="trackRef"
        class="flex gap-6 items-center"
        :style="{ width: `${trackWidth}px` }"
      >
        <div
          v-for="(image, index) in duplicatedImages"
          :key="index"
          class="flex-shrink-0 w-[280px] md:w-[400px] h-[350px] md:h-[500px] rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow"
        >
          <img
            :src="image"
            alt="Gallery Image"
            class="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
          />
        </div>
      </div>
      
    </div>
  </section>
</template>

<script setup>
import { onMounted, ref, computed } from 'vue'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

// 1. Array Base di 10 immagini
const baseImages = Array.from({ length: 10 }, (_, i) => `/images/bagno_roma_${i + 1}.jpeg`)

// 2. Duplichiamo l'array per creare l'effetto loop infinito senza stacchi
const duplicatedImages = computed(() => {
  return [...baseImages, ...baseImages]
})

const titleRef = ref(null)
const sliderRef = ref(null)
const trackRef = ref(null)
const trackWidth = ref(0)

onMounted(() => {
  // Animazione entrata del titolo
  gsap.from(titleRef.value, {
    opacity: 0,
    y: 30,
    duration: 1,
    scrollTrigger: {
      trigger: titleRef.value,
      start: 'top 85%',
      toggleActions: 'play none none reverse'
    }
  })

  // Funzione per calcolare la larghezza totale della traccia
  const calculateWidth = () => {
    if (!trackRef.value) return
    const cards = trackRef.value.children
    let totalWidth = 0
    // Sommiamo la larghezza di ogni immagine + il gap (24px equivale a gap-6 di Tailwind)
    for (let card of cards) {
      totalWidth += card.offsetWidth + 24 
    }
    trackWidth.value = totalWidth - 24
  }

  // Aspettiamo che almeno un'immagine sia caricata per calcolare le dimensioni
  setTimeout(() => {
    calculateWidth()
    initAnimation()
  }, 500) // Piccolo delay per assicurarsi che il DOM abbia renderizzato le card

  // Animazione Marquee (Scorrimento infinito)
  function initAnimation() {
    if (trackWidth.value <= 0) return

    const tl = gsap.timeline({
      repeat: -1,
      defaults: { ease: 'none' }
    })

    // La metà esatta della traccia (visto che abbiamo duplicato l'array)
    const singleSetWidth = trackWidth.value / 2

    // Modificatore matematico di GSAP per resettare la posizione senza scatti
    tl.to(trackRef.value, {
      x: -singleSetWidth,
      duration: 35, // Più alto è il numero, più lento scorre
      ease: 'none',
      modifiers: {
        x: gsap.utils.unitize(x => {
          return ((parseFloat(x) % singleSetWidth) + singleSetWidth) % singleSetWidth - singleSetWidth
        })
      }
    })
  }
})
</script>