<template>
  <div class="container mx-auto py-12">
    <!--    <button
      type="button"
      @click="populateForm"
      class="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 mb-6"
    >
      Populer formular (Dev Tool)
    </button>-->

    <!-- Rest of the form -->
    <!-- Logo upload area -->
    <!-- <div class="mb-6">
      <div
        @click="triggerFileInput"
        @dragover.prevent="handleDragOver"
        @dragleave.prevent="handleDragLeave"
        @drop.prevent="handleDrop"
        :class="[
          'border-2 border-dashed rounded-lg p-6 flex flex-col items-center justify-center cursor-pointer transition-colors',
          isDragging
            ? 'border-blue-500 bg-blue-50'
            : 'border-gray-300 hover:border-blue-400',
        ]"
      >
        <input
          type="file"
          ref="fileInput"
          class="hidden"
          accept="image/*"
          @change="handleFileSelect"
        />
        <div v-if="logoUrl" class="mb-4">
          <img
            :src="logoUrl"
            alt="Firma logo"
            class="max-h-32 object-contain"
          />
        </div>
        <div v-else>
          <svg
            class="mx-auto h-12 w-12 text-gray-400"
            stroke="currentColor"
            fill="none"
            viewBox="0 0 48 48"
          >
            <path
              d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
          <p class="mt-1 text-sm text-gray-500">
            Klik eller træk et billede her for at uploade dit logo
          </p>
        </div>
      </div>
    </div> -->

    <!-- Title Input -->
    <div class="mb-6">
      <label class="block text-xl font-semibold text-gray-800"
        >Titel på tilbud</label
      >
      <input
        v-model="form.quoteTitle"
        type="text"
        required
        class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
      />
    </div>

    <form @submit.prevent="generateQuote" class="space-y-6">
      <!-- Company Details -->
      <div class="space-y-4">
        <h2 class="text-xl font-semibold text-gray-800">
          Virksomhedsoplysninger
        </h2>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label class="block text-sm font-medium text-gray-700"
              >CVR-nummer</label
            >
            <input
              v-model="form.company.cvr"
              @blur="fetchCompanyData"
              type="text"
              required
              class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            />
          </div>
          <div>
            <label class="block text-sm font-medium text-gray-700"
              >Firmanavn</label
            >
            <input
              v-model="form.company.name"
              type="text"
              required
              class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            />
          </div>
          <div>
            <label class="block text-sm font-medium text-gray-700"
              >Adresse</label
            >
            <input
              v-model="form.company.address"
              type="text"
              required
              class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            />
          </div>
          <div>
            <label class="block text-sm font-medium text-gray-700"
              >Telefon</label
            >
            <input
              v-model="form.company.phone"
              type="tel"
              required
              class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            />
          </div>
        </div>
      </div>

      <!-- Customer Details -->
      <div class="space-y-4">
        <h2 class="text-xl font-semibold text-gray-800">Kundeoplysninger</h2>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label class="block text-sm font-medium text-gray-700"
              >CVR-nummer (valgfrit)</label
            >
            <input
              v-model="form.customer.cvr"
              @blur="fetchCustomerData"
              type="text"
              class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            />
          </div>
          <div>
            <label class="block text-sm font-medium text-gray-700"
              >Kundenavn</label
            >
            <input
              v-model="form.customer.name"
              type="text"
              required
              class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            />
          </div>
          <div>
            <label class="block text-sm font-medium text-gray-700">Email</label>
            <input
              v-model="form.customer.email"
              type="email"
              required
              class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            />
          </div>
          <div>
            <label class="block text-sm font-medium text-gray-700"
              >Adresse</label
            >
            <input
              v-model="form.customer.address"
              type="text"
              required
              class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            />
          </div>
          <div>
            <label class="block text-sm font-medium text-gray-700"
              >Telefon</label
            >
            <input
              v-model="form.customer.phone"
              type="tel"
              required
              class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            />
          </div>
        </div>
      </div>

      <!-- Project Details -->
      <div class="space-y-4">
        <h2 class="text-xl font-semibold text-gray-800">Detaljer</h2>
        <div>
          <label class="block text-sm font-medium text-gray-700"
            >Opgavebeskrivelse</label
          >
          <textarea
            v-model="form.project.description"
            rows="4"
            class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
          ></textarea>
        </div>

        <!-- Materials and Services -->
        <div class="space-y-4">
          <h3 class="text-lg font-medium text-gray-800">
            Materialer og ydelser
          </h3>
          <div
            v-for="(item, index) in form.project.items"
            :key="index"
            class="grid grid-cols-1 md:grid-cols-5 gap-4 p-4 bg-gray-50 rounded-md"
          >
            <div class="md:col-span-2">
              <label class="block text-sm font-medium text-gray-700"
                >Beskrivelse</label
              >
              <input
                v-model="item.description"
                type="text"
                required
                class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              />
            </div>
            <div>
              <label class="block text-sm font-medium text-gray-700"
                >Antal</label
              >
              <input
                v-model.number="item.quantity"
                type="number"
                min="1"
                required
                class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              />
            </div>
            <div>
              <label class="block text-sm font-medium text-gray-700"
                >Enhed</label
              >
              <select
                v-model="item.unit"
                required
                class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              >
                <option value="stk">stk</option>
                <option value="timer">timer</option>
                <option value="m">m</option>
                <option value="m2">m²</option>
                <option value="m3">m³</option>
                <option value="kg">kg</option>
                <option value="sæt">sæt</option>
              </select>
            </div>
            <div>
              <label class="block text-sm font-medium text-gray-700"
                >Enhedspris (DKK)</label
              >
              <input
                v-model.number="item.price"
                type="number"
                min="0"
                step="0.01"
                required
                class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              />
            </div>
            <div class="flex items-end md:col-span-5">
              <button
                type="button"
                @click="removeItem(index)"
                class="inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
              >
                Fjern
              </button>
            </div>
          </div>

          <button
            type="button"
            @click="addItem"
            class="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
          >
            Tilføj række
          </button>
        </div>

        <!-- Terms and Conditions -->
        <div>
          <label class="block text-sm font-medium text-gray-700"
            >Betingelser og vilkår</label
          >
          <textarea
            v-model="form.terms"
            rows="4"
            class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
          ></textarea>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label class="block text-sm font-medium text-gray-700"
              >Tilbudsdato</label
            >
            <input
              v-model="form.quoteDate"
              type="date"
              required
              class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            />
          </div>
          <div>
            <label class="block text-sm font-medium text-gray-700"
              >Gyldig til</label
            >
            <input
              v-model="form.validUntil"
              type="date"
              required
              class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            />
          </div>
        </div>
      </div>

      <!-- VAT Selection -->
      <div class="mb-6">
        <label class="block text-lg font-semibold text-gray-800 mb-2"
          >Prisvisning</label
        >
        <div class="flex space-x-4">
          <label>
            <input
              type="radio"
              v-model="includeVAT"
              :value="true"
              class="mr-2"
            />
            Inkl. Moms
          </label>
          <label>
            <input
              type="radio"
              v-model="includeVAT"
              :value="false"
              class="mr-2"
            />
            Ekskl. Moms
          </label>
        </div>
      </div>

      <div class="flex justify-end space-x-4">
        <button
          type="submit"
          class="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
        >
          Download tilbud
        </button>
      </div>
    </form>

    <!-- Total Calculation -->
    <div class="mt-6 p-4 bg-gray-50 rounded-lg">
      <h3 class="text-lg font-medium text-gray-800">Total</h3>
      <div class="mt-2 space-y-2">
        <div class="flex justify-between">
          <span>Subtotal:</span>
          <span>{{ formatPrice(calculateSubtotal) }} DKK</span>
        </div>
        <div v-if="includeVAT" class="flex justify-between">
          <span>Moms (25%):</span>
          <span>{{ formatPrice(calculateVAT) }} DKK</span>
        </div>
        <div class="flex justify-between font-bold">
          <span>Total {{ includeVAT ? "inkl. moms" : "ekskl. moms" }}:</span>
          <span>{{ formatPrice(calculateTotal) }} DKK</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from "vue";
