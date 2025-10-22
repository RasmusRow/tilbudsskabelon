import { PrismicImage, PrismicRichText, PrismicLink, SliceZone } from '@prismicio/vue'

export default defineNuxtPlugin((nuxtApp) => {
  // Register Prismic Vue components globally
  nuxtApp.vueApp.component('PrismicImage', PrismicImage)
  nuxtApp.vueApp.component('PrismicRichText', PrismicRichText)
  nuxtApp.vueApp.component('PrismicLink', PrismicLink)
  nuxtApp.vueApp.component('PrismicSliceZone', SliceZone)
})
