<script setup>
import { ref } from 'vue';
import SectionCard from '../components/sectionCard.vue';

const showModal = ref(false);
const showAlert = () => {
  alert("¡Has hecho clic en el botón de acción!");
};
const goToQuasar = () => {
  window.open('https://quasar.dev/', '_blank');
};
</script>

<template>
  <!-- Mostrare la informacion con tarjetas: -->
  <q-page class="flex flex-center q-pa-md">
    <div class="q-gutter-md" style="max-width: 900px;">
      <h2 class="q-mb-md text-center text-h3">Investigación sobre Quasar Framework</h2>

      <SectionCard title="Introducción">
        <p>
          Quasar es un framework basado en Vue.js que permite construir aplicaciones de alto rendimiento para diversos entornos: desde aplicaciones web, móviles, hasta aplicaciones de escritorio.
        </p>
      </SectionCard>

      <SectionCard title="Características Principales de Quasar">
        <ul>
          <li><strong>Desarrollo Multiplataforma</strong>: Soporte para múltiples entornos.</li>
          <li><strong>Componentes Integrados</strong>: Más de 70 componentes UI predefinidos.</li>
          <li><strong>Optimización</strong>: Implementación de carga perezosa y tree shaking.</li>
          <li><strong>CLI de Quasar</strong>: Facilita la creación y el desarrollo de aplicaciones.</li>
          <li><strong>Soporte para SSR y SEO</strong>: Mejor rendimiento en SEO.</li>
        </ul>
      </SectionCard>

      <SectionCard title="Ventajas de Usar Quasar">
        <ul>
          <li><strong>Rapidez y Facilidad de Uso</strong>: Configuración rápida y componentes preconstruidos.</li>
          <li><strong>Consistencia</strong>: Diseño coherente en toda la aplicación.</li>
          <li><strong>Adaptabilidad</strong>: Compatible con múltiples plataformas.</li>
          <li><strong>Documentación Completa</strong>: Facilita el aprendizaje.</li>
        </ul>
      </SectionCard>

      <SectionCard title="Desventajas de Usar Quasar">
        <ul>
          <li><strong>Curva de Aprendizaje</strong>: Puede ser difícil al inicio.</li>
          <li><strong>Tamaño de la Aplicación</strong>: Puede aumentar si se incluyen muchas funcionalidades.</li>
        </ul>
      </SectionCard>

      <SectionCard title="Casos de Uso">
        <ul>
          <li><strong>Aplicaciones de Gestión</strong>: Paneles de administración.</li>
          <li><strong>Aplicaciones Móviles</strong>: Creación de apps con Cordova.</li>
          <li><strong>Aplicaciones de Escritorio</strong>: Soporte para Electron.</li>
        </ul>
      </SectionCard>

      <SectionCard title="Conclusión">
        <p>
          Quasar es un framework robusto y completo que facilita el desarrollo de aplicaciones modernas con Vue.js.
        </p>
      </SectionCard>

      <!-- Ejemplos de 2 componentes (que no uso en otra pagina durante mi investigacion) -->
      <SectionCard title="Ejemplo de Componentes de Quasar">
        <div class="text-center">
          <q-btn @click="showModal = true" label="Mostrar Modal" color="primary" class="q-mb-md" icon="launch" />
          <SectionCard title="Título de la Tarjeta">
            <p>Contenido interesante en esta tarjeta. Puedes agregar más información aquí.</p>
            <template #actions>
              <q-btn label="Acción" color="primary" icon="edit" @click="showAlert" class="q-mx-auto" />
            </template>
          </SectionCard>
        </div>
      </SectionCard>

      <q-dialog v-model="showModal" persistent>
        <q-card>
          <q-card-section>
            <div class="text-h6">Para más información, ¡haz clic aquí!</div>
            <div>
              <q-btn label="Ir a Quasar" color="primary" @click="goToQuasar" class="q-mt-md" icon="open_in_new" />
            </div>
          </q-card-section>
          <q-card-actions>
            <q-btn label="Cerrar" @click="showModal = false" color="secondary" flat icon="close" />
          </q-card-actions>
        </q-card>
      </q-dialog>
    </div>
  </q-page>
</template>

<style scoped>
.q-page {
  background-color: #f9f9f9;
}

h2 {
  font-weight: bold;
  color: #1e1e1e;
}

.q-btn {
  min-width: 150px;
}

.q-dialog .q-card {
  width: 400px;
  max-width: 90vw;
}

.q-list {
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.text-center {
  text-align: center;
}

.q-card-section {
  padding: 20px;
}

.q-card-actions {
  padding: 10px;
}

.q-mx-auto {
  margin-left: auto;
  margin-right: auto;
}
</style>