import { usePrismicData } from './usePrismic'

export const useSEO = () => {
  const { getGlobalSettings } = usePrismicData()

  const getSEOData = async (pageData?: any, pageType?: 'home' | 'page' | 'blog-post') => {
    // Fetch global settings for fallback
    const { data: globalSettings } = await useAsyncData('global-settings-seo', () => getGlobalSettings())
    
    // Extract SEO data from page
    const pageTitle = pageData?.meta_title || pageData?.title
    const pageDescription = pageData?.meta_description || pageData?.excerpt
    const pageImage = pageData?.meta_image || pageData?.featured_image

    // Fallback hierarchy: Page specific -> Global Settings -> Hardcoded defaults
    const seoTitle = pageTitle || 
                    globalSettings.value?.seo?.default_seo_title || 
                    globalSettings.value?.seo?.site_title || 
                    'Tilbudsskabelon.dk'

    const seoDescription = pageDescription || 
                          globalSettings.value?.seo?.default_seo_description || 
                          globalSettings.value?.seo?.site_description || 
                          'Professional quote templates for Danish businesses'

    const seoImage = pageImage?.url || 
                    globalSettings.value?.seo?.default_seo_image?.url || 
                    '/images/seo-cover.png'

    // Generate canonical URL
    const canonicalUrl = `https://tilbudsskabelon.dk${useRoute().path}`

    return {
      title: seoTitle,
      description: seoDescription,
      image: seoImage,
      canonicalUrl,
      siteName: globalSettings.value?.seo?.site_title || 'Tilbudsskabelon.dk',
      locale: 'da_DK',
      type: pageType === 'blog-post' ? 'article' : 'website'
    }
  }

  const generateMetaTags = (seoData: any) => {
    return [
      // Basic meta tags
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: seoData.description },
      { name: 'keywords', content: 'tilbudsskabelon, tilbud, faktura, virksomhed, generer tilbud, nem tilbudsskabelon' },
      { name: 'author', content: 'Tilbudsskabelon Team' },
      { name: 'robots', content: 'index,follow' },
      
      // Canonical URL
      { rel: 'canonical', href: seoData.canonicalUrl },
      
      // Open Graph tags
      { property: 'og:title', content: seoData.title },
      { property: 'og:description', content: seoData.description },
      { property: 'og:type', content: seoData.type },
      { property: 'og:url', content: seoData.canonicalUrl },
      { property: 'og:image', content: seoData.image },
      { property: 'og:locale', content: seoData.locale },
      { property: 'og:site_name', content: seoData.siteName },
      
      // Twitter Card tags
      { property: 'twitter:card', content: 'summary_large_image' },
      { property: 'twitter:title', content: seoData.title },
      { property: 'twitter:description', content: seoData.description },
      { property: 'twitter:image', content: seoData.image },
      
      // Additional meta tags for better SEO
      { name: 'theme-color', content: '#ffffff' },
      { name: 'msapplication-TileColor', content: '#ffffff' },
    ]
  }

  const setPageSEO = async (pageData?: any, pageType?: 'home' | 'page' | 'blog-post') => {
    const seoData = await getSEOData(pageData, pageType)
    const metaTags = generateMetaTags(seoData)

    useHead({
      title: seoData.title,
      meta: metaTags,
      link: [
        { rel: 'canonical', href: seoData.canonicalUrl }
      ]
    })

    return seoData
  }

  return {
    getSEOData,
    generateMetaTags,
    setPageSEO
  }
}
