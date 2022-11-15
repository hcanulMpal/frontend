<template>
    <v-sheet >
        <v-theme-provider >
            <v-responsive>
                <section>
                  <v-row justify="center" class="pt-10 mt-16">
                    <v-card
                    class="ma-16 mt-16"
                    max-width="800px"
                    >
                      <v-img
                        :lazy-src="require('@/assets/alma/historia_1.jpg')"
                        height="350px"
                      ></v-img>
  
                    <!-- <v-card-title > -->
                      <p class="text-center mt-5 title"> Historia </p> 
                    <!-- </v-card-title> -->
  
                      <div >
                        <!-- <v-divider></v-divider> -->
                        <!-- <v-img :src="require('@/assets/IMAGOTIPO-OFICIAL-MH.png')" max-height="100" max-width="100"></v-img> -->
                          <v-card-text src>
                            <v-card-subtitle>
                              Los primeros pobladores de este lugar fueron los mayas, de cuya estancia aún quedan vestigios como las zonas arqueológicas de Kaná, Chumyaxché, Okop y Punta Pájaros. Los españoles encontraron al territorio del actual municipio de Felipe Carrillo Puerto dividido en dos cacicazgos, el de Cochuah y el de Uaymil, que se habían formado al romperse la Liga de Mayapán.
                            </v-card-subtitle>
                            <v-card-subtitle>
                              En 1544 los españoles conquistaron la zona después de una gran oposición del cacicazgo de Cochuah. Durante la Colonia se estableció el sistema de encomiendas. La dura explotación de los indígenas prosiguió durante la época independiente, teniendo como consecuencia la Guerra de Castas, que estalló el 30 de julio de 1847 en Tepich, cuando Cecilio Chí asesinó a las familias yucatecas del lugar. En 1850 la Guerra de Castas parecía haber terminado con la derrota de los mayas, pero éstos se unieron nuevamente gracias a la aparición de la Cruz Parlante. Alrededor de este símbolo se asentaron los mayas, fundando Chan Santa Cruz -hoy Felipe Carrillo Puerto-.Chan Santa Cruz no pudo ser tomada por las tropas gubernamentales y desarrolló una economía que le permitió resistir comprando armas a los ingleses residentes en Belice. Los mayas perdieron este apoyo cuando el conflicto limítrofe con Belice fue resuelto. Al mando del general Ignacio A. Bravo comienza la ofensiva contra Chan Santa Cruz, fortificando las poblaciones aledañas hasta rodear el poblado, consiguiendo su aislamiento y forzando a los mayas a abandonarlo. Posteriormente fue tomado sin resistencia el 3 de mayo de 1901. Bravo inicia la colonización de la zona a través de la explotación de sus recursos, maderas preciosas, palo de tinte y durmientes para ferrocarril, que eran exportados por el puerto de Vigía Chico, con el que Santa Cruz -ahora Santa Cruz de Bravo- se comunicaba por una vía de ferrocarril.
                            </v-card-subtitle>
                            <v-card-subtitle>
                              En 1915 Salvador Alvarado regresó a los mayas la ciudad de Santa Cruz, trasladando la capital del territorio a Payo Obispo. Esta decisión hizo que Santa Cruz quedara prácticamente deshabitada, repoblándose más tarde con personas de origen maya a instancias de Francisco May, quien gracias a acuerdos con el Gobierno Federal, se convirtió en el personaje más importante de la región al monopolizar la producción de chicle, principal artículo de exportación en esta época. May revendía el chicle a las grandes compañías internacionales. En 1932 el nombre de Santa Cruz de Bravo, de ingrato recuerdo para los mayas, fue cambiado por el de Felipe Carrillo Puerto, líder yucateco que siempre buscó el bienestar de la población maya.
                              <br>
                              <br>
                              Hoy, el municipio prosigue su desarrollo con base en las actividades agropecuarias y en su privilegiada situación geográfica, que lo convierte en el centro de la zona maya.                       
                            </v-card-subtitle>
                          </v-card-text>
                      </div>
                  </v-card>
                  </v-row>
                </section>
            </v-responsive>
        </v-theme-provider>
    </v-sheet>
  </template>
  <script>
    export default {
        name:'historiaMpal',
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