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

<style scoped>
.my-card {
  transition: transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out;
}

.my-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 6px 15px rgba(0, 0, 0, 0.1);
}
</style>
