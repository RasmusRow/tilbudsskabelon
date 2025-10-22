<template>
  <header class="flex sticky top-0 mt-12 z-10 items-center bg-[#fff] h-20">
    <div class="container mx-auto items-center flex">
        <NuxtLink to="/">
          <ClientOnly>
            <PrismicImage 
              v-if="globalSettings?.logo"
              :field="globalSettings?.logo"
              class="h-6"
            />
            <template #fallback>
              <svg
                class="h-6"
                viewBox="0 0 3564 303"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <!-- Logo SVG content -->
                <path d="M212 17V94.6H146V297H66V94.6H0V17H212Z" fill="black" />
              </svg>
            </template>
          </ClientOnly>
          <svg
            v-if="!globalSettings?.logo"
            class="h-6"
            viewBox="0 0 3564 303"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <!-- Logo SVG content -->
            <path d="M212 17V94.6H146V297H66V94.6H0V17H212Z" fill="black" />
          </svg>
        </NuxtLink>

      <div class="ml-auto flex space-x-10 items-center">
        <Button 
          v-for="item in globalSettings?.menu_items" 
          :key="item.label"
          :link="item.link?.url || '#'" 
          class="text-lg" 
          :kind="item.link?.url === '/lav-tilbud' ? 'primary' : 'link'"
        >
          {{ item.label }}
        </Button>
      </div>
    </div>
  </header>
</template>

<script setup>
const { getGlobalSettings } = usePrismicData()

// Fetch global settings from Prismic
const { data: globalSettings } = await useAsyncData('global-settings', () => getGlobalSettings())
console.log(globalSettings)
</script>

<style></style>