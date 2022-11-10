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

export default {
    name: "avisosSalaP",
    data() {
        return {
            show: false,
            avisos: [
                {
                    id: 1,
                    categoria: "Política",
                    fecha: "02-11-2022",
                    autor: "Pedro Pony",
                    title: "Si no me hubiesen hecho fraude en 2006, México estaría muchísimo mejor, dice AMLO",
                    image: require('@/assets/alex/aviso1.jpg'),
                    content: "El presidente Andrés Manuel López Obrador acusó que en 2006 le cometieron fraude electoral y expresó que si hubiese ganado esa elección presidencial, México estaría muchísimo, muchísimo mejor. En su conferencia mañanera de este martes en Palacio Nacional, López Obrador también acusó que en el “fraude para imponer a Calderón”, a la maestra Elba Esther Gordillo, el expresidente de México le entregó “en pago” dependencias como el ISSSTE. “¿No considera usted que llegó tarde a la Presidencia de la República”, se le preguntó. “No llegué antes por el fraude electoral, y sí hubiésemos evitado muchas tragedias y no estaría así el país, estaría muchísimo, muchísimo mejor”, respondió López Obrador al mencionar “la guerra de Calderón”. “Imagínense el daño que causó la guerra de Calderón, que le pegó un garrotazo a lo tonto al avispero, nada más para buscar legitimidad, para quedar bien con nuestros vecinos. “Porque eso también lo hizo Salinas después del fraude, cuando no encuentran legitimidad aquí, se van a buscar legitimidad al extranjero y ahora está hasta de moda que se vana vivir al extranjero”, expresó. ", 
                    
                },
                {
                    id: 2,
                    categoria: "Desastre",
                    fecha: "2-11-2022",
                    autor: "Pedro Pony",
                    title: "Alertan a Felipe Carrillo Puerto y Tulum por tormentas intensas tras la entrada del huracán Lisa categoría 1",
                    image: require('@/assets/alex/aviso2.jpg'),
                    content: "Su centro se localiza a 100 km al norte de la Isla Roatán, Honduras y a 200 km al sureste de Puerto Costa Maya, Q. Roo. Presenta vientos máximos sostenidos de 120 km/h, rachas de 140 km/h y desplazamiento hacia el oeste a 24 km/h. Esperamos fuertes lluvias, rachas de viento de 50 a 70 km/h y oleaje de 2 a 3 metros de altura en nuestras costas. Se extiende zona de prevención desde Chetumal hasta Punta Allen."
                    },
                    {
                    id: 3,
                    categoria: "Cultural",
                    fecha: "01-11-2022",
                    autor: "Pedro Pony",
                    title: "Quintana Roo celebra Hanal Pixán lleno de historia, tradición y espiritualidad",
                    image: require('@/assets/alex/aviso3.jpg'),
                    content: "La gobernadora Mara Lezama acompañada de las y los ciudadanos destacó que las tradiciones marcan la esencia del pueblo y la comunidad En este gobierno trabajamos para rescatar nuestras tradiciones y costumbres, y que sean un atractivo adicional que hagan que más gente nos visite y se quede más tiempo en Quintana Roo, expresó la gobernadora Mara Lezama Espinosa al participar hoy en el Paseo de las Ánimas y en el programa de Hanal Pixán, en la explanada frente al Palacio de Gobierno. “Que más gente conozca el sur, que venga a Chetumal, y descubra todo el misticismo que hay en nuestros vestigios arqueológicos que muy pronto recibirán una inversión histórica, mil millones de pesos, que gestionamos hace apenas un par de semanas” citó Mara Lezama vestida con el tradicional huipil y frente a la bahía que es toda una maravilla y atractivo natural del sur. Al dirigirse a las miles de personas que se reunieron para participar en este evento tradicional, la Gobernadora del Estado afirmó que su gobierno trabaja para que nuestras raíces no sean sólo un souvenir, un recuerdo, un elemento decorativo en casa para el turismo, sino que marquen la esencia de nuestro pueblo y de nuestra comunidad. “Y es por eso estamos construyendo un Nuevo Acuerdo por el Bienestar y Desarrollo en Quintana Roo, con el que vamos a rescatar nuestras tradiciones, a enaltecer nuestra cultura y a mostrarle al mundo que en Quintana Roo, tenemos mucho más que ofrecer además de playas y vida nocturna” puntualizó la primera mujer Gobernadora de Quintana Roo. Acompañada de familias de esta capital, Mara Lezama participó en el Paseo de las Ánimas que partió desde el Museo de la Cultura Maya hasta la plaza cívica de Palacio de Gobierno en donde se instalaron altares, obras de arte de mujeres emprendedoras y que muestran la magia que hay en nuestra tierra y la calidez de un pueblo que alimenta y preserva las más bellas tradicionales. Antes de recorrer los stands y las muestras culturales, la gobernadora Mara Lezama expresó que hoy es una fecha importante, el día en que nuestros difuntos regresan a casa, en que las ánimas regresan a abrazar a sus hijas, hijos, nietas, nietos, viudas y viudos, hermanas y hermanos. Este homenaje para celebrar la vida de los difuntos es una pequeña ofrenda y un gran tesoro cultural. Es historia viva, memoria colectiva, espiritualidad que se funde en la diversidad de nuestra tierra y nuestra gente. La bienvenida estuvo a cargo de la presidenta municipal Yensunni Martínez Hernández; la explicación del evento a cargo de la directora general del Sistema DIF Quintana Roo, Abril Cristina Sabido Alcérreca, y los motivos por la Presidenta del Sistema DIF Quintana Roo, Verónica Lezama Espinosa. La muestra de Hanal Pixán incluyó el corte del pan de muerto, recorrido por siete altares de escuelas participantes mismas que fueron premiadas. El tercer lugar correspondió al Centro de Estudios Tecnológicos del Mar (CETMAR); segundo lugar el Instituto de Estudios Superiores para la Competitividad y el Desarrollo de América, y el primer lugar la Universidad Autónoma de Quintana Roo (UAQROO). Mara Lezama recorrió la muestra de mujeres emprendedoras, la exposición artesanal. Se tuvo la participación del Ballet Folclórico del Instituto de la Cultura y las Artes, así como de grupos culturales de diversas agrupaciones." },
                    {
                    id: 4,
                    categoria: "Accidente",
                    fecha: "01-11-2022",
                    autor: "Pedro Pony",
                    title: "Tránsito detiene a un hombre que ponía en peligro a la ciudadanía Carrilloportense",
                    image: require('@/assets/alex/aviso4.jpg'),
                    content: "Un hombre que conducía en completo estado de ebriedad cómo alma que lleva el diablo, fue detenido por elementos de la policía de tránsito por poner en peligro a la ciudadanía, varios reportes se realizaron al 911 de un vehículo tipo Jetta color gris que estuvo apunto de causar un accidente en la calle 62 x calle 51 x 53. El sujeto alcoholizado se montó en la banqueta a toda velocidad a punto de llevarse a unos Ciudadanos de corbata, afortunadamente un elemento Policíaco que estaba en la zona presenció el hecho dándole parte inmediata a sus compañeros por lo que fue perseguido y asegurado en la calle 66 x 45 y 47. Por fortuna no sucedió alguna desgracia y se evito asegurando al hombre con todo y vehículo." 
                    },
                    {
                    id: 5,
                    categoria: "Accidente",
                    fecha: "01-11-2022",
                    autor: "Pedro Pony",
                    title: "Presuntos normalistas prendieron fuego a varios vehículos en carretera de Michoacán",
                    image: require('@/assets/alex/aviso5.jpg'),
                    content: "Supuestos normalistas se apoderaron de varios vehículos y posteriormente les prendieron fuego en una carretera de Michoacán. A través de las grabaciones que circularon en redes sociales se pudo ver la quema de las unidades y algunas de las consignas que escribieron encima de ellas. De acuerdo con medios locales fueron por lo menos 10 vehículos los que fueron incendiados con el objetivo de que liberaran a sus compañeros. Según los reportes los hechos sucedieron sobre la carretera Uruapan - Carapan durante el lunes 31 de octubre. “Liberación a nuestros compañeros presos políticos, ¡Libertad!”, fueron algunas de las consignas que rayaron sobre las unidades. Cabe resaltar que algunos de los automóviles afectados pertenecían a empresas privadas de comida o frituras. Las unidades robadas fueron reunidas en un tramo carretero para bloquear las vías de comunicación y les prendieron fuego. De acuerdo con los reportes locales los normalistas exigieron que sus compañeros, que se encuentran en prisión preventiva en el Cereso de Uruapan, fueran liberados. Además algunos reportes señalaron que los agresores también exigieron plazas. El gobernador de la entidad Alfredro Ramírez Bonilla ha declarado que no habrá venta de plazas. Cabe recordar que el pasado jueves 27 de octubre fueron detenidos tres normalistas, quienes fueron identificados como Cecilia, Miguel y José Luis. Varios usuarios de redes sociales pudieron captar el momento en que las llamas consumían las unidades en el ramo carretero. Hace algunos días, en el marco de las manifestaciones tras 8 años de la desaparición forzada de 43 estudiantes de la escuela normal rural Isidro Burgos en Iguala, Guerrero, padres, madres y familiares de las víctimas se conglomeraron el domingo 25 de septiembre en el Hemiciclo a Juárez, Ciudad de México. La Avenida Juárez fue completamente bloqueada y resguardada por elementos de la Secretaría de Seguridad Ciudadana de capital (SSC). Cabe recordar que apenas el pasado domingo 29 de octubre se informó de la detención de Leonardo Octavio “V” “P”, quien fungió como secretario de Seguridad en el estado de Guerrero, cuando se dio la desaparición de 43 estudiantes de la escuela normal rural Isidro Burgos. El exfuncionario, militar ya retirado, fue detenido el pasado 28 de octubre en Tepic, Nayarit, en donde se ocultaba luego de que hace algunas semanas fue girada una orden de aprehensión en su contra, acusado de delincuencia organizada. Asimismo el pasado mes de julio, los estudiantes de la Escuela Normal Rural ‘Vasco de Quiroga’ (E.N.R.V.Q.), ubicada en la localidad de Tiripetío, Michoacán, denunciaron diversos incumplimientos por parte de las autoridades educativas de la entidad. Según sus pronunciamientos, las instituciones no atendieron los acuerdos celebrados previamente con la comunidad estudiantil, lo que ha impedido que sus necesidades puedan ser solventadas. A través de un comunicado difundido vía redes sociales, la Federación de Estudiantes Campesinos Socialistas de México (FECSM), de la cual forma parte la Escuela Normal Rural ‘Vasco de Quiroga’, dio a conocer que desde hace tres meses los estudiantes de dicha institución no han recibido los recursos correspondientes para la manutención de su comedor. Debido a lo anterior los estudiantes se vieron orillados a realizar volanteo y boteo en vía pública. El pasado domingo 24 de julio, un grupo de estudiantes se encontraba realizando dichas actividades en un tramo de la carretera Morelia-Pátzcuaro, a la altura del poblado de Tiripetío, en Morelia."
                    },
                    {
                    id: 6,
                    cat6egoria: "Cultural",
                    fecha: "31-10-2022",
                    autor: "Pedro Pony",
                    title: "Concluyen actividades culturales del Jaanal PIxan 2022 en Felipe Carrillo Puerto",
                    image: require('@/assets/alex/aviso6.jpg'),
                    content: "Con el Parque central Ignacio Zaragoza lleno, continuaron las actividades de clausura del Jaanal Pixan 2022, en Felipe Carrillo Puerto. La Orquesta Polifacética Municipal abrió la noche interpretando melodías de su repertorio que animaron a los asistentes a ritmo de cumbias, danzones y jaranas. Vestidos de negro y maquillados de calaveras, integrantes del Ballet Folclórico del Cbtis 72 presentaron una estampa con melodías alusivas a las ausencias, al amor y la muerte. En su participación incluyeron melodías de diferentes estados de la República, en un colorido despliegue de colores y coreografías. El público se entregó con intensidad aplaudiendo al concluir cada pieza interpretada, incluidos turistas extranjeros que presenciaban el espectáculo. La velada transcurrió con las dos enormes figuras de catrinas colocadas en el centro de la plaza: dos simbólicos testigos de esta celebración de Jaanal Pixan. También el Ballet Folclórico Independiente “Uh Yuumilo’ob K’iin” presentó una estampa del estado de Guerrero en la que interpretaron piezas como la Calaca, el Toro rabón y las Amarillas. El cierre de la velada estuvo a cargo del Ballet Folclórico del Instituto Tecnológico, con una rítmica y colorida estampa sinaloense. Bajo el estilo musical de Sinaloa, ejecutaron La Bruja, el Sauce y la Palma, El Toro Mambo y el sinaloense." 
                    }

                
            ]
        };
    },
    created() {
    },
    components: { CardAvisos }
}
</script>
<style scoped>

</style>