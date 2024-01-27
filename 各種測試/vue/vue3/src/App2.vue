<!-- 想要快速体验 Vue，你可以直接试试我们的演练场 -->
<!-- https://play.vuejs.org/ -->



<!----------------------------------------- 简介 -> 单文件组件 ----------------------------------------->
<!-- <script setup>
import { ref } from 'vue';
const count = ref(0);
</script>
<template>
	<button @click="count++">count is: {{ count }}</button>
</template>
<style>
button{
	font-weight: bold;
}
</style> -->



<!----------------------------------------- 简介 -> 组合式 API (Composition API) ----------------------------------------->
<!-- <script setup>
import { ref, onMounted } from 'vue';
const count = ref(0);
function increment(){
	count.value++;
}
onMounted(()=>{
	console.log(`The initial count is: ${count.value}.`);
});
</script>
<template>
	<button @click="increment">count is: {{ count }}</button>
</template> -->



<!----------------------------------------- 模板语法 -> 原始 HTML ----------------------------------------->
<!-- <script setup>
import { ref } from 'vue';
const rawHtml = ref('<span>This is html content.</span>');
</script>
<template>
	<p v-html="rawHtml"></p>
</template>
<style>span{color:red;}</style> -->



<!----------------------------------------- 模板语法 -> Attribute 绑定 ----------------------------------------->
<!-- :title是v-bind:title的缩写 -->
<!-- <script setup>
import { ref } from 'vue';
const dynamicTitle = ref('Div Title');
</script>
<template>
	<div :title="dynamicTitle">Div Content</div>
</template> -->



<!----------------------------------------- 模板语法 -> 布尔型 Attribute ----------------------------------------->
<!-- <script setup>
import { ref } from 'vue';
const isButtonDisabled = ref(true);
</script>
<template>
	<button :disabled="isButtonDisabled">Button</button>
</template> -->



<!----------------------------------------- 模板语法 -> 动态绑定多个值 ----------------------------------------->
<!-- <script setup>
import { ref } from 'vue';
const objectOfAttrs = ref({
	id: 'container',
	class: 'wrapper'
});
</script>
<template>
	<div v-bind="objectOfAttrs">Div Content</div>
</template> -->



<!----------------------------------------- 模板语法 -> 使用 JavaScript 表达式 ----------------------------------------->
<!-- <script setup>
import { ref } from 'vue';
const myTitle = ref('Science');
const myNumber = ref(1);
const isOK = ref(true);
const msg = ref('123456');
</script>
<template>
	<div :title="`title-${myTitle}`">Subject Title is {{ myTitle }}</div>
	<div>myNumber + 1 = {{ myNumber+1 }}</div>
	<div>Is it OK？ {{ isOK ? 'YES' : 'NO' }} !</div>
	<div>Reversed msg is: {{ msg.split('').reverse().join('') }}</div>
</template> -->



<!----------------------------------------- 模板语法 -> 调用函数 ----------------------------------------->
<!-- 不知道他這個範例要幹嘛，不是用computed就可以了嗎？可能是還沒介紹到computed吧 -->
<!-- <script setup>
import { ref } from 'vue';
const date = ref(new Date());
function toTitleDate(p){
	return p.toDateString();
}
function formatDate(p){
	return p.toLocaleDateString();
}
</script>
<template>
	<time :title="toTitleDate(date)" :datetime="date">
		{{ formatDate(date) }}
	</time>
</template> -->



<!----------------------------------------- 模板语法 -> 指令 Directives、参数 Arguments、动态参数 ----------------------------------------->
<!-- 有一些注意事項，例如屬性只能小寫等等，要去官網看 -->
<!-- <script setup>
import { ref } from 'vue';
const seen = ref(true);
const url = ref('https://www.google.com');
const myEvent = ref('mouseleave');
function toogleFN(){
	seen.value = !seen.value;
}
function myAlert(){
	alert(123);
}
</script>
<template>
	<p v-if="seen">你看的到我</p>
	<p v-if="!seen">你看不到我</p>
	<button @click="toogleFN">切換內容</button>
	<br><br><hr><br>
	<a :href="url">這是一個連結</a>
	<br><br><hr><br>
	<button @[myEvent]="myAlert">動態事件參數</button>
</template> -->



