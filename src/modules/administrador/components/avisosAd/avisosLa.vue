<template>
    <v-container class="mt-16">
        <v-theme-provider>
            <v-responsive>
                <section class="mt-16">
                    <v-card class="mt-16">
                      <template>
                        <v-data-table
                          :headers="headers"
                          :items="Avisos"
                          sort-by="text"
                          class="elevation-1"
                        >
                          <template v-slot:top>
                            <v-toolbar
                              flat
                            >
                              <v-toolbar-title class="font-weight-bold ">AVISOS</v-toolbar-title>
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
                                        <v-text-field label="Titulo" outlined dense v-model="editedItem.titulo" ></v-text-field>
                                    </v-row>
                                    <v-row dense class="d-flex justify-center">
                                        <v-col cols="4">
                                            <v-select
                                                outlined
                                                dense
                                                v-model="editedItem.categoria"
                                                :items="items"
                                                item-text="categoria"
                                                item-value="categoria"
                                                label="Categor??a"
                                                persistent-hint
                                                return-object
                                                single-line
                                            ></v-select>
                                        </v-col>
                                        <v-col cols="4">
                                            <v-select
                                                outlined
                                                dense
                                                v-model="editedItem.autor"
                                                :items="items"
                                                item-text="autor"
                                                item-value="autor"
                                                label="Autor"
                                                persistent-hint
                                                return-object
                                                single-line
                                            ></v-select>
                                        </v-col>
                                        <v-col cols="4">
                                            <v-text-field label="Fecha" v-mask="'####-##-##'" outlined dense v-model="editedItem.fecha" ></v-text-field>
                                        </v-col>
                                    </v-row>
                                    <v-row dense>
                                        <v-col>
                                            <v-textarea label="Texto" outlined dense v-model="editedItem.descripcion" ></v-textarea>
                                        </v-col>
                                    </v-row>
                                    <v-row dense>
                                        <v-col>
                                            <v-file-input label="Foto" v-model="editedItem.imagen" show-size counter multiple filled prepend-icon="mdi-camera"></v-file-input>
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
                                      Cancelar
                                    </v-btn>
                                    <v-btn
                                      color="blue darken-1"
                                      text
                                      @click="save"
                                    >
                                      Guardar
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
                          <!-- <template v-slot:no-data>
                            <v-btn
                              color="primary"
                              @click="initialize"
                            >
                              Reset
                            </v-btn>
                          </template> -->
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
      items:[],
      dialog: false,
      headers: [
        {
          text: 'Titulo',
          align: 'start',
          sortable: false,
          value: 'titulo',
        },
        { text: 'Texto', value: 'descripcion' },
        { text: 'Categoria', value: 'categoria' },
        { text: 'Autor', value: 'autor' },
        { text: 'Fecha', value: 'fecha' },
        { text: 'Imagen', value: 'imagen' },
        { text: 'Acci??n', value: 'actions', sortable: false },
      ],
      Avisos: [],
      editedIndex: -1,
      editedItem: {
        titulo: '',
        descripcion: "",
        categoria: "",
        autor: "",
        fecha: "",
        imagen: ""
      },
      defaultItem: {
        titulo: '',
        descripcion: "",
        categoria: "",
        autor: "",
        fecha: "",
        imagen: ""
      },
    }),

    computed: {
      formTitle () {
        return this.editedIndex === -1 ? 'Nuevo Aviso' : 'Editar Aviso'
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
            const datos = await requestGET("/autho/schema")
            this.Avisos.push(datos['data'][0])
            console.log(this.Avisos);
        },
      async initialize () {
        await this.getData()
        // this.Avisos = [
        //   {
        //     title: 'Frozen Yogurt',
        //     text: "Lorem Ipsum Generator. Este generador permite usuario generar el texto por n??mero de palabras, p??rrafos, listas o bytes, y es capaz de poder  a??adir etiquetas HTML para el contenido. Tambu??n nos da una breve rese??a hist??rica del origen del Lorem ipsum y la traducci??n del texto original.",
        //     category: "Deporte",
        //     author: "Pedro Pony",
        //     date: "2022-03-12",
        //     picture: 3
        //   },
        //   {
        //     title: 'Ice cream sandwich',
        //     text: "Lipsum.com. Es uno de los generadores m??s populares y que proporciona contenido sencillo con pocas opciones. El usuario puede especificar el n??mero de p??rrafos, palabras, bytes o listas. En la actualidad hay una serie de simulacros de las banderas disponibles para su descarga. El simulacro de pancartas son en tres colores diferentes y en una gama de diferentes tama??os de banner est??ndar.",
        //     category: "Deporte",
        //     author: "Pedro Pony",
        //     date: "2022-03-12",
        //     picture: 67,
        //   },
        //   {
        //     title: 'Eclair',
        //     text: "adhesiontext. Es otra interesante herramienta de texto din??mico que puede generar un p??rrafo de texto ficticio con diferentes conjuntos de caracteres. El usuario puede especificar diferentes idiomas y alfabetos, como el lat??n, cir??lico, griego y ??rabe. Diferentes opciones se pueden utilizar, como base para a??adir puntuaci??n, may??sculas y min??sculas y otras cosas.",
        //     category: "Deporte",
        //     author: "Pedro Pony",
        //     date: "2022-03-12",
        //     picture: 67,
        //   },
        //   {
        //     title: 'Cupcake',
        //     text: "HTML-Ipsum. Es un generador de Design O???Blog. Tiene un mont??n de diferentes productos, tales como el p??rrafo largo, medio punto, una frase, lista desordenada: breves art??culos, lista desordenada: art??culos largos, lista ordenada, breves art??culos, etc.",
        //     category: "Deporte",
        //     author: "Pedro Pony",
        //     date: "2022-03-12",
        //     picture: 67,
        //   },
        //   {
        //     title: 'Gingerbread',
        //     text: "Text Generator by malevole. Si te cansas con el texto Lorem ipsum y est??s aburrido de ??l, entonces deber??as tratar con este otro generador. Genera contenido azar, con algunos p??rrafos al azar que ser?? m??s significativo que los aburridos contenidos de Lorem ipsum. El usuario puede especificar el n??mero de p??rrafos y otras cosas.",
        //     category: "Deporte",
        //     author: "Travis Scott",
        //     date: "2022-03-12",
        //     picture: 67,
        //   },
        //   {
        //     title: 'Jelly bean',
        //     text: "Blind Text Generator. Es un generador de texto ciego que permite al usuario seleccionar diferentes tipos de texto ficticio y distinto n??mero de palabras, caracteres y p??rrafos que desees insertar. Tiene opciones avanzadas, tales como tipo de letra, estilo de letra y el espaciamiento. El usuario tiene una vista previa de la tipograf??a con el estilo CSS inmediatamente cuando se realizan los cambios.",
        //     category: "Deporte",
        //     author: "Travis Scott",
        //     date: "2022-03-12",
        //     picture: 67,
        //   },
        //   {
        //     title: 'Lollipop',
        //     text: "Dummy Text Generator. Esta herramienta permite al usuario elegir entre el t??pico ??Lorem ipsum?? o contenido con palabras en ingl??s. El usuario puede especificar el n??mero de palabras y tambi??n los p??rrafos. Adem??s de estos, las opciones tales como etiquetas HTML, partidas aleatorias, sub-t??tulos, al azar en negrita y cursiva tambi??n.",
        //     category: "Deporte",
        //     author: "Travis Scott",
        //     date: "2022-03-12",
        //     picture: 67,
        //   },
        //   {
        //     title: 'Honeycomb',
        //     text: "Random Text Generator. Este es el generador de texto m??s sencillo que nunca encontraste. Basta con seleccionar el idioma y pulsa a ir. El contenido aparece en el texto y se puede copiar y utilizar en donde quieras. Este generador admite 10 idiomas diferentes. Cada vez que se pulsa el bot??n, el sistema te dar?? un contenido diferente, basado en su idioma seleccionado.",
        //     category: "Deporte",
        //     author: "Travis Scott",
        //     date: "2022-03-12",
        //     picture: 67,
        //   },
        // ]

        
      },

      editItem (item) {
        this.editedIndex = this.Avisos.indexOf(item)
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
          Object.assign(this.Avisos[this.editedIndex], this.editedItem)
        } else {
          this.Avisos.push(this.editedItem)
        }
        this.close()
      },
    },
  }
</script>
<style scoped>
   
</style>