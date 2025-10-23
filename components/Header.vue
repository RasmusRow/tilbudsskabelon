<template>
  <header class="flex sticky top-0 mt-12 z-10 items-center bg-[#fff] h-20">
    <div class="container mx-auto items-center flex">
      <NuxtLink to="/">
        <ClientOnly>
          <PrismicImage v-if="globalSettings?.logo" :field="globalSettings?.logo" class="w-64" />
        </ClientOnly>
      </NuxtLink>

      <div class="ml-auto flex space-x-10 items-center">
        <Button v-for="item in globalSettings?.menu_items" :key="item.label" 
          :link="getNavigationUrl(item.link)"
          class="text-lg" 
          :kind="getNavigationUrl(item.link) === '/lav-tilbud' ? 'primary' : 'link'">
          {{ item.label }}
        </Button>

        <Button
          link="/lav-tilbud"
          class="text-lg"
          kind="primary"
        >
          Lav et tilbud
        </Button>
      </div>
    </div>
  </header>
</template>

<script setup>
const { getGlobalSettings } = usePrismicData()

// Fetch global settings from Prismic
const { data: globalSettings } = await useAsyncData('global-settings-header', () => getGlobalSettings())

// Function to extract the correct URL from Prismic link
const getNavigationUrl = (link) => {
  if (!link) return null
  
  // If it's already a URL string, return it
  if (typeof link === 'string') {
    return link
  }
  
  // If it's a Prismic document link, use the uid to create the route
  if (link.uid) {
    return `/${link.uid}`
  }

  
  // If it has a url property, use that
  if (link.url) {
    return link.url
  }
  
  return null
}

console.log(globalSettings)
</script>

<style></style>