<template>
  <footer class="bg-gray-900 text-white pt-16 pb-8 border-t-[6px] border-accent">
    <div class="max-w-[1400px] mx-auto px-6 md:px-8">
      
      <div class="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
        
        <div>
          <div class="text-3xl font-extrabold tracking-tight mb-4">
            Mio<span class="text-primary">Sito</span>
          </div>
          <p class="text-gray-400 leading-relaxed max-w-xs">
            Costruiamo esperienze digitali che lasciano il segno. Il tuo partner ideale per far crescere il tuo business online.
          </p>
        </div>

        <div>
          <h3 class="text-lg font-bold mb-6 uppercase tracking-wider text-gray-300">Esplora</h3>
          <ul class="space-y-3">
            <li>
              <NuxtLink to="/" class="text-gray-400 hover:text-white transition-colors">Home</NuxtLink>
            </li>
            <li>
              <NuxtLink to="/chi-siamo" class="text-gray-400 hover:text-white transition-colors">Chi Siamo</NuxtLink>
            </li>
            <li>
              <NuxtLink to="/servizi" class="text-gray-400 hover:text-white transition-colors">Servizi</NuxtLink>
            </li>
            <li>
              <NuxtLink to="/portfolio" class="text-gray-400 hover:text-white transition-colors">Portfolio</NuxtLink>
            </li>
          </ul>
        </div>

        <div>
          <h3 class="text-lg font-bold mb-6 uppercase tracking-wider text-gray-300">Contatti</h3>
          <ul class="space-y-4 text-gray-400">
            <li class="flex items-center gap-3 hover:text-white transition-colors cursor-pointer">
              <svg class="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
              info@miosito.it
            </li>
            <li class="flex items-center gap-3 hover:text-white transition-colors cursor-pointer">
              <svg class="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path></svg>
              +39 012 345 6789
            </li>
            <li class="flex items-center gap-3 hover:text-white transition-colors cursor-pointer">
              <svg class="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
              Via Roma 1, Milano (MI)
            </li>
          </ul>
        </div>

      </div>

      <div class="pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
        <p>&copy; {{ new Date().getFullYear() }} MioSito. Tutti i diritti riservati.</p>
      </div>

    </div>
  </footer>
</template>

<style scoped>
/* Applichiamo i colori della tua palette globale */
.header-bg {
  background-color: var(--color-primary);
}
.text-accent {
  color: var(--color-accent);
}

.border-accent {
  border-color: var(--color-accent) !important ;
}

/* Classe personalizzata per l'hover */
.hover-accent:hover {
  color: var(--color-secondary);
}
</style>