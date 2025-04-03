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

.text-h6 {
  font-weight: bold;
  color: #2c3e50;
  text-transform: uppercase;
}


.q-page {
  background: linear-gradient(135deg, #667eea, #764ba2);
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
}

.q-card {
  background: white;
  width: 100%;
  max-width: 400px;
  border-radius: 15px;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.15);
  transition: transform 0.3s ease-in-out;
}

.q-card:hover {
  transform: scale(1.02);
}

.text-h6 {
  font-weight: bold;
  color: #2c3e50;
}

.q-input {
  background: #ffffff;
  border-radius: 8px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease-in-out;
}

.q-input:focus-within {
  box-shadow: 0 0 10px rgba(102, 126, 234, 0.5);
}

.q-btn {
  width: 100%;
  background: #667eea;
  color: white;
  font-weight: bold;
  padding: 10px;
  border-radius: 8px;
  transition: background 0.3s ease-in-out, transform 0.2s ease-in-out;
}

.q-btn:hover {
  background: #5563c1;
  transform: scale(1.05);
}

.text-negative {
  font-weight: bold;
  color: #e74c3c;
}

.q-card-actions {
  background: #f1f1f1;
  border-radius: 0 0 15px 15px;
  padding: 15px;
}

.text-center {
  font-size: 16px;
  font-weight: 500;
  color: #34495e;
}

</style>
