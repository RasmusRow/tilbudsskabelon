<template>
  <div class="flex flex-col">
    <Hero />
    <USP class="my-12" />
    <Info />
  </div>
</template>

<script setup>

useHead({
  title: "GRATIS tilbudsskabelon til håndværkere og freelancere",
  meta: [
    { charset: 'utf-8' },
    { name: 'viewport', content: 'width=device-width, initial-scale=1' },
    { hid: 'description', name: 'description', content: 'Tilbudsskabelon.dk er en brugervenlig platform, der hjælper virksomheder med hurtigt og nemt at generere professionelle tilbud.' },
    { name: 'keywords', content: 'tilbudsskabelon, tilbud, faktura, virksomhed, generer tilbud, nem tilbudsskabelon' },
    { name: 'author', content: 'Tilbudsskabelon Team' },
    { name: 'robots', content: 'index,follow' },
    { property: 'og:title', content: 'Tilbudsskabelon.dk - Generer tilbud hurtigt og nemt' },
    { property: 'og:description', content: 'Med Tilbudsskabelon.dk kan du nemt generere professionelle tilbud til dine kunder.' },
    { property: 'og:type', content: 'website' },
    { property: 'og:url', content: 'https://tilbudsskabelon.dk' },
    { property: 'og:image', content: '/images/seo-cover.png' },
    { property: 'og:locale', content: 'da_DK' },
    { property: 'twitter:card', content: 'summary_large_image' },
    { property: 'twitter:title', content: 'Tilbudsskabelon.dk - Generer tilbud hurtigt og nemt' },
    { property: 'twitter:description', content: 'Generer professionelle tilbud til dine kunder på ingen tid.' },
    { property: 'twitter:image', content: '/images/seo-cover.png' },
  ],
});
</script>

<style></style>
