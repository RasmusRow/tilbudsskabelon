<template>
  <footer class="bg-black py-12 px-4 lg:px-8 text-white">
    <div class="container mx-auto">
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
        <div>
          <h3 class="text-xl font-semibold mb-4">{{ globalSettings?.footer?.about_title || 'Om tilbudsskabelon.dk' }}</h3>
          <ClientOnly>
            <PrismicRichText 
              v-if="globalSettings?.footer?.about_description"
              :field="globalSettings.footer.about_description"
              class="text-white"
            />
            <template #fallback>
              <p class="text-white">
                Tilbudsskabelon.dk er en platform, der gør det nemt for virksomheder
                at lave skræddersyede og professionelle tilbud. Vi hjælper dig med
                at spare tid og forbedre dine kunders oplevelse med præcise tilbud,
                der imponerer.
              </p>
            </template>
          </ClientOnly>
          <p v-if="!globalSettings?.footer?.about_description" class="text-white">
            Tilbudsskabelon.dk er en platform, der gør det nemt for virksomheder
            at lave skræddersyede og professionelle tilbud. Vi hjælper dig med
            at spare tid og forbedre dine kunders oplevelse med præcise tilbud,
            der imponerer.
          </p>
        </div>
        <div>
          <h3 class="text-xl font-semibold mb-4">{{ globalSettings?.footer?.quick_links_title || 'Hurtige links' }}</h3>
          <ul class="text-gray-400">
            <template v-if="globalSettings?.footer?.quick_links?.length">
              <li 
                v-for="link in globalSettings.footer.quick_links" 
                :key="link.label"
                class="mb-2"
              >
                <ClientOnly>
                  <PrismicLink 
                    v-if="link.link"
                    :field="link.link" 
                    class="hover:text-white"
                  >
                    {{ link.label }}
                  </PrismicLink>
                  <template #fallback>
                    <span>{{ link.label }}</span>
                  </template>
                </ClientOnly>
                <span v-if="!link.link">{{ link.label }}</span>
              </li>
            </template>
            <!-- Fallback links if no Prismic data -->
            <template v-else>
              <li class="mb-2">
                <NuxtLink to="/" class="hover:text-white">Hjem</NuxtLink>
              </li>
              <li class="mb-2">
                <NuxtLink to="/tips-og-gode-raad" class="hover:text-white">Tips & gode råd</NuxtLink>
              </li>
              <li class="mb-2">
                <NuxtLink to="/lav-tilbud" class="hover:text-white">Lav et tilbud</NuxtLink>
              </li>
            </template>
          </ul>
        </div>
        <div>
          <h3 class="text-xl font-semibold mb-4">{{ globalSettings?.footer?.contact_title || 'Kontakt os' }}</h3>
          <p v-if="globalSettings?.footer?.contact_email" class="text-gray-400 mb-2">
            Email:
            <a :href="`mailto:${globalSettings.footer.contact_email}`" class="hover:text-white">
              {{ globalSettings.footer.contact_email }}
            </a>
          </p>
          <p v-if="globalSettings?.footer?.contact_phone" class="text-gray-400 mb-2">
            Telefon:
            <a :href="`tel:${globalSettings.footer.contact_phone}`" class="hover:text-white">
              {{ globalSettings.footer.contact_phone }}
            </a>
          </p>
          <p v-if="globalSettings?.footer?.company_address" class="text-gray-400 mb-2">
            {{ globalSettings.footer.company_address }}
          </p>
          <!-- Fallback contact info -->
          <template v-if="!globalSettings?.footer?.contact_email">
            <p class="text-gray-400 mb-2">
              Email:
              <a href="mailto:support@tilbudsskabelon.dk" class="hover:text-white">
                support@tilbudsskabelon.dk
              </a>
            </p>
          </template>
        </div>
      </div>
      <div class="text-center text-gray-500">
        <p>{{ globalSettings?.footer?.copyright_text || '© 2024 Tilbudsskabelon.dk. Alle rettigheder forbeholdes.' }}</p>
      </div>
    </div>
  </footer>
</template>

<script setup>
const { getGlobalSettings } = usePrismicData()

// Fetch global settings from Prismic
const { data: globalSettings } = await useAsyncData('global-settings-footer', () => getGlobalSettings())
</script>

<style scoped>
/* You kan add custom styles here if needed */
</style>

<!-- Tailwind classes are used throughout for styling -->
