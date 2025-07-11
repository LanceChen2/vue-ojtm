import { defineStore } from "pinia";
import { ref } from "vue";

export const useTodoStore = defineStore('todo', ()=>{
    //計算未完成的待辦事項
    const todos = JSON.parse(localStorage.getItem('todos'))
    const activeToods = todos.filter(todo => ! todo.completed)
    const unfinishedQty = ref(activeToods.length) ;

    const unfinishedQtyChange = qty =>{
        unfinishedQty.value = qty; 
    }

    return {unfinishedQty, unfinishedQtyChange}
})
