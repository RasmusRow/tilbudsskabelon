# Prismic Integration Guide

## 🎯 **Overview**

Din Nuxt.js app er nu fuldt integreret med Prismic CMS og bruger ikke længere Firebase. Alt indhold hentes nu fra Prismic.

## 🚀 **What's Been Updated**

### **✅ Removed Firebase:**
- Firebase dependencies fjernet fra package.json
- Firebase runtime config fjernet fra nuxt.config.ts
- Firebase plugin fjernet

### **✅ Added Prismic Integration:**
- Prismic client og Vue dependencies tilføjet
- Prismic composable oprettet (`composables/usePrismic.ts`)
- App.vue opdateret til at hente globale indstillinger
- Header komponent opdateret til at bruge Prismic navigation
- Index page opdateret til at bruge Prismic slices
- Tips page opdateret til at hente guides fra Prismic
- Dynamisk guide page oprettet (`[uid].vue`)

## 📁 **File Structure**

```
tilbudsskabelon/
├── composables/
│   └── usePrismic.ts          # Prismic data fetching
├── slices/                    # Prismic slices
│   ├── HeroSlice/
│   ├── USP/
│   ├── Info/
│   └── ...
├── customtypes/               # Prismic content types
│   ├── global-settings/
│   ├── page/
│   ├── guide/
│   └── ...
├── pages/
│   ├── index.vue              # Homepage with Prismic slices
│   ├── tips-og-gode-raad/
│   │   ├── index.vue          # Guide listing from Prismic
│   │   └── [uid].vue          # Dynamic guide pages
│   └── ...
└── components/
    ├── Header.vue             # Navigation from Prismic
    └── ...
```

## 🔧 **Prismic Composable**

`composables/usePrismic.ts` indeholder alle funktioner til at hente data fra Prismic:

```typescript
const { 
  getGlobalSettings,
  getPage,
  getGuide,
  getGuides,
  getNavigation,
  getQuoteTemplates,
  getTestimonials,
  getFAQs
} = usePrismic()
```

## 📋 **Next Steps**

### **1. Install Dependencies**
```bash
npm install
```

### **2. Push to Prismic**
- Åbn Slice Machine UI (`http://localhost:9999`)
- Push alle slices og custom types
- Opret indhold i Prismic

### **3. Create Content**
- **Global Settings**: Site-wide indstillinger
- **Homepage**: Opret en "home" page med slices
- **Guides**: Opret guide artikler
- **Navigation**: Konfigurer navigation

### **4. Test Integration**
```bash
npm run dev
```

## 🎨 **Content Types Available**

- **Global Settings**: Site-wide konfiguration
- **Page**: Fleksible sider med slices
- **Guide**: Guide artikler med rich content
- **Navigation**: Navigation konfiguration
- **Quote Template**: Quote skabeloner
- **Testimonial**: Kundetilfredsheder
- **FAQ**: Ofte stillede spørgsmål
- **Blog Post**: Blog artikler
- **Team Member**: Team medlemmer
- **Pricing Plan**: Prisplaner
- **Contact Form**: Kontaktformularer

## 🔄 **Slices Available**

- **Hero**: Hero banners med CTA
- **USP**: Unique selling points
- **Info**: Informationssektioner
- **RichText**: Rich text indhold
- **CTA**: Call-to-action sektioner
- **Image**: Enkeltstående billeder
- **Gallery**: Billedgallerier
- **QuoteForm**: Quote formularer
- **GuideListing**: Guide lister
- **FAQ**: FAQ sektioner
- **Testimonial**: Kundetilfredsheder
- **ContactForm**: Kontaktformularer

## 🚨 **Important Notes**

1. **Fallback Content**: Appen har fallback indhold hvis Prismic data ikke er tilgængelig
2. **SEO**: Alle sider bruger Prismic SEO felter med fallback
3. **Dynamic Routes**: Guide sider bruger dynamiske routes baseret på UID
4. **Image Optimization**: PrismicImage komponent bruges til optimerede billeder

## 🎉 **Benefits**

- **Content Management**: Nem indholdsredigering i Prismic
- **SEO Optimization**: Dedikerede SEO felter på alle indholdstyper
- **Flexible Layout**: Slices giver fleksibel sidebygning
- **Scalable**: Nemt at tilføje nye indholdstyper og slices
- **Performance**: Optimerede billeder og caching

Din app er nu klar til at bruge Prismic som CMS! 🚀
