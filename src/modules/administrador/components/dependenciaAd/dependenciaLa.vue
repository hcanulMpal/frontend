<template>
    <v-container class="mt-16">
        <v-theme-provider>
            <v-responsive>
                <section class="mt-16">
                    <v-card class="mt-16">
                      <template>
                        <v-data-table
                          :headers="headers"
                          :items="dependencia"
                          sort-by="text"
                          class="elevation-1"
                        >
                          <template v-slot:top>
                            <v-toolbar
                              flat
                            >
                              <v-toolbar-title class="font-weight-bold ">DEPENDENCIA</v-toolbar-title>
                              <v-divider
                                class="mx-4"
                                inset
                                vertical
                              ></v-divider>
                              <v-spacer></v-spacer>
                              <v-dialog
                                v-model="dialog"
                                max-width="500px"
                              >
                                <template v-slot:activator="{ on, attrs }">
                                  <v-btn
                                    color="primary"
                                    dark
                                    class="mb-2"
                                    v-bind="attrs"
                                    v-on="on"
                                  >
                                    AGREGAR
                                  </v-btn>
                                </template>
                                <v-card>
                                  <v-card-title>
                                    <span class="text-h5">{{ formTitle }}</span>
                                  </v-card-title>
                                <!-- Empieza el formulario -->
                                <v-form
                                    ref="form"
                                    v-model="valid"
                                    lazy-validation
                                    class="ma-4"
                                >
                                    <v-row dense>
                                        <v-text-field label="Titulo" outlined dense v-model="editedItem.title" ></v-text-field>
                                    </v-row>
                                    <v-row dense class="d-flex justify-center">
                                      <v-text-field label="Horario" outlined dense v-model="editedItem.horario" ></v-text-field>
                                    </v-row>
                                    <v-row dense>
                                        <v-col>
                                          <v-textarea label="Tramites" outlined dense v-model="editedItem.tramites" ></v-textarea>
                                        </v-col>
                                    </v-row>
                                    <v-row dense>
                                        <v-col>
                                          <v-textarea label="Requisitos" outlined dense v-model="editedItem.requisitos" ></v-textarea>
                                        </v-col>
                                    </v-row>
                                    <v-row dense class="justify-center">
                                      <v-col cols="5">
                                        <v-text-field label="Latitud" outlined dense v-model="editedItem.lat" ></v-text-field>
                                      </v-col>
                                      <v-col cols="5">
                                        <v-text-field label="Longitud" outlined dense v-model="editedItem.long" ></v-text-field>
                                      </v-col>
                                    </v-row>
                                </v-form> <!-- Termina Formulario    -->
                                  <v-card-actions>
                                    <v-spacer></v-spacer>
                                    <v-btn
                                      color="blue darken-1"
                                      text
                                      @click="close"
                                    >
                                      Cancel
                                    </v-btn>
                                    <v-btn
                                      color="blue darken-1"
                                      text
                                      @click="save"
                                    >
                                      Save
                                    </v-btn>
                                  </v-card-actions>
                                </v-card>
                              </v-dialog>
                            </v-toolbar>
                          </template>
                          <!-- eslint-disable-next-line --> 
                          <template v-slot:item.actions="{ item }">
                            <v-icon
                              small
                              class="mr-2"
                              @click="editItem(item)"
                            >
                              mdi-pencil
                            </v-icon>
                          </template>
                          <template v-slot:no-data>
                            <v-btn
                              color="primary"
                              @click="initialize"
                            >
                              Reset
                            </v-btn>
                          </template>
                        </v-data-table>
                      </template>
                    </v-card>
                </section>
            </v-responsive>
        </v-theme-provider>
    </v-container>
