<template>
    <v-container>
        <v-theme-provider class="mt-16">
            <v-responsive>
                <section>
                    <v-card class="mt-16" >
                        <v-row justify="center">
                        <v-card width="80%">
                            <h1 class="text-center">Subir Imagenes</h1>
                            <v-container fluid>
                                <v-form
                                    ref="form"
                                    v-model="valid"
                                    lazy-validation
                                    class="ma-4"
                                >
                                    <v-row dense>
                                        <v-text-field label="Descripción" outlined dense v-model="description" ></v-text-field>
                                    </v-row>
                                    <v-row dense>
                                        <v-col cols="5">
                                            <v-select
                                                outlined
                                                dense
                                                v-model="select"
                                                :items="items"
                                                item-text="categorys"
                                                label="categoria"
                                                persistent-hint
                                                return-object
                                                single-line
                                                
                                                
                                            ></v-select>
                                        </v-col>
                                    </v-row>
                                    <v-row dense>
                                        <v-col>
                                            <v-file-input label="Foto" v-model="image" show-size counter multiple filled prepend-icon="mdi-camera"></v-file-input>
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
 import { upDataFileGlobal, requestGET } from "../../../globals/getAxios"
    export default {
        name:'crearPublicaciones',
        data(){
            return{
                valid:true,
                items:null,
                select:"",
                description:"",
                categorys:"",
                image:null,

            }
        },
        created(){  
            this.inicio()
        },
        methods:{
            async inicio(){
                const lista = await requestGET('/autho/ImageCategory')
                this.items = lista
            },
            
             async guardar (){
                 const res = await upDataFileGlobal("/landing/guardI", this.image, [this.description,
                                                                                       this.categorys])
             console.log(res)
             }
        },
    }
</script>
<style scoped>
   
</style>