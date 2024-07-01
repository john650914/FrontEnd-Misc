<script setup>
import { useDataStore } from './stores/data.js'
import { storeToRefs } from 'pinia'
import { ref } from 'vue'
//import dora from '/src/assets/img/dora.png'

// 使用 data store
const dataStore = useDataStore()

// 從 store 中獲取 state 和 actions
const { items, loading, error } = storeToRefs(dataStore)
const { fetchData } = dataStore
//const img = ref(dora);
</script>

<template>
<div>
	<!-- <img :src="img" alt="Picture"> -->
	<img src="../assets/img/dora.png" alt="Picture">
	<img src="../assets/img/nobi.png" alt="Picture">
	<button @click="fetchData">獲取數據</button>
	<div v-if="loading">加載中........</div>
	<div v-if="error">錯誤：{{ error }}</div>
	<ul v-if="items.length">
		<li v-for="item in items" :key="item.id">{{ item.title }}</li>
	</ul>
</div>
</template>