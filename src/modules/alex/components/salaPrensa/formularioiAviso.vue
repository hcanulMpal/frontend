<template>
    <v-container>
        <v-theme-provider class="mt-16">
            <v-responsive>
                <section>
                    <v-card class="mt-16">
                        <v-row justify="center">
                        <v-card>
                            <h1 justify="center">Avisos</h1>
                            <v-container fluid>
                                <v-form
                                    ref="form"
                                    v-model="valid"
                                    lazy-validation
                                    class="ma-4"
                                >
                                    <v-row dense>
                                        <v-text-field label="Titulo" outlined dense v-model="title" ></v-text-field>
                                    </v-row>
                                    <v-row dense>
                                        <v-col>
                                            <v-text-field label="Texto" outlined dense  v-model="text" ></v-text-field>
                                        </v-col>
                                        <v-col>
                                            <v-text-field label="Apellido Materno" outlined dense v-model="ap_mat" ></v-text-field>
                                        </v-col>
                                    </v-row>
                                    <v-row dense>
                                        <v-col cols="5">
                                            <v-text-field label="Numero Telefonico/Celular" outlined v-mask="'(###) ###-####'" dense v-model="telefono" ></v-text-field>
                                        </v-col>
                                        <v-col cols="5">
                                            <v-text-field label="R. F. C." outlined v-mask="'AAAA-######-XAX'" dense v-model="rfc"></v-text-field>
                                        </v-col>
                                    </v-row>
                                    <v-row dense>
                                        <v-col>
                                            <v-text-field label="Folio" outlined dense v-model="folio" ></v-text-field>
                                        </v-col>
                                    </v-row>
                                </v-form>
                            </v-container>
                        </v-card>
                    </v-row>
                    </v-card>
                </section>
            </v-responsive>
        </v-theme-provider>
    </v-container>
</template>
<script>
    export default{
        name:'formularioAvi',
        data(){
            return{
            }
        },
        created(){
        },
        methods:{
        },
    }
</script>
<style scoped>
   
</style>