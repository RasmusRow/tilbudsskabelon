<script setup lang="ts">
import BlogGrid from "./BlogGrid.vue";

defineProps(
  getSliceComponentProps<Content.BlogGridSlice>([
    "slice",
    "index",
    "slices",
    "context",
  ]),
);
</script>

<template>
  <BlogGrid
    :slice="slice"
    :index="index"
    :slices="slices"
    :context="context"
  />
</template>
