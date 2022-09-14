<template>
    <v-main>
        <v-container class="afasta">
    <v-card  v-for="tarefa in tasks" :key="tarefa.id" elevation="4"
    class="col-"
     color="#F5EDDC"
     outlined>
          <v-card-subtitle class="card-title">  {{ tarefa.title }}</v-card-subtitle>
          <v-card-text>
            {{ tarefa.project }}
            {{ tarefa.usuario }}
          </v-card-text>

          <v-card-actions>
              <v-btn
                color="error"
                large
            @click="deletarTask(tarefa)"> Excluir </v-btn>
            <v-btn   @click="EditarTask(tarefa)"
            color="primary"
            large> Editar </v-btn>
          </v-card-actions>
          

    </v-card>
</v-container>
    </v-main>
</template>

<script>
import queries from '@/queries'

export default {

    data() {
        return {
            tasks: []
        }
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