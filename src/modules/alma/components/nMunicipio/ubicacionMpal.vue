<template>
    <v-sheet >
        <v-theme-provider>
            <v-responsive>
                <section >
                  <v-row justify="center" class="pt-10 mt-16">
                    <v-card
                    class="ma-16 mt-16"
                    max-width="800"
                  >

                      <p class="text-center mt-5 title"> Ubicación </p> 
  
                      <div class="row">
                          <googleMap :latitude= 19.578230918594535 :longitude= -88.04647965981202 :title="'Palacio Municipal'" />
                      </div>                         
                          <v-card-text>
                                Se encuentra en el Corazón del Estado de Quintana Roo, a 157 km de la capital del Estado, Chetumal y a 233 km de Cancún este destino de encuentra enlazado con las siguientes ciudades: Mérida, Valladolid, Cancún, Playa del Carmen, Tulum, Chetumal (ver mapa). Felipe Carrillo Puerto representa la Identidad Cultural del Estado, fundado el 15 de octubre de 1850 con el nombre de Noj Kaj Santa Cruz Balam Naj K’anpokolche’ Kaj , posee en su superficie más del 90% de la Reserva de la Biosfera Sian Ka´an, declarado como Patrimonio de la Humanidad. La base de su economía es la producción agropecuaria, aprovechamiento forestal, pesca y actualmente el turismo alternativo.
                                <br>
                                <br>
                                Censo de Población y Vivienda del 2010 realizado por el Instituto Nacional de Estadística y Geografía, habitantes en  Felipe Carrillo Puerto es de 75 026, Sexo Masculino 37 994 y del Sexo Femenino 37 032
                            </v-card-text>
                  </v-card>
                </v-row>
                </section>
            </v-responsive>
        </v-theme-provider>
    </v-sheet>
  </template>
  <script>
  import googleMap from "./googleMaps/googleMap.vue";

    export default {
        name:'ubicacionMpal',
        components: {
          googleMap
        },
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