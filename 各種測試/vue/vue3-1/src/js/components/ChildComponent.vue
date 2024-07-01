<script setup>
import { ref } from 'vue'
const emit = defineEmits(['update', 'delete'])

function handleClick(action) {
  if (action === 'update') {
    emit('update', 'Data to update');
  } else if (action === 'delete') {
    emit('delete', 'Data to delete');
  }
}
</script>

<template>
  <div>
    <h3>Child Component</h3>
    <button @click="handleClick('update')">Update</button>
    <button @click="handleClick('delete')">Delete</button>
  </div>
</template>


