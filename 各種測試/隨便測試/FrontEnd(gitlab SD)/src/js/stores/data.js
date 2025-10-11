import { defineStore } from 'pinia'
import axios from 'axios'

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
				/* const response = await axios.post('/api/GNN/LoveBanana', {"bananaCount": 2});
				this.items = response.data;
				console.log(response.data); */
				const response = await axios({
					method: 'post',
					url: '/api/GNN/LoveBanana',
					data: { bananaCount: 2 }
				})
				this.items = response.data;
				console.log(response.data);
			} catch (error) {
				this.error = error.message
			} finally {
				this.loading = false
			}
		}
	}
})
