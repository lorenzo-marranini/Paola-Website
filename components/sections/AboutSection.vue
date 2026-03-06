<template>
  <section ref="sectionRef" class="py-24 md:py-32 bg-primary relative overflow-hidden">
    
    <div 
      ref="leafLeftRef" 
      class="hidden lg:block absolute left-[-0px] top-1/2 -translate-y-1/2 w-48 text-gray-900 opacity-60 z-0"
    >
      <svg viewBox="0 0 167 274" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
        <path d="M0 274C0 274 35.5 241 53 189C53 189 25.5 210.5 5 204C5 204 18 165.5 49 148C49 148 20.5 158 0 142C0 142 22.5 106.5 56.5 100.5C56.5 100.5 35 101.5 19.5 83C19.5 83 45.5 51.5 73.5 54C73.5 54 59.5 52 50.5 35.5C50.5 35.5 81.5 6 109 17.5C109 17.5 104 12 101 0C101 0 156 31 167 92C167 92 122 108.5 84.5 163.5C47 218.5 0 274 0 274Z"/>
      </svg>
    </div>

    <div 
      ref="leafRightRef" 
      class="hidden lg:block absolute right-[-0px] top-1/2 -translate-y-1/2 w-48 text-gray-900 opacity-60 z-0 transform scale-x-[-1]"
    >
      <svg viewBox="0 0 167 274" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
        <path d="M0 274C0 274 35.5 241 53 189C53 189 25.5 210.5 5 204C5 204 18 165.5 49 148C49 148 20.5 158 0 142C0 142 22.5 106.5 56.5 100.5C56.5 100.5 35 101.5 19.5 83C19.5 83 45.5 51.5 73.5 54C73.5 54 59.5 52 50.5 35.5C50.5 35.5 81.5 6 109 17.5C109 17.5 104 12 101 0C101 0 156 31 167 92C167 92 122 108.5 84.5 163.5C47 218.5 0 274 0 274Z"/>
      </svg>
    </div>

    <div class="max-w-5xl mx-auto px-6 text-center relative z-10">
      <div ref="contentRef">
        
        <h4 class="text-gray-500 font-medium uppercase tracking-[0.2em] text-sm md:text-base mb-8">
          Mio Sito Web Agency
        </h4>
        
        <h2 class="text-primary font-serif leading-tight mb-2">
          <span class="text-5xl md:text-6xl block mb-3 font-medium">La mia azienda</span>
          <span class="text-3xl md:text-5xl block font-light">Sviluppo siti Web in Italia</span>
        </h2>
        
        <p class="text-primary text-lg md:text-2xl font-serif mb-16">
          a Roma e Milano
        </p>

        <div class="space-y-8 text-gray-600 text-lg md:text-xl leading-relaxed max-w-4xl mx-auto">
          <p>
            Benvenuto, un'agenzia digitale immersa nelle nuove tecnologie, a pochi click dal centro 
            delle tue idee. Nasciamo dal restauro di vecchi concetti di marketing, per questo conserviamo 
            una vocazione romantica ed è il luogo ideale per una fuga creativa o per un progetto lontano dal caos cittadino. 
            Per noi è il lavoro più bello del mondo!
          </p>
          <p>
            Sarai accolto dal nostro team, una famiglia di sviluppatori e designer sinonimo di ospitalità digitale in Italia. 
            Cosa ci caratterizza? Certamente la passione per il nostro lavoro, la generosità e la naturale simpatia. 
            Fin dalle prime battute sarai conquistato dal calore familiare e da uno stile informale ma attento alle esigenze 
            dei clienti. Vienici a trovare: le bellezze naturalistiche e artistiche del nostro codice non hanno pari.
          </p>
        </div>
        
        </div>
    </div>
  </section>
</template>

<script setup>
import { onMounted, ref } from 'vue'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const sectionRef = ref(null)
const leafLeftRef = ref(null)
const leafRightRef = ref(null)
const contentRef = ref(null)

const meetTeam = () => console.log("Vai alla pagina del team");

onMounted(() => {
  let ctx = gsap.context(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.value,
        start: 'top 80%',
        toggleActions: 'play none none none' 
      }
    })

    // 1. Animazione del blocco di testo centrale (Appare dal basso a cascata)
    tl.from(contentRef.value.children, {
      opacity: 0,
      y: 40,
      duration: 1,
      stagger: 0.2,
      ease: 'power3.out'
    })
    
    // 2. Animazione delle foglie (Entrano dai lati sfumando)
    .from(leafLeftRef.value, {
      opacity: 0,
      x: -50,
      duration: 1.5,
      ease: 'power2.out'
    }, '-=1') // Inizia un po' prima che finisca l'animazione del testo
    
    .from(leafRightRef.value, {
      opacity: 0,
      x: 50,
      duration: 1.5,
      ease: 'power2.out'
    }, '-=1.5') // Insieme alla foglia sinistra

  }, sectionRef.value)
})
</script>

<style scoped>
/* Colori presi dal tuo main.css */
.text-primary { 
  color: var(--color-primary); 
}

/* Solo se decidi di scommentare il bottone */
.btn-primary {
  padding: 12px 28px;
  font-size: 1rem;
  font-weight: bold;
  border-radius: var(--radius-button);
  background-color: var(--color-primary);
  color: var(--color-text-main);
  transition: all 0.3s ease;
}
.btn-primary:hover { 
  background-color: var(--color-primary-hover); 
}
</style>