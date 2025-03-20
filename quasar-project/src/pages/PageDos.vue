<script setup>
import { ref } from 'vue';

const users = ref([]);

const newName = ref('');
const newEmail = ref('');

const createUser = () => {
    users.value.push({
        id: String(Date.now()),
        name: newName.value,
        email: newEmail.value
    });
    newName.value = '';
    newEmail.value = '';
};

// Eliminar usuario
const deleteUser = (id) => {
    users.value = users.value.filter(user => user.id !== id);
};

// Actualizar usuario
const updateUser = (id) => {
    const index = users.value.findIndex(user => user.id === id);
    if (index !== -1) {
        const newName = prompt('Nuevo nombre:', users.value[index].name);
        if (newName) {
            users.value.splice(index, 1, {
                ...users.value[index],
                name: newName
            });
        }
    }
};
</script>

<template>
  <q-page class="flex flex-center q-pa-md">
    <div style="max-width: 800px;">
      <h2>CRUD de Usuarios </h2>
      
      <!-- Formulario de creación -->
      <div class="q-gutter-md q-mb-lg">
        <q-input v-model="newName" label="Nombre" outlined/>
        <q-input v-model="newEmail" label="Email" outlined/>
        <q-btn @click="createUser" label="Agregar" color="primary"/>
      </div>

      <!-- Lista de usuarios -->
      <q-list bordered>
        <q-item v-for="user in users" :key="user.id">
          <q-item-section>
            <q-item-label>{{ user.name }}</q-item-label>
            <q-item-label caption>{{ user.email }}</q-item-label>
          </q-item-section>
          <q-item-section side>
            <q-btn @click="deleteUser(user.id)" color="red" icon="delete"/>
            <q-btn @click="updateUser(user.id)" color="blue" icon="edit"/>
          </q-item-section>
        </q-item>
      </q-list>
    </div>
  </q-page>
</template>