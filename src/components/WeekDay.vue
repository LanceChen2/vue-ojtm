<script setup>
    const week = ["日","一","二","三","四","五","六"]
</script>

<template>
    <div>
        <p>星期{{ week[new Date().getDay()] }}</p>        
    </div>
</template>

<style lang="css" scoped>

</style>