# 🏠 Home Custom Type - Forside Redigering

## ✅ **Ny Home Custom Type Oprettet**

Jeg har oprettet en dedikeret "Home" custom type der gør det muligt at redigere forsiden direkte i Prismic.

## 📁 **Struktur:**

### **Main Tab:**
- **Title**: Side titel
- **UID**: URL slug (automatisk "home")
- **Slices**: Alle tilgængelige slices til forsiden

### **SEO Tab:**
- **Meta Title**: SEO titel
- **Meta Description**: SEO beskrivelse  
- **Meta Image**: SEO billede (1200x630px)

## 🚀 **Sådan Bruger Du Det:**

### **1. Push Home Custom Type**
```bash
npm run slicemachine
```
Gå til http://localhost:9999 og push "Home" custom type.

### **2. Opret Home Document**
1. Gå til https://tilbudsskabelon.prismic.io
2. Klik "Create New" → "Home"
3. **UID**: "home" (automatisk)
4. **Title**: "Hjem"

### **3. Tilføj Slices til Forsiden**
I "Slices" sektionen kan du tilføje:
- **Hero**: Hovedbanner med titel og CTA
- **USP**: Unique Selling Points sektion
- **Info**: Informationssektion
- **Rich Text**: Fri tekst med formatering
- **CTA**: Call-to-Action knapper
- **Image**: Enkelt billede
- **Gallery**: Billedgalleri
- **Quote Form**: Tilbudsformular
- **Guide Listing**: Liste af guides
- **FAQ**: Ofte stillede spørgsmål
- **Testimonial**: Kundetilfredsheder
- **Contact Form**: Kontaktformular

### **4. SEO Indstillinger**
I "SEO" tabben:
- **Meta Title**: "GRATIS tilbudsskabelon til håndværkere og freelancere"
- **Meta Description**: Din SEO beskrivelse
- **Meta Image**: Upload SEO billede

### **5. Gem og Publish**
Klik "Save" og derefter "Publish"

## 🎯 **Resultat:**

- ✅ Forsiden (/) bruger nu Home custom type
- ✅ Du kan redigere alle sektioner i Prismic
- ✅ SEO indstillinger styres fra Prismic
- ✅ Fallback til statiske komponenter hvis ingen Prismic data

## 🔄 **Live Updates:**

Når du ændrer indhold i Prismic:
1. **Gem** ændringerne
2. **Publish** dokumentet
3. **Refresh** http://localhost:3000
4. Ændringerne vises med det samme!

## 📋 **Eksempel Setup:**

**Slices rækkefølge:**
1. **Hero** - Velkomstbanner
2. **USP** - Hvorfor vælge os
3. **Info** - Hvordan det virker
4. **Quote Form** - Tilbudsgenerator
5. **Testimonial** - Kundetilfredsheder

Din forside er nu fuldt redigerbar via Prismic! 🎉
