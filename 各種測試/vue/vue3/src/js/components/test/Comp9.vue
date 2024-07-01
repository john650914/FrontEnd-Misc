<script setup>
import { computed } from 'vue';
const fn = defineModel('firstname', {
	get(value){
		return value.charAt(0).toUpperCase() + value.slice(1);
	},
	set(value){
		return value.charAt(0).toUpperCase() + value.slice(1);
	}
});
const ln = defineModel('lastname', {
	get(value){
		return value.charAt(0).toUpperCase() + value.slice(1);
	},
	set(value){
		return value.charAt(0).toUpperCase() + value.slice(1);
	}
});
const fullname = computed(() => fn.value + ' ' + ln.value);
</script>

<template>
全名：{{ fullname }}<br><br>
首名：<input v-model="fn" />
尾名：<input v-model="ln" />
</template>