<!----------------------------------------- 模板语法 -> 修饰符 Modifiers ----------------------------------------->
<!-- <script setup>
function consoleFN(){
	console.log(132);
}
</script>
<template>
	<form @submit.prevent="consoleFN">
		<button>送出</button>
	</form>
</template> -->



<!----------------------------------------- 声明响应式状态 -> ref() ----------------------------------------->
<!-- <script setup>
import { ref } from 'vue';
const count = ref(0);
console.log(count) // { value: 0 }
console.log(count.value) // 0
count.value++
console.log(count.value) // 1
function increment(){
	count.value++;
}
</script>
<template>
	count is : {{ count }}
	<br>
	<button @click="count++">count++</button>
	<br>
	<button @click="increment">increment()</button>
</template> -->



<!----------------------------------------- 声明响应式状态 -> reactive() ----------------------------------------->
<!-- <script setup>
import { reactive } from 'vue';
const state = reactive({count:0});
</script>
<template>
	<button @click="state.count++">{{state.count}}</button>
</template> -->



<!----------------------------------------- 计算属性 -> 基础示例 ----------------------------------------->
<!-- <script setup>
import { reactive, computed } from 'vue';
const author = reactive({
	name: 'John Doe',
	books: [
		'Vue 2 - Advanced Guide',
		'Vue 3 - Basic Guide',
		'Vue 4 - The Mystery'
	]
})
const hasPublishedBooks = computed(()=>{
	return author.books.length > 0 ? 'Yes' : 'No';
});
</script>
<template>
	<div>{{author.name}} has published books?</div>
	<b>{{hasPublishedBooks}} !</b>
</template> -->



<!----------------------------------------- 计算属性 -> 可写计算属性 ----------------------------------------->
<!-- <script setup>
import { ref, computed } from 'vue'
const firstName = ref('John')
const lastName = ref('Doe')
const fullName = computed({
	get() {
		return firstName.value + ' ' + lastName.value
	},
	set(newValue) {
		// 注意：我们这里使用的是解构赋值语法
		[firstName.value, lastName.value] = newValue.split(' ')
	}
})
function updateFullName(newName){
	fullName.value = newName;
}
</script>
<template>
	{{fullName}}<br>
	<button @click="updateFullName('Michael Jackson')">按我更新fullname</button>
</template> -->



<!----------------------------------------- 承上 ----------------------------------------->
<!-- 官網的範例寫的不清不楚，跑去問chatgpt，下面是說明還有chatgpt的範例：
當你希望在Vue中使用computed屬性時，同時也希望能設置該屬性的值，你可以使用 getter 和 setter。
這個例子中，computedValue 是一個帶有 getter 和 setter 的 computed 屬性。當你設置 computedValue 時，實際上是在設置 name，
而 name 又是 computedValue 的計算結果。這樣的設置使得你可以像設置正常屬性一樣來設置 computedValue。 -->
<!-- <script setup>
import { ref, computed } from 'vue'
const name = ref('John');
const computedValue = computed({
	get(){
		return name.value;
	},
	set(newValue){
		name.value = newValue;
	}
});
function changeComputed(p){
	computedValue.value = p;
}
</script>
<template>
	<button @click="changeComputed('醬')">點我</button>
	{{computedValue}}
</template> -->



<!----------------------------------------- 类与样式绑定 -> 绑定 HTML class ----------------------------------------->
<!-- <style scoped>
.active{font-size:30px;font-weight:bold;}
.error{color:red;}
</style> -->

<!-- <script setup>
import { ref } from 'vue'
const isActive = ref(true)
const isError = ref(true)
</script>
<template>
	<div class="static" :class="{ active: isActive, 'error': isError }">這是內容文字</div>
</template> -->

<!-- 直接绑定一个对象 -->
<!-- <script setup>
import { reactive } from 'vue'
const classObj = reactive({
	active: true,
	error: true
});
</script>
<template>
	<div class="static" :class="classObj">這是內容文字</div>
</template> -->

<!-- 绑定一个返回对象的计算属性 -->
<!-- <script setup>
import { ref, computed } from 'vue'
const isActive = ref(true);
const isError = ref(1);
const classObj = computed(()=>({
		active: isActive.value && !isError.value,
		error: isError.value
	}));
</script>
<template>
	<div class="static" :class="classObj">這是內容文字</div>
</template> -->

<!-- 绑定数组 -->
<!-- <script setup>
import { ref } from 'vue'
const isActive = ref('active');
const isError = ref('error');
</script>
<template>
	<div class="static" :class="[isActive, isError]">這是內容文字</div>
