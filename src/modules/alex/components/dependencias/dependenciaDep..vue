<template>
  <v-container class="mt-16">
      <v-theme-provider class="mt-16">
        <v-responsive>
          <section>
            <v-card>
              <v-simple-table class="ma-5">
              <template v-slot:default>
                <thead>
                  <tr>
                      <th class="text-center">
                          Nombre
                      </th>
                    
                    <th class="text-center">
                      Horario
                    </th>
                    <th class="text-center">
                      Tramites
                    </th>
                    <th class="text-center">
                      Requisitos
                    </th>
                    <th class="text-center">
                      Ubicación
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr
                    v-for="item in desserts"
                    :key="item.name"
                  >
                    <td> <!--Nombre-->
                      <div class="nombre d-flex justify-space-between">
                        <v-img 
                      height="250"
                      width="150"
                      class="mx-auto mt-2 "
                      :src= "require('@/assets/alex/Dep.png')"
                    ></v-img>
                      <h3 style="max-width: 110px" class="nomb d-flex justify-end text-uppercase grey--text">ciam</h3> <!--{{ item.name }}-->
                      </div>
                    </td>
                    <td> <!--Horartio de la dependencia-->
                      <div class="horario">
                        8:00-14:00
                      </div>
                    </td> 
                    <td > <!--Tramites-->
                      <div class="tramite">
                        <template>
                          <div class="text-center">
                            <v-dialog
                              v-model="dialog"
                              max-width="500"
                            >
                              <template v-slot:activator="{ on, attrs }">
                                <v-btn
                                color="black"
                                plain
                                rounded
                                x-large
                                v-bind="attrs"
                                v-on="on"
                                > <span class="mdi mdi-format-list-bulleted"></span>
                                  
                                </v-btn>
                              </template>
                              <v-simple-table> <!--Tramite-tabla-->
                                <template v-slot:default>
                                  <thead>
                                    <tr class="blue darken-2 text-center">
                                      <th class="text-center white--text ">
                                        Tramites
                                      </th>
                                    </tr>
                                  </thead>
                                  <tbody>
                                    <tr
                                      v-for="item in desserts2"
                                      :key="item.name"
                                    >
                                      <td>{{ item.name }}</td>
                                    </tr>
                                  </tbody>
                                  <v-card-actions>
                                  <v-spacer></v-spacer>
                                  <v-btn
                                    color="primary"
                                    text
                                    @click="dialog = false"
                                  >
                                    CERRAR
                                  </v-btn>
                                </v-card-actions>
                                </template>
                              </v-simple-table>
                            </v-dialog>
                          </div>
                        </template>  
                      </div>
                    </td>
                    <td> <!--requisito-->
                      <div class="requisito">
                        <template>
                          <div class="text-center">
                            <v-dialog
                              v-model="dialog2"
                              max-width="500"
                            >
                              <template v-slot:activator="{ on, attrs }">
                                <v-btn
                                color="black"
                                plain
                                rounded
                                x-large
                                v-bind="attrs"
                                v-on="on"
                                > <span class="mdi mdi-clipboard-text"></span>
                                  
                                </v-btn>
                              </template>
                              <v-simple-table> <!--Requisito-tabla-->
                                <template v-slot:default>
                                  <thead>
                                    <tr class="blue darken-2 text-center">
                                      <th class="text-center white--text ">
                                        Requisitos
                                      </th>
                                    </tr>
                                  </thead>
                                  <tbody>
                                    <tr
                                      v-for="item in desserts3"
                                      :key="item.name"
                                    >
                                      <td>{{ item.name }}</td>
                                    </tr>
                                  </tbody>
                                  <v-card-actions>
                                  <v-spacer></v-spacer>
                                  <v-btn
                                    color="primary"
                                    text
                                    @click="dialog2 = false"
                                  >
                                    CERRAR
                                  </v-btn>
                                </v-card-actions>
                                </template>
                              </v-simple-table>
                            </v-dialog>
                          </div>
                        </template>   
                      </div>
                    </td>
                    <td> <!--ubicacion-->
                      <div class="ubicacion">
                        <template>
                          <div class="text-center">
                            <v-dialog
                              v-model="dialog3"
                              max-width="600"
                            >
                              <template v-slot:activator="{ on, attrs }">
                                <v-btn
                                color="black"
                                plain
                                rounded
                                x-large
                                v-bind="attrs"
                                v-on="on"
                                > <span class="mdi mdi-google-maps"></span>
                                  
                                </v-btn>
                              </template>
                              <v-card
                              class=" pr-3 "
                              max-width="800"
                            >
                                <p class="text-center mt-5 title"> Ubicación </p> 
                                <div class="row">
                                    <googleMa :latitude= 19.578230918594535 :longitude= -88.04647965981202 :title="'Palacio Municipal'" />
                                </div>                         
                                <v-card-actions>
                                  <v-spacer></v-spacer>
                                  <v-btn
                                    color="primary"
                                    text
                                    @click="dialog3 = false"
                                  >
                                    CERRAR
                                  </v-btn>
                                </v-card-actions>
                              </v-card>
                            </v-dialog>
                          </div>
                        </template>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </template>
            </v-simple-table>
            </v-card>
          </section>
        </v-responsive>
      </v-theme-provider>
  </v-container>
</template>
<script>
import googleMa from './googleMaps/googleMa.vue';
    export default{
        name:'dependenciaDep',
        components: {
          googleMa
        },
        data () {
      return {
        dialog: false,
        dialog2: false,
        dialog3: false,
        desserts: [
          {
            name: 'ciam',
          },
          {
            name: 'ciam'
          },
          {
            name: 'ciam',
          },
          {
            name: 'ciam'
          },
          {
            name: 'ciam',
          },
          {
            name: 'ciam'
          },
          {
            name: 'ciam',
          },
          {
            name: 'ciam'
          },
          {
            name: 'ciam',
          },
          {
            name: 'ciam'
          },

        ],
        desserts2: [
        {
            name:'Orientación'
          },
          {
            name: 'Atención en crisis'
          },
          {
            name: 'Atención individual'
          },
          {
            name: 'Seguimiento de Casos'
          },
          {
            name: 'Representación Jurídica'
          }
        ],
        desserts3: [ 
        {
            name:'Acta de nacimiento'
          },
          {
            name:'INE'
          },
          {
            name: 'CURP'
          },
          {
            name: 'Comprobante de domicilio (no mayor a 3 meses)'
          },
          {
            name: 'Todos los documentos deberán entregarse en un fólder tamaño carta color beige en dos tantos (por curso o taller)'
          }
        ],
        desserts4: [
          {
            name: 'jhshjs'
          }
        ]
      }
    },
    }
</script>
<style scoped>
   .nombre{
    display: flex;
    align-items: center;
    justify-content: center;
   }
   .nomb{
    
   }
   .horario{
    display: flex;
    align-items: center;
    justify-content: center;
   }
   .tramite{
    display: flex;
    align-items: center;
    justify-content: center;
   }
   .requisito{
    display: flex;
    align-items: center;
    justify-content: center;  
   }
   .ubicacion{
    display: flex;
    align-items: center;
    justify-content: center;  
   }
</style>