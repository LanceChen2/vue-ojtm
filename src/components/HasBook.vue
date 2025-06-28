<script setup>
import { ref } from 'vue';
const author = ref({
    books: [
        'Vue2 - Advanced Guide', 
        'Vue3 - Basic Guide',
        'Vue4 - The Mastery'
    ]
})
    
</script>

<template>
    <div>
        <p>出版了書籍: {{author.books.length > 0? '是': '否'}}</p>
        
        <!-- <h2>{{ title }}執行中</h2>
        <p>{{ `登入帳號: ${user.firstName} ${user.lastName}`}}</p>
        <p>{{ getName() }}</p>
        <p>{{ false ? 'abc':'xyz' }}</p> -->
    </div>
</template>

<style lang="css" scoped>

</style>