<template>
  <q-layout view="hHh lpR fFf">
    <q-header elevated class="bg-primary text-white">
      <q-toolbar>
        <q-avatar>
          <img src="https://cdn.quasar.dev/img/avatar.png">
        </q-avatar>
        <q-toolbar-title class="text-weight-bold">
          Investigación Quasar - Miguel Ángel
        </q-toolbar-title>

        <q-tabs inline-label align="right">
          <q-route-tab to="/" label="Investigacion" icon="dashboard" />
          <q-route-tab to="/page2" label="CRUD Usuarios" icon="people" />
          <q-route-tab to="/page3" label="Informacion" icon="list_alt" />
        </q-tabs>
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
    </q-footer>
  </q-layout>
</template>