import jsPDF from "jspdf";
import "jspdf-autotable";
import { collection, addDoc } from "firebase/firestore";
import {
  ref as storageRef,
  uploadBytes,
  getDownloadURL,
} from "firebase/storage";
import { useNuxtApp } from "#app";
import axios from "axios";

// Get access to Firebase services
const { $firestore, $storage } = useNuxtApp();

const fileInput = ref(null);
const isDragging = ref(false);
const logoUrl = ref(null);
const logoFile = ref(null);
const includeVAT = ref(true);
const isCompanyDataFetched = ref(false);
const isCustomerDataFetched = ref(false);

const form = ref({
  quoteTitle: "",
  logo: null,
  company: {
    name: "",
    cvr: "",
    address: "",
    phone: "",
  },
  customer: {
    name: "",
    cvr: "",
    email: "",
    address: "",
    phone: "",
  },
  project: {
    description: "",
    items: [
      {
        description: "",
        quantity: 1,
        unit: "stk",
        price: 0,
      },
    ],
  },
  terms: "",
  quoteDate: new Date().toISOString().split("T")[0],
  validUntil: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000)
    .toISOString()
    .split("T")[0],
});

const calculateSubtotal = computed(() => {
  return form.value.project.items.reduce((total, item) => {
    return total + item.quantity * item.price;
  }, 0);
});

