<script setup>
import { Modal } from 'bootstrap';

const props = defineProps({
    member: Object
})
const emit = defineEmits(['updateMember'])

const clickHandler = () =>{
    // console.log(props.member);
    emit('updateMember', props.member);
    // 隱藏 Modal
    const memberModal = document.querySelector('#editModal');
    const theModal = Modal.getInstance(memberModal);
    theModal.hide();
}
</script>

<template>
    <!-- Button trigger modal -->
    <!-- <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#editModal">
        Launch demo modal
    </button> -->

    <!-- Modal -->
    <div class="modal fade" id="editModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <h1 class="modal-title fs-5" id="exampleModalLabel">會員修改</h1>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <div class="mb-3">
                        <label for="InputName1" class="form-label">姓名</label>
                        <input type="text" class="form-control" id="InputName1" v-model="member.name">
                    </div>
                    <div class="mb-3">
                        <label for="InputEmail1" class="form-label">電子郵件</label>
                        <input type="email" class="form-control" id="InputEmail1" v-model="member.email">

                    </div>
                    <div class="mb-3">
                        <label for="InputAge1" class="form-label">年紀</label>
                        <input type="number" class="form-control" id="InputAge1" v-model="member.age">
                    </div>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">關閉</button>
                    <button type="button" @click="clickHandler" class="btn btn-primary">修改</button>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="css" scoped></style>