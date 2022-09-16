import instanciaAxios from './instancia'

export default{
    getTasks: (callback) =>{ 
        instanciaAxios.get('/api/tasks').then(response => {
            callback(response.data);
        }).catch(error => {  console.log(error); })

    },
    postTask(task, callback){ 
        instanciaAxios.post('/api/tasks', task).then(response => { 
            callback(response.data);
        })
    },
    editTask(task, callback) {
       instanciaAxios.patch(`/api/tasks/${task.id}/`, task).then(response => {
            callback(response.data);
        })
    },

    deleteTask(id, callback) { 
        instanciaAxios.delete(`/api/tasks/${id}/`).then(response => {
            callback(response.data);
        })
    }
}