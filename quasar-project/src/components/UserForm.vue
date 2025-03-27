<template>
    <div class="q-gutter-md q-mb-lg">
      <q-input v-model="name" label="Nombre" outlined />
      <q-input v-model="email" label="Email" outlined />
      <q-btn @click="emitSubmit" label="Agregar" color="primary" />
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  
  const name = ref('');
  const email = ref('');
  
  const emit = defineEmits(['submit']);
  
  const emitSubmit = () => {
    emit('submit', { name: name.value, email: email.value });
    name.value = '';
    email.value = '';
  };
  </script>
  