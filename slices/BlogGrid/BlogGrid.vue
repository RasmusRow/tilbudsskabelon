<script setup lang="ts">
defineProps(
  getSliceComponentProps([
    "slice",
    "index",
    "slices",
    "context",
  ]),
);

// Function to extract text from RichText field
const getBlogPostDescription = (description: any) => {
  if (!description) return null;
  if (typeof description === 'string') return description;
  if (Array.isArray(description)) {
    // Extract text from RichText array
    return description
      .filter(item => item.type === 'paragraph')
      .map(item => item.text)
      .join(' ')
      .substring(0, 150) + '...';
  }
  return null;
};
</script>

<template>
  <section
    :data-slice-type="slice.slice_type"
    :data-slice-variation="slice.variation"
  >
    <div class="w-full">

       <!-- Blog Grid -->
       <div class="grid grid-cols-1 w-full md:grid-cols-3 gap-8">
        <!-- Blog Posts from primary.blog_posts (repeatable) -->
        <NuxtLink
          v-for="(blogItem, index) in slice.primary?.blog_posts"
          :key="index"
          :to="`/artikel/${blogItem.blog_post?.slugs?.[0] || blogItem.blog_post?.uid}`"
          class="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 lg:col-span-1 block"
        >
          <!-- Blog Post Image -->
          <div class="aspect-video w-full bg-gray-200 flex items-center justify-center overflow-hidden">
            <PrismicImage
              v-if="blogItem.blog_post?.data?.featured_image"
              :field="blogItem.blog_post.data.featured_image"
              class="w-full h-full object-cover"
            />
            <div
              v-else
              class="w-full h-48 bg-gradient-to-br from-blue-400 to-purple-500 flex items-center justify-center"
            >
              <span class="text-white text-2xl font-bold">📝</span>
            </div>
          </div>

          <!-- Blog Post Content -->
          <div class="p-6">
            <h3 class="text-xl font-semibold text-gray-900 mb-3 line-clamp-2">
              {{ blogItem.blog_post?.data?.title || 'Blog Post Title' }}
            </h3>
            <p class="text-gray-600 mb-4 line-clamp-3">
              {{ getBlogPostDescription(blogItem.blog_post?.data?.description) || 'Blog post description goes here...' }}
            </p>
            
            <!-- Author and Date -->
            <div class="flex items-center justify-between text-sm text-gray-500 mb-4">
              <span v-if="blogItem.blog_post?.data?.author">
                By {{ blogItem.blog_post.data.author }}
              </span>
              <span v-if="blogItem.blog_post?.data?.publish_date">
                {{ new Date(blogItem.blog_post.data.publish_date).toLocaleDateString('da-DK') }}
              </span>
            </div>
            
            <!-- Read More Text -->
            <div class="inline-flex items-center text-blue-600 font-medium">
              Læs mere
              <svg class="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
              </svg>
            </div>
          </div>
        </NuxtLink>

        <!-- Blog Posts from items array (if any) -->
        <div
          v-for="(item, index) in slice.items"
          :key="index"
          class="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 lg:col-span-1"
        >
          <!-- Blog Post Image -->
          <div class="aspect-w-16 aspect-h-9 bg-gray-200">
            <PrismicImage
              v-if="item.blog_post?.data?.featured_image"
              :field="item.blog_post.data.featured_image"
              class="w-full h-48 object-cover"
            />
            <div
              v-else
              class="w-full h-48 bg-gradient-to-br from-blue-400 to-purple-500 flex items-center justify-center"
            >
              <span class="text-white text-2xl font-bold">📝</span>
            </div>
          </div>

          <!-- Blog Post Content -->
          <div class="p-6">
            <h3 class="text-xl font-semibold text-gray-900 mb-3 line-clamp-2">
              {{ item.blog_post?.data?.title || 'Blog Post Title' }}
            </h3>
            <p class="text-gray-600 mb-4 line-clamp-3">
              {{ item.blog_post?.data?.excerpt || item.blog_post?.data?.description || 'Blog post description goes here...' }}
            </p>
            
            <!-- Author and Date -->
            <div class="flex items-center justify-between text-sm text-gray-500 mb-4">
              <span v-if="item.blog_post?.data?.author">
                By {{ item.blog_post.data.author }}
              </span>
              <span v-if="item.blog_post?.data?.publish_date">
                {{ new Date(item.blog_post.data.publish_date).toLocaleDateString('da-DK') }}
              </span>
            </div>
            
            <!-- Read More Link -->
            <NuxtLink
              v-if="item.blog_post?.uid"
              :to="`/artikel/${item.blog_post?.slugs?.[0] || item.blog_post?.uid}`"
              class="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium"
            >
              Læs mere
              <svg class="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
              </svg>
            </NuxtLink>
          </div>
        </div>
      </div>

      <!-- Empty State -->
      <div
        v-if="!slice.primary?.blog_posts || slice.primary.blog_posts.length === 0"
        class="text-center py-12"
      >
        <div class="text-gray-400 text-6xl mb-4">📝</div>
        <h3 class="text-xl font-semibold text-gray-600 mb-2">Ingen blog posts endnu</h3>
        <p class="text-gray-500">Tilføj blog posts til denne sektion i Prismic CMS.</p>
      </div>
    </div>
  </section>
</template>

<style scoped>
.line-clamp-2 {
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.line-clamp-3 {
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.aspect-w-16 {
  position: relative;
  padding-bottom: 56.25%; /* 16:9 aspect ratio */
}

.aspect-h-9 {
  position: absolute;
  height: 100%;
  width: 100%;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
}
</style>
