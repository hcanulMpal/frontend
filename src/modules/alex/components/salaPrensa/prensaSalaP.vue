<template>
    <v-sheet>
        <v-container class="mt-16">
            <v-theme-provider class="mt-10">
                <v-responsive>
                    <section class="mt-10 mb-15">
                        <CardPrensa v-for="prensac in prensa" :key="prensac.id" :prensac="prensac"></CardPrensa>                        
                    </section>
                </v-responsive>
            </v-theme-provider>
        </v-container>
    </v-sheet>
</template>
<script>
import CardPrensa from './child/cardPrensa.vue';

    export default {
    name: "prensaSalaP",
    data() {
        return {
            show: false,
            prensa: [
                {
                    id: 1,
                    categoria: "social",
                    fecha: "12-04-2021",
                    autor: "Pedro Pony",
                    title: "171 aniversario de Felipe Carrillo Puerto",
                    image: "https://www.felipecarrillopuerto.gob.mx/images/noticias/2021/2021101601.jpg",
                    content: "Estamos en la celebración del 171 Aniversario de la fundación de la Ciudad de Felipe Carrillo Puerto.Esta mañana recibimos en la plaza pública a la presidenta municipal Mary Hernández, en compañía de la presidenta municipal de Benito Juárez, Mara Lezama; el presidente municipal de José María Morelos, Erik Borges Yam; a todos los regidores y parte del equipo del H. Ayuntamiento, para inaugurar esta fiesta municipal que se llevará a cabo este fin de semana."
                },
                {
                    id: 2,
                    categoria: "social",
                    fecha: "12-04-2021",
                    autor: "Danny el Perro",
                    title: "Visita a las instalaciones del DIF CArrillo Puerto",
                    image: "https://www.felipecarrillopuerto.gob.mx/images/noticias/2021/2021101202.jpg",
                    content: "Mary Hernández, Presidenta Municipal de Felipe Carrillo Puerto, trabaja fuertemente para mejorar la calidad y el servicio que brinda el Sistema para el Desarrollo Integral de la Familia (DIF Felipe Carrillo Puerto).En esta nueva transformación se necesita impulsar el altruismo e implementar estrategias en materia de asistencia social, bienestar familiar, perspectiva de género, entre otros temas."
                }
            ]
        };
    },
    created() {
    },
    methods: {},
    components: { CardPrensa }
}
</script>
<style scoped>
   
</style>