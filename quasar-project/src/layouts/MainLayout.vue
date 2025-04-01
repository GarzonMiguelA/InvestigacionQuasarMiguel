<template>
  <q-layout view="hHh lpR fFf">
    <q-header elevated class="bg-primary text-white">
      <q-toolbar>
        <slot name="header-left">
          <q-avatar>
            <img src="https://w7.pngwing.com/pngs/340/946/png-transparent-avatar-user-computer-icons-software-developer-avatar-child-face-heroes-thumbnail.png">
          </q-avatar>
          <q-toolbar-title class="text-weight-bold">
            Investigación Quasar - Miguel Ángel
          </q-toolbar-title>
        </slot>

        <slot name="header-right">
          <q-tabs inline-label align="right">
            <q-route-tab to="/" label="Investigacion" icon="dashboard" />
            <q-route-tab to="/page2" label="CRUD Usuarios" icon="people" />
            <q-route-tab to="/page3" label="Informacion" icon="list_alt" />
          </q-tabs>
        </slot>
      </q-toolbar>
    </q-header>

    <q-page-container>
      <router-view />
    </q-page-container>

    <q-footer elevated class="bg-grey-8 text-white">
      <q-toolbar>
        <q-toolbar-title class="text-center text-caption">
          © 2023 Sistema de Gestión - Versión 1.0.0
        </q-toolbar-title>
      </q-toolbar>
      <div class="q-mt-md text-center">
        <p class="text-caption">Desarrollado por Miguel Ángel Garzón Huerta</p>
      </div>
    </q-footer>

  </q-layout>
</template>