<script setup>
import { ref } from 'vue';
import SectionCard from '../components/sectionCard.vue';

const showModal = ref(false);
const goToQuasar = () => {
  window.open('https://quasar.dev/', '_blank');
};
</script>



<template>
  <q-page class="flex flex-center q-pa-md">
    <div class="q-gutter-md" style="max-width: 800px;">
      <h2 class="q-mb-md">Investigación sobre Quasar Framework</h2>

      <SectionCard title="Introducción">
        <p>
          Quasar es un framework basado en Vue.js que permite construir aplicaciones de alto rendimiento para diversos
          entornos: desde aplicaciones web, móviles hasta aplicaciones de escritorio.
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

      <SectionCard title="Ejemplo de Componentes de Quasar">
        <q-btn @click="showModal = true" label="Mostrar Modal" color="primary" class="q-mb-md" />
        <SectionCard title="Título de la Tarjeta">
          <p>Contenido interesante en esta tarjeta. Puedes agregar más información aquí.</p>
          <template #actions>
            <q-btn label="Acción" color="primary" />
          </template>
        </SectionCard>
      </SectionCard>

      <q-dialog v-model="showModal">
        <q-card>
          <q-card-section>
            <div class="text-h6">Para más información, ¡haz clic aquí!</div>
            <div>
              <q-btn label="Ir a Quasar" color="primary" @click="goToQuasar" />
            </div>
          </q-card-section>
          <q-card-actions>
            <q-btn label="Cerrar" @click="showModal = false" color="secondary" />
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
</style>