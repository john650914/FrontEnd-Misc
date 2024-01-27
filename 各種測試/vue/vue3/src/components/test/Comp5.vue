<script setup>
const vModel = defineModel();
function increaseVmodel(){
	vModel.value++;
}
</script>

<template>
父級的「count」：{{ vModel }}<br>
<button @click="increaseVmodel">count++</button>
</template>