<template>
    <v-sheet >
        <v-theme-provider >
            <v-responsive>
                <section >
                  <v-row justify="center" class="pt-10 mt-16">
                  <v-card
                    class="ma-16 mt-16"
                    max-width=""
                    color="#296C61"
                  >
                  <p class="text-center mt-5 title"> FIESTAS Y FERIAS </p> 
  
                      <div class="d-flex flex-column justify-space-between align-center ma-4">
                        <v-simple-table width="300px"  >
                            <template v-slot:default>
                            <tbody >
                                <tr
                                class="red-bg"
                                v-for="item in desserts"
                                :key="item.name"
                                >
                                <td>{{ item.name }}</td>
                                <td>{{ item.patrono }}</td>
                                <td>{{ item.fecha }}</td>
                                </tr>
                            </tbody>
                            </template>
                        </v-simple-table>
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
        name:'fiestasFerias',
        data(){
            return{
              show: false,
              
        desserts: [
          {
            name: 'Tixcacal Guardia	',
            patrono: 'Tres Cruces',
            fecha: '24 de Abril al 3 de Mayo',
          },
          {
            name: '',
            patrono: 'Virgen María',
            fecha: '23 al 29 de Agosto',
          },
          {
            name: '',
            patrono: 'Virgen María de Concepción',
            fecha: '6 al 13 de Diciembre',
          },
          {
            name: 'Chankah Veracruz',
            patrono: 'Tres Cruces',
            fecha: '15 al 20 de Abril',
          },
          {
            name: 'Chumpon',
            patrono: 'Tres Cruces',
            fecha: '1 de Enero al 12 de Mayo',
          },
          {
            name: 'Felipe Carrillo Puerto',
            patrono: 'Santa Cruz',
            fecha: '23 de Abril al 3 de Mayo',
          },
          {
            name: '',
            patrono: 'Tres Reyes',
            fecha: '5 al 12 de Enero',
          },
          {
            name: 'Señor',
            patrono: 'Las Santas Cruces',
            fecha: '19 al 24 de Marzo',
          },
          {
            name: '',
            patrono: 'Virgen Morena de Guadalupe',
            fecha: '22 de Julio al 3 de Agosto',
          },
          {
            name: 'Xyatil',
            patrono: 'San Bernardino de Siena',
            fecha: '15 al 21 de Mayo',
          },
          {
            name: 'Yodzonot Nuevo',
            patrono: 'Santa Cruz',
            fecha: '3 al 5 de Abril',
          },
          {
            name: 'San Ramon',
            patrono: 'San Ramón',
            fecha: '11 al 15 de Febrero',
          },
          {
            name: 'Chankah de Repente',
            patrono: 'Santo Cristo de Amor',
            fecha: '1 al 8 de Abril',
          },
          {
            name: 'Chunhuas',
            patrono: 'Santo Cristo de Amor',
            fecha: '8 al 14 de Marzo',
          },
          {
            name: 'Xpichil',
            patrono: 'Santa Cruz',
            fecha: '25 de Abril al 3 de Mayo',
          },
          {
            name: '',
            patrono: 'Virgen de la Concepción',
            fecha: '7 al 15 de Agosto',
          },
          {
            name: 'K’opch’en',
            patrono: 'San Juan Bautista',
            fecha: '20 al 25 de Junio',
          },
          {
            name: 'X-Hazil',
            patrono: 'San Miguel',
            fecha: '7 al 12 de Febrero',
          },
          {
            name: '',
            patrono: 'San Miguel',
            fecha: '24 al 30 de Septiembre',
          },
          {
            name: 'Dzulá',
            patrono: 'San Román',
            fecha: '10 al 15 de Abril',
          },
          {
            name: '',
            patrono: 'San Antonio',
            fecha: '10 al 14 de Junio',
          },
          {
            name: 'Tuzik',
            patrono: 'Santa Cruz',
            fecha: '1 al 8 de Mayo',
          },
          {
            name: 'Yaxley',
            patrono: 'Niño Jesús',
            fecha: '23 al 25 de Diciembre',
          },
          {
            name: 'Laguna K’ana',
            patrono: 'Virgen de Concepción',
            fecha: '13 al 18 de Abril',
          },
          {
            name: '',
            patrono: 'Virgen María',
            fecha: '4 al 12 de Diciembre',
          },
          {
            name: 'Chunyáh',
            patrono: 'Tres Cruces',
            fecha: '15 al 18 de Junio',
          },
          {
            name: 'Chun On',
            patrono: 'San José',
            fecha: '15 al 18 de Febrero',
          },
          {
            name: 'Tepich',
            patrono: 'San José',
            fecha: '14 al 22 de Marzo',
          },
          {
            name: 'San José II',
            patrono: 'San José',
            fecha: '17 al 19 de Marzo',
          },
        ],
            }
        },
        created(){
        },
        methods:{
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