</template> -->

<!-- 在数组中有条件地渲染某个 class，你可以使用三元表达式 -->
<!-- <script setup>
import { ref } from 'vue'
const isActive = ref(true);
const isError = ref('error');
</script>
<template>
	<div class="static" :class="[isActive ? 'active' : '', isError]">這是內容文字</div>
</template> -->

<!-- 也可以在数组中嵌套对象 -->
<!-- <script setup>
import { ref } from 'vue'
const isActive = ref(true);
const isError = ref('error');
</script>
<template>
	<div class="static" :class="[{active: isActive}, isError]">這是內容文字</div>
</template> -->



<!----------------------------------------- 类与样式绑定 -> 在组件上使用 ----------------------------------------->
<!-- <script setup>
import Comp1 from './components/test/Comp1.vue'
</script>
<template>
	<Comp1 class="three four" />
</template> -->

<!-- Class 的绑定也是同样的 -->
<!-- <script setup>
import Comp1 from './components/test/Comp1.vue'
import { ref } from 'vue'
const isFour = ref(true);
</script>
<template>
	<Comp1 :class="['three', {four: isFour}]" />
</template> -->

<!-- 可以通过组件的 $attrs 属性来实现指定 -->
<!-- <script setup>
import Comp2 from './components/test/Comp2.vue'
import { ref } from 'vue'
</script>
<template>
	<Comp2 :class="['second']" />
</template> -->



<!----------------------------------------- 类与样式绑定 -> 绑定内联样式 ----------------------------------------->
<!-- <script setup>
import { ref } from 'vue'
const activeColor = ref('red');
const fontSize = ref(30);
</script>
<template>
	<div :style="{color: activeColor, fontSize: fontSize + 'px'}">這是內容文字</div>
</template> -->

<!-- 直接绑定一个样式对象 -->
<!-- <script setup>
import { reactive } from 'vue'
const styleObj = reactive({
	color: 'red',
	fontSize: '30px'
});
</script>
<template>
	<div :style="styleObj">這是內容文字</div>
</template> -->

<!-- 绑定一个包含多个样式对象的数组 -->
<!-- <script setup>
import { reactive } from 'vue'
const baseStyles = reactive({
	color: 'red',
	fontSize: '30px'
});
const overridingStyles = reactive({
	fontWeight: 'bold'
});
</script>
<template>
	<div :style="[baseStyles, overridingStyles]">這是內容文字</div>
</template> -->

<!-- 可以对一个样式属性提供多个 (不同前缀的) 值 -->
<!-- <template>
	<div :style="{ display: ['-webkit-box', '-ms-flexbox', 'flex'] }">這是內容文字</div>
</template> -->



<!----------------------------------------- 条件渲染 -> v-if ----------------------------------------->
<!-- <script setup>
import { ref } from 'vue'
const isShow = ref(true);
</script>
<template>
	<div v-if="isShow">這是內容文字</div>
</template> -->

<!-- v-else -->
<!-- <script setup>
import { ref } from 'vue'
const awesome = ref(true);
</script>
<template>
	<button @click="awesome = !awesome">Toggle</button>
	<h1 v-if="awesome">Vue is awesome!</h1>
	<h1 v-else>Oh no 😢</h1>
</template> -->

<!-- v-else-if -->
<!-- <script setup>
import { ref } from 'vue'
const type = ref('C');
</script>
<template>
	<div v-if="type === 'A'">A</div>
	<div v-else-if="type === 'B'">B</div>
	<div v-else-if="type === 'C'">C</div>
	<div v-else>Not A/B/C</div>
</template> -->

<!-- <template> 上的 v-if -->
<!-- <script setup>
import { ref } from 'vue'
const isOK = ref(true);
</script>
<template v-if="isOK">
	<template v-if="isOK">
		<p>內容OK！</p>
	</template>
	<template v-else>
		<p>內容不OK！</p>
	</template>
</template> -->

<!-- v-show -->
<!-- <script setup>
import { ref } from 'vue'
const isShow = ref(true);
</script>
<template>
	<div v-show="isShow">這是v-show的內容文字</div>
</template> -->



<!----------------------------------------- 列表渲染 -> 基于一个数组来渲染一个列表 ----------------------------------------->
<!-- <script setup>
import { reactive } from 'vue'
const books = reactive(['Harry Potter', 'The Lord of the Rings']);
</script>
<template>
	<ul>
		<li v-for="v of books">{{v}}</li>
	</ul>
