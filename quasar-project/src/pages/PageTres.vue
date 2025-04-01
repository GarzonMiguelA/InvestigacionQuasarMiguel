<script setup>
import { ref } from 'vue';
import ContactForm from '../components/ContactForm.vue';  

const name = ref('');
const lastName = ref('');
const phone = ref('');
const email = ref('');
const message = ref(''); 
const submitted = ref(false);
const errorMessage = ref('');

const handleSubmit = (formData) => {
  // Verificamos que todos los campos estén llenos
  if (!name.value || !lastName.value || !phone.value || !email.value || !message.value) {
    errorMessage.value = 'Por favor, complete todos los campos.';
    return;
  }

  console.log('Formulario enviado:', formData);

  submitted.value = true;

  // Reseteamos formulario
  name.value = '';
  lastName.value = '';
  phone.value = '';
  email.value = '';
  message.value = ''; 
  errorMessage.value = ''; 
};
</script>

<template>
  <q-page class="flex flex-center bg-grey-1">
    <q-card class="q-pa-md" style="width: 400px; border-radius: 10px; box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);">
      <q-card-section>
        <div class="text-h6 text-center q-mb-md">Formulario de Contacto</div>

        <!-- Usamos ContactForm y pasamos el evento submit -->
        <ContactForm @submit="handleSubmit">
          <template v-slot:fields>
            <q-input v-model="name" label="Nombre" filled class="q-mb-md" />
            <q-input v-model="lastName" label="Apellido" filled class="q-mb-md" />
            <q-input v-model="phone" label="Teléfono" type="tel" filled class="q-mb-md" />
            <q-input v-model="email" label="Correo Electrónico" type="email" filled class="q-mb-md" />
            <q-input v-model="message" label="Mensaje" type="textarea" filled class="q-mb-md" />
          </template>
        </ContactForm>

        <!-- Mensaje de error si no se han completado los campos -->
        <div v-if="errorMessage" class="text-negative text-center q-mt-md">
          <q-icon name="warning" /> {{ errorMessage }}
        </div>
      </q-card-section>

      <!-- Si todo va bien: -->
      <q-card-actions v-if="submitted" class="q-mt-md">
        <div class="text-center">
          <p>Nos pondremos en contacto contigo</p>
        </div>
      </q-card-actions>
    </q-card>
  </q-page>
</template>

<style scoped>
.q-page {
  background-color: #f9f9f9;
}
</style>
