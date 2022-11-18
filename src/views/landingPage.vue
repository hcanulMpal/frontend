<template>
  <v-container fluid>
    <v-card>
        <v-app-bar
            absolute
            color="primary"
            dark
            shrink-on-scroll
            scroll-target="#scrolling-techniques"
            prominent
        >

            <v-app-bar-nav-icon @click="drawer = !drawer"><v-icon>mdi-view-sequential</v-icon></v-app-bar-nav-icon>
            
            <div class="contenedor">
                <v-layout>
                    <v-flex row wrap align-center>
                        <v-img class="mt-2 imagen" max-height="55%" max-width="auto" :src= "require('@/assets/IMAGOTIPO-HORIZONTAL-BLANCO.png')"></v-img>   
                    </v-flex>
                </v-layout>
            </div>
            
            <v-spacer></v-spacer>
            <v-btn icon>
            <v-icon color="deep-orange accent-3">mdi-fingerprint</v-icon>
            </v-btn>
        </v-app-bar>
        <v-navigation-drawer
            app
            color="#296C61"
            class="navigator"
            v-model="drawer"
        >
            <v-card>
                <v-img
                    height="250"
                    :src="require('@/assets/logom.png')"
                ></v-img>
            </v-card>
            <v-divider></v-divider>

            <!-- crear componente para subir lista con iconos svg -->
                <v-flex>
                <v-list>
                <v-list-item to="/">
                    <v-list-item-icon>
                        <v-icon color="white">mdi-home</v-icon>
                    </v-list-item-icon>
                    <v-list-item-content>
                        <v-list-item-title  @click="mini = !mini">Inicio</v-list-item-title>
                    </v-list-item-content>
                </v-list-item>
                <v-list-group
                    v-for="item in menu"
                    :key="item.title"
                    v-model="item.active"
                    :prepend-icon="item.action"
                    no-action
                    color="white"
                >
                    <template v-slot:activator>
                    <v-list-item-content>
                        <v-list-item-title v-text="item.title" ></v-list-item-title>
                    </v-list-item-content>
                    </template>

                    <v-list-item
                    v-for="subItem in item.items"
                    :key="subItem.title"
                    link
                    :to="subItem.enlace"
                    >
                    
                    <v-list-item-icon>
                        <v-icon color="white">{{ subItem.icon }}</v-icon>
                    </v-list-item-icon>
                    <v-list-item-content>
                        <v-list-item-title v-text="subItem.title" @click="mini = !mini"></v-list-item-title>
                    </v-list-item-content>
                    </v-list-item>
                </v-list-group>

                <v-list-item to="/culturaMcpio">
                    <v-list-item-icon>
                        <v-icon >mdi-pillar</v-icon>
                    </v-list-item-icon>
                    <v-list-item-content>
                        <v-list-item-title  @click="mini = !mini">Cultura</v-list-item-title>
                    </v-list-item-content>
                </v-list-item>
                </v-list>
            </v-flex>
        </v-navigation-drawer>
    </v-card>
    <v-card>
        <v-sheet
            id="scrolling-techniques-2"
            class="overflow-y-auto"
        >
            <div class="red">
                <div class="facebook">
                    <a href="https://www.facebook.com/AyuntamientoFCP" target="_blank"><v-icon color="white">mdi-facebook</v-icon></a>
                </div>
                <!-- <div class="instagram">
                    <a href="https://instagram.com/ma.ryhernandez?igshid=YmMyMTA2M2Y=" target="_blank"><v-icon color="white">mdi-instagram</v-icon></a>
                </div> -->
                <!-- <div class="twitter">
                    <a href="https://twitter.com/Ayto_FCP?t=JX__rGKIFnjOYeuvvdoiAw&s=09" target="_blank"><v-icon color="white">mdi-twitter</v-icon></a>
                </div> -->
            </div>
            <div v-if="$route.path == '/'">
                <sheet-page class="pt-9"></sheet-page>
            </div>
            <router-view max-height="1000" />
        </v-sheet>
    </v-card>    
  </v-container>
</template>

<script>
import SheetPage from '../modules/hugo/components/sheetPage.vue'

export default {
    components:{
        SheetPage,
    },
    data: () => ({
        mini: true,
        drawer:false,
        menu: [
            {
                action: 'mdi-silo',
                active: true,
                title: 'Gobierno Municipal',
                items: [
                    { title: 'Organigrama', enlace:{name: 'organigrama'}, icon:"mdi-city" },
                    { title: 'Directorio Mpal.', enlace:{name: 'directorio'}, icon:"mdi-library" },
                    // { title: 'Cabildo Mpal.', enlace:{name: 'cabildoMpal'}, icon:"mdi-account-box" },
                ],
            },
            {
                action: 'mdi-silo',
                title: 'Nuestro Municipio',
                items: [
                    { title: 'Historia', enlace:{name: 'historiaMpal'}, icon:"mdi-account-outline" },
                    { title: 'Ubicacion', enlace:{name: 'ubicacionMpal'}, icon:"mdi-map-marker" },
                    { title: 'Turismo', enlace:{name: 'turismoMpal'}, icon:"mdi-map" },
                    { title: 'Escudo', enlace:{name: 'escudoMpal'}, icon:"mdi-account-box" },
                    { title: 'Fiestas y Ferias', enlace:{name: 'fiestasFerias'}, icon:"mdi-city" },
                    { title: 'Telefonos de Emergencia', enlace:{name: 'telEmergencia'}, icon:"mdi-library" },                ],
            },
            {
                action: 'mdi-movie-roll',
                title: 'Sala de Prensa',
                items: [
                    { title: 'Prensa', enlace:{name:'prensaSalaP'}, icon:"mdi-newspaper-variant"},
                    { title: 'Avisos', enlace:{name:'avisosSalaP'}, icon:"mdi-newspaper"}
                ]
                
            },
            {
                action: 'mdi-bulletin-board',
                title:'Dependencias',
                items:[
                    {title: 'Dependencia', enlace:{name:'dependenciaDep'}, icon:"mdi-newspaper"}
                ]
            },
            {
                action: 'mdi-nut',
                title: 'Presidencia',
                items: [
                { title: 'Presidenta', enlace:{name:'presidentaPre'}, icon:"mdi-account-outline"},
                ]
            },
            
        ],
    }),
}
</script>
<style scoped>
.contenedor
{
    max-width: 250px;
    max-height: auto;
}
.imagen
{
    width: inherit;
    max-width: 100%;
    height: auto;
}
.red
{
    position: fixed;
    top: 200px;
    z-index: 100;
    right: 0;
}
.facebook
{
    background: #3b5998;
    padding: 10px 20px;
    color: #fff;
    outline: none;
    text-decoration: none;
}
.instagram
{
    background: #D7023F;
    padding: 10px 20px;
    color: #fff;
    outline: none;
    text-decoration: none;
}
.twitter
{
    background: #08A6E6;
    padding: 10px 20px;
    color: #fff;
    outline: none;
    text-decoration: none;
}
</style>