<template>
  <div class="min-h-screen bg-gray-50">
    <div class="container mx-auto py-12 px-4">
      <article v-if="blogPost" class="max-w-4xl mx-auto">
        <!-- Blog Post Header -->
        <header class="mb-12">
          <!-- Featured Image -->
          <div v-if="blogPost.data.featured_image" class="mb-8">
            <PrismicImage
              :field="blogPost.data.featured_image"
              class="w-full h-96 object-cover rounded-xl shadow-lg"
            />
          </div>
          
          <!-- Title -->
          <h1 class="text-5xl font-bold text-gray-900 mb-6 leading-tight">
            {{ blogPost.data.title }}
          </h1>
          
          <!-- Excerpt -->
          <p v-if="blogPost.data.excerpt" class="text-xl text-gray-600 mb-8 leading-relaxed">
            {{ blogPost.data.excerpt }}
          </p>
          
          <!-- Meta Information -->
          <div class="flex items-center space-x-6 text-gray-500 border-b border-gray-200 pb-6">
            <div v-if="blogPost.data.author" class="flex items-center">
              <svg class="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clip-rule="evenodd"></path>
              </svg>
              <span class="font-medium">{{ blogPost.data.author }}</span>
            </div>
            <div v-if="blogPost.data.publish_date" class="flex items-center">
              <svg class="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clip-rule="evenodd"></path>
              </svg>
              <span>{{ new Date(blogPost.data.publish_date).toLocaleDateString('da-DK') }}</span>
            </div>
          </div>
        </header>

        <!-- Blog Post Content -->
        <div class="blog-content max-w-none">
          <PrismicRichText v-if="blogPost.data.description" :field="blogPost.data.description" />
        </div>

        <!-- Back to Blog Link -->
        <div class="mt-12 pt-8 border-t border-gray-200">
          <NuxtLink 
            to="/" 
            class="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium transition-colors"
          >
            <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"></path>
            </svg>
            Tilbage til forsiden
          </NuxtLink>
        </div>
      </article>

      <!-- Loading State -->
      <div v-else class="max-w-4xl mx-auto">
        <div class="animate-pulse">
          <div class="h-96 bg-gray-300 rounded-xl mb-8"></div>
          <div class="h-12 bg-gray-300 rounded mb-6"></div>
          <div class="h-6 bg-gray-300 rounded mb-4"></div>
          <div class="h-6 bg-gray-300 rounded mb-4"></div>
          <div class="h-6 bg-gray-300 rounded mb-8"></div>
          <div class="h-4 bg-gray-300 rounded mb-2"></div>
          <div class="h-4 bg-gray-300 rounded mb-2"></div>
          <div class="h-4 bg-gray-300 rounded"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const { getBlogPost } = usePrismicData()
const { setPageSEO } = useSEO()
const route = useRoute()

// Fetch blog post from Prismic
const { data: blogPost } = await useAsyncData(`blog-post-${route.params.uid}`, () => 
  getBlogPost(route.params.uid)
)

// Define slice components
const sliceComponents = {
  rich_text: () => import('~/slices/RichText/RichText.vue'),
  image: () => import('~/slices/Image/Image.vue'),
  cta: () => import('~/slices/CTA/CTA.vue'),
  faq: () => import('~/slices/FAQ/FAQ.vue')
}

// Set SEO with proper fallback to Global Settings
await setPageSEO(blogPost.value?.data, 'blog-post')
</script>

<style scoped>
/* Enhanced blog content styling for better readability */
.blog-content {
  @apply text-gray-800 leading-relaxed text-lg;
}

.blog-content h1 {
  @apply text-4xl font-bold mb-6 mt-8 text-gray-900 border-b border-gray-200 pb-4;
}

.blog-content h2 {
  @apply text-3xl font-bold mt-12 mb-6 text-gray-900;
}

.blog-content h3 {
  @apply text-2xl font-semibold mt-10 mb-4 text-gray-900;
}

.blog-content h4 {
  @apply text-xl font-semibold mt-8 mb-3 text-gray-900;
}

.blog-content p {
  @apply mb-6 leading-relaxed text-gray-700;
}

.blog-content ul {
  @apply list-disc pl-6 mb-6 space-y-3;
}

.blog-content ol {
  @apply list-decimal pl-6 mb-6 space-y-3;
}

.blog-content li {
  @apply text-gray-700 leading-relaxed mb-2;
}

.blog-content blockquote {
  @apply border-l-4 border-blue-500 pl-6 py-4 mb-6 bg-blue-50 italic text-gray-700 rounded-r-lg;
}

.blog-content strong {
  @apply font-semibold text-gray-900;
}

.blog-content em {
  @apply italic text-gray-700;
}

.blog-content a {
  @apply text-blue-600 hover:text-blue-800 underline transition-colors;
}

.blog-content code {
  @apply bg-gray-100 px-2 py-1 rounded text-sm font-mono text-gray-800;
}

.blog-content pre {
  @apply bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto mb-6;
}

.blog-content pre code {
  @apply bg-transparent p-0 text-gray-100;
}

.blog-content img {
  @apply rounded-lg shadow-md mb-6;
}

.blog-content table {
  @apply w-full border-collapse border border-gray-300 mb-6;
}

.blog-content th {
  @apply border border-gray-300 bg-gray-50 px-4 py-2 text-left font-semibold;
}

.blog-content td {
  @apply border border-gray-300 px-4 py-2;
}

/* Specific styling for Prismic RichText elements */
.blog-content :deep(p) {
  @apply mb-6 leading-relaxed text-gray-700;
}

.blog-content :deep(ul) {
  @apply list-disc pl-6 mb-6 space-y-3;
}

.blog-content :deep(ol) {
  @apply list-decimal pl-6 mb-6 space-y-3;
}

.blog-content :deep(li) {
  @apply text-gray-700 leading-relaxed mb-2;
}

.blog-content :deep(h1) {
  @apply text-4xl font-bold mb-6 mt-8 text-gray-900 border-b border-gray-200 pb-4;
}

.blog-content :deep(h2) {
  @apply text-3xl font-bold mt-12 mb-6 text-gray-900;
}

.blog-content :deep(h3) {
  @apply text-2xl font-semibold mt-10 mb-4 text-gray-900;
}

.blog-content :deep(h4) {
  @apply text-xl font-semibold mt-8 mb-3 text-gray-900;
}

.blog-content :deep(strong) {
  @apply font-semibold text-gray-900;
}

.blog-content :deep(em) {
  @apply italic text-gray-700;
}

.blog-content :deep(a) {
  @apply text-blue-600 hover:text-blue-800 underline transition-colors;
}
</style>
