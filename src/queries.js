import axios  from "axios";
const instanciaAxios = axios.create({ 
    baseURL: "http://localhost:3000"
});

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

    deleteTask(task, callback) { 
        instanciaAxios.delete(`tasks/${task.id}/`).then(response => {
            callback(response.data);
        })
    }
}