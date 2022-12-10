<template>
    <v-sheet>
        <v-theme-provider class="mt-16">
            <v-responsive>
                <section class="mt-15 mb-15">
                    <v-row class="justify-center">
                        <v-col lg="12" md="8" sm="8" v-for="aviso in avisos" :key="aviso.id">
                            <CardAvisos  :aviso="aviso"></CardAvisos>
                        </v-col>
                    </v-row>
                </section>
            </v-responsive>
        </v-theme-provider>         
    </v-sheet>
</template>
<script>
import CardAvisos from './child/cardAvisos.vue';
import { requestGET } from '../../../globals/getAxios'

export default {
    name: "avisosSalaP",
    data() {
        return {
            show: false,
            // avisos: [
            //     {
            //         id: 1,
            //         categoria: "Social",
            //         fecha: "02-11-2022",
            //         autor: "Pedro Pony",
            //         title: "Usan cajero como retrete y basurero en FCP",
            //         image: require('@/assets/alex/aviso1.jpg'),
            //         content: "Le falta conciencia en Ciudadanos y mal educados en el cajero Santander que se encuentra en las instalaciones del juzgado en Felipe Carrillo Puerto ha propiciado que los mismos inconscientes lo usen para orinar y dejar su basura. Al entrar al área para usar la máquina se siente el olor apestoso a orina, hay basura a su al rededor, entre otras problematicas.", 
                    
            //     },
            //     {
            //         id: 2,
            //         categoria: "Desastre",
            //         fecha: "2-11-2022",
            //         autor: "Pedro Pony",
            //         title: "Alertan a Felipe Carrillo Puerto y Tulum por tormentas intensas tras la entrada del huracán Lisa categoría 1",
            //         image: require('@/assets/alex/aviso2.jpg'),
            //         content: "Su centro se localiza a 100 km al norte de la Isla Roatán, Honduras y a 200 km al sureste de Puerto Costa Maya, Q. Roo. Presenta vientos máximos sostenidos de 120 km/h, rachas de 140 km/h y desplazamiento hacia el oeste a 24 km/h. Esperamos fuertes lluvias, rachas de viento de 50 a 70 km/h y oleaje de 2 a 3 metros de altura en nuestras costas. Se extiende zona de prevención desde Chetumal hasta Punta Allen."
            //         },
            //         {
            //         id: 3,
            //         categoria: "Cultural",
            //         fecha: "01-11-2022",
            //         autor: "Pedro Pony",
            //         title: "Quintana Roo celebra Hanal Pixán lleno de historia, tradición y espiritualidad",
            //         image: require('@/assets/alex/aviso3.jpg'),
            //         content: "La gobernadora Mara Lezama acompañada de las y los ciudadanos destacó que las tradiciones marcan la esencia del pueblo y la comunidad En este gobierno trabajamos para rescatar nuestras tradiciones y costumbres, y que sean un atractivo adicional que hagan que más gente nos visite y se quede más tiempo en Quintana Roo, expresó la gobernadora Mara Lezama Espinosa al participar hoy en el Paseo de las Ánimas y en el programa de Hanal Pixán, en la explanada frente al Palacio de Gobierno. “Que más gente conozca el sur, que venga a Chetumal, y descubra todo el misticismo que hay en nuestros vestigios arqueológicos que muy pronto recibirán una inversión histórica, mil millones de pesos, que gestionamos hace apenas un par de semanas” citó Mara Lezama vestida con el tradicional huipil y frente a la bahía que es toda una maravilla y atractivo natural del sur. Al dirigirse a las miles de personas que se reunieron para participar en este evento tradicional, la Gobernadora del Estado afirmó que su gobierno trabaja para que nuestras raíces no sean sólo un souvenir, un recuerdo, un elemento decorativo en casa para el turismo, sino que marquen la esencia de nuestro pueblo y de nuestra comunidad. “Y es por eso estamos construyendo un Nuevo Acuerdo por el Bienestar y Desarrollo en Quintana Roo, con el que vamos a rescatar nuestras tradiciones, a enaltecer nuestra cultura y a mostrarle al mundo que en Quintana Roo, tenemos mucho más que ofrecer además de playas y vida nocturna” puntualizó la primera mujer Gobernadora de Quintana Roo. Acompañada de familias de esta capital, Mara Lezama participó en el Paseo de las Ánimas que partió desde el Museo de la Cultura Maya hasta la plaza cívica de Palacio de Gobierno en donde se instalaron altares, obras de arte de mujeres emprendedoras y que muestran la magia que hay en nuestra tierra y la calidez de un pueblo que alimenta y preserva las más bellas tradicionales. Antes de recorrer los stands y las muestras culturales, la gobernadora Mara Lezama expresó que hoy es una fecha importante, el día en que nuestros difuntos regresan a casa, en que las ánimas regresan a abrazar a sus hijas, hijos, nietas, nietos, viudas y viudos, hermanas y hermanos. Este homenaje para celebrar la vida de los difuntos es una pequeña ofrenda y un gran tesoro cultural. Es historia viva, memoria colectiva, espiritualidad que se funde en la diversidad de nuestra tierra y nuestra gente. La bienvenida estuvo a cargo de la presidenta municipal Yensunni Martínez Hernández; la explicación del evento a cargo de la directora general del Sistema DIF Quintana Roo, Abril Cristina Sabido Alcérreca, y los motivos por la Presidenta del Sistema DIF Quintana Roo, Verónica Lezama Espinosa. La muestra de Hanal Pixán incluyó el corte del pan de muerto, recorrido por siete altares de escuelas participantes mismas que fueron premiadas. El tercer lugar correspondió al Centro de Estudios Tecnológicos del Mar (CETMAR); segundo lugar el Instituto de Estudios Superiores para la Competitividad y el Desarrollo de América, y el primer lugar la Universidad Autónoma de Quintana Roo (UAQROO). Mara Lezama recorrió la muestra de mujeres emprendedoras, la exposición artesanal. Se tuvo la participación del Ballet Folclórico del Instituto de la Cultura y las Artes, así como de grupos culturales de diversas agrupaciones." },
            //         {
            //         id: 4,
            //         categoria: "Accidente",
            //         fecha: "01-11-2022",
            //         autor: "Pedro Pony",
            //         title: "Tránsito detiene a un hombre que ponía en peligro a la ciudadanía Carrilloportense",
            //         image: require('@/assets/alex/aviso4.jpg'),
            //         content: "Un hombre que conducía en completo estado de ebriedad cómo alma que lleva el diablo, fue detenido por elementos de la policía de tránsito por poner en peligro a la ciudadanía, varios reportes se realizaron al 911 de un vehículo tipo Jetta color gris que estuvo apunto de causar un accidente en la calle 62 x calle 51 x 53. El sujeto alcoholizado se montó en la banqueta a toda velocidad a punto de llevarse a unos Ciudadanos de corbata, afortunadamente un elemento Policíaco que estaba en la zona presenció el hecho dándole parte inmediata a sus compañeros por lo que fue perseguido y asegurado en la calle 66 x 45 y 47. Por fortuna no sucedió alguna desgracia y se evito asegurando al hombre con todo y vehículo." 
            //         },
            //         {
            //         id: 5,
            //         categoria: "Accidente",
            //         fecha: "01-11-2022",
            //         autor: "Pedro Pony",
            //         title: "Atropellan a menor en la comunidad de X Yatil FCP",
            //         image: require('@/assets/alex/aviso5.jpg'),
            //         content: "Un sujeto en aparente estado de ebriedad atropelló a una menor dejándola fuertemente herida. Cerca de las 10 de la noche se reportó un accidente en la comunidad de X-Yatil, ubicada a 35 min al Noroeste de la cabecera municipal. El vehículo involucrado se trató de un auto tipo Spark color azul con placas de circulación USX-584-G del estado de Quintana Roo. Por información preliminar se sabe que el conductor del vehículo circulaba a exceso de velocidad y en aparente estado de ebriedad cuando ocurrió el accidente. La menor atropellada sufrió posibles fracturas en las piernas, por lo que fue trasladada de urgencias al hospital general de Felipe Carrillo Puerto. Al cierre de la nota, el responsable estaba siendo custodiado por vecinos, en la espera del arribo de las autoridades."
            //         },
            //         {
            //         id: 6,
            //         categoria: "Cultural",
            //         fecha: "31-10-2022",
            //         autor: "Pedro Pony",
            //         title: "Concluyen actividades culturales del Jaanal PIxan 2022 en Felipe Carrillo Puerto",
            //         image: require('@/assets/alex/aviso6.jpg'),
            //         content: "Con el Parque central Ignacio Zaragoza lleno, continuaron las actividades de clausura del Jaanal Pixan 2022, en Felipe Carrillo Puerto. La Orquesta Polifacética Municipal abrió la noche interpretando melodías de su repertorio que animaron a los asistentes a ritmo de cumbias, danzones y jaranas. Vestidos de negro y maquillados de calaveras, integrantes del Ballet Folclórico del Cbtis 72 presentaron una estampa con melodías alusivas a las ausencias, al amor y la muerte. En su participación incluyeron melodías de diferentes estados de la República, en un colorido despliegue de colores y coreografías. El público se entregó con intensidad aplaudiendo al concluir cada pieza interpretada, incluidos turistas extranjeros que presenciaban el espectáculo. La velada transcurrió con las dos enormes figuras de catrinas colocadas en el centro de la plaza: dos simbólicos testigos de esta celebración de Jaanal Pixan. También el Ballet Folclórico Independiente “Uh Yuumilo’ob K’iin” presentó una estampa del estado de Guerrero en la que interpretaron piezas como la Calaca, el Toro rabón y las Amarillas. El cierre de la velada estuvo a cargo del Ballet Folclórico del Instituto Tecnológico, con una rítmica y colorida estampa sinaloense. Bajo el estilo musical de Sinaloa, ejecutaron La Bruja, el Sauce y la Palma, El Toro Mambo y el sinaloense." 
            //         }

                
            // ]
            avisos:[],
        };
    },
    created() {
        this.getData()
    },
    components: { CardAvisos },
    methods:{
        async getData(){
            const datos = await requestGET("/autho/schema")
            this.avisos = datos
            console.log(datos);
        },
    },
}
</script>
<style scoped>

</style>