const calculateVAT = computed(() => {
  return calculateSubtotal.value * 0.25;
});

const calculateTotal = computed(() => {
  return includeVAT.value
    ? calculateSubtotal.value + calculateVAT.value
    : calculateSubtotal.value;
});

const formatPrice = (price) => {
  return new Intl.NumberFormat("da-DK", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(price);
};

const fetchCompanyData = async () => {
  if (form.value.company.cvr) {
    try {
      const response = await axios.get(
        `https://cvrapi.dk/api?country=dk&vat=${form.value.company.cvr}`
      );
      if (response.data) {
        form.value.company.name = response.data.name || "";
        form.value.company.address = response.data.address || "";
        form.value.company.phone = response.data.phone || "";
        isCompanyDataFetched.value = true;
      }
    } catch (error) {
      console.error("Fejl ved hentning af CVR-data:", error);
    }
  }
};

const fetchCustomerData = async () => {
  if (form.value.customer.cvr) {
    try {
      const response = await axios.get(
        `https://cvrapi.dk/api?country=dk&vat=${form.value.customer.cvr}`
      );
      if (response.data) {
        form.value.customer.name = response.data.name || "";
        form.value.customer.address = response.data.address || "";
        form.value.customer.phone = response.data.phone || "";
        isCustomerDataFetched.value = true;
      }
    } catch (error) {
      console.error("Fejl ved hentning af CVR-data:", error);
    }
  }
};

const addItem = () => {
  form.value.project.items.push({
    description: "",
    quantity: 1,
    unit: "stk",
    price: 0,
  });
};

const removeItem = (index) => {
  if (form.value.project.items.length > 1) {
    form.value.project.items.splice(index, 1);
  }
};

const triggerFileInput = () => {
  fileInput.value.click();
};

const handleDragOver = () => {
  isDragging.value = true;
};

const handleDragLeave = () => {
  isDragging.value = false;
};

const handleFileSelect = (e) => {
  const file = e.target.files[0];
  handleFile(file);
};

const handleDrop = (e) => {
  isDragging.value = false;
  const file = e.dataTransfer.files[0];
  if (file && file.type.startsWith("image/")) {
    handleFile(file);
  }
};

const handleFile = (file) => {
  if (file && file.type.startsWith("image/")) {
    const reader = new FileReader();
    reader.onload = (e) => {
      logoUrl.value = e.target.result;
      logoFile.value = file;
      form.value.logo = e.target.result;
    };
    reader.readAsDataURL(file);
  }
};

const uploadLogoToStorage = async () => {
  if (logoFile.value) {
    const storageReference = storageRef(
      $storage,
      `logos/${logoFile.value.name}`
    );
    await uploadBytes(storageReference, logoFile.value);
    return await getDownloadURL(storageReference);
  }
  return null;
};

const generateQuote = async () => {
  try {
    const logoDownloadUrl = await uploadLogoToStorage();

    const quote = {
      ...form.value,
      subtotal: calculateSubtotal.value,
      vat: calculateVAT.value,
      total: calculateTotal.value,
      createdAt: new Date(),
      logoUrl: logoDownloadUrl,
    };

    await addDoc(collection($firestore, "quotes"), quote);
    alert("Tilbud gemt succesfuldt!");

    generatePdf(quote, logoDownloadUrl);
  } catch (error) {
    console.error("Fejl ved gemning af tilbud:", error);
    alert("Der opstod en fejl ved gemning af tilbuddet.");
  }
};

const generatePdf = (quote, logoUrl) => {
  const doc = new jsPDF();

  if (logoUrl) {
    const img = new Image();
    img.src = logoUrl;
    img.onload = () => {
      doc.addImage(img, "JPEG", 10, 10, 50, 20);
      createPdfContent(doc, quote);
      doc.save(`tilbud_${quote.company.name}.pdf`);
    };
  } else {
    createPdfContent(doc, quote);
    doc.save(`tilbud_${quote.company.name}.pdf`);
  }
};

const createPdfContent = (doc, quote) => {
  doc.setFontSize(18);
  doc.text(quote.quoteTitle, 14, 40);
  doc.setFontSize(12);
  doc.text(`Firmanavn: ${quote.company.name}`, 14, 50);
  doc.text(`CVR-nummer: ${quote.company.cvr}`, 14, 56);
  doc.text(`Adresse: ${quote.company.address}`, 14, 62);
  doc.text(`Telefon: ${quote.company.phone}`, 14, 68);

  doc.text(`Kundenavn: ${quote.customer.name}`, 14, 80);
  doc.text(`Kunde CVR: ${quote.customer.cvr}`, 14, 86);
  doc.text(`Email: ${quote.customer.email}`, 14, 92);
  doc.text(`Adresse: ${quote.customer.address}`, 14, 98);
  doc.text(`Telefon: ${quote.customer.phone}`, 14, 104);

  doc.text("Opgavebeskrivelse:", 14, 120);
  const descriptionLines = doc.splitTextToSize(quote.project.description, 180);
  doc.text(descriptionLines, 14, 126);

  // Add items (table format)
  const items = quote.project.items.map((item) => [
    item.description,
    item.quantity,
    item.unit,
    `${item.price} DKK`,
    `${(item.quantity * item.price).toFixed(2)} DKK`,
  ]);

  doc.autoTable({
    head: [["Beskrivelse", "Antal", "Enhed", "Enhedspris", "Total"]],
    body: items,
    startY: 140,
    theme: "grid",
  });

  const finalY = doc.previousAutoTable.finalY + 10;
  doc.text(`Subtotal: ${formatPrice(quote.subtotal)} DKK`, 14, finalY);
  if (includeVAT.value) {
    doc.text(`Moms (25%): ${formatPrice(quote.vat)} DKK`, 14, finalY + 6);
  }
  doc.text(
    `Total ${includeVAT.value ? "inkl. moms" : "ekskl. moms"}: ${formatPrice(
      quote.total
    )} DKK`,
    14,
    finalY + 12
  );

  doc.text("Betingelser og vilkår:", 14, finalY + 30);
  const termsLines = doc.splitTextToSize(quote.terms, 180);
  doc.text(termsLines, 14, finalY + 36);
};

const populateForm = () => {
  form.value = {
    quoteTitle: "Renovering af kontorlokaler",
    logo: null,
    company: {
      name: "Byg & Renover ApS",
      cvr: "98765432",
      address: "Tømrervej 10, 2400 København NV",
      phone: "+45 12345678",
    },
    customer: {
      name: "ABC Marketing",
      cvr: "12345678",
      email: "kontakt@abcmarketing.dk",
      address: "Markedsvej 15, 2100 København Ø",
      phone: "+45 87654321",
    },
    project: {
      description:
        "Renovering af kontorlokaler inkl. nedtagning af gamle vægge, opsætning af gipsvægge, maling, samt el-arbejde.",
      items: [
        {
          description: "Nedtagning af gamle vægge",
          quantity: 10,
          unit: "m2",
          price: 250,
        },
        {
          description: "Opsætning af gipsvægge",
          quantity: 15,
          unit: "m2",
          price: 300,
        },
        {
          description: "Maling af vægge",
          quantity: 100,
          unit: "m2",
          price: 100,
        },
        {
          description: "El-arbejde",
          quantity: 20,
          unit: "timer",
          price: 500,
        },
      ],
    },
    terms:
      "Tilbuddet er gyldigt i 30 dage. Betalingsbetingelser: Netto 14 dage.",
    quoteDate: new Date().toISOString().split("T")[0],
    validUntil: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000)
      .toISOString()
      .split("T")[0],
  };
};
</script>

<style>
/* Add any additional styling if needed */
</style>
