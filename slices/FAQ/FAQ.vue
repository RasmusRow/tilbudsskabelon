<script setup lang="ts">
import type { Content } from "@prismicio/client";

defineProps(
  getSliceComponentProps<Content.FAQSlice>([
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
    class="FAQ-section"
  >
    <div class="container mx-auto px-4 py-8">
      <h2 class="text-3xl font-bold mb-8">{{ slice.primary?.title || 'FAQ Slice' }}</h2>
      <p class="text-gray-600">{{ slice.primary?.subtitle || 'Content goes here' }}</p>
    </div>
  </section>
</template>
