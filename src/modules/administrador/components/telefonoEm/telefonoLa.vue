<template>
    <v-container class="mt-16">
        <v-theme-provider>
            <v-responsive>
                <section class="mt-16">
                    <v-card class="mt-16">
                      <template>
                        <v-data-table
                          :headers="headers"
                          :items="Numeros"
                          sort-by="text"
                          class="elevation-1"
                        >
                          <template v-slot:top>
                            <v-toolbar
                              flat
                            >
                              <v-toolbar-title class="font-weight-bold ">TELEFONOS DE EMERGENCIA</v-toolbar-title>
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
                                
                                  <v-form
                                    ref="form"
                                    v-model="valid"
                                    lazy-validation
                                    class="ma-4"
                                >
                                    <v-row dense>
                                        <v-text-field label="Dependencia" outlined dense v-model="editedItem.name" ></v-text-field>
                                    </v-row>
                                    <v-row dense>
                                        <v-col cols="4">
                                            <v-text-field label="Número" v-mask="'####-##-##'" outlined dense v-model="editedItem.mobile" ></v-text-field>
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
      dialog: false,
      valid:true,
      headers: [
        {
          text: 'Dependencia',
          align: 'start',
          sortable: false,
          value: 'name',
        },
        { text: 'Número', value: 'mobile' },
        { text: 'Acción', value: 'actions', sortable: false },
      ],
      Numeros: [],
      editedIndex: -1,
      editedItem: {
        name: '',
        mobile: "",
      },
      defaultItem: {
        name: '',
        mobile: "",
      },
    }),

    computed: {
      formTitle () {
        return this.editedIndex === -1 ? 'Nuevo Telefono de emergencia' : 'Editar Telefono de emergencia'
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
            const datos = await requestGET("/landing/NumeroE")
            console.log(datos);
            this.Numeros = datos
        },
      async initialize () {
        await this.getData()
        // this.Numeros = [
        //   {
        //     title:"Bomberos",
        //     phone: 9831145698,
        //   },
        //   {
        //     title:"Bomberos",
        //     phone: 9831145698,
        //   },
        //   {
        //     title:"Bomberos",
        //     phone: 9831145698,
        //   },
        //   {
        //     title:"Bomberos",
        //     phone: 9831145698,
        //   },
        //   {
        //     title:"Bomberos",
        //     phone: 9831145698,
        //   },
        //   {
        //     title:"Bomberos",
        //     phone: 9831145698,
        //   },
        //   {
        //     title:"Bomberos",
        //     phone: 9831145698,
        //   },
        //   {
        //     title:"Bomberos",
        //     phone: 9831145698,
        //   },
        // ]
      },

      editItem (item) {
        this.editedIndex = this.Numeros.indexOf(item)
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
          Object.assign(this.Numeros[this.editedIndex], this.editedItem)
        } else {
          this.Numeros.push(this.editedItem)
        }
        this.close()
      },
    },
  }
</script>
<style scoped>
   
</style>