import { createClient } from '@prismicio/client'

export const usePrismicData = () => {
  const client = createClient('tilbudsskabelon')

  const getGlobalSettings = async () => {
    try {
      const settings = await client.getSingle('global_settings')
      return settings.data
    } catch (error) {
      console.warn('No Global Settings found in Prismic. This is normal if no Global Settings document has been created yet.')
      return null
    }
  }

  const getHomePage = async () => {
    try {
      const home = await client.getSingle('home')
      return home.data
    } catch (error) {
      console.warn('No Home page found in Prismic. This is normal if no Home document has been created yet.')
      return null
    }
  }

  const getPage = async (uid: string) => {
    try {
      const page = await client.getByUID('page', uid)
      return page.data
    } catch (error) {
      console.warn(`No page found with UID: ${uid}. This is normal if no pages have been created in Prismic yet.`)
      return null
    }
  }

  const getGuide = async (uid: string) => {
    try {
      const guide = await client.getByUID('guide', uid)
      return guide.data
    } catch (error) {
      console.warn(`No guide found with UID: ${uid}. This is normal if no guides have been created in Prismic yet.`)
      return null
    }
  }

  const getGuides = async (category?: string) => {
    try {
      const guides = await client.getAllByType('guide', {
        orderings: [{ field: 'my.guide.publication_date', direction: 'desc' }]
      })
      
      if (category) {
        return guides.filter(guide => guide.data.category === category)
      }
      
      return guides
    } catch (error) {
      console.warn('No guides found in Prismic. This is normal if no guides have been created yet.')
      return []
    }
  }

  const getNavigation = async () => {
    try {
      const navigation = await client.getSingle('navigation')
      return navigation.data
    } catch (error) {
      console.error('Error fetching navigation:', error)
      return null
    }
  }

  const getQuoteTemplates = async () => {
    try {
      const templates = await client.getAllByType('quote_template')
      return templates
    } catch (error) {
      console.error('Error fetching quote templates:', error)
      return []
    }
  }

  const getTestimonials = async () => {
    try {
      const testimonials = await client.getAllByType('testimonial')
      return testimonials
    } catch (error) {
      console.error('Error fetching testimonials:', error)
      return []
    }
  }

  const getFAQs = async () => {
    try {
      const faqs = await client.getAllByType('faq')
      return faqs
    } catch (error) {
      console.error('Error fetching FAQs:', error)
      return []
    }
  }

  return {
    client,
    getGlobalSettings,
    getHomePage,
    getPage,
    getGuide,
    getGuides,
    getNavigation,
    getQuoteTemplates,
    getTestimonials,
    getFAQs
  }
}
