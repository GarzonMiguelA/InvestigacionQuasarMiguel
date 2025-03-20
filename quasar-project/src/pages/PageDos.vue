<script setup>
import { ref, computed } from 'vue';

// Cargar usuarios desde localStorage
const users = ref(JSON.parse(localStorage.getItem('users')) || []);
const searchTerm = ref('');
const filterField = ref('todos'); // Campo para seleccionar filtro
const newName = ref('');
const newEmail = ref('');

// Computed para usuarios filtrados
const filteredUsers = computed(() => {
  if (!searchTerm.value) return users.value;
  
  const term = searchTerm.value.toLowerCase();
  
  return users.value.filter(user => {
    if (filterField.value === 'nombre') {
      return user.name.toLowerCase().includes(term);
    }
    if (filterField.value === 'email') {
      return user.email.toLowerCase().includes(term);
    }
    // Búsqueda en todos los campos
    return (
      user.name.toLowerCase().includes(term) ||
      user.email.toLowerCase().includes(term)
    );
  });
});
</script>




<template>
  <q-page class="flex flex-center q-pa-md">
    <div style="max-width: 800px;">
      <h2>CRUD de Usuarios</h2>

      <!-- Formulario de creación -->
      <div class="q-gutter-md q-mb-lg">
        <q-input v-model="newName" label="Nombre" outlined/>
        <q-input v-model="newEmail" label="Email" outlined/>
        <q-btn @click="createUser" label="Agregar" color="primary"/>
      </div>

      <!-- Lista de usuarios -->
      <q-list>
        <q-item v-for="user in filteredUsers" :key="user.id">
          <q-item-section>
            <q-item-label>{{ user.name }}</q-item-label>
            <q-item-label caption>{{ user.email }}</q-item-label>
          </q-item-section>
          <q-item-section side>
            <q-btn @click="deleteUser(user.id)" color="red" icon="delete"/>
            <q-btn @click="updateUser(user.id)" color="blue" icon="edit"/>
          </q-item-section>
        </q-item>
        
        <q-item v-if="filteredUsers.length === 0">
          <q-item-section class="text-grey text-center">
            No se encontraron resultados
          </q-item-section>
        </q-item>
      </q-list>


      <div class="q-gutter-md q-mb-lg">
        <div class="row items-center q-gutter-sm">
          <q-input v-model="searchTerm" label="Buscar usuarios..." outlined dense class="col">
            <template v-slot:append>
              <q-icon name="search" />
            </template>
          </q-input>
        </div>
      </div>
    </div>
  </q-page>
</template>
