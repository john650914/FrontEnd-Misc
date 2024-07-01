<script setup>
defineEmits(['remove']);
defineProps(['title']);
</script>

<template>
  <li>
    {{title}}
    <button @click="$emit('remove')">Remove</button>  
  </li>
</template>