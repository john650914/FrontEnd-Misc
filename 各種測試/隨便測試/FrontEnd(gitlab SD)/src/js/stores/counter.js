import { defineStore } from 'pinia'

// 定義一個名為 useCounterStore 的 store
export const useCounterStore = defineStore('counter', {
	// state 屬性定義狀態
	state: () => ({
		count: 0
	}),
	// getters 屬性定義計算屬性
	getters: {
		doubleCount: (state) => state.count * 2
	},
	// actions 屬性定義方法來修改狀態
	actions: {
		increment() {
			this.count++
		}
	}
})
