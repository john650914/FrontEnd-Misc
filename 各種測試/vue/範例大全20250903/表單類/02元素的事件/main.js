const { createApp, ref, reactive, computed, watch, onMounted } = Vue;

const app = createApp({
	setup() {
		// 各元素的響應式資料
        const textValue = ref('');
        const selectedFile = ref(null);
        const selectedGender = ref('');
        const isChecked = ref(false);
        const selectedCity = ref('');
        const message = ref('');

        // 1. input[type="text"] - 最常用：@input 事件
        const handleTextInput = (event) => {
            console.log('文字輸入:', event.target.value);
        };

        // 2. input[type="file"] - 最常用：@change 事件
        const handleFileChange = (event) => {
            selectedFile.value = event.target.files[0];
            console.log('選擇檔案:', selectedFile.value?.name);
        };

        // 3. input[type="radio"] - 最常用：@change 事件
        const handleRadioChange = (event) => {
            console.log('選擇性別:', event.target.value);
        };

        // 4. input[type="checkbox"] - 最常用：@change 事件
        const handleCheckboxChange = (event) => {
            console.log('勾選狀態:', event.target.checked);
        };

        // 5. select - 最常用：@change 事件
        const handleSelectChange = (event) => {
            console.log('選擇城市:', event.target.value);
        };

        // 6. textarea - 最常用：@input 事件
        const handleTextareaInput = (event) => {
            console.log('訊息內容:', event.target.value);
        };

        return {
            textValue,
            selectedFile,
            selectedGender,
            isChecked,
            selectedCity,
            message,
            handleTextInput,
            handleFileChange,
            handleRadioChange,
            handleCheckboxChange,
            handleSelectChange,
            handleTextareaInput,
        };
	},
	template: `
        
        <!-- ///////////////////////////////////////////////////////////////////////////////////////////////// -->
        <div style="margin: 20px 0;">
            <h4>1. input[type="text"] - @input 事件</h4>
            <input type="text" 
				v-model="textValue"
				@input="handleTextInput"
				placeholder="輸入文字看 console" />
            <div>目前輸入: <strong>{{textValue}}</strong></div>
        </div>

        <div style="margin: 20px 0;">
            <h4>2. input[type="file"] - @change 事件</h4>
            <input type="file" 
				@change="handleFileChange" />
            <div>選擇的檔案: <strong>{{selectedFile?.name || '尚未選擇'}}</strong></div>
        </div>

        <div style="margin: 20px 0;">
            <h4>3. input[type="radio"] - @change 事件</h4>
            <label>
                <input type="radio" 
					v-model="selectedGender" 
					value="male"
					@change="handleRadioChange" />
                男性
            </label>
            <label style="margin-left: 20px;">
                <input type="radio" 
					v-model="selectedGender" 
					value="female"
					@change="handleRadioChange" />
                女性
            </label>
            <div>選擇的性別: <strong>{{selectedGender || '尚未選擇'}}</strong></div>
        </div>

        <div style="margin: 20px 0;">
            <h4>4. input[type="checkbox"] - @change 事件</h4>
            <label>
                <input type="checkbox" 
					v-model="isChecked"
					@change="handleCheckboxChange" />
                我同意條款
            </label>
            <div>勾選狀態: <strong>{{isChecked ? '已勾選' : '未勾選'}}</strong></div>
        </div>

        <div style="margin: 20px 0;">
            <h4>5. select - @change 事件</h4>
            <select v-model="selectedCity" 
                    @change="handleSelectChange">
                <option value="">請選擇城市</option>
                <option value="taipei">台北</option>
                <option value="taichung">台中</option>
                <option value="kaohsiung">高雄</option>
            </select>
            <div>選擇的城市: <strong>{{selectedCity || '尚未選擇'}}</strong></div>
        </div>

        <div style="margin: 20px 0;">
            <h4>6. textarea - @input 事件</h4>
            <textarea v-model="message"
				@input="handleTextareaInput"
				rows="3"
				cols="40"
				placeholder="輸入多行文字看 console"></textarea>
            <div>訊息長度: <strong>{{message.length}}</strong> 字</div>
        </div>
	`,
});

app.mount('#app');