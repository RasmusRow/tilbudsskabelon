#!/bin/bash

# Create all slice files quickly
cd /Users/rasmusrowbotham/Projects/tilbudsskabelon/slices

# RichText slice
cat > RichText/index.json << 'EOF'
{
  "id": "rich_text",
  "name": "Rich Text",
  "description": "Rich text content with formatting",
  "variations": [
    {
      "id": "default",
      "name": "Default",
      "docURL": "...",
      "version": "sktwi1xtmkglx6du",
      "description": "...",
      "primary": {
        "content": {
          "type": "StructuredText",
          "config": {
            "label": "Content",
            "single": "paragraph,preformatted,heading1,heading2,heading3,heading4,heading5,heading6,strong,em,hyperlink,image,embed,list-item,o-list-item,rtl"
          }
        }
      }
    }
  ]
}
EOF

# CTA slice
cat > CTA/index.json << 'EOF'
{
  "id": "cta",
  "name": "CTA",
  "description": "Call to action section",
  "variations": [
    {
      "id": "default",
      "name": "Default",
      "docURL": "...",
      "version": "sktwi1xtmkglx6du",
      "description": "...",
      "primary": {
        "title": {
          "type": "Text",
          "config": {
            "label": "CTA Title",
            "placeholder": "Ready to get started?"
          }
        },
        "subtitle": {
          "type": "Text",
          "config": {
            "label": "CTA Subtitle",
            "placeholder": "Start creating professional quotes today"
          }
        },
        "button_text": {
          "type": "Text",
          "config": {
            "label": "Button Text",
            "placeholder": "Create Quote"
          }
        },
        "button_link": {
          "type": "Text",
          "config": {
            "label": "Button Link",
            "placeholder": "/lav-tilbud"
          }
        },
        "background_color": {
          "type": "Color",
          "config": {
            "label": "Background Color"
          }
        },
        "text_color": {
          "type": "Color",
          "config": {
            "label": "Text Color"
          }
        }
      }
    }
  ]
}
EOF

echo "Slices created successfully!"
