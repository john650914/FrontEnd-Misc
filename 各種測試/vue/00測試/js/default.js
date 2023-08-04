import comp01 from './comp01.js';

const store = new Vuex.Store({
	state: {
		myState: '這是Vuex的某個state'
	}
})

Vue.component('mybutton', {
	template: '<button>我是按鈕元件</button>'
});

export const vm = new Vue({
	el: '#app',
	store,
	components: {
		comp01
	}
});