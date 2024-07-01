<!-- 一開始自已做了這樣的範例，沒想到其實不用宣告updateSearchText，直接在子元件中用$emit('update:modelValue', newValue)就可以了 -->
<!-- 所以這個範例不是太正確的用法，要去看官網的範例 -->
<!-- <script setup>
defineProps(['vmodel', 'myTitle'])
defineEmits(['updateVmodel'])
</script>

<template>
  <label>{{ myTitle }} : </label>
  <input :value="vmodel" @input="$emit('updateVmodel', $event.target.value)" />
</template> -->


<!-- <script setup>
import { computed } from 'vue';
const props = defineProps(['vmodel', 'myTitle'])
const emit = defineEmits(['updateVmodel'])
const value = computed({
  get() {
    return props.vmodel
  },
  set(value) {
    emit('updateVmodel', value)
  }
})
</script>

<template>
  <label>{{ myTitle }} : </label>
  <input v-model="value" />
</template> -->