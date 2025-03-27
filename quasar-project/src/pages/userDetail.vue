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
  
  const route = useRoute();  // Acceder a la ruta actual
  const user = ref(null);
  
  // Cargar usuarios desde la API
  onMounted(async () => {
    const apiUsers = await getUsers();
    const userId = route.params.id;  // Obtener el ID del usuario desde la ruta
    user.value = apiUsers.find(u => u.id == userId);  // Buscar el usuario por su ID
  });
  </script>
  
  <style scoped>
  .q-page {
    background-color: #f9f9f9;
  }
  </style>
  