</template> -->

<!-- 可以完整地访问父作用域内的属性和变量 --><!-- 支持使用可选的第二个参数表示当前项的位置索引 -->
<!-- <script setup>
import { ref } from 'vue';
const unit = ref('Book');
const books = ref(['Harry Potter', 'The Lord of the Rings']);
</script>
<template>
	<ul>
		<li v-for="(v, i) in books">
			{{unit}} {{i+1}} : {{v}}
		</li>
	</ul>
</template> -->

<!-- 也可以在定义 v-for 的变量别名时使用解构 -->
<!-- <script setup>
import { ref } from 'vue';
const books = ref([{book:'Harry Potter', year:1999}, {book:'The Lord of the Rings', year:2000}]);
</script>
<template>
	<ul>
		<li v-for="{book, year} in books">{{book}} - {{year}}</li>
	</ul>
</template> -->

<!-- 多层嵌套的 v-for -->
<!-- <script setup>
import { ref } from 'vue';
const chainRestaurant = ref([
	{
		brand: '麥當勞',
		foods: ['漢堡', '炸雞', '可樂']
	},
	{
		brand: 'Subway',
		foods: ['潛艇堡', '沙拉', '餅干']
	},
	{
		brand: '達美樂',
		foods: ['比蕯', '烤雞翅', '玉米濃湯']
	}
]);
</script>
<template>
	<ol>
		<li v-for="item in chainRestaurant">
			{{item.brand}}
			<ul>
				<li v-for="food in item.foods">{{food}}</li>
			</ul>
		</li>
	</ol>
</template> -->

<!-- 也可以使用 v-for 来遍历一个对象的所有属性 -->
<!-- <script setup>
import { reactive } from 'vue';
const book = reactive({
	title: 'The Lord of the Rings',
	author: 'J.R.R. Tolkien',
	year: '1954'
});
</script>
<template>
	<div v-for="(value, objKey, index) in book">
		{{index + 1}}. {{objKey}}: {{value}}
	</div>
</template> -->

<!-- v-for 可以直接接受一个整数值 -->
<!-- <template>
	<span v-for="n in 10">{{n}}&nbsp;</span>
</template> -->

<!-- <template> 上的 v-for -->
<!-- <template>
	<template v-for="n in 10">
		<span>{{n}}</span>
		<span v-if="n < 10"> | </span>
	</template>
</template> -->

<!-- 为每个元素对应的块提供一个唯一的 key attribute -->
<!-- <script setup>
import { ref } from 'vue';
const books = ref([{book:'Harry Potter', year:1999}, {book:'The Lord of the Rings', year:2000}]);
</script>
<template>
	<ul>
		<li v-for="v in books" :key="v.book">
			{{v.book}} - {{v.year}}
		</li>
	</ul>
</template> -->

<!-- 直接在组件上使用 v-for -->
<!-- <script setup>
import { ref } from 'vue';
import TodoItem from './components/test/Comp3.vue';
const newTodoTitle = ref('');
const todoList = ref([
	{id:1, title:'Do the dishes'},
	{id:2, title:'Take out the trash'},
	{id:3, title:'Mop the floor'}
]);
let newTodoId = todoList.value.length + 1;
function addItem(){
	if(newTodoTitle.value != ''){
		todoList.value.push({
			id: newTodoId++,
			title: newTodoTitle.value
		});
		newTodoTitle.value = '';
	}else{
		alert('Please enter your todo item.');
	}
}
function removeItem(index){
	todoList.value.splice(index, 1);
}
</script>
<template>
	<label>Add a todo: </label>
	<input type="text" placeholder="Enter a todo item" v-model="newTodoTitle" />
	<button @click="addItem">Add</button>
	<ul>
		<todo-item v-for="(v, i) in todoList" :title="v.title" :key="v.id" @remove="removeItem(i)" />
	</ul>
</template> -->

<!-- 返回已过滤或已排序数组的计算属性 -->
<!-- <script setup>
	import { ref, computed } from 'vue';
	const numbers = ref([1, 2, 3, 4, 5]);
	const evenNumbers = computed(()=>{
	return numbers.value.filter(n => n % 2 == 0);
	});
</script>
<template>
	<ul>
	<li v-for="v in evenNumbers">{{v}}</li>
	</ul>
