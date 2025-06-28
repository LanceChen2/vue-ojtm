<script setup>
import { ref } from 'vue';


const title = ref('Vue.js'); 

const user = ref({
    firstName: 'John',
    lastName: 'Wu'
})  
const isDisabled = ref(false);


const getName = () => {
    return `${user.value.firstName} ${user.value.lastName}`;
}
</script>

<template>
    <div>
        <h2>{{ title }}執行中</h2>
        <p>{{ `登入帳號: ${user.firstName} ${user.lastName}`}}</p>
        <p>{{ getName() }}</p>
        <p>{{ false ? 'abc':'xyz' }}</p>
        <hr>
        <!-- 屬性繫節 -->
        <input type="checkbox" v-model="isDisabled" /> 同意條款
        <button v-bind:disabled="!isDisabled">click</button>
        <button :disabled="false">不啟用</button>
        <br>
        <img src="" v-bind:title="title"  />
        <a href="" v-bind:title="title">iSpan</a>

    </div>
</template>

<style lang="css" scoped>

</style>