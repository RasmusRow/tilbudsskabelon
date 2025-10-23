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

console.log('Home page data:', homePage.value)

// Set SEO with proper fallback to Global Settings
const seoResult = await setPageSEO(homePage.value, 'home')
console.log('SEO result:', seoResult)
</script>

<style></style>