</template> -->

<!-- 在计算属性不可行的情况下 -->
<!-- <script setup>
import { ref } from 'vue';
const sets = ref([
	[1, 2, 3, 4, 5],
	[6, 7, 8, 9, 10]
])
function even(numbers) {
	return numbers.filter((number) => number % 2 === 0)
}
</script>
<template>
	<ul v-for="numbers in sets">
		<li v-for="n in even(numbers)">{{ n }}</li>
	</ul>
</template> -->



<!----------------------------------------- 事件处理 -> 内联事件处理器 ----------------------------------------->
<!-- <script setup>
import { ref } from 'vue';
const count = ref(0);
</script>
<template>
<button @click="count++">按我加1</button>
<p>{{count}}</p>
</template> -->

<!-- 方法事件处理器 -->
<!-- <script setup>
import { ref } from 'vue';
const count = ref(0);
function increase(){
	count.value++;
}
</script>
	<template>
	<button @click="increase">按我加1</button>
	<p>{{count}}</p>
</template> -->

<!-- 方法事件处理器会自动接收原生 DOM 事件并触发执行 -->
<!-- <script setup>
import { ref } from 'vue';
const msg = ref('World');
function myFN(e){
	alert(`Hello ${msg.value}!`);
	alert(e.target.tagName);
}
</script>
<template>
	<button @click="myFN">點我</button>
</template> -->

<!-- 在内联处理器中调用方法 -->
<!-- <script setup>
function say(p){
	alert(p);
}
</script>
<template>
	<button @click="say('Hello!')">說點什麼</button>
</template> -->

<!-- 在内联事件处理器中访问事件参数 -->
<!-- <script setup>
function myFN(p, e){
	alert(`${p} ${e.target.tagName}`);
}
</script>
<template>
	<button @click="myFN('Hello ', $event)">帶入$event變數</button>
	<br>
	<button @click="function(e){myFN('Hello', e)}">從functioni()帶入事件物件</button>
	<br>
	<button @click="(e)=>{myFN('Hello', e)}">從()=>帶入事件物件</button>
</template> -->

<!-- 事件修饰符 -->
<!-- <script setup>
import { ref } from 'vue';
const count = ref(0);
function outer(){
	count.value++;
	alert('outer');
}
function inner(){
	count.value++;
	alert('inner');
}
// .stop    单击事件将停止传递
// .prevent 提交事件将不再重新加载页面
// .self    事件处理器不来自子元素
// .capture 指向内部元素的事件，在被内部元素处理前，先被外部处理
// .once    点击事件最多被触发一次
// .passive 滚动事件的默认行为将立即发生而非等待 `onScroll` 完成 - 可以用来改善移动端设备的滚屏性能
</script>
<template>
	<form class="outer" @click.once="outer">
	我是outer()的form<br>
	<button @click.prevent="inner">inner()按鈕</button>
	</form>
	點inner()按鈕後，數字如果是0就代表頁面被重整了<br>
	數字：{{count}}
</template>
<style>
.outer{background:silver;}
</style> -->

<!-- 按键修饰符 -->
<!-- <script setup>
function myFN(){
	alert(1234);
}
</script>
<template>
	<input type="text" placeholder="keyup.enter" @keyup.enter="myFN" />
	<br>
	<input type="text" placeholder="keydown.page-up" @keydown.page-up="myFN" />
	<br>
	<input type="text" placeholder="keyup.x" @keyup.x="myFN" /><br>
	<input type="text" placeholder="keyup.alt.enter" @keyup.alt.enter="myFN" />
	<br>
	<input type="text" placeholder="keyup.alt.x" @keyup.alt.x="myFN" />
	<br>
	<input type="text" placeholder="click.ctrl" @click.ctrl="myFN" />
</template> -->

<!-- .exact 修饰符 -->
<!-- <script setup>
function myFN(){
	alert(1234);
}
</script>
<template>
	<input type="text" placeholder="keyup.alt.x" @keyup.alt.x="myFN" />
	<br>
	<input type="text" placeholder="keyup.alt.x.exact" @keyup.alt.x.exact="myFN" />
	<br>
	<input type="text" placeholder="click.ctrl.exact" @click.ctrl.exact="myFN" />
	<br>
	<input type="text" placeholder="click.exact" @click.exact="myFN" />
</template> -->

