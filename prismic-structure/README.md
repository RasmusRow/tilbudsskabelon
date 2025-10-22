# Prismic CMS Structure Documentation
## Tilbudsskabelon.dk - Professional Quote Template Platform

This documentation provides a comprehensive overview of the Prismic CMS structure designed for the Danish quote template website. The structure is built to be scalable, SEO-optimized, and user-friendly for content editors.

## Table of Contents
1. [Overview](#overview)
2. [Content Types](#content-types)
3. [Slices and Components](#slices-and-components)
4. [SEO Structure](#seo-structure)
5. [Content Management Guidelines](#content-management-guidelines)
6. [Implementation Notes](#implementation-notes)

## Overview

The Prismic structure is designed to support:
- **Scalable content management** for pages, guides, and templates
- **Comprehensive SEO optimization** with dedicated SEO tabs
- **Rich text editing** with image support and formatting options
- **Flexible page building** using slice-based architecture
- **Multi-language support** (currently Danish, expandable to English)
- **Global settings management** for site-wide configuration

## Content Types

### 1. Global Settings (`global_settings`)
**Purpose**: Site-wide configuration and settings
**Icon**: Settings
**Tabs**: Content, SEO, Social Media, Analytics, Legal

**Key Fields**:
- Site title, description, and branding
- Logo and favicon management
- Color scheme configuration
- Contact information
- SEO defaults
- Analytics tracking codes
- Social media links
- Legal documents (Privacy Policy, Terms of Service, Cookie Policy)

**Usage**: Single document that controls global site settings. Update once to affect entire site.

### 2. Page (`page`)
**Purpose**: Standard pages with flexible content blocks
**Icon**: File
**Tabs**: Content, SEO, Navigation

**Key Fields**:
- Page title and URL slug
- Flexible content using SliceZone
- SEO optimization fields
- Navigation settings

**Available Slices**:
- Hero Section
- USP (Unique Selling Points)
- Info Section
- Rich Text
- Call to Action
- Image and Gallery
- Quote Form
- Guide Listing
- FAQ
- Testimonial
- Contact Form

**Usage**: Create pages like Home, About, Contact, Services, etc.

### 3. Guide (`guide`)
**Purpose**: Detailed guide articles with rich content
**Icon**: Book
**Tabs**: Content, SEO, Settings

**Key Fields**:
- Guide title, excerpt, and metadata
- Author and publication information
- Category and difficulty level
- Rich content sections
- SEO optimization

**Content Sections**:
- Text sections with headings
- Image with text
- Step-by-step instructions
- Tips lists
- Warnings and important notices
- Code examples
- Quotes and testimonials
- Call-to-action sections

**Usage**: Create comprehensive guides like "How to Write the Perfect Quote" or "Handyman Quote Best Practices".

### 4. Navigation (`navigation`)
**Purpose**: Site navigation configuration
**Icon**: Navigation
**Tabs**: Content, Settings

**Key Fields**:
- Main navigation menu
- Footer navigation
- Logo and branding
- Social media links
- Contact information

**Usage**: Configure site navigation, menus, and footer content.

### 5. Quote Template (`quote_template`)
**Purpose**: Predefined quote templates for different industries
**Icon**: Description
**Tabs**: Content, Form Fields, SEO

**Key Fields**:
- Template configuration
- Form field definitions
- Industry categorization
- Default terms and settings
- SEO optimization

**Usage**: Create industry-specific quote templates (Handyman, Construction, Consulting, etc.).

### 6. Testimonial (`testimonial`)
**Purpose**: Customer testimonials and reviews
**Icon**: Format Quote
**Tabs**: Content, Author, Settings

**Key Fields**:
- Testimonial quote
- Author information
- Company details
- Rating and industry
- Publication status

**Usage**: Collect and display customer testimonials across the site.

### 7. FAQ (`faq`)
**Purpose**: Frequently Asked Questions
**Icon**: Help
**Tabs**: Content, Settings

**Key Fields**:
- Question and answer
- Category and tags
- Display order
- Publication status

**Usage**: Create FAQ sections for different topics and pages.

### 8. Blog Post (`blog_post`)
**Purpose**: Blog articles and news posts
**Icon**: Article
**Tabs**: Content, SEO, Settings

**Key Fields**:
- Blog content with rich text
- Author assignment
- Category and tags
- SEO optimization
- Publication status

**Usage**: Create blog posts for content marketing and updates.

### 9. Team Member (`team_member`)
**Purpose**: Team member profiles
**Icon**: Person
**Tabs**: Content, Social Media, Settings

**Key Fields**:
- Personal information
- Bio and skills
- Social media links
- Department and status

**Usage**: Create team member profiles for About page and team sections.

### 10. Pricing Plan (`pricing_plan`)
**Purpose**: Pricing plans and packages
**Icon**: Attach Money
**Tabs**: Content, Features, Settings

**Key Fields**:
- Plan details and pricing
- Feature lists
- Call-to-action configuration
- Status and ordering

**Usage**: Create pricing plans for different service tiers.

### 11. Contact Form (`contact_form`)
**Purpose**: Contact form configurations
**Icon**: Contact Mail
**Tabs**: Content, Form Fields, Settings

**Key Fields**:
- Form configuration
- Field definitions
- Email settings
- Validation rules

**Usage**: Create different contact forms for various purposes.

## Slices and Components

### Hero Slice
**Purpose**: Eye-catching banner sections
**Fields**: Title, subtitle, background image, CTA button, styling options

### USP Slice
**Purpose**: Unique selling points grid
**Fields**: Icon, title, description (repeatable)

### Info Slice
**Purpose**: Information sections with text and images
**Fields**: Title, content, image, image position

### Rich Text Slice
**Purpose**: Formatted text content
**Fields**: Rich text content with full formatting options

### CTA Slice
**Purpose**: Call-to-action sections
**Fields**: Title, subtitle, button text/link, styling options

### Image Slice
**Purpose**: Single images with captions
**Fields**: Image, caption, alignment

### Gallery Slice
**Purpose**: Image galleries
**Fields**: Multiple images with captions (repeatable)

### Quote Form Slice
**Purpose**: Quote generation form
**Fields**: Form title, subtitle, success message

### Guide Listing Slice
**Purpose**: Lists of guides/tips
**Fields**: Section title, subtitle, guide selection (repeatable)

### FAQ Slice
**Purpose**: FAQ sections
**Fields**: Section title, questions/answers (repeatable)

### Testimonial Slice
**Purpose**: Customer testimonials
**Fields**: Quote, author info, company details, styling

### Contact Form Slice
**Purpose**: Contact forms
**Fields**: Form title, subtitle, success message

## SEO Structure

### SEO Fields Available on All Content Types
- **SEO Title**: Optimized title for search engines
- **SEO Description**: Meta description for search results
- **SEO Image**: Social media and search result image
- **SEO Keywords**: Relevant keywords for the content
- **Canonical URL**: Canonical URL for duplicate content
- **No Index**: Option to prevent search engine indexing

### SEO Best Practices
1. **Title Tags**: Keep under 60 characters, include primary keyword
2. **Meta Descriptions**: 150-160 characters, compelling and descriptive
3. **Images**: Use descriptive alt text and proper dimensions
4. **Keywords**: Focus on 2-3 primary keywords per page
5. **Canonical URLs**: Use for duplicate or similar content

## Content Management Guidelines

### For Content Editors

#### Creating Pages
1. Start with a clear page title and URL slug
2. Use the Hero slice for impactful introductions
3. Add relevant content slices in logical order
4. Optimize SEO fields for each page
5. Test navigation and user experience

#### Creating Guides
1. Write compelling titles and excerpts
2. Use appropriate categories and difficulty levels
3. Structure content with clear headings
4. Include relevant images and examples
5. Add call-to-action sections where appropriate
6. Optimize for SEO with relevant keywords

#### Managing Navigation
1. Keep main navigation simple (5-7 items max)
2. Use clear, descriptive labels
3. Organize footer links by category
4. Update contact information regularly
5. Test all links and external URLs

#### SEO Optimization
1. Research keywords before writing content
2. Use keywords naturally in titles and content
3. Write compelling meta descriptions
4. Optimize images with descriptive alt text
5. Use internal linking to related content
6. Monitor and update content regularly

### For Developers

#### Implementation Notes
1. **Slice Rendering**: Each slice should have a corresponding Vue component
2. **SEO Integration**: Use Prismic's SEO fields in Nuxt head configuration
3. **Image Optimization**: Implement responsive images with proper sizing
4. **Rich Text**: Use Prismic's rich text renderer for formatted content
5. **Navigation**: Build dynamic navigation from Prismic content
6. **Forms**: Implement form handling with validation and email sending

#### Technical Considerations
- Use Prismic's preview mode for content editing
- Implement proper error handling for missing content
- Use TypeScript for type safety with Prismic content
- Implement caching for better performance
- Use Prismic's webhook system for content updates

## Implementation Notes

### Prismic Configuration
```typescript
// nuxt.config.ts
export default defineNuxtConfig({
  modules: ['@nuxtjs/prismic'],
  prismic: {
    endpoint: 'your-repository-name',
    preview: '/preview'
  }
})
```

### Content Fetching
```typescript
// Example content fetching
const { data: page } = await $fetch('/api/prismic/page', {
  params: { uid: 'home' }
})
```

### SEO Integration
```typescript
// SEO head configuration
useHead({
  title: page.data.seo_title || page.data.title,
  meta: [
    { name: 'description', content: page.data.seo_description },
    { property: 'og:title', content: page.data.seo_title },
    { property: 'og:description', content: page.data.seo_description },
    { property: 'og:image', content: page.data.seo_image?.url }
  ]
})
```

### Slice Rendering
```vue
<!-- Slice rendering example -->
<template>
  <div v-for="slice in page.data.content" :key="slice.id">
    <component 
      :is="`slice-${slice.slice_type}`" 
      :slice="slice" 
    />
  </div>
</template>
```

## Conclusion

This Prismic structure provides a comprehensive, scalable foundation for the Tilbudsskabelon.dk website. It supports:

- **Flexible content management** with slice-based page building
- **Comprehensive SEO optimization** with dedicated fields and tabs
- **Rich content creation** with advanced formatting options
- **Scalable architecture** for future growth and features
- **User-friendly interface** for content editors
- **Developer-friendly** implementation with clear documentation

The structure is designed to grow with your business needs while maintaining consistency and SEO best practices. Regular content updates and SEO optimization will help improve search rankings and user engagement.

For technical implementation, refer to the Prismic documentation and ensure proper integration with your Nuxt.js application.
