import instanciaAxios from './instancia'

export default{
    getTasks: (callback) =>{ 
        instanciaAxios.get('/tasks').then(response => {
            callback(response.data);
        })

    },
    postTask(task, callback){ 
        instanciaAxios.post('/tasks', task).then(response => { 
            callback(response.data);
        })
    },
    editTask(task, callback) {
       instanciaAxios.patch(`tasks/${task.id}/`, task).then(response => {
            callback(response.data);
        })
    },

    deleteTask(id, callback) { 
        instanciaAxios.delete(`tasks/${id}/`).then(response => {
            callback(response.data);
        })
    }
}