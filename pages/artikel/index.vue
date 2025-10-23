<template>
  <div class="container mx-auto py-8 px-4">
    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
      <NuxtLink :to="`/tips-og-gode-raad/${guide.uid}`" v-for="guide in guides" :key="guide.id">
        <div class="shadow-lg rounded-3xl overflow-hidden bg-white">
          <PrismicImage
            v-if="guide.data.featured_image"
            :field="guide.data.featured_image"
            class="w-full h-48 object-cover"
          />
          <div class="p-6">
            <h2 class="text-lg font-semibold mb-2">{{ guide.data.title }}</h2>
            <p class="text-gray-600">{{ guide.data.excerpt }}</p>
          </div>
        </div>
      </NuxtLink>
    </div>
  </div>
</template>

<script setup>
const { getGuides } = usePrismicData()
const { setPageSEO } = useSEO()

// Fetch guides from Prismic
const { data: guides } = await useAsyncData('guides', () => getGuides('tips'))

// Create page data for SEO
const pageData = {
  title: "Tips & gode råd til at få succes med tilbud",
  meta_title: "Tips & gode råd til at få succes med tilbud",
  meta_description: "Få tips og gode råd til at skrive det perfekte tilbud, forbedre din markedsføring og optimere dine resultater. Vi tilbyder ressourcer og vejledning til at skabe bedre tilbud.",
  meta_image: { url: "/images/seo-cover.png" }
}

// Set SEO with proper fallback to Global Settings
await setPageSEO(pageData, 'page')
</script>

<style scoped>
.grid {
  display: grid;
  gap: 2rem;
}
</style>
