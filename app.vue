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
useHead({
  script: [
    {
      src: "https://www.googletagmanager.com/gtag/js?id=G-KYEV6WW3GJ",
      async: true,
    },
    {
      children: `
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', 'G-KYEV6WW3GJ');
      `,
      type: "text/javascript",
    },
  ],
});
</script>
<style>
* {
  @apply scroll-smooth;
}
</style>
