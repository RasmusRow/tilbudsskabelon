import { defineSliceZoneComponents } from '@prismicio/vue'

export default defineSliceZoneComponents({
  hero: () => import('./HeroSlice.vue'),
  usp: () => import('./USP.vue'),
  info: () => import('./Info.vue'),
  rich_text: () => import('./RichText.vue'),
  cta: () => import('./CTA.vue'),
  image: () => import('./Image.vue'),
  gallery: () => import('./Gallery.vue'),
  quote_form: () => import('./QuoteForm.vue'),
  guide_listing: () => import('./GuideListing.vue'),
  faq: () => import('./FAQ.vue'),
  testimonial: () => import('./Testimonial.vue'),
  contact_form: () => import('./ContactForm.vue')
})
