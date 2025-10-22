<template>
  <div class="container mx-auto py-8 px-4">
    <article v-if="guide" class="max-w-4xl mx-auto">
      <!-- Guide Header -->
      <header class="mb-8">
        <PrismicImage
          v-if="guide.data.featured_image"
          :field="guide.data.featured_image"
          class="w-full h-64 object-cover rounded-lg mb-6"
        />
        <h1 class="text-4xl font-bold mb-4">{{ guide.data.title }}</h1>
        <p v-if="guide.data.excerpt" class="text-xl text-gray-600 mb-4">{{ guide.data.excerpt }}</p>
        <div class="flex items-center space-x-4 text-sm text-gray-500">
          <span v-if="guide.data.category">{{ guide.data.category }}</span>
          <span v-if="guide.data.difficulty">{{ guide.data.difficulty }}</span>
        </div>
      </header>

      <!-- Guide Content -->
      <div class="prose prose-lg max-w-none">
        <PrismicSliceZone 
          v-if="guide.data.slices" 
          :slices="guide.data.slices" 
          :components="sliceComponents" 
        />
      </div>
    </article>

    <!-- Loading State -->
    <div v-else class="max-w-4xl mx-auto">
      <div class="animate-pulse">
        <div class="h-64 bg-gray-300 rounded-lg mb-6"></div>
        <div class="h-8 bg-gray-300 rounded mb-4"></div>
        <div class="h-4 bg-gray-300 rounded mb-2"></div>
        <div class="h-4 bg-gray-300 rounded mb-2"></div>
        <div class="h-4 bg-gray-300 rounded"></div>
      </div>
    </div>
  </div>
</template>

<script setup>
const { getGuide } = usePrismicData()
const route = useRoute()

// Fetch guide from Prismic
const { data: guide } = await useAsyncData(`guide-${route.params.uid}`, () => 
  getGuide(route.params.uid)
)

// Define slice components
const sliceComponents = {
  rich_text: () => import('~/slices/RichText/RichText.vue'),
  image: () => import('~/slices/Image/Image.vue'),
  gallery: () => import('~/slices/Gallery/Gallery.vue'),
  cta: () => import('~/slices/CTA/CTA.vue'),
  faq: () => import('~/slices/FAQ/FAQ.vue'),
  testimonial: () => import('~/slices/Testimonial/Testimonial.vue')
}

// Set SEO from Prismic
useHead({
  title: guide.value?.data?.meta_title || guide.value?.data?.title || 'Guide',
  meta: [
    {
      name: 'description',
      content: guide.value?.data?.meta_description || guide.value?.data?.excerpt || 'Guide content'
    },
    {
      property: 'og:title',
      content: guide.value?.data?.meta_title || guide.value?.data?.title || 'Guide'
    },
    {
      property: 'og:description',
      content: guide.value?.data?.meta_description || guide.value?.data?.excerpt || 'Guide content'
    },
    {
      property: 'og:image',
      content: guide.value?.data?.meta_image?.url || guide.value?.data?.featured_image?.url || '/images/seo-cover.png'
    },
    {
      property: 'og:url',
      content: `https://tilbudsskabelon.dk/tips-og-gode-raad/${route.params.uid}`
    }
  ]
})
</script>

<style scoped>
.prose {
  @apply text-gray-800;
}

.prose h2 {
  @apply text-2xl font-bold mt-8 mb-4;
}

.prose h3 {
  @apply text-xl font-semibold mt-6 mb-3;
}

.prose p {
  @apply mb-4 leading-relaxed;
}

.prose ul {
  @apply mb-4;
}

.prose li {
  @apply mb-2;
}
</style>
