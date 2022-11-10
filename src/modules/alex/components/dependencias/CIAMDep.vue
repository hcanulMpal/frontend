<template>
    <v-container class="mt-16">
        <v-theme-provider class="mt-16">
            <v-responsive>
                <section>
                    <v-card class="mx-auto pa-4 ma-4 mt-16"
                    max-width="1200">
                        <v-row class="mb-6">
                            <v-img
                            height="50%"
                            width="60"
                            :src="require('@/assets/CIAM.png')"></v-img>
                            
                            <v-img
                            height="50%"
                            width="60"
                            :src="require('@/assets/CIAM.png')"></v-img>
                        </v-row>
                        <section class="pa-3 pb-6">
                            <p class="text-justify">El Centro de Información y Asistencia a Mexicanos es un centro de llamadas que te orienta en materia de servicios consulares, estatus migratorio, prevención y protección consular, además de ser un punto de primer contacto entre la población mexicana que requiera asistencia consular de las representaciones de México en Estados Unidos.</p>
                        <p><span class="font-weight-bold">Horario: </span>8:00-14:00</p>
                        <p class="font-weight-bold">Servicios:</p>
                        <ul>
                            <li>Búsqueda de connaacionales.</li>
                            <li>Búsqueda de personas detenidas.</li>
                            <li>información sobre actualidad migratoria y servicios consulares</li>
                        </ul>
                        <P><span class="font-weight-bold">Teléfono: </span>Desde Estados Unidos llama sin costo al<span class="font-weight-bold"> 1 855-INFO-395 (1 855-4636-395).</span> Desde México <span class="font-weight-bold">(520)6237874</span></P>
                        </section>
                    </v-card>
                </section>
            </v-responsive>
        </v-theme-provider>
    </v-container>
</template>
<script>
    export default{
        name:'CIAMDep',
        data(){
            return{
            }
        },
        created(){
        },
        methods:{
        },
    }
</script>
<style scoped>
   
</style>