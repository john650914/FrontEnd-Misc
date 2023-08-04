const comp01 = {
	template: `
		<div>
			<h2>這是comp01.js的HTML</h2>
			<div>{{myState}}</div>
			<inner-comp></inner-comp>
			<button @click="alertt">點我</button>
		</div>
	`,
	data: function(){
		return{
			myData: '元件內的data'
		}
	},
	methods: {
		alertt(){
			alert(this.myData);
		}
	},
	computed: Vuex.mapState([
		'myState',
	])
	/* computed: {
		myState(){
			return this.$store.state.myState;
		}
	} */
};

Vue.component('inner-comp', {
	template: `
		<div>
			<h2>這是inner-comp的HTML</h2>
			<div>{{myState}}</div>
			<mybutton></mybutton>
		</div>
	`,
	computed: Vuex.mapState([
		'myState',
	])
});

export default comp01;