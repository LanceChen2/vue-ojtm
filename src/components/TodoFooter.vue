<script setup>
    
const props = defineProps({
    total: Number 
})

const emit = defineEmits(['removeEvent'])
const clickHandler = () => {
    emit('removeEvent')
}

</script>

<template>
    <div>
        <div class="mt-3 d-flex justify-content-between">
            <strong class=" me-3">尚有 {{total}} 個工作未完成</strong>
            <button class="btn btn-warning me-3" @click="clickHandler">清除完成工作</button>
        </div>
    </div>
</template>

<style lang="css" scoped>

</style>