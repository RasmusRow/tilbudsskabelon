<template>
  <div class="bg-white shadow-lg rounded-lg p-6">
    <!-- Logo upload område -->
    <div class="mb-6">
      <div
        @click="triggerFileInput"
        @dragover.prevent="handleDragOver"
        @dragleave.prevent="handleDragLeave"
        @drop.prevent="handleDrop"
        :class="[
          'border-2 border-dashed rounded-lg p-6 flex flex-col items-center justify-center cursor-pointer transition-colors',
          isDragging ? 'border-blue-500 bg-blue-50' : 'border-gray-300 hover:border-blue-400'
        ]"
      >
        <input
          type="file"
          ref="fileInput"
          class="hidden"
          accept="image/*"
          @change="handleFileSelect"
        >
        <div v-if="logoUrl" class="mb-4">
          <img :src="logoUrl" alt="Company logo" class="max-h-32 object-contain">
        </div>
        <div v-else>
          <svg class="mx-auto h-12 w-12 text-gray-400" stroke="currentColor" fill="none" viewBox="0 0 48 48">
            <path d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
          </svg>
          <p class="mt-1 text-sm text-gray-500">Klik eller træk et billede hertil for at uploade dit logo</p>
        </div>
      </div>
    </div>

    <h1 class="text-2xl font-bold text-gray-900 mb-6">Tilbudsgenerator</h1>
    
    <form @submit.prevent="generateQuote" class="space-y-6">
      <!-- Virksomhedsoplysninger -->
      <div class="space-y-4">
        <h2 class="text-xl font-semibold text-gray-800">Virksomhedsoplysninger</h2>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label class="block text-sm font-medium text-gray-700">Firmanavn</label>
            <input v-model="form.company.name" type="text" required
              class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500">
          </div>
          <div>
            <label class="block text-sm font-medium text-gray-700">CVR-nummer</label>
            <input v-model="form.company.cvr" type="text" required
              class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500">
          </div>
          <div>
            <label class="block text-sm font-medium text-gray-700">Adresse</label>
            <input v-model="form.company.address" type="text" required
              class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500">
          </div>
          <div>
            <label class="block text-sm font-medium text-gray-700">Telefon</label>
            <input v-model="form.company.phone" type="tel" required
              class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500">
          </div>
        </div>
      </div>

      <!-- Kundeoplysninger -->
      <div class="space-y-4">
        <h2 class="text-xl font-semibold text-gray-800">Kundeoplysninger</h2>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label class="block text-sm font-medium text-gray-700">Kundenavn</label>
            <input v-model="form.customer.name" type="text" required
              class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500">
          </div>
          <div>
            <label class="block text-sm font-medium text-gray-700">CVR-nummer (valgfrit)</label>
            <input v-model="form.customer.cvr" type="text"
              class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500">
          </div>
          <div>
            <label class="block text-sm font-medium text-gray-700">Email</label>
            <input v-model="form.customer.email" type="email" required
              class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500">
          </div>
          <div>
            <label class="block text-sm font-medium text-gray-700">Adresse</label>
            <input v-model="form.customer.address" type="text" required
              class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500">
          </div>
          <div>
            <label class="block text-sm font-medium text-gray-700">Telefon</label>
            <input v-model="form.customer.phone" type="tel" required
              class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500">
          </div>
        </div>
      </div>

      <!-- Opgavedetaljer -->
      <div class="space-y-4">
        <h2 class="text-xl font-semibold text-gray-800">Opgavedetaljer</h2>
        <div class="space-y-4">
          <div>
            <label class="block text-sm font-medium text-gray-700">Opgavebeskrivelse</label>
            <textarea v-model="form.project.description" rows="4"
              class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"></textarea>
          </div>
          
          <!-- Materialer og arbejde -->
          <div class="space-y-4">
            <h3 class="text-lg font-medium text-gray-800">Materialer og arbejde</h3>
            <div v-for="(item, index) in form.project.items" :key="index" class="grid grid-cols-1 md:grid-cols-5 gap-4 p-4 bg-gray-50 rounded-md">
              <div class="md:col-span-2">
                <label class="block text-sm font-medium text-gray-700">Beskrivelse</label>
                <input v-model="item.description" type="text" required
                  class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500">
              </div>
              <div>
                <label class="block text-sm font-medium text-gray-700">Antal</label>
                <input v-model.number="item.quantity" type="number" min="1" required
                  class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500">
              </div>
              <div>
                <label class="block text-sm font-medium text-gray-700">Enhed</label>
                <select v-model="item.unit" required
                  class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500">
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
                <label class="block text-sm font-medium text-gray-700">Enhedspris (DKK)</label>
                <input v-model.number="item.price" type="number" min="0" step="0.01" required
                  class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500">
              </div>
              <div class="flex items-end md:col-span-5">
                <button type="button" @click="removeItem(index)"
                  class="inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500">
                  Fjern
                </button>
              </div>
            </div>
            
            <button type="button" @click="addItem"
              class="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
              Tilføj item
            </button>
          </div>

          <!-- Betingelser -->
          <div>
            <label class="block text-sm font-medium text-gray-700">Betingelser og vilkår</label>
            <textarea v-model="form.terms" rows="4"
              class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"></textarea>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label class="block text-sm font-medium text-gray-700">Tilbudsdato</label>
              <input v-model="form.quoteDate" type="date" required
                class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500">
            </div>
            <div>
              <label class="block text-sm font-medium text-gray-700">Gyldig til</label>
              <input v-model="form.validUntil" type="date" required
                class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500">
            </div>
          </div>
        </div>
      </div>

      <div class="flex justify-end space-x-4">
        <button type="submit"
          class="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500">
          Generer tilbud
        </button>
      </div>
    </form>

    <!-- Total beregning -->
    <div class="mt-6 p-4 bg-gray-50 rounded-lg">
      <h3 class="text-lg font-medium text-gray-800">Total</h3>
      <div class="mt-2 space-y-2">
        <div class="flex justify-between">
          <span>Subtotal:</span>
          <span>{{ formatPrice(calculateSubtotal) }} DKK</span>
        </div>
        <div class="flex justify-between">
          <span>Moms (25%):</span>
          <span>{{ formatPrice(calculateVAT) }} DKK</span>
        </div>
        <div class="flex justify-between font-bold">
          <span>Total inkl. moms:</span>
          <span>{{ formatPrice(calculateTotal) }} DKK</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import { collection, addDoc } from 'firebase/firestore'

