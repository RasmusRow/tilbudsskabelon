<template>
  <div class="container mx-auto py-8 px-4">
    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
      <NuxtLink :to="post.link" v-for="post in posts" :key="post.id">
        <div class="shadow-lg rounded-3xl overflow-hidden bg-white">
          <img
            :src="post.image"
            :alt="post.title"
            class="w-full h-48 object-cover"
          />
          <div class="p-6">
            <h2 class="text-lg font-semibold mb-2">{{ post.title }}</h2>
            <p class="text-gray-600">{{ post.excerpt }}</p>
          </div>
        </div>
      </NuxtLink>
    </div>
  </div>
</template>

<script setup>
const posts = [
  {
    id: 1,
    title: "Sådan skriver du det perfekte tilbud",
    excerpt: "Lær hvordan du kan skrive tilbud, der fænger og vinder kunder...",
    image: "/images/skriv-et-perfekt-tilbud.png",
    link: "/tips-og-gode-raad/saadan-skriver-du-det-perfekte-tilbud",
  },
  {
    id: 2,
    title: "Lav et godt håndværkertilbud",
    excerpt:
      "Lær hvordan du kan skrive håndværkertilbud, der fænger og vinder kunder...",
    image: "/images/handvaerker-tilbud.png",
    link: "/tips-og-gode-raad/saadan-skriver-du-et-godt-handvaerkertilbud",
  },
];

useHead({
  title: "Tips & gode råd til at få succes med tilbud",
  meta: [
    {
      name: "description",
      content:
        "Få tips og gode råd til at skrive det perfekte tilbud, forbedre din markedsføring og optimere dine resultater. Vi tilbyder ressourcer og vejledning til at skabe bedre tilbud.",
    },
    {
      property: "og:title",
      content: "Tips & gode råd til at få succes med tilbud",
    },
    {
      property: "og:description",
      content:
        "Læs vores tips til at skrive gode tilbud, markedsføring og få flere kunder.",
    },
    {
      property: "og:image",
      content: "https://www.tilbudsskabelon.dk/images/seo-cover.png",
    },
    {
      property: "og:url",
      content: "https://www.tilbudsskabelon.dk/tips-og-gode-raad",
    },
  ],
});
</script>

<style scoped>
.grid {
  display: grid;
  gap: 2rem;
}
</style>
