import Vue from 'vue'

const taskStore = {
    namespaced : true,
    state: {
        list:{
            1:{
                name:"vue js course",
                duree:55,
            },
            2:{
                name:"laravel course",
                duree:78,
            }
        }
    },

    getters: {
        tasksList: ({list})=>Object.values(list)
    },
    
    mutations: {
        ADD_TASK(state, task ){
            console.log(task); 
            Vue.set(state.list, task.id, task)
           
        }
    },
    actions: {
        addNewTask({ commit }, task){
            const newOne ={...task, id: String(Math.random())}
            commit("ADD_TASK", newOne)
                   
        }
    }
}
 export default taskStore;  