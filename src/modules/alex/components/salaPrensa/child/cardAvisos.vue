<template>
    <v-card class="ma-3 mt-16" max-width="420">
        <h1 class="text-center mt-5 title pa-8">{{ aviso.title }}</h1>
        <v-img :src="aviso.image" height="250px" ></v-img>
        <section class="d-flex justify-space-around mb-6">
        <p class="font-weight-regular" > <span class="font-weight-bold">Categoria:</span>  {{ aviso.categoria }} </p> 
        <p class="font-weight-regular" > <span class="font-weight-bold">Fecha:</span>  {{ aviso.fecha }} </p>
        <p class="font-weight-regular" > <span class="font-weight-bold">Escrito por:</span>  {{ aviso.autor }} </p>
        </section>
        
        <v-card-actions>
            <v-btn 
            color="orange lighten-2" 
            text
            @click="show = !show"
            >
                Leer más
            </v-btn>

            <v-spacer></v-spacer>

            <v-btn 
            icon 
            @click="show = !show">
                <v-icon>{{ show ? 'mdi-chevron-up' : 'mdi-chevron-down' }}</v-icon>
            </v-btn>
        </v-card-actions>

        <v-expand-transition>
            <div v-show="show">
                <v-divider></v-divider>
                <v-card-text src>
                    <v-card-subtitle class="text-justify" v-html="aviso.content">
                    </v-card-subtitle>
                </v-card-text>
            </div>
        </v-expand-transition>
    </v-card>
    <!--termina la card-->
</template>
<script>
export default {
    name: "cardAvisos",
    props: {
        aviso: Object
    },
    data() {
        return {
            show: false
        }
    }
}
</script>