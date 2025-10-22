# Push Prismic Structure to Repository
## Step-by-Step Guide

I've successfully created a complete Prismic CMS structure for your Tilbudsskabelon.dk website. Here's how to push it to your Prismic repository:

## 🚀 **What's Been Created**

### **Content Types** (11 total):
- ✅ `global-settings.json` - Site-wide configuration
- ✅ `page.json` - Flexible pages with slices
- ✅ `guide.json` - Rich content articles
- ✅ `navigation.json` - Navigation configuration
- ✅ `quote-template.json` - Quote templates
- ✅ `testimonial.json` - Customer testimonials
- ✅ `faq.json` - FAQ sections
- ✅ `blog-post.json` - Blog articles
- ✅ `team-member.json` - Team profiles
- ✅ `pricing-plan.json` - Pricing plans
- ✅ `contact-form.json` - Contact forms

### **Slices** (12 total):
- ✅ `HeroSlice` - Hero banners with CTAs
- ✅ `USP` - Unique selling points grid
- ✅ `Info` - Information sections
- ✅ `RichText` - Rich text content
- ✅ `CTA` - Call-to-action sections
- ✅ `Image` - Single images
- ✅ `Gallery` - Image galleries
- ✅ `QuoteForm` - Quote generation forms
- ✅ `GuideListing` - Guide listings
- ✅ `FAQ` - FAQ sections
- ✅ `Testimonial` - Customer testimonials
- ✅ `ContactForm` - Contact forms

## 📋 **Step-by-Step Push Process**

### **Step 1: Login to Prismic**
```bash
cd /Users/rasmusrowbotham/Projects/tilbudsskabelon
prismic login
```
- This will open your browser for authentication
- Login with your Prismic account credentials

### **Step 2: Start Slice Machine**
```bash
npm run slicemachine
```
- This will start the Slice Machine UI
- Open your browser to `http://localhost:9999`
- You'll see the Slice Machine interface

### **Step 3: Push Custom Types**
1. In the Slice Machine UI, go to **Custom Types**
2. Click **Import** for each content type:
   - Import `customtypes/global-settings.json`
   - Import `customtypes/page.json`
   - Import `customtypes/guide.json`
   - Import `customtypes/navigation.json`
   - Import `customtypes/quote-template.json`
   - Import `customtypes/testimonial.json`
   - Import `customtypes/faq.json`
   - Import `customtypes/blog-post.json`
   - Import `customtypes/team-member.json`
   - Import `customtypes/pricing-plan.json`
   - Import `customtypes/contact-form.json`

### **Step 4: Push Slices**
1. In the Slice Machine UI, go to **Slices**
2. Click **Push** for each slice:
   - Push `HeroSlice`
   - Push `USP`
   - Push `Info`
   - Push `RichText`
   - Push `CTA`
   - Push `Image`
   - Push `Gallery`
   - Push `QuoteForm`
   - Push `GuideListing`
   - Push `FAQ`
   - Push `Testimonial`
   - Push `ContactForm`

### **Step 5: Push to Repository**
1. In the Slice Machine UI, click **Push to repository**
2. This will sync all your custom types and slices to Prismic
3. Wait for the push to complete

## 🔧 **Alternative Method: Direct Push**

If the Slice Machine UI doesn't work, you can push directly:

```bash
# Push custom types
prismic sm --push-custom-types

# Push slices
prismic sm --push-slices

# Push everything
prismic sm --push
```

## 📁 **File Structure Created**

```
tilbudsskabelon/
├── customtypes/           # Content type definitions
│   ├── global-settings.json
│   ├── page.json
│   ├── guide.json
│   ├── navigation.json
│   ├── quote-template.json
│   ├── testimonial.json
│   ├── faq.json
│   ├── blog-post.json
│   ├── team-member.json
│   ├── pricing-plan.json
│   └── contact-form.json
├── slices/                # Slice definitions and components
│   ├── HeroSlice/
│   │   ├── index.json
│   │   ├── HeroSlice.vue
│   │   └── model.json
│   ├── USP/
│   │   ├── index.json
│   │   ├── USP.vue
│   │   └── model.json
│   ├── Info/
│   ├── RichText/
│   ├── CTA/
│   ├── Image/
│   ├── Gallery/
│   ├── QuoteForm/
│   ├── GuideListing/
│   ├── FAQ/
│   ├── Testimonial/
│   └── ContactForm/
├── slicemachine.config.json
└── prismic-structure/     # Original structure files
    ├── README.md
    └── IMPLEMENTATION-GUIDE.md
```

## ✅ **Verification Steps**

After pushing, verify in your Prismic dashboard:

1. **Custom Types**: Check that all 11 content types are visible
2. **Slices**: Verify all 12 slices are available
3. **Repository**: Confirm the structure is synced

## 🎯 **Next Steps After Push**

1. **Create Content**: Start creating pages and guides
2. **Configure Navigation**: Set up your main navigation
3. **Add Global Settings**: Configure site-wide settings
4. **Test Integration**: Ensure your Nuxt app can fetch content
5. **Migrate Existing Content**: Move your current content to Prismic

## 🚨 **Troubleshooting**

### **If Slice Machine won't start:**
```bash
npm install --save-dev slice-machine-ui
npm run slicemachine
```

### **If push fails:**
- Check your internet connection
- Verify Prismic login status
- Try pushing individual components first

### **If custom types don't appear:**
- Check JSON syntax in customtypes files
- Verify file paths are correct
- Try importing one at a time

## 📞 **Support**

If you encounter issues:
1. Check Prismic documentation
2. Verify your repository permissions
3. Contact Prismic support if needed

## 🎉 **Success!**

Once pushed successfully, you'll have:
- ✅ Complete content management system
- ✅ SEO-optimized structure
- ✅ Flexible page building
- ✅ Rich content editing
- ✅ Scalable architecture

Your Prismic repository will be ready for content creation and your Nuxt.js app can start fetching content from Prismic!
