<template>
    <v-sheet >
        <v-theme-provider >
            <v-responsive>
                <section >
                  <v-row justify="center" class="pt-10 mt-16">
                  <v-card
                    class="ma-16 mt-16"
                    max-width="450px"
                    color="#296C61"
                  >
                  <p class="text-center mt-5 title"> Numeros de Emergencias </p> 
  
                      <div class="d-flex flex-column justify-space-between align-center ma-4">
                        <!-- <v-divider></v-divider> -->
                        <!-- <v-img :src="require('@/assets/IMAGOTIPO-OFICIAL-MH.png')" max-height="100" max-width="100"></v-img> -->
                        <v-simple-table width="300px"  >
                            <template v-slot:default>
                            <tbody >
                                <tr
                                class="red-bg"
                                v-for="item in desserts"
                                :key="item.name"
                                >
                                <td>{{ item.name }}</td>
                                <td>{{ item.title }}</td>
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
        name:'telEmergencia',
        data(){
            return{
              show: false,
              desserts: [
          {
            name: 'Emergencias ',
            title: 911,
          },
          {
            name: 'Bomberos',
            title: 83+"-"+409+"-"+27,
          },
          {
            name: 'PJE',
            title: 26+"-"+711+"-"+30,
          },
          {
            name: 'PFP',
            title: 83+"-"+401+"-"+95,
          },
          {
            name: 'Cruz Roja',
            title: 26+"-"+714+"-"+27,
          },
          {
            name: 'Cruz Ambar',
            title: 983+"-"+733+"-"+62+"-"+80,
          },
          {
            name: 'Derechos Humanos',
            title: 83+"-"+412+"-"+44,
          },
          {
            name: 'Protección Civil',
            title: 83+"-"+415+"-"+58,
          },
          {
            name: 'CFE',
            title: 83+"-"+40178+" & "+83+"-"+400+"-"+86,
          },
          {
            name: 'Gruas de Quintana Roo',
            title: 83+"-"+422+"-"+71,
          },
          {
            name: 'Seguridad Pública',
            title: 83+"-"+403+"-"+69+" & "+983+" "+8090579,
          },
          {
            name: 'Gruas Chavez',
            title: 26+"-"+110+"-"+61,
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