<template>
  <v-container >
    <v-row class="text-center">
    <v-col md="6" offset-md="3"  >
        <v-card min-width="500px" class="pa-4 card"
       >
        <v-card-title>
            Login
        </v-card-title>
        <v-text-field label="Usuário"
        v-model="user.username"
        outlined>
        </v-text-field>
        <v-text-field label="Senha" type="password"
        append-icon="fa-key"
        v-model="user.password"
        @keyup.enter="login"
        outlined
        >
        </v-text-field>

        <v-btn color="primary" large block @click="login" :loading="loading">
            Continuar
        </v-btn>

        <v-card-text> Não tenho conta! Fazer <a href="/register" >Cadastro</a></v-card-text>
    </v-card>
    </v-col>
</v-row>
   
  </v-container>
</template>

<script>
import AuthApi from '@/api/auth.api.js'
export default {
    data() {
            return {
                user : { username: '', password: '' },
                loading: false
            }
        },
    methods: {
        login() {
            this.loading = true
            AuthApi.login(this.user.username, this.user.password)
                .then(response => {
                    this.$router.push({ name: 'taskList' })
                    this.salvaLogin(response.data)
                    console.log(response)
                })
                .catch(error => {
                    console.log(error)
                })
        },

        salvaLogin(user) {
            const DiaHora = new Date()
            localStorage.setItem('userTOken', JSON.stringify({ user, DiaHora }))
        },


    },
    beforeCreate() {
        localStorage.getItem('userTOken') ? this.$router.push({ name: 'taskList' }) : this.$router.push({ name: 'login' })
    }

}
</script>

<style scoped>
    .main {
        display: flex;
        flex-direction: column;
        justify-content: center;
        height: 100%;
    }
    .card {
        padding: 1rem;

    }
</style>