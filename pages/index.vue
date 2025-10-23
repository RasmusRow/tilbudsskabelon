<template>
  <div class="flex flex-col">
    <Hero />
      <USP class="my-12" />
      <Info />
  </div>
</template>

<script setup>
const { getHomePage } = usePrismicData()
const { setPageSEO } = useSEO()

// Fetch homepage from Prismic
const { data: homePage } = await useAsyncData('homepage', () => getHomePage())

// Set SEO with proper fallback to Global Settings
await setPageSEO(homePage.value, 'home')
</script>

<style></style>
