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

// Fetch global settings with error handling
const { data: globalSettings } = await useAsyncData('global-settings-app', () => getGlobalSettings())

// Set up Google Analytics from Prismic settings with fallback
const analyticsId = globalSettings.value?.analytics?.google_analytics_id || 'G-KYEV6WW3GJ'

useHead({
  script: [
    {
      src: `https://www.googletagmanager.com/gtag/js?id=${analyticsId}`,
      async: true,
    },
    {
      children: `
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', '${analyticsId}');
      `,
      type: "text/javascript",
    },
  ],
})

// Set default site title and meta from Global Settings (fallback for pages without specific SEO)
const siteTitle = globalSettings.value?.seo?.site_title || 'Tilbudsskabelon.dk'
const siteDescription = globalSettings.value?.seo?.site_description || 'Professional quote templates for Danish businesses'

useSeoMeta({
  title: siteTitle,
  description: siteDescription,
  keywords: 'tilbudsskabelon, tilbud, faktura, virksomhed, generer tilbud, nem tilbudsskabelon',
  author: 'Tilbudsskabelon Team',
  robots: 'index,follow',
  ogSiteName: siteTitle,
  ogLocale: 'da_DK',
  ogType: 'website',
  themeColor: '#ffffff',
  msapplicationTileColor: '#ffffff'
})

useHead({
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
