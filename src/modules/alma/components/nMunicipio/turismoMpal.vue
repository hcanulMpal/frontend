<template>
    <v-sheet 
        id="scrolling-techniques-4"
        class="overflow-y-auto">
        <v-theme-provider>
            <v-responsive>
                <section>
                    <div>
                    <v-carousel hide-delimiters cycle  interval="4000" show-arrows-on-hove >
                        <v-carousel-item
                        v-for="(item,i) in items2"
                        :key="i"
                        :src="item.src"
                        
                        ></v-carousel-item>
                    </v-carousel>
                    <v-card
                        class="mx-auto"
                        max-width="900"
                        style="margin-top: -20px;"
                        color="#851F3B"
                    >
                        <v-row class="text-center">
                            <v-col></v-col>
                            <p class="white--text font-weight-medium mt-2">VISITA ESTOS HERMOSOS PAISAJES</p>
                            <v-col></v-col>
                        </v-row>
                    </v-card>
                  </div>
                  <br>
                  <br>
                  <v-card class="content-center">
                    <p class="text-center mt-5 title"> Turismo </p> 
                    <v-card
                        class="mx-auto"
                        max-width="700"
                    >
                        <v-img
                        src="../../../../assets/alma/felipeCarrilloPuerto_1.jpg"
                        height="200px"
                        ></v-img>

                        <v-card-title>
                        FELIPE CARRILLO PUERTO
                        </v-card-title>

                        <v-dialog
                        v-model="dialog"
                        fullscreen
                        hide-overlay
                        transition="dialog-bottom-transition"
                        >
                        <template v-slot:activator="{ on, attrs }">
                            <v-btn
                            color="primary"
                            plain
                            rounded
                            small
                            text
                            v-bind="attrs"
                            v-on="on"
                            >
                            Ver galer??a
                            </v-btn>
                        </template>
                        <v-card>
                            <v-toolbar
                            dark
                            color="primary"
                            >
                            <v-toolbar-title>Felipe Carrillo Puerto</v-toolbar-title>
                            <v-spacer></v-spacer>
                            <v-toolbar-items>
                                <v-btn
                                dark
                                text
                                @click="dialog = false"
                                >
                                X
                                </v-btn>
                            </v-toolbar-items>
                            </v-toolbar>
                            <v-list
                            three-line
                            subheader
                            >
                            <div>                            
                                <v-container fluid>
                                    <v-row dense>
                                        <v-col
                                        v-for="card in cards"
                                        :key="card.title"
                                        :cols="card.flex"
                                        >
                                        <v-card>
                                            <v-img
                                            :src="card.src"
                                            class="white--text align-end"
                                            height="250px"
                                            >
                                            <v-card-title v-text="card.title"></v-card-title>
                                            </v-img>
                                        </v-card>
                                        </v-col>
                                    </v-row>
                                </v-container>
                            </div>
                            </v-list>
                        </v-card>
                    </v-dialog>

                        <v-card-actions>
                        <v-btn
                            color="orange lighten-2"
                            text
                        >
                            Conocer m??s
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
                            <v-row justify="center">
                            <v-card-text>
                                Ubicado a 95 Km. Al sur de Tulum por la carretera federal 307, Carrillo Puerto ostenta los t??tulos de ???Capital de la cultura Maya??? y ???Pueblo con Encanto???; en la ciudad se encuentra como principal atractivo su centro hist??rico, en el cual podr??s visitar la Iglesia Balam Nah (casa del jaguar) la cual resalta ya que es la ??nica construida por Mayas utilizando esclavos blancos, a un costado de la iglesia se encuentra la Casa de la cultura, un edificio con estructuras de arcos el cual sirvi?? como cuartel general para los comandantes y l??deres mayas, en la actualidad puedes recorrer sus salones donde se imparten clases de pintura, m??sica, manualidades y maya, tambi??n en sus pasillos se exhiben exposiciones de artistas locales, nacionales y algunas veces internacionales. En el mismo centro hist??rico se encuentra el museo de la cultura maya ???Chan Santa Cruz???, nombrado as?? en honor al antiguo nombre de la ciudad, en ??l se puede apreciar todo lo relacionado a la vida cotidiana de los mayas, as?? como eventos y exposiciones temporales de artistas nacionales e internacionales, por ??ltimo frente al museo est?? la ???Pila de los Azotes???, la cual en la antig??edad era utilizada para castigar por medio de azotes y de manera p??blica a los que infring??an las leyes del pueblo. A unas cuantas calles se encuentra el Santuario de la Cruz Parlante, cuna de la ciudad y de la adoraci??n a la Cruz Parlante, cuenta la leyenda que una cruz que hablaba se present?? en un ??rbol de cedro a un lado de un cenote sagrado, y la Cruz uni?? a los mayas y los guio en la lucha contra sus opresores; actualmente se puede visitar el cenote y el adoratorio, respetando las normas de los guardianes del centro ceremonial, distinci??n que se pasa de generaci??n en generaci??n. <br><br>
                                Adem??s del recorrido por los lugares hist??ricos, Carrillo Puerto es famoso por su gastronom??a, podr??s encontrar una gran variedad de lugares donde se pueden degustar los platillos tradicionales de la zona como el Chilmole, Relleno negro, salpic??n de Venado, Poc-chuc y queso relleno adem??s de antojitos regionales como cochinita pibil, lech??n, panuchos, salbutes, etc. Cuanta con una variedad de hoteles peque??os donde se puede pernoctar para continuar con la exploraci??n de este destino poco conocido pero con mucho que ofrecer. <br>
                                Nota: Existe un centro de medicina tradicional, hol??stica y Sanaci??n en las afueras de la ciudad nombrado Raxalaj Mayab, si te interesa saber m??s sobre las actividades vale la pena acercarte al m??dulo de informaci??n tur??stica de la ciudad en la esquina de las Av. Benito Ju??rez con Santiago Pacheco Cruz para mayor informaci??n
                            </v-card-text>
                            
                                <v-img
                                src="../../../../assets/alma/felipeCarrilloPuerto_i.jpg"
                                max-height="250"
                                max-width="350"
                                ></v-img>
                            </v-row>
                        </div>
                        </v-expand-transition>
                    </v-card>
                    <v-row       
                    class="mb-6"
                    no-gutters>
                    <v-col md="2">
                        <div class="d-flex flex-column justify-space-between align-center">
                            <v-img
                            src="../../../../assets/alma/mapaturist.jpg"
                            max-height="270"
                            max-width="200"
                            ></v-img>
                        <v-btn
                        :loading="loading3"
                        :disabled="loading3"
                        color="red darken-2"
                        class="ma-2 white--text "
                        @click="loader = 'loading3'"
                        >
                        Descargar
                        <v-icon
                            right
                            dark
                        >
                            mdi-download
                        </v-icon>
                        </v-btn>
                      </div>
                    </v-col>
                  </v-row>
                  </v-card>
                </section>
            </v-responsive>
        </v-theme-provider>
    </v-sheet>
  </template>
  <script>
    export default {
        name:'turismoMpal',
        data(){
            return{
                show: false,
                dialog: false,
                selectItem:1,
                items2: [
          {
            src: require("@/assets/alma/muyil_1.jpg"),
          },
          {
            src: require("@/assets/alma/puntaAllen_1.jpg"),
          },
          {
            src: require("@/assets/alma/balamNah_1.jpg"),
          },
          {
            src: require("@/assets/alma/chunhuhub_1.jpg"),
          },
          {
            src: require("@/assets/alma/felipeCarrilloPuerto_1.jpg"),
          },
          {
            src: require("@/assets/alma/kantemo_1.jpg"),
          },
          {
            src: require("@/assets/alma/senor_1.jpg"),
          },
          {
            src: require("@/assets/alma/tihosuco_1.jpg"),
          },
        ],
        cards: [
        { title: 'Crea tus propias experiencias', src: require("@/assets/alma/felipeCarrilloPuerto_1.jpg"), flex: 12 },
        { src: require("@/assets/alma/felipeCarrilloPuerto_2.jpg"), flex: 6 },
        { src: require("@/assets/alma/felipeCarrilloPuerto_3.jpg"), flex: 6 },
        { src: require("@/assets/alma/felipeCarrilloPuerto_4.jpg"), flex: 12 },
        { src: require("@/assets/alma/felipeCarrilloPuerto_5.jpg"), flex: 6 },
        { src: require("@/assets/alma/felipeCarrilloPuerto_7.jpg"), flex: 6 },
        { src: require("@/assets/alma/felipeCarrilloPuerto_6.jpg"), flex: 12 },
      ],
            }
        },
}
  </script>
  <style scoped>
   
  </style>