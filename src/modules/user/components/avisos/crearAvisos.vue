<template>
    <v-container>
        <v-theme-provider class="mt-16">
            <v-responsive>
                <section>
                    <v-card class="mt-16">
                        <v-row justify="center">
                        <v-card width="80%">
                            <h1 class="text-center">Avisos</h1>
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
                                            <v-textarea label="Texto" outlined dense v-model="text" ></v-textarea>
                                        </v-col>
                                    </v-row>
                                    <v-row dense>
                                        <v-col cols="5">
                                            <v-select
                                                outlined
                                                dense
                                                v-model="category"
                                                :items="items"
                                                item-text="nombre"
                                                item-value="precio"
                                                label="Categoria"
                                                persistent-hint
                                                return-object
                                                single-line
                                                
                                            ></v-select>
                                        </v-col>
                                        <v-col cols="5">
                                            <v-select
                                                outlined
                                                dense
                                                v-model="author"
                                                :items="items"
                                                item-text="nombre"
                                                item-value="precio"
                                                label="Autor"
                                                persistent-hint
                                                return-object
                                                single-line
                                                
                                            ></v-select>
                                        </v-col>
                                    </v-row>
                                    <v-row dense>
                                        <v-col>
                                            <v-file-input label="Foto" v-model="image" accept="image/png, image/jpeg, image/bmp" show-size counter multiple filled prepend-icon="mdi-camera"></v-file-input>
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
//   import { upDataFileGlobal } from "../../../globals/getAxios"
    export default {
        name:'crearAvisos',
        data(){
            return{
              show: false,
              title:"",
              text:"",
              category:"",
              author:"",
              image:"",
            }
        },
        created(){
        },
        methods:{
            // async guardar (){
            //     const res = await upDataFileGlobal("/landing/setAvisos", this.image, [this.title, 
            //                                                                           this.text, 
            //                                                                           this.category, 
            //                                                                           this.author])
            //console.log(res)
            // }
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