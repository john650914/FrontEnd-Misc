<script setup>
const [vModel, modifiers] = defineModel({
	set(value){
		if(modifiers.capitalize){
			return value.charAt(0).toUpperCase() + value.slice(1);
		}
		return value;
	}
});
console.log(modifiers); //{capitalize: true}
</script>
<template>
	<input type="text" v-model="vModel" />
</template>



<!-- 問chatGPG寫出來的範例，結果官網就有了 -->
<!-- <script setup>
import { ref, watch } from 'vue'

const [model, modifiers] = defineModel()
const localValue = ref(model.value)
console.log(modifiers); //{capitalize: true}

watch(model, (newValue) => {
	localValue.value = newValue
})

watch(localValue, (newValue) => {
	if (modifiers.capitalize && typeof newValue === 'string') {
		const capitalizedValue = newValue.charAt(0).toUpperCase() + newValue.slice(1)
		if (capitalizedValue !== model.value) {
			model.value = capitalizedValue
		}
	} else {
	model.value = newValue
	}
})
</script>

<template>
	<input type="text" v-model="localValue" />
</template> -->
