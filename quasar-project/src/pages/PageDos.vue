<script setup>
import { ref, computed, onMounted } from 'vue';
import UserForm from '../components/UserForm.vue';
import { getUsers } from '../composables/getUsers';

//Validamos correo de user
const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

const users = ref(JSON.parse(localStorage.getItem('users')) || []);
const apiUsers = ref([]);
const apiUserIds = ref(new Set());
const searchTerm = ref('');

onMounted(async () => {
  const fetchedUsers = await getUsers();
  
  // Filtramos duplicados y almacenamos IDs de la API
  apiUsers.value = fetchedUsers.filter(apiUser => 
    !users.value.some(localUser => localUser.id === apiUser.id || localUser.email === apiUser.email)
  );

  apiUserIds.value = new Set(apiUsers.value.map(user => user.id));
});

const filteredUsers = computed(() => {
  const term = searchTerm.value.toLowerCase();
  
  return [...apiUsers.value, ...users.value].filter(user =>
    user.name.toLowerCase().includes(term) || user.email.toLowerCase().includes(term)
  );
});

const saveUsers = () => {
  localStorage.setItem('users', JSON.stringify(users.value));
};

const addUser = (user) => {
  if (!emailRegex.test(user.email)) {
    alert('El correo electrónico no es válido');
    return;
  }

  users.value.push({
    id: Date.now(),
    name: user.name,
    email: user.email,
  });
  saveUsers();
};

const deleteUser = (id) => {
  if (apiUserIds.value.has(id)) return; // Evitamos eliminar usuarios de la API

  users.value = users.value.filter(user => user.id !== id);
  saveUsers();
};

const updateUser = (id) => {
  if (apiUserIds.value.has(id)) return; // Evitamos modificacion de usuarios de la API

  const user = users.value.find(user => user.id === id);
  if (!user) return;

  const newName = prompt("Nuevo nombre:", user.name);
  const newEmail = prompt("Nuevo email:", user.email);

  // Verificamos nuevo correo
  if (newEmail && !emailRegex.test(newEmail)) {
    alert('El correo electrónico no es válido');
    return;
  }

  if (newName) user.name = newName;
  if (newEmail) user.email = newEmail;

  saveUsers();
};
</script>

<template>
  <q-page class="flex flex-center q-pa-md">
    <div style="max-width: 800px;">
      <h2>CRUD de Usuarios</h2>

      <UserForm @submit="addUser" />

      <div class="q-gutter-md q-mb-lg">
        <q-input v-model="searchTerm" label="Buscar usuarios..." outlined dense class="col">
          <template v-slot:append>
            <q-icon name="search" />
          </template>
        </q-input>
      </div>

      <q-list bordered separator>
        <!-- Bucle for para usuarios estaticos (no podemos modificar ni eliminar, SI que tienen pagina detalle) -->
        <q-item-label header>Usuarios estáticos</q-item-label>
        <q-item v-for="user in filteredUsers.filter(u => apiUserIds.has(u.id))" :key="user.id">
          <q-item-section>
            <q-item-label>
              <router-link :to="'/user/' + user.id">
                {{ user.name }}
              </router-link>
            </q-item-label>
            <q-item-label caption>{{ user.email }}</q-item-label>
          </q-item-section>
        </q-item>

        <!-- Bucle for para usuarios añadidos (podemos modificar y eliminar, pero NO tienen pagina detalle) -->
        <q-item-label header>Usuarios añadidos</q-item-label>
        <q-item v-for="user in filteredUsers.filter(u => !apiUserIds.has(u.id))" :key="user.id">
          <q-item-section>
            <q-item-label>{{ user.name }}</q-item-label>
            <q-item-label caption>{{ user.email }}</q-item-label>
          </q-item-section>
          <q-item-section side>
            <q-btn @click="deleteUser(user.id)" color="red" icon="delete" />
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