<!-- 鼠标按键修饰符 -->
<!-- <script setup>
function myFN(){
	alert(1234);
}
</script>
<template>
	<div class="trigger-area" @click.middle="myFN"></div>
</template>
<style>
*{padding:0;margin:0;}
body, html, #app{height:100%;}
.trigger-area{height:50%;background:blue;}
</style> -->



<!----------------------------------------- 表单输入绑定 -> 手动连接值绑定和更改事件监听器可能会很麻烦 ----------------------------------------->
<!-- <script setup>
import { ref } from 'vue'
const text = ref('input value')
</script>
<template>
	{{text}}<br>
	<input :value="text" @input="event => text = event.target.value" />
</template> -->

<!-- v-model 指令帮我们简化了这一步骤 -->
<!-- <script setup>
import { ref } from 'vue'
const text = ref('input value')
</script>
<template>
	{{text}}<br>
	<input v-model="text" />
</template> -->

<!-- <input> 和 <textarea> 元素会绑定 value 并侦听 input 事件 -->
<!-- <input type="checkbox"> 和 <input type="radio"> 会绑定 checked 并侦听 change 事件 -->
<!-- <select> 会绑定 value property 并侦听 change 事件 -->

<!-- 基本用法 -->
<!-- <script setup>
import { ref } from 'vue'
const inputTextVal = ref('inputTextVal');
const textAreaVal = ref('textAreaVal');
const inputCheckboxVal1 = ref(false);
const inputCheckboxVal2 = ref([]);
const inputCheckboxVal3 = ref([false, false, false]);
const inputRadioVal = ref('未選取');
const selectVal = ref('未選取');
</script>
<template>
	<h3>input type="text"</h3>
	{{inputTextVal}}<br>
	<input v-model="inputTextVal" />
	<hr>

	<h3>textarea</h3>
	<div style="white-space:pre-line;">{{textAreaVal}}</div>
	<textarea v-model="textAreaVal" rows="6"></textarea>
	<hr>

	<h3>input type="checkbox"(single)</h3>
	<input type="checkbox" v-model="inputCheckboxVal1" />
	{{inputCheckboxVal1}}
	<hr>

	<h3>input type="checkbox"(multiple)</h3>
	<input type="checkbox" value="Jack" v-model="inputCheckboxVal2" /><label>Jack</label> ,
	<input type="checkbox" value="Tom" v-model="inputCheckboxVal2" /><label>Tom</label> , 
	<input type="checkbox" value="Mike" v-model="inputCheckboxVal2" /><label>Mike</label>
	<br>
	{{inputCheckboxVal2}}
	<hr>

	<h3>input type="checkbox"(boolean array)</h3>
	<input type="checkbox" v-model="inputCheckboxVal3[0]" /><label>高</label> , 
	<input type="checkbox" v-model="inputCheckboxVal3[1]" /><label>富</label> , 
	<input type="checkbox" v-model="inputCheckboxVal3[2]" /><label>帥</label>
	<br>
	{{inputCheckboxVal3}} &lt;- 可憐啊
	<hr>

	<h3>input type="radio"</h3>
	<input type="radio" v-model="inputRadioVal" value="One" /><label>One</label> , 
	<input type="radio" v-model="inputRadioVal" value="Two" /><label>Two</label> , 
	<input type="radio" v-model="inputRadioVal" value="Three" /><label>Three</label> , 
	<br>
	{{inputRadioVal}}
	<hr>

	<h3>select</h3>
	<select v-model="selectVal">
		<option disabled value="">Please select one</option>
		<option value="AA">A</option>
		<option value="BB">B</option>
		<option value="CC">C</option>
	</select>
	<br>
	{{selectVal}}
</template> -->

<!-- true-value 和 false-value 是 Vue 特有的 attributes -->
<!-- <script setup>
import { ref } from 'vue'
const toggle = ref('YES');
</script>
<template>
	<input type="checkbox" v-model="toggle" true-value="YES" false-value="NO" />是或否？
	<br>
	{{toggle}}
</template> -->

<!-- 同样可以通过 v-bind 将其绑定为其他动态值 -->
<!-- <script setup>
import { ref } from 'vue'
const dynamicTrueValue = ref('肯定的');
const dynamicFalseValue = ref('否定的');
const toggle = ref(dynamicTrueValue.value);
</script>
<template>
	<input type="checkbox" v-model="toggle" :true-value="dynamicTrueValue" :false-value="dynamicFalseValue" />是或否？
	<br>
	{{toggle}}
