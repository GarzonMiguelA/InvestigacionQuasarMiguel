<script setup>
    
    defineProps({
        title: String
    });

</script>

<template>
    <q-card class="my-card q-mb-md">
      <q-card-section>
        <div class="text-h6">{{ title }}</div>
        <slot></slot> 
      </q-card-section>
      <q-card-actions v-if="$slots.actions">
        <slot name="actions"></slot>
      </q-card-actions>
    </q-card>
</template>