</template>
<script>
import { requestGET } from '../../../globals/getAxios'
  export default {
    data: () => ({
      valid:true,
      dialog: false,
      headers: [
        {
          text: 'Dependencia',
          align: 'start',
          sortable: false,
          value: 'dependencia',
        },
        { text: 'Dia Inicial', value: 'Dia inicial' },
        { text: 'Dia Final', value: 'Dia final' },
        { text: 'Hora Inicial', value: 'Hora inicial' },
        { text: 'Hora Final', value: 'Hora final' },
        { text: 'Tramites', value: 'tramites' },
        { text: 'Requisitos', value: 'requerimientos' },
        { text: 'Latitud', value: 'latitud' },
        { text: 'Longitud', value: 'longitud' },
        { text: 'Acción', value: 'actions', sortable: false },
      ],
      dependencia: [],
      editedIndex: -1,
      editedItem: {
        dependencia: '',
        Dia_inicial: "",
        Dia_final: "",
        Hora_inicial:"",
        Hora_final:"",
        tramites: "",
        requerimientos: "",
        requisitos: "",
        latitud: "",
        longitud: ""
      },
      defaultItem: {
        dependencia: '',
        Dia_inicial: "",
        Dia_final: "",
        Hora_inicial:"",
        Hora_final:"",
        tramites: "",
        requerimientos: "",
        requisitos: "",
        latitud: "",
        longitud: ""
      },
    }),

    computed: {
      formTitle () {
        return this.editedIndex === -1 ? 'Nueva Dependencia' : 'Editar Dependencia'
      },
    },

    watch: {
      dialog (val) {
        val || this.close()
      },
    },

    created () {
      this.initialize()
    },

    methods: {
      async getData(){
            const datos = await requestGET("/autho/dependence")
            this.dependencia.push(datos['data'][0])
            console.log(this.dependencia);
        },
      async initialize () {
        await this.getData()
        // this.dependencia = [
        //   {
        //     title: "Informatica",
        //     horario: "lunes a viernes de 8:00-14:00",
        //     tramites: "Orientación, seguimineto de casos, Representación gráfica",
        //     requisitos: "Acta de nacimiento, INE, CURP, Comprobante de domiciio",
        //     lat: "19.578502437996626",
        //     long: "-88.04547660314498"

        //   },
        //   {
        //     title: "No se al chile",
        //     horario: "lunes a viernes de 8:00-14:00",
        //     tramites: "Orientación, seguimineto de casos, Representación gráfica",
        //     requisitos: "Acta de nacimiento, INE, CURP, Comprobante de domiciio",
        //     lat: "19.578502437996626",
        //     long: "-88.04547660314498"
        //   },
        //   {
        //     title: "No se al chile2",
        //     horario: "lunes a viernes de 8:00-14:00",
        //     tramites: "Orientación, seguimineto de casos, Representación gráfica",
        //     requisitos: "Acta de nacimiento, INE, CURP, Comprobante de domiciio",
        //     lat: "19.578502437996626",
        //     long: "-88.04547660314498"
        //   },
        //   {
        //     title: "No se al chile3",
        //     horario: "lunes a viernes de 8:00-14:00",
        //     tramites: "Orientación, seguimineto de casos, Representación gráfica",
        //     requisitos: "Acta de nacimiento, INE, CURP, Comprobante de domiciio",
        //     lat: "19.578502437996626",
        //     long: "-88.04547660314498"
        //   },
        //   {
        //     title: "No se al chile4",
        //     horario: "lunes a viernes de 8:00-14:00",
        //     tramites: "Orientación, seguimineto de casos, Representación gráfica",
        //     requisitos: "Acta de nacimiento, INE, CURP, Comprobante de domiciio",
        //     lat: "19.578502437996626",
        //     long: "-88.04547660314498"
        //   },
        //   {
        //     title: "No se al chile5",
        //     horario: "lunes a viernes de 8:00-14:00",
        //     tramites: "Orientación, seguimineto de casos, Representación gráfica",
        //     requisitos: "Acta de nacimiento, INE, CURP, Comprobante de domiciio",
        //     lat: "19.578502437996626",
        //     long: "-88.04547660314498"
        //   },
        // ]
      },

      editItem (item) {
        this.editedIndex = this.dependencia.indexOf(item)
        this.editedItem = Object.assign({}, item)
        this.dialog = true
      },

      close () {
        this.dialog = false
        this.$nextTick(() => {
          this.editedItem = Object.assign({}, this.defaultItem)
          this.editedIndex = -1
        })
      },

      save () {
        if (this.editedIndex > -1) {
          Object.assign(this.dependencia[this.editedIndex], this.editedItem)
        } else {
          this.dependencia.push(this.editedItem)
        }
        this.close()
      },
    },
  }
</script>
<style scoped>
   
</style>