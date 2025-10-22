<script setup lang="ts">
import type { Content } from "@prismicio/client";

defineProps(
  getSliceComponentProps<Content.HeroSlice>([
    "slice",
    "index",
    "slices",
    "context",
  ]),
);
</script>

<template>
  <section
    :data-slice-type="slice.slice_type"
    :data-slice-variation="slice.variation"
    class="hero-section"
  >
    <div class="container mx-auto px-4 py-20">
      <div class="text-center">
        <h1 class="text-5xl font-bold mb-6">{{ slice.primary.title }}</h1>
        <p class="text-xl mb-8 text-gray-600">{{ slice.primary.subtitle }}</p>
        <Button 
          v-if="slice.primary.cta_text && slice.primary.cta_link"
          :link="slice.primary.cta_link"
          class="text-lg px-8 py-4"
        >
          {{ slice.primary.cta_text }}
        </Button>
      </div>
    </div>
  </section>
</template>