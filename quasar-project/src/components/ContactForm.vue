<template>
    <q-form @submit.prevent="$emit('submit', formData)">
      <slot name="fields"> 
        <q-input v-model="formData.name" label="Nombre" filled />
        <q-input v-model="formData.email" label="Email" filled />
      </slot>
      <slot name="actions"> 
        <q-btn label="Enviar" type="submit" color="primary" />
      </slot>
    </q-form>
  </template>
  
<script setup>
    import { reactive } from 'vue';

    const formData = reactive({
    name: '',
    email: ''
    });

    defineEmits(['submit']);
</script>
  