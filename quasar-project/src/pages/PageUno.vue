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
  <q-page class="flex flex-center q-pa-md">
    <div class="q-gutter-md" style="max-width: 900px;">
      <h2 class="q-mb-md text-center text-h3">Investigación sobre Quasar</h2>
      <!-- Usare tarjetas para mostrar todos los textos: -->
      <SectionCard title="Introducción">
        <p>Quasar es un framework que se basa en Vue.js y que hace que desarrollar aplicaciones rápidas y eficientes sea mucho más fácil. Con él, puedes crear aplicaciones web, móviles y hasta de escritorio sin complicaciones.</p>
      </SectionCard>

      <SectionCard title="Características Principales de Quasar">
        <ul>
          <li><strong>Desarrollo Multiplataforma:</strong> Quasar te permite trabajar en diferentes plataformas sin tener que rehacer todo desde cero.</li>
          <li><strong>Componentes listos para Usar:</strong> Tienes más de 70 componentes para elegir, todos optimizados para una experiencia fluida.</li>
          <li><strong>Optimización:</strong> Gracias a funciones como la carga perezosa, Quasar asegura que tu aplicación sea rápida, sin importar el tamaño.</li>
          <li><strong>CLI de Quasar:</strong> Con Quasar, crear y desarrollar es más rápido y sencillo. Ya que implementa un CLI.</li>
          <li><strong>SEO Mejorado:</strong> Tambiien tiene soporte para SSR, lo que significa que tu aplicación no solo será rápida, sino también amigable con los motores de búsqueda.</li>
        </ul>
      </SectionCard>

      <SectionCard title="Ventajas de Usar Quasar">
        <ul>
          <li><strong>Rapidez y Facilidad de Uso:</strong> Puedes empezar rápido gracias a su configuración sencilla y sus componentes listos para usar.</li>
          <li><strong>Consistencia Visual:</strong> Tu aplicación siempre tendrá un diseño consistente, lo que ahorra tiempo en la personalización.</li>
          <li><strong>Adaptabilidad:</strong> Ya sea que estés creando una app web, móvil o de escritorio, Quasar tiene todo lo que necesitas.</li>
          <li><strong>Documentación Amigable:</strong> Cuenta también con una documentación clara y fácil de seguir, ideal para aprender a tu propio ritmo.</li>
        </ul>
      </SectionCard>

      <SectionCard title="Desventajas de Usar Quasar">
        <ul>
          <li><strong>Curva de Aprendizaje:</strong> Si bien Quasar nos facilita mucho el desarrollo, al principio puede resultar un poco dificl, sobretodo si es tu primer contacto con Vue.js.</li>
          <li><strong>Tamaño de la App:</strong> Cuantas más funcionalidades añades, mayor será el tamaño de la aplicación. Pero si sabes gestionar bien las dependencias, puedes optimizar el rendimiento.</li>
        </ul>
      </SectionCard>

      <SectionCard title="Casos de Uso">
        <ul>
          <li><strong>Aplicaciones de Gestión:</strong> Si necesitas crear un panel de administración o un sistema interno, Quasar es perfecto para construirlo rápidamente.</li>
          <li><strong>Aplicaciones Móviles:</strong> Usando Cordova, puedes transformar tu aplicación web en una app móvil, lo que te permite llegar a más usuarios.</li>
          <li><strong>Aplicaciones de Escritorio:</strong> Con Quasar, también puedes crear aplicaciones de escritorio usando Electron, lo que hace que tu app sea accesible desde cualquier computadora.</li>
        </ul>
      </SectionCard>

      <SectionCard title="Conclusión">
        <p>
          En resumen, Quasar es una excelente opción si buscas un framework que haga todo el trabajo pesado por ti, permitiéndote enfocarte en lo que realmente importa: crear aplicaciones increíbles.
        </p>
      </SectionCard>

      <!-- Ejemplos de 2 componentes (que no uso en otra pagina durante mi investigacion) -->
      <SectionCard title="Ejemplo de Componentes de Quasar">
        <div class="text-center">
          <q-btn @click="showModal = true" label="Clica y ves a Quasar" color="primary" class="q-mb-md" icon="launch" />
          <SectionCard title="Título de la Tarjeta">
            <p>¡Contenido interesante en cualquier tarjeta!</p>
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
  background: linear-gradient(to right, #ece9e6, #ffffff);
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}

h2 {
  font-weight: 700;
  color: #2c3e50;
  text-transform: uppercase;
}

.q-btn {
  min-width: 160px;
  border-radius: 8px;
  transition: all 0.3s ease-in-out;
}

.q-btn:hover {
  transform: scale(1.05);
}

.q-dialog .q-card {
  width: 420px;
  max-width: 90vw;
  border-radius: 12px;
}

.q-list {
  background: #ffffff;
  border-radius: 12px;
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.1);
  padding: 15px;
}

.text-center {
  text-align: center;
}

.q-card-section {
  padding: 24px;
  background: #f8f9fa;
  border-radius: 8px 8px 0 0;
}

.q-card-actions {
  padding: 12px;
  display: flex;
  justify-content: flex-end;
}

.q-mx-auto {
  margin-left: auto;
  margin-right: auto;
}

.q-btn.primary {
  background: #1976d2;
  color: #fff;
}

.q-btn.secondary {
  background: #757575;
  color: #fff;
}
</style>
