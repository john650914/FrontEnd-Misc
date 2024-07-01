import { defineStore } from 'pinia'
import axios from 'axios'

// 定義一個名為 useDataStore 的 store
export const useDataStore = defineStore('data', {
	state: () => ({
		items: [],
		loading: false,
		error: null,
	}),
	actions: {
		async fetchData() {
			this.loading = true
			this.error = null
			try {
				const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
				console.log(response.data);
				this.items = response.data;
			} catch (error) {
				this.error = error.message
			} finally {
				this.loading = false
			}

			/* const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
			this.items = response.data */
		}
	}
})
