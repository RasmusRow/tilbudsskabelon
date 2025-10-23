<script setup>
const { setPageSEO } = useSEO()

// Create page data for SEO
const pageData = {
  title: "Sådan skriver du det perfekte tilbud",
  meta_title: "Sådan skriver du det perfekte tilbud - Skabelon til tilbud | Tilbudsskabelon",
  meta_description: "Komplet guide til at skrive det perfekte tilbud. Brug vores tilbudsskabelon til at vinde flere kunder med et gennemført tilbud.",
  meta_image: { url: "/images/skriv-et-perfekt-tilbud.png" }
}

// Set SEO with proper fallback to Global Settings
await setPageSEO(pageData, 'blog-post')
</script>

<template>
  <main class="container mx-auto relative py-12 gap-24 flex">
    <!-- Main Content Section -->
    <article class="flex-1">
      <!-- Primary Header with H1 -->
      <header>
        <h1 class="text-4xl font-bold mb-8 text-black">
          Sådan skriver du det perfekte tilbud
        </h1>
      </header>

      <img
        src="/images/skriv-et-perfekt-tilbud.png"
        alt="en mand der sidder ved et skrivebord og kigger på tilbud"
        class="w-full rounded-3xl mb-4"
      />

      <!-- Introduction Section -->
      <section id="introduction" aria-labelledby="introduction-title">
        <h2 class="sr-only" id="introduction-title">
          Introduktion til tilbudsskrivning
        </h2>
        <p class="mb-6 text-lg leading-relaxed text-gray-800">
          At <strong>skrive et tilbud</strong> kræver forståelse af kundens
          behov og evnen til at præsentere dine tjenester effektivt. Med en
          velformuleret <strong>tilbudsskabelon</strong> kan du skabe tilbud,
          der fanger og overbeviser. Denne guide vil hjælpe dig til at lave
          tilbud, der konverterer.
        </p>
      </section>

      <!-- Why Use a Template Section -->
      <section id="section1" aria-labelledby="section1-title">
        <h2
          class="text-3xl font-semibold mt-12 mb-6 text-secondary"
          id="section1-title"
        >
          Hvorfor bruge en skabelon til tilbud?
        </h2>
        <p class="mb-6 leading-relaxed text-gray-800">
          En <strong>tilbudsskabelon</strong> giver struktur og professionalisme
          til dine tilbud, hvilket kan være en afgørende faktor for kunden.
          Vores skabelon sparer tid og sikrer, at dine tilbud fremhæver det
          væsentlige – kundens værdi.
        </p>
      </section>

      <!-- How to Create a Proposal Section -->
      <section id="section2" aria-labelledby="section2-title">
        <h2
          class="text-3xl font-semibold mt-12 mb-6 text-secondary"
          id="section2-title"
        >
          Hvordan laver man et tilbud?
        </h2>
        <p class="mb-6 leading-relaxed text-gray-800">
          Når du skal <strong>lave et tilbud</strong>, er en fast struktur
          afgørende. Følg disse trin for at sikre et overbevisende tilbud:
        </p>
        <ul class="list-disc list-inside mb-8 space-y-4 text-gray-800">
          <li>
            <strong>Introduktion:</strong> Kort introduktion til virksomheden og
            din løsning.
          </li>
          <li>
            <strong>Problemstilling:</strong> Beskriv kundens problem eller
            behov.
          </li>
          <li>
            <strong>Løsning:</strong> Forklar, hvordan du opfylder kundens
            behov.
          </li>
          <li>
            <strong>Pris og detaljer:</strong> Prissætning og betingelser.
          </li>
          <li>
            <strong>Call-to-action:</strong> Opfordring til handling, fx kontakt
            eller accept.
          </li>
        </ul>
      </section>

      <!-- Tips for Crafting Winning Proposals Section -->
      <section id="section3" aria-labelledby="section3-title">
        <h2
          class="text-3xl font-semibold mt-12 mb-6 text-secondary"
          id="section3-title"
        >
          Tips til at skrive et tilbud, der sælger
        </h2>
        <p class="mb-6 leading-relaxed text-gray-800">
          Ud over pris og specifikationer handler et godt tilbud om at vise
          kunden, hvorfor de skal vælge dig. Her er nogle tips til at skabe
          effektive tilbud:
        </p>
        <ul class="list-disc list-inside mb-8 space-y-4 text-gray-800">
          <li>Fokuser på værdien af din løsning, ikke kun prisen.</li>
          <li>Gør tilbuddet personligt og relevant for kunden.</li>
          <li>Brug klare overskrifter og opdel indholdet for let læsning.</li>
        </ul>
      </section>

      <!-- Call to Action Section -->
      <!-- <section
        id="cta"
        class="bg-secondary p-8 rounded-lg text-center mt-12 text-white"
      >
        <p class="text-xl font-medium mb-4">
          Klar til at imponere dine kunder?
        </p>
        <p class="mb-8">
          Prøv vores tilbudsskabelon og start med at lave tilbud, der vinder
          kunder allerede i dag.
        </p>
        <button
          class="bg-primary text-white px-8 py-4 rounded-lg hover:bg-primary-dark transition duration-300"
        >
          Download tilbudsskabelon
        </button>
      </section> -->
    </article>

    <!-- Sticky Navigation Sidebar -->
    <div>
      <aside class="sticky top-24 w-80 ml-8 hidden lg:block">
        <nav
          class="bg-white p-6 rounded-3xl shadow-lg"
          aria-label="Indholdsfortegnelse"
        >
          <h3 class="text-lg font-semibold mb-6 text-primary">
            Indholdsfortegnelse
          </h3>
          <ul class="space-y-4 text-black">
            <li>
              <a href="#introduction" class="hover:underline">Introduktion</a>
            </li>
            <li>
              <a href="#section1" class="hover:underline"
                >Hvorfor bruge en skabelon</a
              >
            </li>
            <li>
              <a href="#section2" class="hover:underline"
                >Hvordan laver man et tilbud?</a
              >
            </li>
            <li>
              <a href="#section3" class="hover:underline"
                >Tips til et godt tilbud</a
              >
            </li>
            <li>
              <a href="#cta" class="hover:underline">Download skabelon</a>
            </li>
          </ul>
        </nav>
      </aside>
    </div>
  </main>
</template>
