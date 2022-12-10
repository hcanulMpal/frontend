<template>
    <v-container>
        <v-theme-provider class="mt-16">
            <v-responsive>
                <section>
                    <v-card class="mt-16">
                        <v-row justify="center">
                        <v-card width="80%">
                            <h1 class="text-center">Crear Telefonos de Emergencia</h1>
                            <v-container fluid>
                                <!-- Empieza el formulario -->
                                <v-form
                                    ref="form"
                                    v-model="valid"
                                    lazy-validation
                                    class="ma-4"
                                >
                                    <v-row dense>
                                        <v-text-field label="Nombre" outlined dense v-model="name" ></v-text-field>
                                    </v-row>
                                    <v-row dense>
                                        <v-col>
                                            <v-text-field label="Número Telefonico" outlined v-mask="'####-###-##-##'" dense v-model="mobile" ></v-text-field>
                                        </v-col>
                                    </v-row>
                                    <v-btn
                                    rounded
                                    color="primary"
                                    @click="guardar"
                                    dark
                                    >
                                    Guardar
                                    </v-btn>
                                    <v-divider></v-divider>
                                </v-form> <!-- Termina Formulario    -->
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
   import { requestPost } from "../../../globals/getAxios"
    export default {
        name:'creartelEmergencia',
        data(){
            return{
              show: false,
              name:"",
              mobile:"",
            }
        },
        created(){
        },
        methods:{
             async guardar (){
                 const res = await requestPost("/landing/guardI", this.nombre, this.telefono)
                console.log(res)
             }
        },
    }
  </script>
  <style scoped>
        .red-bg {
        /* Set the display to `table-row` because Vuetify makes `flex` */
        display: table-row;
        }
  
        .red-bg:hover {
        /* `!important` is necessary here because Vuetify overrides this */
        background: rgb(173, 204, 173) !important; 
        }
   
  </style>  