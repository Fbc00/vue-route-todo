<template>

    <v-main>
        <v-row>
            <v-col md="6" offset-md="3">
                <v-card min-width="500px" class="pa-4">
                    <v-card-title>Registrar</v-card-title>
                    <v-text-field label ="Nome"
                    outlined>
                    </v-text-field>
                      <v-text-field label ="Email"
                    outlined>
                    </v-text-field>
                    <v-text-field
                    outlined
                    label="Usuário">
                    </v-text-field>
                    <v-text-field
                    outlined
                    label="Senha">
                    </v-text-field>
                    <v-text-field
                    outlined
                    label="Confirme a senha">
                    </v-text-field>
                    <v-btn 
                    large 
                    block
                    color="orange">
                        Continuar
                    </v-btn>
                </v-card>
            </v-col>
        </v-row>
    </v-main>
  
</template>

<script>
export default {
    data(){
        return{
            userRegister:{
                name: '',
                password: '',
                confirmPassarword: '',
                email: '',
            }
        }
    }
}
</script>

<style>

</style>