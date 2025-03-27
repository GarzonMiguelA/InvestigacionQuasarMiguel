<template>
    <q-page class="q-pa-md">
      <div class="q-gutter-md">
        <h2>Detalles de Usuario</h2>
  
        <!-- Mostrar los detalles del usuario -->
        <q-card v-if="user">
          <q-card-section>
            <div class="text-h6">Nombre: {{ user.name }}</div>
            <div>Email: {{ user.email }}</div>
            <div>Teléfono: {{ user.phone }}</div>
            <div>Dirección: {{ user.address.street }}, {{ user.address.city }}</div>
            <div>Compañía: {{ user.company.name }}</div>
          </q-card-section>
        </q-card>
  
        <q-btn to="/page2" label="Volver" color="primary" />
      </div>
    </q-page>
  </template>
  
  <script setup>
  import { ref, onMounted } from 'vue';
  import { useRoute } from 'vue-router';
  import { getUsers } from '../composables/getUsers';
  
  // Crear la referencia al usuario
  const route = useRoute();
  const user = ref(null);
  
  // Cargar los usuarios desde localStorage y la API
  onMounted(async () => {
    const storedUsers = JSON.parse(localStorage.getItem('users')) || [];
    const apiUsers = await getUsers();
    const allUsers = [...storedUsers, ...apiUsers];
    user.value = allUsers.find(u => u.id == route.params.id);
  });
  </script>
  
  <style scoped>
  .q-page {
    background-color: #f9f9f9;
  }
  </style>
  