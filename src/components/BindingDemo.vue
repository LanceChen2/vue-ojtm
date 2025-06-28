<script setup>
import { ref } from 'vue';

//tab enter
const userName = ref('Tom');
const isAdmin = ref(false);
</script>

<template>
    <div>
        <!-- 如果userName有姓名就顯示姓名，沒有姓名就顯示 Guest -->
        <!-- <p>{{ userName.length > 0 ? userName : 'Guest' }}</p> -->
        <p>{{ userName || 'Guest' }}</p>

        <!-- 如果isAdmin為true就顯示管理者登入，如果是false就不顯示 -->
        <p>{{ isAdmin ? '管理者登入' : '' }}</p>
        <!-- <p>{{ isAdmin && '管理者登入'}}</p> -->

    </div>
</template>

<style lang="css" scoped></style>