const { $firestore } = useNuxtApp()

const fileInput = ref(null)
const isDragging = ref(false)
const logoUrl = ref(null)

const form = ref({
  logo: null,
  company: {
    name: '',
    cvr: '',
    address: '',
    phone: ''
  },
  customer: {
    name: '',
    cvr: '',
    email: '',
    address: '',
    phone: ''
  },
  project: {
    description: '',
    items: [
      {
        description: '',
        quantity: 1,
        unit: 'stk',
        price: 0
      }
    ]
  },
  terms: 'Betaling: 14 dage netto\nAlle priser er i DKK og inkl. moms\nTilbuddet er gældende i 30 dage',
  quoteDate: new Date().toISOString().split('T')[0],
  validUntil: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000).toISOString().split('T')[0]
})

const calculateSubtotal = computed(() => {
  return form.value.project.items.reduce((total, item) => {
    return total + (item.quantity * item.price)
  }, 0)
})

const calculateVAT = computed(() => {
  return calculateSubtotal.value * 0.25
})

const calculateTotal = computed(() => {
  return calculateSubtotal.value + calculateVAT.value
})

const formatPrice = (price) => {
  return new Intl.NumberFormat('da-DK', {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
  }).format(price)
}

const addItem = () => {
  form.value.project.items.push({
    description: '',
    quantity: 1,
    unit: 'stk',
    price: 0
  })
}

const removeItem = (index) => {
  if (form.value.project.items.length > 1) {
    form.value.project.items.splice(index, 1)
  }
}

const triggerFileInput = () => {
  fileInput.value.click()
}

const handleDragOver = (e) => {
  isDragging.value = true
}

const handleDragLeave = (e) => {
  isDragging.value = false
}

const handleFileSelect = (e) => {
  const file = e.target.files[0]
  handleFile(file)
}

const handleDrop = (e) => {
  isDragging.value = false
  const file = e.dataTransfer.files[0]
  if (file && file.type.startsWith('image/')) {
    handleFile(file)
  }
}

const handleFile = (file) => {
  if (file && file.type.startsWith('image/')) {
    const reader = new FileReader()
    reader.onload = (e) => {
      logoUrl.value = e.target.result
      form.value.logo = e.target.result
    }
    reader.readAsDataURL(file)
  }
}

const generateQuote = async () => {
  try {
    const quote = {
      ...form.value,
      subtotal: calculateSubtotal.value,
      vat: calculateVAT.value,
      total: calculateTotal.value,
      createdAt: new Date()
    }
    
    await addDoc(collection($firestore, 'quotes'), quote)
    alert('Tilbud gemt succesfuldt!')
  } catch (error) {
    console.error('Error saving quote:', error)
    alert('Der opstod en fejl ved gemning af tilbuddet')
  }
}
</script>