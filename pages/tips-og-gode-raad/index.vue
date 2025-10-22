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

// Fetch guides from Prismic
const { data: guides } = await useAsyncData('guides', () => getGuides('tips'))

useHead({
  title: "Tips & gode råd til at få succes med tilbud",
  meta: [
    {
      name: "description",
      content: "Få tips og gode råd til at skrive det perfekte tilbud, forbedre din markedsføring og optimere dine resultater. Vi tilbyder ressourcer og vejledning til at skabe bedre tilbud.",
    },
    {
      property: "og:title",
      content: "Tips & gode råd til at få succes med tilbud",
    },
    {
      property: "og:description",
      content: "Læs vores tips til at skrive gode tilbud, markedsføring og få flere kunder.",
    },
    {
      property: "og:image",
      content: "https://www.tilbudsskabelon.dk/images/seo-cover.png",
    },
    {
      property: "og:url",
      content: "https://www.tilbudsskabelon.dk/tips-og-gode-raad",
    },
  ],
});
</script>

<style scoped>
.grid {
  display: grid;
  gap: 2rem;
}
</style>
