<template>
    <v-main>
        <v-container class="afasta">
            <v-card  v-for="tarefa in tasks" :key="tarefa.id" elevation="4"
            class="col"
            color="#d3d3d3"
            outlined>
                <v-card-subtitle class="card-title">  {{ tarefa.title }}</v-card-subtitle>
                <v-card-text>
                    {{ tarefa.project }}
                    {{ tarefa.usuario }}
                </v-card-text>
                <v-col >
                <v-card-actions md="1" >
                    <v-btn
                        color="dark"
                    @click="deletarTask(tarefa)"> <v-icon>far fa-trash-alt fa-xs</v-icon> </v-btn>
                    <v-btn   @click="EditarTask(tarefa)"
                    color="dark"
                    > <v-icon>fas fa-pen fa-xs</v-icon> </v-btn>
                </v-card-actions>   
            </v-col>
            </v-card>
        </v-container>
    </v-main>
</template>

<script>
import queries from '@/api/queries'
export default {
    data() {
        return {
            tasks: []
        }
    },
    methods: {
        EditarTask(tarefa) {
            this.$router.push({ name: 'taskUpdate', params: { id: tarefa.id }, query: { title: tarefa.title, project: tarefa.project, usuario: tarefa.usuario } })
        },
    },
    created() {
        queries.getTasks(callback => {
            this.tasks = callback
            console.log(this.tasks)
        })
    }
}
</script>

<style scoped>
    .afasta{
        display: flex;
        flex-direction: column;
        gap: 1rem;
        color: white;
        margin-top: 2rem;
    }

</style>