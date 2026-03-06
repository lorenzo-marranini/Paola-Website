<template>
  <section class="relative w-full px-4 md:px-8 pt-6 pb-12 mx-auto max-w-[1400px] h-[90vh] min-h-[600px]">
    
    <div class="relative w-full h-full overflow-hidden rounded-[2rem] shadow-2xl flex items-center justify-center">
      
      <video
        class="absolute top-0 left-0 w-full h-full object-cover z-0"
        autoplay
        loop
        muted
        playsinline
        @ended="$event.target.play()"
      >
        <source src="/video/video-landing.mp4" type="video/mp4" />
      </video>

      <div class="absolute inset-0 bg-gradient-to-b from-black/40 via-black/50 to-black/80 z-10"></div>

      <div class="relative z-20 p-6 text-center text-white max-w-4xl mx-auto">
        <h1 
          ref="titleRef"
          class="text-4xl md:text-6xl lg:text-7xl font-extrabold mb-6 leading-tight tracking-tight"
        >
          La mia azienda
        </h1>
        <p 
          ref="subtitleRef"
          class="text-lg md:text-2xl mb-10 text-gray-200 font-light"
        >
          Una soluzione web moderna, veloce e efficace.
        </p>
        
        </div>
    </div>
  </section>
</template>

<script setup>
import { onMounted, ref } from 'vue'
import gsap from 'gsap'

const titleRef = ref(null)
const subtitleRef = ref(null)
const buttonsRef = ref(null)

const goToServices = () => console.log("Azione Inizia Ora cliccata");
const goToContact = () => console.log("Azione Scopri di più cliccata");

onMounted(() => {
  const tl = gsap.timeline({ defaults: { ease: 'power3.out', duration: 1 } })

  tl.from(titleRef.value, { opacity: 0, y: 40, delay: 0.2 })
    .from(subtitleRef.value, { opacity: 0, y: 20 }, '-=0.7')
    .from(buttonsRef.value, { opacity: 0, y: 20 }, '-=0.7')
})
</script>

<style scoped>
.btn-primary {
  padding: 14px 32px;
  font-size: 1.125rem;
  font-weight: bold;
  border-radius: var(--radius-button);
  background-color: var(--color-primary);
  color: var(--color-text-main);
  transition: all 0.3s ease;
}
.btn-primary:hover {
  background-color: var(--color-primary-hover);
  transform: translateY(-2px);
}
.btn-secondary {
  padding: 14px 32px;
  font-size: 1.125rem;
  font-weight: bold;
  border-radius: var(--radius-button);
  background-color: transparent;
  backdrop-filter: blur(5px);
  border: 2px solid white;
  color: white;
  transition: all 0.3s ease;
}
.btn-secondary:hover {
  background-color: white;
  color: #111;
  transform: translateY(-2px);
}
</style>