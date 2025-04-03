<script setup>
import { ref, onMounted } from 'vue';
import { useRoute } from 'vue-router';
import { getUsers } from '../composables/getUsers';

const route = useRoute();
const user = ref(null);

onMounted(async () => {
  const storedUsers = JSON.parse(localStorage.getItem('users')) || [];
  const apiUsers = await getUsers();
  const allUsers = [...storedUsers, ...apiUsers];
  user.value = allUsers.find(u => u.id == route.params.id);
});
</script>

<template>
  <q-page class="q-pa-md">
    <div class="q-gutter-md">
      <h2>Detalles de Usuario</h2>

      <!-- Mostramos detalles del usuario -->
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


<style scoped>
.q-page {
  background: linear-gradient(to right, #eef2f3, #ffffff);
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}

.q-gutter-md {
  max-width: 600px;
  width: 100%;
  text-align: center;
}

h2 {
  font-weight: bold;
  color: #2c3e50;
  margin-bottom: 20px;
}

.q-card {
  background: #ffffff;
  border-radius: 12px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  padding: 20px;
  text-align: left;
}

.q-card-section div {
  font-size: 16px;
  margin-bottom: 10px;
  color: #34495e;
}

.q-card-section .text-h6 {
  font-size: 20px;
  font-weight: bold;
  color: #1e3799;
}

.q-btn {
  border-radius: 8px;
  margin-top: 20px;
  transition: transform 0.2s ease-in-out;
}

.q-btn:hover {
  transform: scale(1.05);
}
</style>
