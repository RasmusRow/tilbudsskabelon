<template>
  <section class="">
    <div
      class="container p-8 md:p-20 lg:py-24 overflow-hidden relative rounded-3xl text-black bg-[#EFF5F5] mx-auto flex flex-col lg:flex-row items-center"
    >
      <div class="lg:w-1/2 mb-8 lg:mb-0">
        <h1 class="text-5xl font-bold mb-4 leading-[56px]">Gratis skabelon til tilbud <br /><span class="text-primary font-bold">hurtigt og nemt</span></h1>
        <p class="text-lg mb-8">
          Med tilbudsskabelon.dk kan du lave professionelle tilbud på få
          minutter. Vores værktøj er hurtigt, nemt at bruge og sikrer, at dine
          tilbud ser skarpe ud hver gang.
        </p>
        <div class="flex">
          <Button class="h-14 px-6 text-lg" link="/lav-tilbud"> Lav et tilbud</Button>
        </div>
      </div>
      <div class="lg:w-1/2 flex justify-center items-center">
        <img
          src="/images/tilbud_fra_haandvaerker.jpg"
          alt="Eksempel på tilbud"
          class="w-1/2 hidden lg:block shadow-lg"
        />
      </div>
    </div>
  </section>
</template>

<script setup>
// No additional JavaScript is needed for this static component
</script>

<style scoped>
/* You kan add custom styles here if needed */
</style>

<!-- Tailwind classes are used throughout for styling -->
