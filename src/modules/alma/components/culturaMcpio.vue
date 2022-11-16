<template>
    <v-sheet>
        <v-theme-provider>
            <v-responsive>
                <section >
                    <v-row justify="center" class="pt-10 mt-16">
                        <v-card>
                            <div 
                                class="ma-16 mt-16"
                                max-width="90%">
                                <div class="d-flex justify-space-around align-center mb-6">
                                    <div class="pa-2">
                                    <v-img
                                    src="../../../assets/alma/mestiza.png"
                                    
                                    ></v-img>
                                </div>
                                <div class="pa-2">
                                    <p class="text-center mt-5 display-2"> Cultura </p> 
                                </div>
                                </div>
                            </div>
                            <div class="d-flex justify-space-around align-center mb-6">
                                <div class="pa-2">
                                <!-- Bailes tipicos inicio -->
                                <v-card 
                                    class="mx-auto pa-2"
                                    max-width="344"
                                    outlined
                                    elevation="24"
                                    shaped
                                >
                                    <v-list-item three-line>
                                    <v-list-item-content>
                                        <v-list-item-title class="text-h5 mb-1">
                                        BAILES TÍPICOS
                                        </v-list-item-title>
                                        <v-list-item-subtitle>Conoce los tipicos bailes que se celebran en nuestro municipio</v-list-item-subtitle>
                                    </v-list-item-content>
                                    <v-icon
                                    color="grey darken-4"
                                    x-large>
                                        mdi-guitar-acoustic
                                    </v-icon>
                                    </v-list-item>

                                    <v-dialog
                                        v-model="dialog"
                                        fullscreen
                                        hide-overlay
                                        transition="dialog-bottom-transition"
                                        
                                        >
                                        <template v-slot:activator="{ on, attrs }">
                                            <v-btn
                                            color="primary"
                                            outlined
                                            rounded
                                            text
                                            dark
                                            v-bind="attrs"
                                            v-on="on"
                                            >
                                            COnocer más
                                            </v-btn>
                                        </template>
                                        <v-card>
                                            <v-toolbar
                                            dark
                                            color="primary"
                                            >
                                            <v-btn
                                                icon
                                                dark
                                                @click="dialog = false"
                                            >
                                                <v-icon>mdi-close</v-icon>
                                            </v-btn>
                                            <v-toolbar-title>Bailes Típicos</v-toolbar-title>
                                            <v-spacer></v-spacer>
                                            </v-toolbar>
                                            <p class="text-center mt-5 title"> MAYA Pax </p> 
                                            <v-card-subtitle>
                                            Mayapax es el resultado de una expresión folklórica que surgió en esta parte del centro de Quintana Roo debido al aislamiento de sus manifestantes y la necesidad de preservar sus costumbres y tradiciones. Maya Pax es la quintaesencia de la música ancestral, una mística expresión musical maya rica en melodía pero carente de armonía. El ritmo es tomado del mismo yucateco Harana. La música de Maya Pax está más en línea con las prácticas religiosas mayas que con aspectos de entretenimiento o estética musical. Violín; a veces dos violines, una trompeta y hasta una guitarra. El violín es de madera blanca (pasak) y acacia (subin che), bombo y caja de tronco de cedro, patchwork de piel de venado. También se tocan almíbares, fandangos y sonecitos, destacando las Fiestas de San Juan Bautisla del 24 al 26 de junio, la Fiesta de la Purísima Concepción el 8 de diciembre y también en las rosaledas.
                                            <br>
                                            Nombres de algunas melodías: El pichito, la x-kokita, el chikich, olan de china, aires grandes, el torito, jarabe, la angaripolla, el kolonté, por mencionar algunas.Los primeros pobladores de este lugar fueron los mayas, de cuya estancia aún quedan vestigios como las zonas arqueológicas de Kaná, Chumyaxché, Okop y Punta Pájaros. Los españoles encontraron al territorio del actual municipio de Felipe Carrillo Puerto dividido en dos cacicazgos, el de Cochuah y el de Uaymil, que se habían formado al romperse la Liga de Mayapán.
                                            </v-card-subtitle>
                                            <v-divider></v-divider>
                                            <p class="text-center mt-5 title"> DANZA DE LA CABEZA DE COCHINO “ OK´ OSTA POL KE´ K´EN ” </p> 
                                            <v-card-subtitle text-center>
                                                Entre los mayas es sabido que sus celebraciones festivas y tradicionales tengan una quintafundamento pagano-religiosa, o que pero la cumpleaños de “la ballet de la defensor de cochino”, es una lúcida ballet de ademán más acertadamente satírica y divertida, esta se realiza delante la basílica del burgo durante las fiestas patronales.
                                                <br>
                                                La defensor que o ha sido aderezada y condimentada de arreglo a sus tradiciones ancestrales, y colocada en una variedad de altar, sobre un endémico cuévano de hiedra bellamente pulido con apetitosas frutas y entretejido con brillantes cintas multicolores de papel de guijarro y banderitas, y luego de un espléndido desarrollo que incluyo la engorda del inmundo por segunda vez años, es depositada sobre la defensor de un jóven a quien con anterioridad se han ligado los pies con cintas multicolores, como los cerdos, a quienes representa.
                                                <br>
                                                Antes de la espectro de éste en el ritual, salen danzando alegremente nueve señoritas atractivo y vistosamente arregladas y nueve muchachos guardarropía a la práctica del recinto (tejanos y vaqueras), dando llegada la ballet de la defensor de cochino, musicalmente acompañados por un multitud de maya pax, quienes tocan una larga y repetida melodía. Una tiempo terminada esta ballet, y encabezados por los jefes, las autoridades civiles, militares, y los organizadores, todo el burgo se encamina cerca de la basílica del recinto para comparecer a una grave culto patronal. Los rituales de la juerga patronal dura justamente nueve días.
                                            </v-card-subtitle>
                                            <v-divider></v-divider>
                                            <p class="text-center mt-5 title">BAILE DE LOS CHICLEROS</p> 
                                            <v-card-subtitle text-center>
                                                Esta danza muestra el estilo de juego característico de los chiqueros, hombres toscos y algo esquivos que trabajaban en la selva en los llamados campamentos o ranchos cortando, recolectando y empaquetando la resina del árbol Chicozapote (Makira Zapota). Chikleros mostraba una forma característica de alegría cuando una mujer solitaria bailaba con ellos. No faltaron los dispuestos a aprovecharse oa ofenderse entablando un duelo a machetazos, que casi siempre se podía apaciguar. La progenitora inmediata de esta danza es una mujer de piel oscura que, al ser traída a nuestro país a través de la frontera con Belice, adquiere rasgos muy peculiares.
                                            </v-card-subtitle>
                                        </v-card>
                                    </v-dialog>
                                </v-card> <!-- Bailes tipicos final -->
                            </div>
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
        name:'culturaMcpio',
        data(){
            return {
                dialog: false,
            }
        },
}
  </script> 
  <style scoped>
   
  </style>