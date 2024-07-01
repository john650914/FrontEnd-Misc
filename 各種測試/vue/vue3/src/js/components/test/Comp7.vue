<script setup>
import { computed } from 'vue';
const fn = defineModel('firstname');
const ln = defineModel('lastname');
const fullname = computed(() => fn.value + ' ' + ln.value);
</script>

<template>
全名：{{ fullname }}<br><br>
首名：<input v-model="fn" />
尾名：<input v-model="ln" />
</template>