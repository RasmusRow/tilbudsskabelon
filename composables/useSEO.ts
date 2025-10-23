import { usePrismicData } from './usePrismic'

export const useSEO = () => {
  const { getGlobalSettings } = usePrismicData()

  const getSEOData = async (pageData?: any, pageType?: 'home' | 'page' | 'blog-post') => {
    // Fetch global settings for fallback with unique key - use a more specific key
    const { data: globalSettings } = await useAsyncData(`global-settings-seo-${pageType || 'default'}`, () => getGlobalSettings())
    console.log('globalSettings for', pageType, ':', globalSettings.value)
    // Extract SEO data from page - check both direct and nested seo object
    const pageTitle = pageData?.seo?.meta_title || pageData?.meta_title 
    const pageDescription = pageData?.seo?.meta_description || pageData?.meta_description
    const pageImage = pageData?.seo?.meta_image || pageData?.meta_image

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

    console.log('SEO Data:', {
      pageTitle,
      pageDescription,
      pageImage,
      globalSettings: globalSettings.value,
      finalTitle: seoTitle,
      finalDescription: seoDescription,
      finalImage: seoImage
    })

    // Generate canonical URL safely
    const route = useRoute()
    const canonicalUrl = `https://tilbudsskabelon.dk${route.path}`

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
    try {
      console.log('Setting SEO for page type:', pageType, 'with data:', pageData)
      const seoData = await getSEOData(pageData, pageType)
      
      if (!seoData) {
        console.warn('No SEO data generated, using fallback')
        useSeoMeta({
          title: 'Tilbudsskabelon.dk',
          description: 'Professional quote templates for Danish businesses'
        })
        return null
      }

      console.log('Setting SEO meta with:', seoData)

      // Use useSeoMeta for better SSR compatibility
      useSeoMeta({
        title: seoData.title,
        description: seoData.description,
        ogTitle: seoData.title,
        ogDescription: seoData.description,
        ogType: seoData.type as 'article' | 'website',
        ogUrl: seoData.canonicalUrl,
        ogImage: seoData.image,
        ogLocale: seoData.locale,
        ogSiteName: seoData.siteName,
        twitterCard: 'summary_large_image',
        twitterTitle: seoData.title,
        twitterDescription: seoData.description,
        twitterImage: seoData.image,
        keywords: 'tilbudsskabelon, tilbud, faktura, virksomhed, generer tilbud, nem tilbudsskabelon',
        author: 'Tilbudsskabelon Team',
        robots: 'index,follow',
        themeColor: '#ffffff',
        msapplicationTileColor: '#ffffff'
      })

      // Set canonical URL separately
      useHead({
        link: [
          { rel: 'canonical', href: seoData.canonicalUrl }
        ]
      })

      return seoData
    } catch (error) {
      console.error('SEO setup error:', error)
      // Fallback to basic SEO
      useSeoMeta({
        title: 'Tilbudsskabelon.dk',
        description: 'Professional quote templates for Danish businesses'
      })
      return null
    }
  }

  return {
    getSEOData,
    generateMetaTags,
    setPageSEO
  }
}
