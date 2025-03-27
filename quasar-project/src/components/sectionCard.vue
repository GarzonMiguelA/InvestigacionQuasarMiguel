<script setup>
    
    defineProps({
        title: String
    });

</script>

<template>
    <q-card class="my-card q-mb-md">
      <q-card-section>
        <div class="text-h6">{{ title }}</div>
        <slot></slot> <!-- Slot para el contenido -->
      </q-card-section>
      <q-card-actions v-if="$slots.actions">
        <slot name="actions"></slot> <!-- Slot para acciones (botones) -->
      </q-card-actions>
    </q-card>
</template>