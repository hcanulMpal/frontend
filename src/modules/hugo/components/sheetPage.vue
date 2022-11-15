<template>
    <v-container fluid>
        <br><br><br><br>
        <v-theme-provider>
            <v-responsive>
                <v-sheet
                    id="scrolling-techniques-4"
                    class="overflow-y-auto"
                    max-height="2500"
                >
                    <div v-if="$route.path == '/'">
                        <div >
                            <v-carousel hide-delimiters cycle  interval="4000" show-arrows-on-hove height="auto">
                                <v-carousel-item
                                v-for="(item,i) in items2"
                                :key="i"
                                >
                                    <v-img
                                        dark
                                        :src="item.src"
                                    >
                                        <v-row
                                        align="center"
                                        justify="center"
                                        class="pa-2 align-self-center justify-xl-space-between justify-lg-space-between justify-md-space-between justify-sm-space-between justify-space-between "
                                        >
                                            <v-col
                                                class="text-center pa-2 align-self-center"
                                                cols="12"
                                            >
                                                    <h1 class="text-h4 mb-4 pa-2 align-self-center">
                                                    {{item.title}}
                                                </h1>
                                                <h4 class="subheading pa-2 align-self-center">
                                                    {{item.text}}
                                                </h4>
                                                <v-btn  color="primary" @click="dialogo(item)" class="pa-2 align-self-center"> Ver video </v-btn>
                                            </v-col>
                                        </v-row>
                                    </v-img>
                                </v-carousel-item>
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
                                    height="auto"
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
                                                    Comunidad Maya
                                                    </h1>
                                                    <h4 class="subheading">
                                                    Nunva hay que olvidar nuestras raíces
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
                                                    Mara Lezama gobernadora de Quinata Roo
                                                    </h1>
                                                    <h4 class="subheading">
                                                    Primera mujer Gobernadora del Estado de Quintana Roo.
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
                                                    Mary Hernández
                                                    </h1>
                                                    <h4 class="subheading">
                                                    Actual gobernadora de Felipe Carrillo Puerto
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
                    </div>
                    <router-view  max-height="1000" />
                </v-sheet>
            </v-responsive>
        </v-theme-provider>
    </v-container>
</template>
<script>
export default {
    data(){
            return{
                selectItem:1,
                items2: [
                    {
                        text:"Atencion y cercania hacia todo Felipe Carrillo Puerto",
                        title:"Ramonal",
                        url: "https://www.youtube.com/embed/oyywkYjOzRs",
                        src: require("@/assets/Bullets/ramonal.png"),
                    },
                    {
                        text:"Educación en Felipe Carrillo Puerto",
                        title:"Educación",
                        url: "https://www.youtube.com/embed/MYMynAFsEcs",
                        src: require("@/assets/Bullets/educacion.png"),
                    },
                    {
                        text:"Espacios limpios en Felipe Carrillo Puerto",
                        title:"Espacios Limpios",
                        url: "https://www.youtube.com/embed/M0MTaHHydNM",
                        src: require("@/assets/Bullets/espacios.png"),
                    },
                    {
                        text:"Infraestructura en Felipe Carrillo Puerto",
                        title:"Infraestructura",
                        url:" https://www.youtube.com/embed/AgNSK_FkD8U",
                        src: require("@/assets/Bullets/infraestructura.png"),
                    },
                    {
                        text:"Ingrsos en Felipe Carrillo Puerto",
                        title:"Ingresos",
                        url: "https://www.youtube.com/embed/9GzND_0UZUA",
                        src: require("@/assets/Bullets/ingresos.png"),
                    },
                    {
                        text:"Salud en Felipe Carrillo Puerto",
                        title:"Salud",
                        url: "https://www.youtube.com/embed/MqytU6u6_Y0",
                        src: require("@/assets/Bullets/salud.png"),
                    },
                    {
                        text:"Seguridad en Felipe Carrillo Puerto",
                        title:"Seguridad",
                        url: "https://www.youtube.com/embed/G35z-h9_uUI",
                        src: require("@/assets/Bullets/seguridad.png"),
                    },
                    {
                        text:"Politica Pública de Bienestas en Felipe Carrillo Puerto",
                        title:"Politica Pública",
                        url: "https://www.youtube.com/embed/igGTpIcZLNU",
                        src: require("@/assets/Bullets/politica.png"),
                    },
                    ],
            }
        },
    methods:{
        dialogo(data){
            this.$swal({
                title: data.title,
                text: data.text,
                width: 600,
                html:
                    '<div style="position: relative;'+
                        'overflow: hidden;'+
                        'width: 100%;'+
                        'padding-top: 56.25%;">'+
                        '<iframe style="position: absolute; top: 0;'+
                        'left: 0;bottom: 0;right: 0;width: 100%; height: 100%;" src='+data.url+'></iframe>'+
                    '</div>',
                imageAlt: 'Custom image',
            })
        },
    }
}
</script>
<style scoped>
    .video{
    display: flex;
    align-items: center;
    justify-content: center;
    }
</style>