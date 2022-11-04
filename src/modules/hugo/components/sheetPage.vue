<template>
    <v-sheet
        id="scrolling-techniques-4"
        class="overflow-y-auto"
        max-height="1000"
    >
        <div v-if="$route.path == '/'">
            <section>
            <div class="mt-5 mb-2 text-sm-center" sm="3">
                <p class="text-subtitle-2 text-sm-center mb-1 ml-1 red--text">Noticias y avisos relevantes</p>
            </div>
            <div class="mb-2">
                <p class="text-subtitle-2 text-sm-center mb-1 ml-1 red--text"><v-btn color="red darken-4" dark rounded> Conoce más</v-btn></p>
                
            </div>
            </section>
            <section>
                <div >
                    <v-carousel hide-delimiters cycle  interval="4000" show-arrows-on-hove >
                        <v-carousel-item
                        v-for="(item,i) in items2"
                        :key="i"
                        :src="item.src"
                        
                        ></v-carousel-item>
                    </v-carousel>
                    <v-card
                        class="mx-auto"
                        max-width="700"
                        style="margin-top: -20px;"
                        color="pink darken-2"
                    >
                        <v-row class="text-center">
                            <v-col></v-col>
                            <p class="white--text font-weight-medium mt-2">Enterate de otros avisos y eventos</p>
                            <v-col></v-col>
                        </v-row>
                        
                    </v-card>
                    <div class="text-center mt-15 mb-15 font-weight-medium ">
                        <v-row><v-col></v-col><v-divider class="mt-5 mr-5"></v-divider><h1>Noticias</h1><v-divider class="mt-5 ml-5"></v-divider><v-col></v-col></v-row>
                        
                    </div>
                    <v-card class="content-center">
                        <v-row>
                            <v-col cols="4" xs="4" sm="4" md="8" lg xg>
                                <v-card
                                    class="mx-auto"
                                    max-width="350"
                                    max-height="600"
                                >
                                    <v-img
                                        :src="require('@/assets/encendidoRosa.jpg')"
                                        max-height="600px"
                                    >
                                    </v-img>
                                    <v-card-text>noticias</v-card-text>
                                </v-card>
                            </v-col>
                            <v-col cols="4" xs="6" sm="4" md lg xg>
                                <v-card
                                    class="mx-auto"
                                    max-width="350"
                                    max-height="600"
                                >
                                        <v-img
                                            :src="require('@/assets/septiembre.jpg')"
                                            max-height="600px"
                                        >
                                        </v-img>
                                        <v-card-text>noticias</v-card-text>
                                </v-card>
                            </v-col>
                            <v-col cols="4" xs="6" sm="4" md lg xg>
                                <v-card
                                    class="mx-auto"
                                    max-width="350"
                                    max-height="600"
                                >
                                        <v-img
                                            :src="require('@/assets/septiembre.jpg')"
                                            max-height="600px"
                                        >
                                        </v-img>
                                        <v-card-text>noticias</v-card-text>
                                </v-card>
                            </v-col>
                        </v-row>
                        <div class="text-center mt-15 mb-15 font-weight-medium ">
                            <v-row><v-col></v-col><v-divider class="mt-5 mr-5"></v-divider><h1>Comunidad</h1><v-divider class="mt-5 ml-5"></v-divider><v-col></v-col></v-row>
                            
                        </div>
                        <v-row class="mt-15">
                            <v-carousel
                            cycle
                            hide-delimiter-background
                            show-arrows-on-hover
                        >
                            <v-carousel-item>
                                <v-img
                                    dark
                                    :src="require('@/assets/veronica.jpg')"
                                    cols="6" xs sm md lg="6" xl="3"
                                >
                                    <v-row
                                        align="center"
                                        justify="center"
                                    >
                                        <v-col
                                            class="text-center"
                                            cols="12"
                                        >
                                            <h1 class="text-h4 font-weight-thin mb-4">
                                            Vuetify
                                            </h1>
                                            <h4 class="subheading">
                                            Build your application today!
                                            </h4>
                                        </v-col>
                                    </v-row>
                                </v-img>
                            </v-carousel-item>
                            <v-carousel-item>
                                <v-img
                                    dark
                                    :src="require('@/assets/mara.jpg')"
                                    cols="6" xs sm md lg="6" xl="3"
                                >
                                    <v-row
                                        align="center"
                                        justify="center"
                                    >
                                        <v-col
                                            class="text-center"
                                            cols="12"
                                        >
                                            <h1 class="text-h4 font-weight-thin mb-4">
                                            Vuetify
                                            </h1>
                                            <h4 class="subheading">
                                            Build your application today!
                                            </h4>
                                        </v-col>
                                    </v-row>
                                </v-img>
                            </v-carousel-item>
                            <v-carousel-item >
                                <v-img
                                    dark
                                    :src="require('@/assets/mary.jpg')"
                                    cols="6" xs sm md lg="6" xl="3"
                                >
                                    <v-row
                                        align="center"
                                        justify="center"
                                    >
                                        <v-col
                                            class="text-center"
                                            cols="12"
                                        >
                                            <h1 class="text-h4 font-weight-thin mb-4">
                                            Vuetify
                                            </h1>
                                            <h4 class="subheading">
                                            Build your application today!
                                            </h4>
                                        </v-col>
                                    </v-row>
                                </v-img>
                            </v-carousel-item>
                        </v-carousel>
                        </v-row>
                    </v-card>
                    <v-card class="mt-15">
                        
                    </v-card>
                    <v-card class="content-center" >
                        <v-row>
                            <v-col cols="4" xs="6" sm="6" md lg xg>
                                <v-card
                                    class="mx-auto"
                                    max-width="350"
                                    max-height="600"
                                    
                                >
                                    <v-img
                                        :src="require('@/assets/encendidoRosa.jpg')"
                                        max-height="600px"
                                    >
                                    </v-img>
                                    <v-card-text>noticias</v-card-text>
                                </v-card>
                            </v-col>
                            <v-col cols="4" xs="6" sm="6" md lg xg>
                                <v-card
                                    class="mx-auto"
                                    max-width="350"
                                    max-height="600"
                                >
                                        <v-img
                                            :src="require('@/assets/septiembre.jpg')"
                                            max-height="600px"
                                        >
                                        </v-img>
                                        <v-card-text>noticias</v-card-text>
                                </v-card>
                            </v-col>
                            <v-col cols="4" xs="6" sm="6" md lg xg>
                                <v-card
                                    class="mx-auto"
                                    max-width="350"
                                    max-height="600"
                                >
                                        <v-img
                                            :src="require('@/assets/septiembre.jpg')"
                                            max-height="600px"
                                        >
                                        </v-img>
                                        <v-card-text>noticias</v-card-text>
                                </v-card>
                            </v-col>
                        </v-row>
                    </v-card>
                </div>
            </section>
        </div>
        <router-view  max-height="1000" />
    </v-sheet>
</template>
<script>
export default {
    data(){
            return{
                selectItem:1,
                items2: [
          {
            src: require("@/assets/mary-cancer.jpg"),
          },
          {
            src: require("@/assets/mary-premio.jpg"),
          },
          {
            src: require("@/assets/mary-herra.jpg"),
          },
          {
            src: require("@/assets/mary-home.jpg"),
          },
          {
            src: require("@/assets/mary-pastel.jpg"),
          },
        ],
            }
        },
}
</script>