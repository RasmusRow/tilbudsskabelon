# Push Prismic Struktur - Step by Step Guide

## 🚀 **Nu er alt klar til at blive pushet!**

### **Step 1: Åbn Slice Machine UI**
```
http://localhost:9999
```

### **Step 2: Push Custom Types (11 styk)**
1. Gå til **Custom Types** sektionen
2. Klik **Import** for hver fil i `customtypes/` mappen:

**Importér i denne rækkefølge:**
1. `global-settings.json` - Site-wide indstillinger
2. `page.json` - Standard sider
3. `guide.json` - Guide artikler
4. `navigation.json` - Navigation konfiguration
5. `quote-template.json` - Quote skabeloner
6. `testimonial.json` - Kundetilfredsheder
7. `faq.json` - Ofte stillede spørgsmål
8. `blog-post.json` - Blog artikler
9. `team-member.json` - Team medlemmer
10. `pricing-plan.json` - Prisplaner
11. `contact-form.json` - Kontaktformularer

### **Step 3: Push Slices (12 styk)**
1. Gå til **Slices** sektionen
2. Klik **Push** for hver slice:

**Push i denne rækkefølge:**
1. `HeroSlice` - Hero banners
2. `USP` - Unique Selling Points
3. `Info` - Informationssektioner
4. `RichText` - Rich text indhold
5. `CTA` - Call-to-action sektioner
6. `Image` - Enkeltstående billeder
7. `Gallery` - Billedgallerier
8. `QuoteForm` - Quote formularer
9. `GuideListing` - Guide lister
10. `FAQ` - FAQ sektioner
11. `Testimonial` - Kundetilfredsheder
12. `ContactForm` - Kontaktformularer

### **Step 4: Push til Repository**
1. Klik på **Push to repository** knappen
2. Vent på at synkroniseringen er færdig
3. Bekræft at alt er synkroniseret

## ✅ **Efter Push:**

Du vil have:
- **11 Content Types** klar til brug
- **12 Slices** til fleksibel sidebygning
- **Komplet SEO struktur** på alle indholdstyper
- **Skalerbar arkitektur** til fremtidig udvidelse

## 🎯 **Næste Skridt:**

1. **Opret indhold** - Start med at oprette dine sider og guides
2. **Konfigurer navigation** - Sæt din hovednavigation op
3. **Tilføj globale indstillinger** - Konfigurer site-wide indstillinger
4. **Test integration** - Sørg for at din Nuxt app kan hente indhold
5. **Migrer eksisterende indhold** - Flyt dit nuværende indhold til Prismic

## 🚨 **Hvis der opstår problemer:**

- **Custom Types vises ikke**: Tjek JSON syntaks i filerne
- **Slices kan ikke pushes**: Tjek at model.json filerne er korrekte
- **Push fejler**: Tjek din internetforbindelse og Prismic login

## 🎉 **Succes!**

Når push er færdig, vil du have en komplet, skalerbar Prismic CMS struktur der er optimeret til SEO og brugervenlig for indholdsredaktører!
