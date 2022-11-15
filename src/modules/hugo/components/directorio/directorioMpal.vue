<template>
    <v-sheet>
        <br><br><br><br><br>
        <v-theme-provider>
            <v-responsive>
                <section>
                    <v-card
                        class="ma-5"
                        color="teal"
                    >
                        <v-data-table
                            :headers="headers"
                            :items="nombramientos"
                            :search="search"
                            sort-by="cargo"
                            class="elevation-1 ml-10" 
                            dense
                        >
                            <template v-slot:top>
                                <v-toolbar
                                    flat
                                >
                                    <v-toolbar-title>Nombramientos</v-toolbar-title>
                                        <v-divider
                                        class="mx-4"
                                        inset
                                        vertical
                                        ></v-divider>
                                    <v-spacer></v-spacer>
                                    <v-text-field
                                        v-model="search"
                                        append-icon="mdi-magnify"
                                        label="Search"
                                        single-line
                                        hide-details
                                    ></v-text-field>
                                </v-toolbar>
                            </template>
                            <template v-slot:[`item.actions`]="{ item }">
                                <v-icon
                                    small
                                    class="mr-2"
                                    @click="ver(item)"
                                >
                                    mdi-eye
                                </v-icon>
                            </template>
                        </v-data-table>
                    </v-card>
                </section>
                <section class="mt-10 mb-15">
                    <v-card
                        class="ma-5"
                        color="yellow darken-1"
                    >
                        <v-data-table
                            :headers="headers"
                            :items="directores"
                            :search="search2"
                            sort-by="cargo"
                            class="elevation-1 ml-10" 
                            dense
                        >
                            <template v-slot:top>
                                <v-toolbar
                                    flat
                                >
                                    <v-toolbar-title>Directores</v-toolbar-title>
                                        <v-divider
                                        class="mx-4"
                                        inset
                                        vertical
                                        ></v-divider>
                                    <v-spacer></v-spacer>
                                    <v-text-field
                                        v-model="search2"
                                        append-icon="mdi-magnify"
                                        label="Search"
                                        single-line
                                        hide-details
                                    ></v-text-field>
                                </v-toolbar>
                            </template>
                            <template v-slot:[`item.actions`]="{ item }">
                                <v-icon
                                    small
                                    class="mr-2"
                                    @click="ver(item)"
                                >
                                    mdi-eye
                                </v-icon>
                            </template>
                        </v-data-table>
                    </v-card>
                </section>
                <section class="mt-10 mb-15">
                    <v-card
                        class="ma-5"
                        color="red darken-4"
                    >
                        <v-data-table
                            :headers="headers"
                            :items="coordinadores"
                            :search="search3"
                            sort-by="cargo"
                            class="elevation-1 ml-10" 
                            dense
                        >
                            <template v-slot:top>
                                <v-toolbar
                                    flat
                                >
                                    <v-toolbar-title>Coordinadores</v-toolbar-title>
                                        <v-divider
                                        class="mx-4"
                                        inset
                                        vertical
                                        ></v-divider>
                                    <v-spacer></v-spacer>
                                    <v-text-field
                                        v-model="search3"
                                        append-icon="mdi-magnify"
                                        label="Search"
                                        single-line
                                        hide-details
                                    ></v-text-field>
                                </v-toolbar>
                            </template>
                            <template v-slot:[`item.actions`]="{ item }">
                                <v-icon
                                    small
                                    class="mr-2"
                                    @click="ver(item)"
                                >
                                    mdi-eye
                                </v-icon>
                            </template>
                        </v-data-table>
                    </v-card>
                </section>
                <section class="mt-10 mb-15">
                    <v-card
                        class="ma-5"
                        color="blue-grey darken-1"
                    >
                        <v-data-table
                            :headers="headers"
                            :items="jefes"
                            :search="search4"
                            sort-by="cargo"
                            class="elevation-1 ml-10" 
                            dense
                        >
                            <template v-slot:top>
                                <v-toolbar
                                    flat
                                >
                                    <v-toolbar-title>Jefes Depto</v-toolbar-title>
                                        <v-divider
                                        class="mx-4"
                                        inset
                                        vertical
                                        ></v-divider>
                                    <v-spacer></v-spacer>
                                    <v-text-field
                                        v-model="search4"
                                        append-icon="mdi-magnify"
                                        label="Search"
                                        single-line
                                        hide-details
                                    ></v-text-field>
                                </v-toolbar>
                            </template>
                            <template v-slot:[`item.actions`]="{ item }">
                                <v-icon
                                    small
                                    class="mr-2"
                                    @click="ver(item)"
                                >
                                    mdi-eye
                                </v-icon>
                            </template>
                        </v-data-table>
                    </v-card>
                </section>
            </v-responsive>
        </v-theme-provider>
    </v-sheet>
</template>
<script>
import { requestGET } from "@/modules/globals/getAxios.js"

    export default {
        name:'directorioMpal',
        data(){
            return{
                search: '',
                search2: '',
                search3: '',
                search4: '',
                headers: [
                    {
                    text: 'Cargo',
                    align: 'start',
                    sortable: true,
                    value: 'dependence',
                    class: 'section-dessert'
                    },
                    { text: 'Nombre', value: 'name' },
                    { text: 'Correo', value: 'email' },
                    
                    { text: 'Actions', value: 'actions', sortable: false },
                ],
                nombramientos:[],
                directores:[],
                coordinadores:[],
                jefes:[],

            }
        },
        async created(){
            this.totalData = await requestGET("/landing/funcionarios")
            this.llenar()
        },
        methods:{
            async llenar(){
                this.nombramientos = await this.totalData.filter(element => element.id_type==1)
                this.directores = await this.totalData.filter(element => element.id_type==2)
                console.log(this.directores);
                this.coordinadores =  await this.totalData.filter(element => element.id_type==3)
                this.jefes =  await this.totalData.filter(element => element.id_type==4)
            },
            ver(item){
                this.$swal({
                    title: item.dependence,
                    html: '<h3>'+item.name +'</h3> <h4>'+ item.email +'</h4>',
                    footer:"<h4>Informatica Municipal</h4>",
                    imageUrl: item.url_photo,
                    imageWidth: 200,
                    imageHeight: 200,
                });
            },
        },
    }
</script>
<style scoped>
.section-dessert {
  color: red !important;
}

</style>