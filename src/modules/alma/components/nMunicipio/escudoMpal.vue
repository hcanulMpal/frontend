<template>
    <v-sheet >
        <v-theme-provider class="mt-10">
            <v-responsive>
                <section class="mt-10 mb-15">
                    <v-card
                    class="mx-auto"
                    max-width="800"
                  >

                  <p class="text-center mt-5 title ">Escudo</p> 

                  <div class="d-flex flex-column justify-space-between align-center">
                    <v-img class="mt-2" :src= "require('@/assets/escudo.png')" max-height="400" max-width="200"></v-img>   
                  </div>
                    <!-- <v-card-title > -->
                      <p class="text-center mt-5 subtitle-1">Felipe Carrillo Puerto </p> 
                    <!-- </v-card-title> -->

                    

                    <v-card-actions>
                      <v-btn
                        color="orange lighten-2"
                        text
                         @click="show = !show"
                      >
                        CONOCER MÁS
                      </v-btn>

                      <v-spacer></v-spacer>

                      <v-btn
                        icon
                        @click="show = !show"
                      >
                        <v-icon>{{ show ? 'mdi-chevron-up' : 'mdi-chevron-down' }}</v-icon>
                      </v-btn>
                    </v-card-actions>

                    <v-expand-transition>
                      <div v-show="show">
                        <v-divider></v-divider>
                        <!-- <v-img :src="require('@/assets/IMAGOTIPO-OFICIAL-MH.png')" max-height="100" max-width="100"></v-img> -->
                          <v-card-text src>
                            <v-card-title>
                              <!-- <span class="text-h6 red--text"> Mision </span> -->
                            </v-card-title>
                            <v-card-subtitle>
                                En el escudo del municipio se observan símbolos relativos a las diversas actividades económicas que en él se llevan acabo y al origen maya de la población. En primer término figura la mano de un maya sosteniendo una milpa y un árbol, que representan la agricultura y la Explotación forestal, las dos actividades más antiguas de la región. En la parte inferior se distinguen un tiburón y una industria, que se refiere a la pesca y a la industria. En la parte superior izquierda se observa un glifo que representa al maya, componente nativo de la población que habita actualmente el municipio.  
                                <br>
                                <br>
                                El Municipio de Felipe Carrillo Puerto debe su nombre al "Apóstol de la Raza de Bronce" benemérito de Yucatán Don Felipe Carrillo Puerto a partir del 1° de Agosto de 1934. fecha en que se publica el Decreto No.90 del XXXII Congreso Constitucional del Estado Libre y Soberano de Yucatán, donde se asentó que el Municipio "Santa Cruz" cambiaba su nombre por el de Felipe Carrillo Puerto, derivado de la desaparición del Territorio de Quintana Roo por Decreto del 14 de Diciembre de 1931, y su anexión a los Estados de Campeche y Yucatán, situación que es corregida un 16 de Enero de 1935 con la publicación del Decreto Constitucional donde se crea nuevamente el Territorio Federal de Quintana Roo.
                                <br>
                                <br>
                                En la actualidad el marco jurídico del Municipio se sustenta en la Constitución Política del Estado Libre y Soberano de Quintana Roo del 12 de Enero de 1975, en sus artículos 129 (reformado el 28 de julio de 1993) y 130 Fracción II, así como en la Ley de los Municipios del Estado Libre y Soberano de Quintana Roo, del 20 de Diciembre de 2004.
                            </v-card-subtitle>
                          </v-card-text>
                        
                      </div>
                    </v-expand-transition>
                  </v-card>
                </section>
            </v-responsive>
        </v-theme-provider>
    </v-sheet>
</template>
<script>
    export default {
        name:'escudoMpal',
        data(){
            return{
              show: false,
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