<template>
  <v-container >
    <v-row class="text-center">
    <v-col md="6" offset-md="3">
        <v-card min-width="500px" class="pa-4 card">
        <v-card-title>
            Login
        </v-card-title>
        <v-text-field label="Usuário"
        outlined>
        </v-text-field>
        <v-text-field label="Senha" type="password"
        append-icon="fa-key"
        outlined
        >
        </v-text-field>

        <v-btn color="primary" large block>
            Continuar
        </v-btn>

        <v-card-text> Não tenho conta! Fazer <a href="/register" >Cadastro</a></v-card-text>
    </v-card>
    </v-col>
</v-row>
   
  </v-container>
</template>

<script>
export default {

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