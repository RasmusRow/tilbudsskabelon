# Global Settings Custom Type - Opdateret Struktur

## 🎯 **Overview**

Global Settings custom type er nu opdateret til at matche Header og Footer komponenternes HTML struktur med dedikerede tabs for forskellige sektioner.

## 📋 **Tab Struktur**

### **1. Header Tab**
- **Logo**: Header logo med thumbnail support
- **Menu Items**: Repeatable group med:
  - Label (tekst)
  - Link (Prismic Link field)

### **2. Footer Tab**
- **About Section**:
  - About Title (tekst)
  - About Description (rich text)
- **Quick Links Section**:
  - Quick Links Title (tekst)
  - Quick Links (repeatable group med label og link)
- **Contact Section**:
  - Contact Title (tekst)
  - Contact Email (tekst)
  - Contact Phone (tekst)
  - Company Address (tekst)
- **Copyright Text** (tekst)

### **3. SEO Tab**
- **Site Title** (tekst)
- **Site Description** (tekst)
- **Default SEO Title** (tekst)
- **Default SEO Description** (tekst)
- **Default SEO Image** (billede)
- **Favicon** (billede)

### **4. Social Tab**
- **Facebook URL** (tekst)
- **LinkedIn URL** (tekst)
- **Twitter URL** (tekst)
- **Instagram URL** (tekst)

### **5. Analytics Tab**
- **Google Analytics ID** (tekst)
- **Google Tag Manager ID** (tekst)
- **Facebook Pixel ID** (tekst)

### **6. Legal Tab**
- **Privacy Policy** (rich text)
- **Terms of Service** (rich text)
- **Cookie Policy** (rich text)

## 🔧 **Komponent Opdateringer**

### **Header.vue**
- Bruger nu `globalSettings.header.logo` for logo
- Bruger nu `globalSettings.header.menu_items` for navigation
- Fallback til SVG logo hvis ingen Prismic logo

### **Footer.vue**
- Bruger nu `globalSettings.footer.*` for alle footer indhold
- Fallback til statisk indhold hvis ingen Prismic data
- Support for PrismicRichText og PrismicLink komponenter

### **app.vue**
- Bruger nu `globalSettings.analytics.google_analytics_id` for GA
- Bruger nu `globalSettings.seo.site_title` og `site_description` for meta tags

## 📝 **Data Struktur Eksempel**

```json
{
  "header": {
    "logo": { "url": "...", "alt": "Logo" },
    "menu_items": [
      { "label": "Hjem", "link": { "url": "/" } },
      { "label": "Tips", "link": { "url": "/tips-og-gode-raad" } },
      { "label": "Lav tilbud", "link": { "url": "/lav-tilbud" } }
    ]
  },
  "footer": {
    "about_title": "Om tilbudsskabelon.dk",
    "about_description": [...],
    "quick_links_title": "Hurtige links",
    "quick_links": [
      { "label": "Hjem", "link": { "url": "/" } },
      { "label": "Tips", "link": { "url": "/tips-og-gode-raad" } }
    ],
    "contact_title": "Kontakt os",
    "contact_email": "support@tilbudsskabelon.dk",
    "contact_phone": "+45 12345678",
    "company_address": "Company Street 123, 2100 Copenhagen",
    "copyright_text": "© 2024 Tilbudsskabelon.dk. Alle rettigheder forbeholdes."
  },
  "seo": {
    "site_title": "Tilbudsskabelon.dk",
    "site_description": "Professional quote templates",
    "default_seo_title": "Tilbudsskabelon.dk - Professional Quote Templates",
    "default_seo_description": "Create professional quotes quickly and easily",
    "default_seo_image": { "url": "...", "alt": "SEO Image" },
    "favicon": { "url": "...", "alt": "Favicon" }
  },
  "analytics": {
    "google_analytics_id": "G-KYEV6WW3GJ",
    "google_tag_manager_id": "GTM-XXXXXXX",
    "facebook_pixel_id": "123456789012345"
  }
}
```

## 🚀 **Næste Skridt**

1. **Push til Prismic**: Upload den opdaterede Global Settings custom type
2. **Opret indhold**: Udfyld alle tabs med relevante data
3. **Test komponenter**: Verificer at Header og Footer viser korrekt indhold
4. **Fallback test**: Test at fallback indhold vises når Prismic data mangler

## ✅ **Benefits**

- **Struktureret**: Klar separation mellem forskellige sektioner
- **Fleksibel**: Nemt at tilføje nye felter til hver tab
- **Fallback**: Robust fallback system hvis Prismic data mangler
- **SEO-optimeret**: Dedikerede SEO felter med fallback
- **Bruger-venlig**: Intuitiv tab struktur i Prismic UI
