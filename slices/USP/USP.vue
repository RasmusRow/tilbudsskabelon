<script setup lang="ts">
import type { Content } from "@prismicio/client";

defineProps(
  getSliceComponentProps<Content.USPSlice>([
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
    class="usp-section py-16"
  >
    <div class="container mx-auto px-4">
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div 
          v-for="(item, index) in slice.items" 
          :key="index"
          class="text-center p-8 bg-white rounded-lg shadow-lg"
        >
          <div class="text-4xl mb-4 text-primary">
            <span v-if="item.icon" v-html="item.icon"></span>
          </div>
          <h3 class="text-2xl font-semibold mb-4">{{ item.title }}</h3>
          <p class="text-gray-600">{{ item.description }}</p>
        </div>
      </div>
    </div>
  </section>
</template>