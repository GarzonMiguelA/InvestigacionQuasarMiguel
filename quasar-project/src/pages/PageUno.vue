<template>
  <q-page class="flex flex-center q-pa-md">
    <div class="q-gutter-md" style="max-width: 800px;">
      <h2 class="q-mb-md">Investigación sobre Quasar Framework</h2>

      <section>
        <h3>Introducción</h3>
        <p>
          Quasar es un framework basado en Vue.js que permite construir aplicaciones de alto rendimiento para diversos
          entornos: desde aplicaciones web, móviles hasta aplicaciones de escritorio. Ofrece una gran cantidad de
          componentes y herramientas predefinidas que facilitan la creación de aplicaciones modernas y optimizadas.
        </p>
      </section>

      <section>
        <h3>Características Principales de Quasar</h3>
        <ul>
          <li><strong>Desarrollo Multiplataforma</strong>: Soporte para aplicaciones web, móviles (PWA, Cordova) y de
            escritorio (Electron), además de SSR (Server-Side Rendering).</li>
          <li><strong>Componentes Integrados</strong>: Más de 70 componentes UI predefinidos listos para usar, como
            botones, formularios, tablas, etc.</li>
          <li><strong>Optimización</strong>: Implementación de carga perezosa (lazy loading) y tree shaking para reducir
            el tamaño de la aplicación.</li>
          <li><strong>CLI de Quasar</strong>: Un CLI potente que facilita la creación y el desarrollo de aplicaciones.
          </li>
          <li><strong>Soporte para SSR y SEO</strong>: Mejor rendimiento en SEO gracias al renderizado en el servidor.
          </li>
        </ul>
      </section>

      <section>
        <h3>Ventajas de Usar Quasar</h3>
        <ul>
          <li><strong>Rapidez y Facilidad de Uso</strong>: Configuración rápida y componentes preconstruidos que
            facilitan el desarrollo.</li>
          <li><strong>Consistencia</strong>: Diseño coherente y uniforme en toda la aplicación.</li>
          <li><strong>Adaptabilidad</strong>: Compatible con múltiples plataformas sin modificar el código base.</li>
          <li><strong>Documentación Completa</strong>: La documentación es extensa y clara, facilitando el aprendizaje.
          </li>
        </ul>
      </section>

      <section>
        <h3>Desventajas de Usar Quasar</h3>
        <ul>
          <li><strong>Curva de Aprendizaje</strong>: Puede haber una curva inicial para quienes no están familiarizados
            con Vue.js o con frameworks grandes.</li>
          <li><strong>Tamaño de la Aplicación</strong>: Aunque tiene optimizaciones, el tamaño del bundle puede ser
            mayor si se incluyen muchas funcionalidades.</li>
        </ul>
      </section>

      <section>
        <h3>Casos de Uso</h3>
        <ul>
          <li><strong>Aplicaciones de Gestión</strong>: Ideal para construir paneles de administración y sistemas de
            gestión.</li>
          <li><strong>Aplicaciones Móviles</strong>: Soporta la creación de apps móviles con Cordova.</li>
          <li><strong>Aplicaciones de Escritorio</strong>: Permite crear aplicaciones de escritorio con Electron.</li>
        </ul>
      </section>

      <section>
        <h3>Conclusión</h3>
        <p>
          Quasar es un framework robusto y completo que facilita el desarrollo de aplicaciones modernas con Vue.js.
          Gracias a su amplio conjunto de herramientas y componentes, es ideal tanto para desarrolladores experimentados
          como para principiantes. Aunque tiene una pequeña curva de aprendizaje, las ventajas que ofrece en términos de
          productividad y optimización hacen que valga la pena considerarlo para tus proyectos.
        </p>
      </section>

      <!-- Componentes de Quasar -->
      <section>
        <h3>Ejemplo de Componentes de Quasar</h3>

        <!-- Botón -->
        <q-btn @click="showModal = true" label="Mostrar Modal" color="primary" class="q-mb-md" />

        <!-- Tarjeta -->
        <q-card class="my-card">
          <q-card-section>
            <div class="text-h6">Título de la Tarjeta</div>
            <div>Contenido interesante en esta tarjeta. Puedes agregar más información aquí.</div>
          </q-card-section>
          <q-card-actions>
            <q-btn label="Acción" color="primary" />
          </q-card-actions>
        </q-card>

        <!-- Modal -->
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
      </section>
    </div>
  </q-page>
</template>

<script setup>
import { ref } from 'vue';

const showModal = ref(false);

// Función para abrir el enlace de Quasar
const goToQuasar = () => {
  window.open('https://quasar.dev/', '_blank');
};
</script>

<style scoped>
.q-page {
  background-color: #f9f9f9;
}
</style>
