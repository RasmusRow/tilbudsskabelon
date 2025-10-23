<template>
  <div class="flex flex-col">
    <ClientOnly>
      <PrismicSliceZone 
        v-if="homePage?.slices" 
        :slices="homePage.slices" 
        :components="sliceComponents" 
      />
      
    </ClientOnly>
    <div v-if="!homePage?.slices">
      <Hero />
      <USP class="my-12" />
      <Info />
    </div>
  </div>
</template>

<script setup>
const { getHomePage } = usePrismicData()

// Fetch homepage from Prismic
const { data: homePage } = await useAsyncData('homepage', () => getHomePage())

// Define slice components
const sliceComponents = {
  hero: () => import('~/slices/HeroSlice/HeroSlice.vue'),
  usp: () => import('~/slices/USP/USP.vue'),
  info: () => import('~/slices/Info/Info.vue'),
  rich_text: () => import('~/slices/RichText/RichText.vue'),
  cta: () => import('~/slices/CTA/CTA.vue'),
  image: () => import('~/slices/Image/Image.vue'),
  gallery: () => import('~/slices/Gallery/Gallery.vue'),
  quote_form: () => import('~/slices/QuoteForm/QuoteForm.vue'),
  guide_listing: () => import('~/slices/GuideListing/GuideListing.vue'),
  faq: () => import('~/slices/FAQ/FAQ.vue'),
  testimonial: () => import('~/slices/Testimonial/Testimonial.vue'),
  contact_form: () => import('~/slices/ContactForm/ContactForm.vue')
}

// Set SEO from Prismic or fallback
useHead({
  title: homePage.value?.meta_title || "GRATIS tilbudsskabelon til håndværkere og freelancere",
  meta: [
    { charset: 'utf-8' },
    { name: 'viewport', content: 'width=device-width, initial-scale=1' },
    { hid: 'description', name: 'description', content: homePage.value?.meta_description || 'Tilbudsskabelon.dk er en brugervenlig platform, der hjælper virksomheder med hurtigt og nemt at generere professionelle tilbud.' },
    { name: 'keywords', content: 'tilbudsskabelon, tilbud, faktura, virksomhed, generer tilbud, nem tilbudsskabelon' },
    { name: 'author', content: 'Tilbudsskabelon Team' },
    { name: 'robots', content: 'index,follow' },
    { property: 'og:title', content: homePage.value?.meta_title || 'Tilbudsskabelon.dk - Generer tilbud hurtigt og nemt' },
    { property: 'og:description', content: homePage.value?.meta_description || 'Med Tilbudsskabelon.dk kan du nemt generere professionelle tilbud til dine kunder.' },
    { property: 'og:type', content: 'website' },
    { property: 'og:url', content: 'https://tilbudsskabelon.dk' },
    { property: 'og:image', content: homePage.value?.meta_image?.url || '/images/seo-cover.png' },
    { property: 'og:locale', content: 'da_DK' },
    { property: 'twitter:card', content: 'summary_large_image' },
    { property: 'twitter:title', content: homePage.value?.meta_title || 'Tilbudsskabelon.dk - Generer tilbud hurtigt og nemt' },
    { property: 'twitter:description', content: homePage.value?.meta_description || 'Generer professionelle tilbud til dine kunder på ingen tid.' },
    { property: 'twitter:image', content: homePage.value?.meta_image?.url || '/images/seo-cover.png' },
  ],
});
</script>

<style></style>
