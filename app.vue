<template>
  <div class="min-h-screen flex flex-col bg-[#fff]">
    <Header class="mb-3" />
    <NuxtPage />
    <Footer class="mt-24" />
    <!-- <div class="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
      <QuoteForm />
    </div> -->
  </div>
</template>

<script setup>
const { getGlobalSettings } = usePrismicData()

// Fetch global settings
const { data: globalSettings } = await useAsyncData('global-settings', () => getGlobalSettings())

// Set up Google Analytics from Prismic settings
useHead({
  script: [
    {
      src: `https://www.googletagmanager.com/gtag/js?id=${globalSettings.value?.analytics?.google_analytics_id || 'G-KYEV6WW3GJ'}`,
      async: true,
    },
    {
      children: `
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', '${globalSettings.value?.analytics?.google_analytics_id || 'G-KYEV6WW3GJ'}');
      `,
      type: "text/javascript",
    },
  ],
})

// Set default site title and meta from Global Settings (fallback for pages without specific SEO)
useHead({
  title: globalSettings.value?.seo?.site_title || 'Tilbudsskabelon.dk',
  meta: [
    {
      name: 'description',
      content: globalSettings.value?.seo?.site_description || 'Professional quote templates for Danish businesses'
    },
    {
      name: 'keywords',
      content: 'tilbudsskabelon, tilbud, faktura, virksomhed, generer tilbud, nem tilbudsskabelon'
    },
    {
      name: 'author',
      content: 'Tilbudsskabelon Team'
    },
    {
      name: 'robots',
      content: 'index,follow'
    },
    {
      property: 'og:site_name',
      content: globalSettings.value?.seo?.site_title || 'Tilbudsskabelon.dk'
    },
    {
      property: 'og:locale',
      content: 'da_DK'
    },
    {
      property: 'og:type',
      content: 'website'
    }
  ],
  link: [
    { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
  ]
})
</script>
<style>
* {
  @apply scroll-smooth;
}
</style>
