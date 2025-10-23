<template>
    <div class="container mx-auto py-8">
        <article v-if="page && page.data" class="w-full">
            <!-- Page Header -->
            <header class="mb-8">
                <h1 class="text-4xl font-bold mb-4">{{ page.data.title || 'Page Title' }}</h1>
                <p v-if="page.data.meta_description" class="text-xl text-gray-600 mb-4">{{ page.data.meta_description }}
                </p>
            </header>
            <!-- Page Content -->
            <div v-if="page.data.slices && page.data.slices.length > 0" class="prose prose-lg max-w-none">
                <PrismicSliceZone :slices="page.data.slices" :components="sliceComponents" />
            </div>

            <!-- No content message -->
            <div v-else class="text-center py-12">
                <p class="text-gray-500">No content available for this page.</p>
            </div>
        </article>

        <!-- Loading State -->
        <div v-else class="max-w-4xl mx-auto">
            <div class="animate-pulse">
                <div class="h-8 bg-gray-300 rounded mb-4"></div>
                <div class="h-4 bg-gray-300 rounded mb-2"></div>
                <div class="h-4 bg-gray-300 rounded mb-2"></div>
                <div class="h-4 bg-gray-300 rounded"></div>
            </div>
        </div>
    </div>
</template>

<script setup>
const { getPage } = usePrismicData()
const route = useRoute()

// Fetch page from Prismic
const { data: page, error } = await useAsyncData(`page-${route.params.uid}`, () =>
    getPage(route.params.uid)
)

// Handle 404 if page not found
if (!page.value) {
    throw createError({
        statusCode: 404,
        statusMessage: 'Page Not Found'
    })
}

// Import slice components from the global index
import { components as sliceComponents } from '~/slices'

// Set SEO from Prismic
useHead({
    title: page.value?.data?.meta_title || page.value?.data?.title || 'Page',
    meta: [
        {
            name: 'description',
            content: page.value?.data?.meta_description || 'Page content'
        },
        {
            property: 'og:title',
            content: page.value?.data?.meta_title || page.value?.data?.title || 'Page'
        },
        {
            property: 'og:description',
            content: page.value?.data?.meta_description || 'Page content'
        },
        {
            property: 'og:image',
            content: page.value?.data?.meta_image?.url || '/images/seo-cover.png'
        },
        {
            property: 'og:url',
            content: `https://tilbudsskabelon.dk/${route.params.uid}`
        }
    ]
})
</script>

<style scoped>
.prose {
    @apply text-gray-800;
}

.prose h2 {
    @apply text-2xl font-bold mt-8 mb-4;
}

.prose h3 {
    @apply text-xl font-semibold mt-6 mb-3;
}

.prose p {
    @apply mb-4 leading-relaxed;
}

.prose ul {
    @apply mb-4;
}

.prose li {
    @apply mb-2;
}
</style>
