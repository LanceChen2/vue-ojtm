<script setup>
import { ref } from 'vue';
import myCat from '@/assets/images/cat3.jpeg'; 

//tab enter
const userName = ref('Tom');
const isAdmin = ref(false);

const dog = ref('/images/dog1.jpeg');
const cat = ref('/src/assets/images/cat3.jpeg');
</script>

<template>
    <div>
        <!-- 如果userName有姓名就顯示姓名，沒有姓名就顯示 Guest -->
        <!-- <p>{{ userName.length > 0 ? userName : 'Guest' }}</p> -->
        <p>{{ userName || 'Guest' }}</p>

        <!-- 如果isAdmin為true就顯示管理者登入，如果是false就不顯示 -->
        <p>{{ isAdmin ? '管理者登入' : '' }}</p>
        <!-- <p>{{ isAdmin && '管理者登入'}}</p> -->
        <img src="/images/dog1.jpeg" />
        <img :src="dog" /> 
        <img src="@/assets/images/cat3.jpeg" title="不建議這樣用" />
        <img :src="cat" title="不建議這樣用" /> 
        <img :src="myCat" title="建議這樣用" />

    </div>
</template>

<style lang="css" scoped>
img{
    width: 100px;
}
</style>