</template> -->

<!-- 会在第一个按钮选中时被设为 first，在第二个按钮选中时被设为 second -->
<!-- <script setup>
import { ref } from 'vue'
const val = ref('未選取');
const One = ref('FIRST');
const Two = ref('Second');
</script>
<template>
	<input type="radio" v-model="val" :value="One" /><label>One</label> , 
	<input type="radio" v-model="val" :value="Two" /><label>Two</label> , 
	<br>
	{{val}}
</template> -->

<!-- v-model 同样也支持非字符串类型的值绑定 -->
<!-- <script setup>
import { ref } from 'vue'
const selected = ref({ number: 123 });
</script>
<template>
	<select v-model="selected">
		<option :value="{ number: 123 }">123</option>
		<option :value="{ number: 456 }">456</option>
		<option :value="{ number: 789 }">789</option>
	</select>
	<p>Selected: {{ selected }}</p>
</template> -->

<!-- 可以添加 lazy 修饰符来改为在每次 change 事件后更新数据 -->
<!-- <script setup>
import { ref } from 'vue'
const msg = ref('default value');
</script>
<template>
	<input v-model.lazy="msg" /><br>
	{{msg}}
</template> -->

<!-- 可以在 v-model 后添加 .number 修饰符来管理输入 -->
<!-- <script setup>
import { ref } from 'vue'
const age = ref(null);
</script>
<template>
	<input type="number" v-model.number="age" /><br>
	{{age}}
</template> -->

<!-- 自动去除用户输入内容中两端的空格 -->
<!-- <script setup>
import { ref } from 'vue'
const msg = ref('');
</script>
<template>
	<input v-model.trim="msg" /><br>
	{{msg}}
</template> -->



<!----------------------------------------- 组件 v-model -> 从 Vue 3.4 开始，推荐的实现方式是使用 defineModel() 宏 ----------------------------------------->
<!-- <script setup>
import Comp5 from './components/test/Comp5.vue';
import { ref } from 'vue';
const count = ref(0);
</script>

<template>
	<Comp5 v-model="count" />
</template> -->

<!-- 可以用 v-model 把这个 ref 绑定到一个原生 input 元素上 -->
<script setup>
import Comp6 from './components/test/Comp6.vue';
import { ref } from 'vue';
const msg = ref('Hello World!');
</script>

<template>
	<h1>{{ msg }}</h1>
	<Comp6 v-model="msg" />
</template>































<!----------------------------------------- 组件上的 v-model -> 当使用在一个组件上时，v-model 会被展开为如下的形式 ----------------------------------------->
<!-- 一開始自已做了這樣的範例，沒想到其實不用宣告updateSearchText，直接在子元件中用$emit('update:modelValue', newValue)就可以了 -->
<!-- 所以這個範例不是太正確的用法，要去看官網的範例 -->
<!-- <script setup>
import { ref } from 'vue'
import CustomInput from './components/test/comp4.vue';
const searchText = ref('value')
function updateSearchText(newValue){
	searchText.value = newValue;
}
</script>
<template>
	<CustomInput :vmodel="searchText" my-title="輸入資料" @update-vmodel="updateSearchText" />
	<br>
	{{searchText}}
</template> -->

