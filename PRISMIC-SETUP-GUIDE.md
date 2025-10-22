# Prismic Setup Guide - Trin for Trin

## 🎯 **Status**

Din Nuxt.js app er fuldt integreret med Prismic og klar til at modtage data. Komponenterne (Header, Footer) vil automatisk vise Prismic data når det er tilgængeligt.

## ✅ **Hvad der allerede virker:**

1. **Header Komponent** - Konfigureret til at vise:
   - Logo fra `globalSettings.header.logo`
   - Navigation menu fra `globalSettings.header.menu_items`
   - Fallback til SVG logo hvis ingen Prismic data

2. **Footer Komponent** - Konfigureret til at vise:
   - About sektion fra `globalSettings.footer.about_title` og `about_description`
   - Quick Links fra `globalSettings.footer.quick_links`
   - Contact info fra `globalSettings.footer.contact_*`
   - Copyright fra `globalSettings.footer.copyright_text`
   - Fallback til statisk indhold hvis ingen Prismic data

3. **App.vue** - Konfigureret til at vise:
   - Google Analytics ID fra `globalSettings.analytics.google_analytics_id`
   - Site title fra `globalSettings.seo.site_title`
   - Site description fra `globalSettings.seo.site_description`

## 🚀 **Næste Skridt:**

### **1. Åbn Slice Machine UI**
```bash
npm run slicemachine
```
Åbn http://localhost:9999

### **2. Push Custom Types til Prismic**
1. Gå til "Changes" i Slice Machine UI
2. Klik på "Push to Prismic" for alle custom types
3. Bekræft at de er pushed

### **3. Push Slices til Prismic**
1. Gå til "Changes" i Slice Machine UI
2. Klik på "Push to Prismic" for alle slices
3. Bekræft at de er pushed

### **4. Opret Global Settings i Prismic**
1. Log ind på https://tilbudsskabelon.prismic.io
2. Gå til "Documents"
3. Klik på "Create New" → "Global Settings"
4. Udfyld alle tabs:

#### **Header Tab:**
- **Logo**: Upload dit logo billede
- **Menu Items**: Tilføj menu punkter:
  - Label: "Hjem", Link: "/"
  - Label: "Tips & gode råd", Link: "/tips-og-gode-raad"
  - Label: "Lav et tilbud", Link: "/lav-tilbud"

#### **Footer Tab:**
- **About Title**: "Om tilbudsskabelon.dk"
- **About Description**: Din beskrivelse
- **Quick Links Title**: "Hurtige links"
- **Quick Links**: Tilføj links (samme som header)
- **Contact Title**: "Kontakt os"
- **Contact Email**: "support@tilbudsskabelon.dk"
- **Contact Phone**: "+45 12345678"
- **Company Address**: "Din adresse"
- **Copyright Text**: "© 2024 Tilbudsskabelon.dk. Alle rettigheder forbeholdes."

#### **SEO Tab:**
- **Site Title**: "Tilbudsskabelon.dk"
- **Site Description**: "Professional quote templates for Danish businesses"
- **Default SEO Title**: "Tilbudsskabelon.dk - Professional Quote Templates"
- **Default SEO Description**: "Create professional quotes quickly and easily"
- **Default SEO Image**: Upload SEO billede (1200x630px)
- **Favicon**: Upload favicon (32x32px)

#### **Social Tab:**
- Udfyld social media links

#### **Analytics Tab:**
- **Google Analytics ID**: "G-KYEV6WW3GJ"
- Udfyld andre tracking koder

5. Klik på "Save" og derefter "Publish"

### **5. Test Integrationen**
1. Gå til http://localhost:3000
2. Tjek at:
   - Dit logo vises i headeren
   - Navigation menu vises korrekt
   - Footer viser din about beskrivelse
   - Quick links virker
   - Contact info vises

## 🎨 **Sådan virker det:**

### **Header Integration:**
```vue
<PrismicImage 
  v-if="globalSettings?.header?.logo"
  :field="globalSettings.header.logo"
  class="h-6"
/>
```
Når du uploader et logo i Prismic Header tab, vises det automatisk her.

### **Footer Integration:**
```vue
<h3>{{ globalSettings?.footer?.about_title || 'Om tilbudsskabelon.dk' }}</h3>
<PrismicRichText 
  v-if="globalSettings?.footer?.about_description"
  :field="globalSettings.footer.about_description"
/>
```
Når du udfylder Footer tab i Prismic, vises indholdet automatisk her.

## ⚡ **Live Updates:**

Når du ændrer indhold i Prismic:
1. Gem og publish ændringerne
2. Refresh din browser
3. Nye data vises automatisk!

## 🔍 **Debug:**

Hvis data ikke vises:
1. Tjek browser console for fejl
2. Verificer at Global Settings er published i Prismic
3. Tjek at field names matcher (f.eks. `logo`, `menu_items`, etc.)

## ✅ **Færdig!**

Din Prismic integration er klar! Alle komponenter vil automatisk vise Prismic data når det er tilgængeligt, og falde tilbage til fallback data hvis Prismic data mangler.

**Næste gang du vil ændre header eller footer:**
1. Gå til Prismic
2. Find Global Settings document
3. Rediger de relevante tabs
4. Gem og publish
5. Refresh din browser

Det er så simpelt! 🎉
