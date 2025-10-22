# Prismic Implementation Guide
## Tilbudsskabelon.dk - Step-by-Step Implementation

This guide provides specific implementation steps for integrating the Prismic CMS structure with your existing Nuxt.js application.

## Prerequisites

1. **Prismic Account**: Create a Prismic account at [prismic.io](https://prismic.io)
2. **Repository**: Create a new Prismic repository
3. **Nuxt.js Setup**: Ensure your Nuxt.js project is configured with Prismic module

## Step 1: Install Prismic Dependencies

```bash
npm install @prismicio/client @prismicio/helpers @prismicio/types
```

## Step 2: Configure Prismic in Nuxt

Update your `nuxt.config.ts`:

```typescript
export default defineNuxtConfig({
  modules: [
    '@nuxtjs/prismic'
  ],
  prismic: {
    endpoint: 'your-repository-name',
    preview: '/preview'
  },
  runtimeConfig: {
    public: {
      prismicEndpoint: 'https://your-repository-name.prismic.io/api/v2'
    }
  }
})
```

## Step 3: Create Prismic Client

Create `plugins/prismic.client.ts`:

```typescript
import { createClient } from '@prismicio/client'

export default defineNuxtPlugin(() => {
  const config = useRuntimeConfig()
  
  const client = createClient(config.public.prismicEndpoint, {
    accessToken: config.public.prismicAccessToken // Optional
  })
  
  return {
    provide: {
      prismic: client
    }
  }
})
```

## Step 4: Create Content Types in Prismic

### Import Content Types

1. Go to your Prismic repository
2. Navigate to **Settings** > **Custom Types**
3. Click **Import** and upload each JSON file from the `prismic-structure` folder:
   - `global-settings.json`
   - `page.json`
   - `guide.json`
   - `navigation.json`
   - `quote-template.json`
   - `testimonial.json`
   - `faq.json`
   - `blog-post.json`
   - `team-member.json`
   - `pricing-plan.json`
   - `contact-form.json`

### Configure Slices

After importing content types, configure the slices in the Slice Machine:

1. Go to **Slice Machine** in your Prismic dashboard
2. Create each slice with the configurations provided in the content types
3. Push changes to your repository

## Step 5: Create Vue Components for Slices

### Hero Slice Component

Create `components/slices/HeroSlice.vue`:

```vue
<template>
  <section class="hero-section">
    <div class="container mx-auto px-4 py-20">
      <div class="text-center">
        <h1 class="text-5xl font-bold mb-6">{{ slice.primary.title }}</h1>
        <p class="text-xl mb-8 text-gray-600">{{ slice.primary.subtitle }}</p>
        <Button 
          :link="slice.primary.cta_link"
          :kind="slice.primary.cta_style"
          class="text-lg px-8 py-4"
        >
          {{ slice.primary.cta_text }}
        </Button>
      </div>
    </div>
  </section>
</template>

<script setup>
defineProps({
  slice: {
    type: Object,
    required: true
  }
})
</script>
```

### USP Slice Component

Create `components/slices/USPSlice.vue`:

```vue
<template>
  <section class="usp-section py-16">
    <div class="container mx-auto px-4">
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div 
          v-for="(item, index) in slice.items" 
          :key="index"
          class="text-center p-8 bg-white rounded-lg shadow-lg"
        >
          <div class="text-4xl mb-4 text-primary">
            <!-- Icon rendering based on item.icon -->
            <span v-if="item.icon" v-html="item.icon"></span>
          </div>
          <h3 class="text-2xl font-semibold mb-4">{{ item.title }}</h3>
          <p class="text-gray-600">{{ item.description }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
defineProps({
  slice: {
    type: Object,
    required: true
  }
})
</script>
```

### Rich Text Slice Component

Create `components/slices/RichTextSlice.vue`:

```vue
<template>
  <section class="rich-text-section py-8">
    <div class="container mx-auto px-4">
      <div class="prose prose-lg max-w-none">
        <PrismicRichText :field="slice.primary.content" />
      </div>
    </div>
  </section>
</template>

<script setup>
defineProps({
  slice: {
    type: Object,
    required: true
  }
})
</script>
```

## Step 6: Create Page Components

### Dynamic Page Component

Create `pages/[...slug].vue`:

```vue
<template>
  <div>
    <div v-for="slice in page.data.content" :key="slice.id">
      <component 
        :is="`slice-${slice.slice_type}`" 
        :slice="slice" 
      />
    </div>
  </div>
</template>

<script setup>
const route = useRoute()
const { $prismic } = useNuxtApp()

// Fetch page content
const { data: page } = await $prismic.getByUID('page', route.params.slug[0])

if (!page) {
  throw createError({
    statusCode: 404,
    statusMessage: 'Page not found'
  })
}

// SEO
useHead({
  title: page.data.seo_title || page.data.title,
  meta: [
    { name: 'description', content: page.data.seo_description },
    { property: 'og:title', content: page.data.seo_title || page.data.title },
    { property: 'og:description', content: page.data.seo_description },
    { property: 'og:image', content: page.data.seo_image?.url },
    { property: 'og:type', content: 'website' }
  ]
})
</script>
```

### Guide Page Component

Create `pages/guides/[...slug].vue`:

```vue
<template>
  <div class="guide-page">
    <article class="container mx-auto px-4 py-12">
      <header class="mb-12">
        <h1 class="text-4xl font-bold mb-4">{{ guide.data.title }}</h1>
        <p class="text-xl text-gray-600 mb-6">{{ guide.data.excerpt }}</p>
        <div class="flex items-center text-sm text-gray-500">
          <span>By {{ guide.data.author }}</span>
          <span class="mx-2">•</span>
          <span>{{ formatDate(guide.data.publish_date) }}</span>
          <span class="mx-2">•</span>
          <span>{{ guide.data.reading_time }} min read</span>
        </div>
      </header>

      <div v-if="guide.data.featured_image" class="mb-8">
        <PrismicImage 
          :field="guide.data.featured_image" 
          class="w-full rounded-lg"
        />
      </div>

      <div class="prose prose-lg max-w-none">
        <PrismicRichText :field="guide.data.content.introduction" />
      </div>

      <div v-for="slice in guide.data.content.sections" :key="slice.id">
        <component 
          :is="`slice-${slice.slice_type}`" 
          :slice="slice" 
        />
      </div>
    </article>
  </div>
</template>

<script setup>
const route = useRoute()
const { $prismic } = useNuxtApp()

// Fetch guide content
const { data: guide } = await $prismic.getByUID('guide', route.params.slug[0])

if (!guide) {
  throw createError({
    statusCode: 404,
    statusMessage: 'Guide not found'
  })
}

// SEO
useHead({
  title: guide.data.seo_title || guide.data.title,
  meta: [
    { name: 'description', content: guide.data.seo_description },
    { property: 'og:title', content: guide.data.seo_title || guide.data.title },
    { property: 'og:description', content: guide.data.seo_description },
    { property: 'og:image', content: guide.data.seo_image?.url || guide.data.featured_image?.url },
    { property: 'og:type', content: 'article' }
  ]
})

// Helper function
const formatDate = (date) => {
  return new Date(date).toLocaleDateString('da-DK')
}
</script>
```

## Step 7: Create Global Components

### Navigation Component

Update `components/Header.vue`:

```vue
<template>
  <header class="flex sticky top-0 mt-12 z-10 items-center bg-white h-20">
    <div class="container mx-auto items-center flex">
      <NuxtLink to="/">
        <PrismicImage 
          v-if="navigation?.data?.main_navigation?.logo"
          :field="navigation.data.main_navigation.logo"
          class="h-6"
        />
        <svg v-else class="h-6" viewBox="0 0 3564 303" fill="none">
          <!-- Your existing SVG logo -->
        </svg>
      </NuxtLink>

      <div class="ml-auto flex space-x-10 items-center">
        <Button 
          v-for="item in navigation?.data?.main_navigation?.menu_items"
          :key="item.label"
          :link="item.link"
          :kind="item.external ? 'external' : 'link'"
          class="text-lg"
        >
          {{ item.label }}
        </Button>
        
        <Button 
          v-if="navigation?.data?.main_navigation?.cta_button"
          :link="navigation.data.main_navigation.cta_button.cta_link"
          :kind="navigation.data.main_navigation.cta_button.cta_style"
        >
          {{ navigation.data.main_navigation.cta_button.cta_text }}
        </Button>
      </div>
    </div>
  </header>
</template>

<script setup>
const { $prismic } = useNuxtApp()

// Fetch navigation
const { data: navigation } = await $prismic.getSingle('navigation')
</script>
```

### Footer Component

Update `components/Footer.vue`:

```vue
<template>
  <footer class="bg-black py-12 px-4 lg:px-8 text-white">
    <div class="container mx-auto">
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
        <div>
          <h3 class="text-xl font-semibold mb-4">Om tilbudsskabelon.dk</h3>
          <div class="prose prose-invert">
            <PrismicRichText :field="navigation?.data?.footer_navigation?.footer_description" />
          </div>
        </div>
        
        <div v-for="column in navigation?.data?.footer_navigation?.footer_columns" :key="column.column_title">
          <h3 class="text-xl font-semibold mb-4">{{ column.column_title }}</h3>
          <ul class="text-gray-400">
            <li v-for="link in column.column_links" :key="link.link_text" class="mb-2">
              <a 
                :href="link.link_url" 
                :target="link.external_link ? '_blank' : '_self'"
                class="hover:text-white"
              >
                {{ link.link_text }}
              </a>
            </li>
          </ul>
        </div>
        
        <div>
          <h3 class="text-xl font-semibold mb-4">{{ navigation?.data?.footer_navigation?.contact_info?.contact_title }}</h3>
          <div class="text-gray-400">
            <p v-if="navigation?.data?.footer_navigation?.contact_info?.email" class="mb-2">
              Email: <a :href="`mailto:${navigation.data.footer_navigation.contact_info.email}`" class="hover:text-white">
                {{ navigation.data.footer_navigation.contact_info.email }}
              </a>
            </p>
            <p v-if="navigation?.data?.footer_navigation?.contact_info?.phone" class="mb-2">
              Telefon: {{ navigation.data.footer_navigation.contact_info.phone }}
            </p>
            <p v-if="navigation?.data?.footer_navigation?.contact_info?.address" class="mb-2">
              {{ navigation.data.footer_navigation.contact_info.address }}
            </p>
          </div>
        </div>
      </div>
      
      <div class="text-center text-gray-500">
        <p>{{ navigation?.data?.footer_navigation?.copyright_text }}</p>
      </div>
    </div>
  </footer>
</template>

<script setup>
const { $prismic } = useNuxtApp()

// Fetch navigation
const { data: navigation } = await $prismic.getSingle('navigation')
</script>
```

## Step 8: Create API Routes

### Global Settings API

Create `server/api/global-settings.get.ts`:

```typescript
export default defineEventHandler(async (event) => {
  const { $prismic } = useNuxtApp()
  
  try {
    const { data } = await $prismic.getSingle('global_settings')
    return data
  } catch (error) {
    throw createError({
      statusCode: 500,
      statusMessage: 'Failed to fetch global settings'
    })
  }
})
```

### Pages API

Create `server/api/pages/[uid].get.ts`:

```typescript
export default defineEventHandler(async (event) => {
  const { $prismic } = useNuxtApp()
  const uid = getRouterParam(event, 'uid')
  
  try {
    const { data } = await $prismic.getByUID('page', uid)
    return data
  } catch (error) {
    throw createError({
      statusCode: 404,
      statusMessage: 'Page not found'
    })
  }
})
```

## Step 9: Create Content

### Initial Content Setup

1. **Global Settings**: Create the global settings document with your site information
2. **Navigation**: Set up your main navigation and footer
3. **Home Page**: Create your homepage with hero, USP, and info sections
4. **Guides**: Create your existing guides (Perfect Quote, Handyman Quote)
5. **Quote Templates**: Set up your quote templates
6. **Testimonials**: Add customer testimonials
7. **FAQ**: Create FAQ sections

### Content Migration

1. **Existing Pages**: Migrate your current page content to Prismic
2. **Images**: Upload and optimize images in Prismic
3. **SEO**: Transfer SEO data to Prismic fields
4. **Navigation**: Update navigation structure

## Step 10: Testing and Optimization

### Testing Checklist

- [ ] All pages load correctly
- [ ] Navigation works properly
- [ ] Images display correctly
- [ ] SEO meta tags are present
- [ ] Forms function properly
- [ ] Mobile responsiveness
- [ ] Performance optimization

### Performance Optimization

1. **Image Optimization**: Use Prismic's image optimization
2. **Caching**: Implement proper caching strategies
3. **Lazy Loading**: Implement lazy loading for images
4. **Code Splitting**: Use dynamic imports for components

## Step 11: Go Live

### Deployment Checklist

- [ ] Update environment variables
- [ ] Configure Prismic webhooks
- [ ] Set up monitoring
- [ ] Test all functionality
- [ ] Update DNS settings
- [ ] Monitor performance

### Post-Launch

1. **Monitor Performance**: Track Core Web Vitals
2. **Content Updates**: Regular content updates
3. **SEO Monitoring**: Track search rankings
4. **User Feedback**: Collect and act on feedback
5. **Analytics**: Monitor user behavior

## Troubleshooting

### Common Issues

1. **Content Not Loading**: Check Prismic API configuration
2. **Images Not Displaying**: Verify image field configuration
3. **SEO Issues**: Ensure meta tags are properly configured
4. **Navigation Problems**: Check navigation content structure

### Support Resources

- [Prismic Documentation](https://prismic.io/docs)
- [Nuxt.js Documentation](https://nuxt.com/docs)
- [Prismic Community](https://community.prismic.io)

## Conclusion

This implementation guide provides a complete roadmap for integrating Prismic CMS with your Tilbudsskabelon.dk website. The structure is designed to be scalable, SEO-optimized, and user-friendly for content editors.

Follow each step carefully, test thoroughly, and you'll have a robust, maintainable content management system that can grow with your business needs.