<!-- 
https://play.vuejs.org/#eNp9UstO6zAU/JUjCylF6m10xa4K6D7Uxb0SDwE7zCJKT4shsS37OBRF+XeO7VLKc5V4Zjye8fEgfls76wOKuah845Ql8EjBnkitOmscwQAOVzDCypkOCpYWO+r06a/hP42atvSs3MOiL4sBpG6M9gSkqEU4joaTov/RmSW2ULt16KIDburOtlgcSl2VOQun4AUh4zUhrwCqu58nw7C1Gseq5HXC98NsvedJdSxF+koBJUurcucnpuJd3E+uYYkrpfHCGesnN0VyKm45Y8YXnaKIB7tkx3xgor+roLQNFP8A6MmmgLghKTI07+s27KXO6K+0idED5CMnbw+cwgH2sQLxbSI3iQ6HeevHzuR5HCu1nt17o7nxkGYkGr4I1aI7t6R4XFLMITGRq9vWPP5PGLmA0xe8ucPm4RP83m8iJsWFQ4+u5xo7LmfM9OLqLDXfkTy3EEt/Q16iN22IGbPsT9BLjr2nS2n/pTeq9PraLzaE2r+UikGjckx6KXjs8Q18Vf017tHsKO2TehTjM4UbGAc=
https://play.vuejs.org/#eNp9Uk1PAjEQ/SuTxmQxweWgJwJEJRzwoESNF+thswxQ3G2bfqwkm/3vTruwokFu7bw3b97rtGZ3WqeVRzZkI5sboR1YdF5PuBSlVsZBDQZX0MDKqBISoiYdNPXWqXIutXd7OB1MValvgiLRALjMlbQOSrQ2WyOMg1gv2WBRqOSSy9GgHUrj6OKw1EXmkG4Ao2P16qpUSyzGnO2VOIPBBOq6U26aoNYpsD7rnJzItsSVkLgwStveexK137KCTH+QqRaclcIF0OslCQ7/cM4ZF8FyOAEMq9ARbHftnLXQbaQRdIE0qXdiTh8usELpUpeZNbo0al22/QMa9Tuus/TUK7FOt1ZJilzH92c5vYIo0DxpJ2gVnA0hIgHLaAtfD7HmjMf+oZ5vMP88Ud/aXahxtjBo0VSUpcNajy08e3nEHZ07kEL5gthnwGe0qvDBY0u793JJto940e08/jwh1692tnMo7SFUMBqYTeRzRnsPH+C/6D92r9Pr2Mdlw5pvaQcJ5A==
https://play.vuejs.org/#eNqtU0tu1EAQvUrTimSPNPYsshucCIhmERYQkVE2NAvHUzNxsNut/jgTWV4iboDEATgBGxZcB5RjUN1tez4kURZZ2ap6Vf3q1auGvhYirg3QKU1UJnOhiQJtxDHjeSkqqUlDJCxJS5ayKkmA0GBInRilq/KUC6O7dDzZitm+wUvGs4or2zaV2dUc1poc2ZZhUKcFAkaMLw3PdF5xYsQi1XA+IEMONxcWNWoYZ3rTIna12KgH4DMt48nEz4DsEw2lKLAb/jOdbFOd1mW1gOKI0U1DRkl5G+lcF4Dxu9+//nz5cffz699v3zHzyvOKhrp9noiZ+Hcupfs2zaZ164gNdOiYaoWSLPNVfK0qjsrjcIQwmlWlyAuQ74UVQzE6JS5jc2lRVDdvXUxLA+M+nl1B9vme+LVa2xijZxIUyBoYHXI6lStAzjY9O3/n+A9JHNEUiH4k+QFUVRjL0cPeGL5A2ls4x/bUmSTnq7marTVw1Q9liVpk6/CMok1OHhl9Q/cwPnR1uGtUcc9p1sEvomjfxQtY5hzOZCVU+DHwGwzGJChv53bZwSf0n8fMylxbjF/uhUfa9Jardn1FSFKkl1AcNw26x/UjbUumJJn4uIPknemsTdE7noJ1lUtg5ADw5XD33TE5gBq4jv303u+jzmdbbooixwpjD12vdZXRsNg54eEqhRUG7+gpMvkKS3YoeFAzj+2vtOcQuqXiPOGo369EvpJ7HnGnzeANHCb0k/fwe6XqxOms8Vwbq6P+3F3//7Wn7T+mLtea
-->


<!-- <script setup>
import Comp1 from './components/Comp1.vue';
import { ref } from 'vue'
function handleClick(){
	console.log('handleClick')
}
</script>

<template>
	<Comp1 @click="handleClick" />
</template> -->






<!-- defineEmits -->
<!-- <script setup>
import { ref } from 'vue'
import ChildComponent from './components/ChildComponent.vue';
const receivedData = ref('')
function handleUpdate(data){
	receivedData.value = `Received update: ${data}`;
}
function handleDelete(data){
	receivedData.value = `Received delete: ${data}`;
}
</script>

<template>
	<div>
		<h2>Parent Component</h2>
		<ChildComponent @update="handleUpdate" @delete="handleDelete" />
		<p>Received data: {{ receivedData }}</p>
	</div>
</template> -->







<!-- <style scoped>
.logo {
	height: 6em;
	padding: 1.5em;
	will-change: filter;
	transition: filter 300ms;
}
.logo:hover {
	filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
	filter: drop-shadow(0 0 2em #42b883aa);
}
</style> -->
