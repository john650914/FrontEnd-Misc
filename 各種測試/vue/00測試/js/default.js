import comp01 from './comp01.js';

const store = new Vuex.Store({
	state: {
		myState: '這是Vuex的某個state'
	}
})

export const vm = new Vue({
	el: '#app',
	store,
	components: {
		comp01
	}
});