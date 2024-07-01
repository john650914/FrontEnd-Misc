<script setup>
import { onBeforeMount, onMounted, onBeforeUpdate, onUpdated, onBeforeUnmount, onUnmounted, ref } from 'vue';
const msg = ref('組件已載入');

onBeforeMount(() => {
	console.log('onBeforeMount');
	//描述: 在組件掛載到 DOM 之前被調用，此時模板已經編譯完成，但還沒有替換掉 el。
	//用途: 在組件掛載到 DOM 前執行一些操作。
});
onMounted(() => {
	console.log('onMounted');
	//描述: 組件掛載到 DOM 上後調用，此時可以訪問到 DOM 節點。
	//用途: DOM 操作，第三方庫（如 D3.js 或 jQuery）的初始化。
});
onBeforeUpdate(() => {
	console.log('onBeforeUpdate');
	//描述: 當響應式數據更新時調用，發生在虛擬 DOM 重新渲染和打補丁之前。
	//用途: 在更新前執行一些操作，如在更新前手動檢查變化。
});
onUpdated(() => {
	console.log('onUpdated');
	//描述: 當響應式數據更新且虛擬 DOM 重新渲染和打補丁之後調用。
	//用途: 操作 DOM 或依賴更新的數據。
});
onBeforeUnmount(() => {
	console.log('onBeforeUnmount');
	//描述: 組件銷毀之前調用。
	//用途: 在組件銷毀前執行清理工作，如移除事件監聽器。
});
onUnmounted(() => {
	console.log('onUnmounted');
	//描述: 組件銷毀並從 DOM 中移除之後調用。
	//用途: 完成組件的清理工作，如移除全局事件監聽器或定時器。
});

//beforeCreate和created在Composition API中沒有對應的生命週期鉤子，因為它們的功能可以通過setup()函數的執行來實現。
</script>

<template>
	組件已載入<br><br>
	<button @click="msg='組件已更新'">{{ msg }}</button>
</template>