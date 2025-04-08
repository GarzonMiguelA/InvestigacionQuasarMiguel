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
    <div class="q-gutter-md" style="max-width: 900px;">
      <h2 class="q-mb-md text-center text-h3">Documentación y Análisis del Framework Quasar</h2>

      <SectionCard title="Componentes usados en mi aplicación">
        <p>Durante el desarrollo de esta aplicación con Quasar he utilizado varios componentes del propio framework y también he creado algunos míos para adaptarlos a lo que necesitaba. Aquí te dejo un repaso de los más importantes:</p>
        
        <h4>Componentes de Quasar</h4>
        <p>Estos son los que me proporciona Quasar ya listos para usar y que me han venido genial:</p>

        <ul>
          <li><strong><code>q-btn</code>:</strong> Es un botón que uso para muchas cosas, como abrir modales, enviar formularios o lanzar alguna acción dentro de las tarjetas.</li>
          <li><strong><code>q-dialog</code>:</strong> Me permite mostrar ventanas modales para dar más información o confirmar acciones sin tener que salir de la página.</li>
          <li><strong><code>q-card</code>:</strong> Son tarjetas donde meto información. Las uso para estructurar secciones dentro de la app.</li>
          <li><strong><code>q-card-section</code>:</strong> Esto lo uso dentro de las tarjetas para separar contenido en distintas partes, por ejemplo el título, el texto, etc.</li>
          <li><strong><code>q-card-actions</code>:</strong> Aquí meto los botones o acciones dentro de las tarjetas. Suelen ir abajo, como para aceptar o cerrar.</li>
          <li><strong><code>q-page</code>:</strong> Es como el contenedor principal de cada página. Me ayuda a definir el diseño y aplicar estilos generales.</li>
          <li><strong><code>q-avatar</code>:</strong> Lo utilizo para mostrar imágenes redondas, como avatares de usuario.</li>
          <li><strong><code>q-toolbar-title</code>:</strong> Es el título que pongo en la cabecera de la app. Va dentro de una <code>q-toolbar</code>.</li>
          <li><strong><code>q-layout</code>:</strong> Me sirve para organizar toda la estructura de la aplicación: cabecera, contenido principal, menús laterales, etc.</li>
          <li><strong><code>q-header</code>:</strong> Lo uso para crear la parte superior de la app donde va el título o el logo.</li>
          <li><strong><code>q-list</code>:</strong> Para mostrar listas de elementos, como por ejemplo el menú o una lista de opciones.</li>
          <li><strong><code>q-item</code>:</strong> Es cada ítem que forma parte de una lista. Por ejemplo, cada opción del menú.</li>
          <li><strong><code>q-item-section</code>:</strong> Divide el contenido de cada ítem. Por ejemplo, un lado con el icono y otro con el texto.</li>
          <li><strong><code>q-item-label</code>:</strong> Es el texto o la etiqueta que muestro dentro de un ítem de lista.</li>
        </ul>

        <h4>Componentes que he creado yo</h4>
        <p>Aparte de los que me da Quasar, también he hecho algunos componentes propios para tener el código más limpio y reutilizable:</p>

        <ul>
          <li><strong><code>sectionCard.vue</code>:</strong> Es una tarjeta que uso como plantilla para mostrar distintas secciones. Le paso un título y el contenido se coloca dentro, así queda todo más uniforme.</li>
          <li><strong><code>contactForm.vue</code>:</strong> Es un formulario para recoger datos de contacto del usuario, como el nombre o el correo. Uso <code>q-input</code> y <code>q-btn</code> para que sea fácil de usar.</li>
          <li><strong><code>UserForm.vue</code>:</strong> Similar al anterior, pero más completo. Sirve para crear o editar usuarios, con campos como dirección, teléfono, etc.</li>
        </ul>
      </SectionCard>

      <SectionCard title="API utilizada en el proyecto">
        <p>Para esta práctica estoy usando una API pública que devuelve datos falsos de usuarios, lo cual viene bien para hacer pruebas.</p>

        <h4>API</h4>
        <p>La API es <a href="https://jsonplaceholder.typicode.com/users" target="_blank">JSONPlaceholder</a>. Tiene datos de usuarios como nombre, correo, dirección...</p>

        <h4>Cómo la uso en el proyecto</h4>
        <p>Hago una petición HTTP GET con Axios para obtener los datos y luego los muestro en una partes de la aplicación, como en la pagina page2.vue</p>

        <h4>Funciones que he implementado con esa API</h4>
        <ul>
          <li><strong>Ver usuarios:</strong> Los muestro en una card, con datos como nombre, correo, etc.</li>
          <li><strong>Buscar usuarios:</strong> Puedo filtrar los usuarios por nombre o email gracias a un input de búsqueda.</li>
          <li><strong>Editar usuarios:</strong> Al hacer clic en un usuario, sus datos se cargan en un formulario para poder modificarlos y guardarlos.</li>
          <li><strong>Ver detalles de un usuario:</strong> Cada usuario tiene un enlace que lleva a userLink.vue, donde se muestra una tarjeta con información detallada como nombre, email, dirección, compañía, etc. Esto lo hago combinando datos guardados en localStorage con los obtenidos desde la API pública. El archivo usa getUsers y useRoute para cargar los datos correctamente según el ID de la ruta.</li>
          <li><strong>Limitaciones:</strong> Como los usuarios de la API pública son solo de lectura, no se pueden modificar ni eliminar. En cambio, los usuarios añadidos manualmente no tienen esta tarjeta de detalles, pero sí se pueden editar o eliminar desde la tabla principal.</li>
        </ul>
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
