const { createApp, ref, reactive, computed, watch, onMounted } = Vue;

const app = createApp({
	setup() {
		//input type=text
		const textInput = ref('');

		//Radio Button
		const radioInput_gender = ref('');
		const radioInput_color = ref('blue');
		const radioInput_size = ref('M');

		//Checkbox
		const checkboxBoolean = ref(false);
		const checkboxEmptyArray = ref([]);
		const checkboxArrayWithValue = ref(['wifi', 'pool']);
		const checkboxObjectType = ref({
			email: true,
			sms: false,
			push: true
		});

		//select
		const selectNoDefaultValue = ref('');
		const selectWithDefaultValue = ref('taiwan');

		//password
		const password = ref('');
		const showPassword = ref(false);

		//textarea
		const textareaMessage = ref('');
		const messageLength = computed(() => {
			return textareaMessage.value.length;
		});

		//input type=file
		const selectedFile = ref(null);
		const selectedFiles = ref([]);
		const imagePreview = ref('');
		const handleFileChange = (event) => {
			const file = event.target.files[0];
			selectedFile.value = file;
			// 如果是圖片，建立預覽
			if (file && file.type.startsWith('image/')) {
				const reader = new FileReader();
				reader.onload = (e) => {
					imagePreview.value = e.target.result;
				};
				reader.readAsDataURL(file);
			} else {
				imagePreview.value = '';
			}
		};
		const handleMultipleFiles = (event) => {
			selectedFiles.value = Array.from(event.target.files);
		};

		return {
			textInput,

			radioInput_gender,
			radioInput_color,
			radioInput_size,

			checkboxBoolean,
			checkboxEmptyArray,
			checkboxArrayWithValue,
			checkboxObjectType,

			selectNoDefaultValue,
			selectWithDefaultValue,

			password,
			showPassword,

			textareaMessage,
			messageLength,

			selectedFile,
			selectedFiles,
			imagePreview,
			handleFileChange,
			handleMultipleFiles,
		};
	},
	template: `
		<!-- ///////////////////////////////////////////////////////////////////////////////////////////////// -->
		<h3>文字輸入框</h3>
		<input type="text" v-model="textInput" />
		<br>
		{{textInput || '未輸入'}}
		<hr>



		<!-- ///////////////////////////////////////////////////////////////////////////////////////////////// -->
		<h3>Radio Button（無預設值）</h3>
		<label>
			<input type="radio" v-model="radioInput_gender" value="male" />男性
		</label>
		<label>
			<input type="radio" v-model="radioInput_gender" value="female" />女性
		</label>
		<label>
			<input type="radio" v-model="radioInput_gender" value="other" />其他
		</label>
		<br>
		{{radioInput_gender || '未選擇'}}
		
		<br><br>
		<h3>Radio Button（有預設值）</h3>
		<label>
			<input type="radio" v-model="radioInput_color" value="red" />紅色
		</label>
		<label>
			<input type="radio" v-model="radioInput_color" value="blue" />藍色
		</label>
		<label>
			<input type="radio" v-model="radioInput_color" value="green" />綠色
		</label>
		<br>
		{{radioInput_color}}
		<hr>



		<!-- ///////////////////////////////////////////////////////////////////////////////////////////////// -->
		<h3>Checkbox（單一個）</h3>
		<label>
			<input type="checkbox" v-model="checkboxBoolean" />我同意
		</label>
		<br>
		{{checkboxBoolean}}
		<br>
		{{checkboxBoolean ? '已同意' : '不同意'}}
		
		<br><br>
		<h3>Checkbox（多選，無預設值）</h3>
		<label>
			<input type="checkbox" v-model="checkboxEmptyArray" value="reading" />閱讀
		</label>
		<label>
			<input type="checkbox" v-model="checkboxEmptyArray" value="music" />音樂
		</label>
		<label>
			<input type="checkbox" v-model="checkboxEmptyArray" value="sports" />運動
		</label>
		<br>
		{{checkboxEmptyArray}}
		<br>
		選擇的興趣: {{checkboxEmptyArray.length > 0 ? checkboxEmptyArray.join(', ') : '尚未選擇'}}
		
		<br><br>
		<h3>Checkbox（多選，有預設值）</h3>
		<label>
			<input type="checkbox" v-model="checkboxArrayWithValue" value="wifi" />WiFi
		</label>
		<label>
			<input type="checkbox" v-model="checkboxArrayWithValue" value="parking" />停車位
		</label>
		<label>
			<input type="checkbox" v-model="checkboxArrayWithValue" value="pool" />游泳池
		</label>
		<label>
			<input type="checkbox" v-model="checkboxArrayWithValue" value="gym" />健身房
		</label>
		<br>
		{{checkboxArrayWithValue}}
		<br>
		選擇的設施: {{checkboxArrayWithValue.join(', ')}}
		
		<br><br>
		<h3>Checkbox（物件型式）</h3>
		<label>
			<input type="checkbox" v-model="checkboxObjectType.email" />電子郵件通知
		</label>
		<label>
			<input type="checkbox" v-model="checkboxObjectType.sms" />簡訊通知
		</label>
		<label>
			<input type="checkbox" v-model="checkboxObjectType.push" />推播通知
		</label>
		<br>
		{{checkboxObjectType}}
		<br>
		Email: {{checkboxObjectType.email ? '開啟' : '關閉'}}<br>
		SMS: {{checkboxObjectType.sms ? '開啟' : '關閉'}}<br>
		推播: {{checkboxObjectType.push ? '開啟' : '關閉'}}
		<hr>
		
		
		
		<!-- ///////////////////////////////////////////////////////////////////////////////////////////////// -->
		<h3>select（無預設值）</h3>
		<select v-model="selectNoDefaultValue">
			<option value="" disabled>請選擇城市</option>
			<option value="taipei">台北</option>
			<option value="taichung">台中</option>
			<option value="kaohsiung">高雄</option>
			<option value="tainan">台南</option>
		</select>
		<br>
		{{selectNoDefaultValue || '尚未選擇'}}
		<br>
		*** 要去看最下面的註解 ***

		<br><br>
		<h3>select（有預設值）</h3>
		<select v-model="selectWithDefaultValue">
			<option value="taiwan">台灣</option>
			<option value="japan">日本</option>
			<option value="korea">韓國</option>
			<option value="usa">美國</option>
			<option value="canada">加拿大</option>
		</select>
		<br>
		{{selectWithDefaultValue}}
		<hr>
		
		
		
		<!-- ///////////////////////////////////////////////////////////////////////////////////////////////// -->
		<h3>密碼輸入（切換明碼範例）</h3>
		<input :type="showPassword ? 'text' : 'password'" v-model="password" placeholder="請輸入密碼" />
		<button type="button" @click="showPassword = !showPassword" style="margin-left: 10px;">
			{{showPassword ? '隱藏' : '顯示'}}
		</button>
		<br>
		{{password || '尚未輸入'}}
		<hr>



		<!-- ///////////////////////////////////////////////////////////////////////////////////////////////// -->
		<h3>textarea</h3>
		<textarea v-model="textareaMessage" rows="4" cols="50" maxlength="200" placeholder="請輸入您的留言..."></textarea>
        <div>字數統計：<strong>{{messageLength}}/200</strong></div>
		<hr>



		<!-- ///////////////////////////////////////////////////////////////////////////////////////////////// -->
		<h3>選擇檔案（單檔）</h3>
		<input type="file" @change="handleFileChange" accept="image/*,.pdf,.doc,.docx" />
		<br>
		選擇的檔案：<span v-if="selectedFile">{{selectedFile.name}}</span> <span v-if="selectedFile">({{Math.round(selectedFile.size/1024)}} KB)</span>
		<div v-if="imagePreview">
			<img :src="imagePreview" style="max-width:120px; max-height:120px;" />
		</div>

		<br><br>
		<h3>選擇檔案（多檔）</h3>
		<input type="file" multiple @change="handleMultipleFiles" />
		<div v-if="selectedFiles.length > 0">
			<strong>已選擇 {{selectedFiles.length}} 個檔案：</strong>
			<ul>
				<li v-for="file in selectedFiles" :key="file.name">
					{{file.name}} ({{Math.round(file.size/1024)}} KB)
				</li>
			</ul>
		</div>
	`,
});

app.mount('#app');


//最好用迴圈來產生<select>
//<script setup>
//import { ref, computed } from 'vue'
//
//const selectNoDefaultValue = ref("")
//
//const cities = [
//  { value: "taipei", label: "台北" },
//  { value: "taichung", label: "台中" },
//  { value: "kaohsiung", label: "高雄" },
//  { value: "tainan", label: "台南" }
//]
//
//const selectedCityLabel = computed(() => {
//  const found = cities.find(c => c.value === selectNoDefaultValue.value)
//  return found ? found.label : "尚未選擇"
//})
//</script>
//
//<template>
//  <h3>select（無預設值）</h3>
//  <select v-model="selectNoDefaultValue">
//    <option value="" disabled>請選擇城市</option>
//    <option v-for="city in cities" :key="city.value" :value="city.value">
//      {{ city.label }}
//    </option>
//  </select>
//  <br>
//  {{ selectedCityLabel }}
//</template>