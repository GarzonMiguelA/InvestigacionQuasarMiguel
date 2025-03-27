<script setup>
import { ref, computed, onMounted } from 'vue';
import UserForm from '../components/UserForm.vue';
import { getUsers } from '../composables/getUsers';  // Asegúrate de tener el composable

// Cargar usuarios desde localStorage
const users = ref(JSON.parse(localStorage.getItem('users')) || []);
const searchTerm = ref('');
const filterField = ref('todos'); // Campo para seleccionar filtro

// Cargar usuarios desde la API cuando el componente se monte
onMounted(async () => {
  const apiUsers = await getUsers();
  users.value = [...users.value, ...apiUsers];  // Agregar usuarios de la API a la lista de usuarios
});

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

// Guardar en localStorage
const saveUsers = () => {
  localStorage.setItem('users', JSON.stringify(users.value));
};

// Agregar usuario
const addUser = (user) => {
  users.value.push({
    id: Date.now(),
    name: user.name,
    email: user.email,
  });

  saveUsers();
};

// Eliminar usuario
const deleteUser = (id) => {
  users.value = users.value.filter(user => user.id !== id);
  saveUsers();
};

// Actualizar usuario
const updateUser = (id) => {
  const user = users.value.find(user => user.id === id);
  if (!user) return;

  const newName = prompt("Nuevo nombre:", user.name);
  const newEmail = prompt("Nuevo email:", user.email);

  if (newName) user.name = newName;
  if (newEmail) user.email = newEmail;

  saveUsers();
};
</script>

<template>
  <q-page class="flex flex-center q-pa-md">
    <div style="max-width: 800px;">
      <h2>CRUD de Usuarios</h2>

      <!-- Formulario de creación usando UserForm -->
      <UserForm @submit="addUser" />

      <!-- Filtro de búsqueda -->
      <div class="q-gutter-md q-mb-lg">
        <div class="row items-center q-gutter-sm">
          <q-input v-model="searchTerm" label="Buscar usuarios..." outlined dense class="col">
            <template v-slot:append>
              <q-icon name="search" />
            </template>
          </q-input>
        </div>
      </div>

      <!-- Lista de usuarios -->
      <q-list bordered separator>
        <!-- Mostrar los usuarios obtenidos de la API o almacenados en localStorage -->
        <q-item v-for="user in filteredUsers" :key="user.id">
          <q-item-section>
            <!-- Agregar enlace para los detalles del usuario -->
            <q-item-label>
              <router-link :to="'/user/' + user.id">{{ user.name }}</router-link>
            </q-item-label>
            <q-item-label caption>{{ user.email }}</q-item-label>
          </q-item-section>
          <q-item-section side>
            <!-- Botón para eliminar usuario -->
            <q-btn @click="deleteUser(user.id)" color="red" icon="delete" />
            <!-- Botón para actualizar usuario -->
            <q-btn @click="updateUser(user.id)" color="blue" icon="edit" />
          </q-item-section>
        </q-item>

        <q-item v-if="filteredUsers.length === 0">
          <q-item-section class="text-grey text-center">
            No se encontraron resultados
          </q-item-section>
        </q-item>
      </q-list>
    </div>
  </q-page>
</template>
