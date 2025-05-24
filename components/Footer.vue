<template>
  <footer class="bg-black py-12 px-4 lg:px-8 text-white">
    <div class="container mx-auto">
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
        <div>
          <h3 class="text-xl font-semibold mb-4">Om tilbudsskabelon.dk</h3>
          <p class="text-white">
            Tilbudsskabelon.dk er en platform, der gør det nemt for virksomheder
            at lave skræddersyede og professionelle tilbud. Vi hjælper dig med
            at spare tid og forbedre dine kunders oplevelse med præcise tilbud,
            der imponerer.
          </p>
        </div>
        <div>
          <h3 class="text-xl font-semibold mb-4">Hurtige links</h3>
          <ul class="text-gray-400">
            <li class="mb-2">
              <NuxtLink to="/" class="hover:text-white">Hjem</NuxtLink>
            </li>
            <li class="mb-2">
              <NuxtLink to="/tips-og-gode-raad" class="hover:text-white"
                >Tips & gode råd</NuxtLink
              >
            </li>
            <li class="mb-2">
              <NuxtLink to="/lav-tilbud" class="hover:text-white"
                >Lav et tilbud</NuxtLink
              >
            </li>

            <li class="mb-2">
              <a href="https://bowlingcentre.dk" class="hover:text-white"
                >Bowlingcentre.dk</a
              >
            </li>
          </ul>
        </div>
        <div>
          <h3 class="text-xl font-semibold mb-4">Kontakt os</h3>
          <p class="text-gray-400 mb-2">
            Email:
            <a href="mailto:support@tilbudsskabelon.dk" class="hover:text-white"
              >support@tilbudsskabelon.dk</a
            >
          </p>
        </div>
      </div>
      <div class="text-center text-gray-500">
        <p>&copy; 2024 Tilbudsskabelon.dk. Alle rettigheder forbeholdes.</p>
      </div>
    </div>
  </footer>
</template>

<script setup>
// No additional JavaScript is needed for this static component
</script>

<style scoped>
/* You kan add custom styles here if needed */
</style>

<!-- Tailwind classes are used throughout for styling -->
